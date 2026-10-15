import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Design Tokens & Configuration for Autonomous Ambient Contour Flow
// ---------------------------------------------------------------------------
const CONFIG = {
  lineScale: 3.2,
  lineCount: 2.8,
  lineThickness: 1.35,
  lineOpacity: 0.85,
  waveAmount: 0.35,
  waveSpeed: 0.65, // Gentle, calming ambient drift
};

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform float uAspect;
  uniform vec3 uBackground;
  uniform vec3 uLineColor;
  uniform vec3 uAccentColor;
  uniform vec3 uDarkColor;
  uniform float uLineScale;
  uniform float uLineCount;
  uniform float uLineThickness;
  uniform float uLineOpacity;
  uniform float uWaveAmount;
  uniform float uWaveSpeed;

  // Analytic continuous 4-frequency topographic wave field
  float backdropField(vec2 p, float t) {
    float f = sin(p.x * 1.00 + t * 0.55) * 0.50;
    f += sin(p.y * 0.85 - t * 0.40) * 0.45;
    f += sin((p.x + p.y) * 0.65 + t * 0.30) * 0.35;
    f += sin((p.x - p.y) * 0.95 - t * 0.45) * 0.25;
    return f * 0.5 + 0.5;
  }

  void main() {
    vec2 ndc = (vUv - 0.5) * 2.0;
    vec2 p = vec2(ndc.x * uAspect, ndc.y) * uLineScale;

    // Smooth organic wave evolution over time
    float t = uTime * uWaveSpeed;
    vec2 q = p;
    q.x += sin(p.y * 0.75 + t * 0.65) * uWaveAmount;
    q.y += cos(p.x * 0.70 - t * 0.55) * uWaveAmount;

    float scaled = backdropField(q, t) * uLineCount;

    // Isoline contour extraction with fwidth anti-aliasing
    float w = max(fwidth(scaled) * uLineThickness, 1e-4);
    float lineMask = 1.0 - smoothstep(0.0, w, abs(fract(scaled) - 0.5));

    // Subtle alternating elevation bands
    float parity = mod(floor(scaled + 0.5), 2.0);
    vec3 surfaceTone = mix(uBackground, uBackground * 0.985, parity * 0.5);

    // Accent tinting on selected contour bands for depth
    vec3 activeLineColor = mix(uLineColor, uAccentColor, 0.28 * parity + 0.12 * sin(scaled * 3.14159));
    vec3 finalColor = mix(surfaceTone, activeLineColor, lineMask * uLineOpacity);

    // Gentle soft vignette falloff towards edges
    float dist = length(ndc * vec2(1.0, 0.85));
    float vignette = smoothstep(1.7, 0.2, dist);
    finalColor = mix(uBackground, finalColor, 0.88 + vignette * 0.12);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function ContourHeroBg({
  speed = 1.0,
  accentColor = "#0a7a8c",
  lineColor = "#cfdce2",
  bgColor = "#eef3f4",
  darkColor = "#0b1026",
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dynamically create canvas element so StrictMode remounts get a pristine WebGL context
    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    container.appendChild(canvas);

    // 1. Setup Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch (err) {
      console.error("Failed to initialize WebGLRenderer:", err);
      return () => {
        if (container.contains(canvas)) container.removeChild(canvas);
      };
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const initialWidth = container.clientWidth || window.innerWidth;
    const initialHeight = container.clientHeight || window.innerHeight;
    renderer.setSize(initialWidth, initialHeight, false);

    const bgThree = new THREE.Color(bgColor);
    renderer.setClearColor(bgThree, 1.0);

    // 2. Setup Camera & Scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uAspect: { value: initialWidth / Math.max(initialHeight, 1) },
      uBackground: { value: bgThree },
      uLineColor: { value: new THREE.Color(lineColor) },
      uAccentColor: { value: new THREE.Color(accentColor) },
      uDarkColor: { value: new THREE.Color(darkColor) },
      uLineScale: { value: CONFIG.lineScale },
      uLineCount: { value: CONFIG.lineCount },
      uLineThickness: { value: CONFIG.lineThickness },
      uLineOpacity: { value: CONFIG.lineOpacity },
      uWaveAmount: { value: CONFIG.waveAmount },
      uWaveSpeed: { value: CONFIG.waveSpeed },
    };

    const planeMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthTest: false,
      depthWrite: false,
      extensions: {
        derivatives: true,
      },
    });

    const fullQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), planeMaterial);
    scene.add(fullQuad);

    // 3. Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h, false);
      uniforms.uAspect.value = w / Math.max(h, 1);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);

    // 4. Smooth Autonomous Ambient Animation Loop (zero mouse tracking)
    const startTime = performance.now();
    let animId = null;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;
      uniforms.uTime.value = elapsed * speed;
      renderer.render(scene, camera);
    };

    animate();

    // 5. Cleanup
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();

      fullQuad.geometry.dispose();
      planeMaterial.dispose();
      renderer.dispose();

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [speed, accentColor, lineColor, bgColor, darkColor]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
