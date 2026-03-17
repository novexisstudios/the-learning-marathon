import React, { useRef, useLayoutEffect, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Stars, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LearningSymbol({ scrollProgress }: { scrollProgress: { current: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || !meshRef.current) return;

    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.z = t * 0.1;

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03;
      const particleAlpha = gsap.utils.clamp(0, 1, (scrollProgress.current - 0.3) * 4) * 
                          gsap.utils.clamp(0, 1, (0.85 - scrollProgress.current) * 4);
      (particlesRef.current.material as THREE.PointsMaterial).opacity = particleAlpha * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow>
          <icosahedronGeometry args={[2, 15]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            thickness={1.5}
            chromaticAberration={0.05}
            anisotropy={0.2}
            distortion={0.2}
            distortionScale={0.2}
            temporalDistortion={0.1}
            clearcoat={1}
            attenuationDistance={1}
            attenuationColor="#ffffff"
            color="#6366f1"
          />
        </mesh>
      </Float>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#a855f7"
          transparent
          opacity={0}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage4Ref = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%",
          scrub: 1.5,
          pin: true,
          onUpdate: (self) => {
            scrollProgress.current = self.progress;
          },
        },
      });

      // Stage 1 -> Stage 2 (0% -> 25%)
      tl.to(sceneRef.current?.position || {}, { x: isMobile ? 0 : -3, y: isMobile ? 2 : 0, duration: 1 }, 0)
        .to(sceneRef.current?.scale || {}, { x: isMobile ? 0.6 : 1, y: isMobile ? 0.6 : 1, z: isMobile ? 0.6 : 1, duration: 1 }, 0)
        .fromTo(stage1Ref.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 0.5 }, 0)
        .fromTo(stage2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, 0.5);

      // Stage 2 -> Stage 3 (25% -> 50%)
      tl.to(sceneRef.current?.position || {}, { x: 0, y: 0, duration: 1 }, 1)
        .to(sceneRef.current?.scale || {}, { x: isMobile ? 1 : 1.5, y: isMobile ? 1 : 1.5, z: isMobile ? 1 : 1.5, duration: 1 }, 1)
        .to(stage2Ref.current, { opacity: 0, y: -50, duration: 0.5 }, 1)
        .fromTo(stage3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, 1.5);

      // Stage 3 -> Stage 4 (50% -> 75%)
      tl.to(sceneRef.current?.position || {}, { y: isMobile ? 3 : 2, scale: isMobile ? 0.4 : 0.8, duration: 1 }, 2)
        .to(stage3Ref.current, { opacity: 0, y: -50, duration: 0.5 }, 2)
        .fromTo(stage4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, 2.5);

      // Final fade (75% -> 100%)
      tl.to(stage4Ref.current, { opacity: 0, y: -50, duration: 0.5 }, 3.5)
        .to(sceneRef.current?.position || {}, { y: 10, opacity: 0, duration: 1 }, 3.5);
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
          <Environment preset="city" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
          <group ref={sceneRef}>
            <LearningSymbol scrollProgress={scrollProgress} />
          </group>
        </Canvas>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center pointer-events-none">
        <div ref={stage1Ref} className="absolute text-center px-6 max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter">
            The Learning <br />
            <span className="text-gradient">Marathon</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            A Research-Driven Learning Journey for School Students.
          </p>
        </div>

        <div ref={stage2Ref} className="absolute text-center md:text-left md:left-24 px-6 opacity-0 translate-y-12 max-w-2xl">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Learning begins <br />
            <span className="text-brand-primary">with reading.</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-slate-400 leading-relaxed">
            Phase 1: Deep engagement with complex texts to build a rigorous intellectual foundation.
          </p>
        </div>

        <div ref={stage3Ref} className="absolute text-center px-6 opacity-0 translate-y-12 max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Reading evolves into <br />
            <span className="text-brand-secondary italic">research thinking.</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Phase 2: Developing a disciplined approach to inquiry, analysis, and critical synthesis.
          </p>
        </div>

        <div ref={stage4Ref} className="absolute text-center px-6 opacity-0 translate-y-12 max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Learning reaches <br />
            <span className="text-brand-accent">national exposure.</span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Phase 3: Showcasing research findings on a national academic stage at the MBitious Carnival.
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white font-black">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </div>
  );
}
