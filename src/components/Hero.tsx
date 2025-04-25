'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function AnimatedCube() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.6} roughness={0.3} />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Haico-sim.mp4" // 🔁 Path corregido
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura y contenido */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Urbanizamos el futuro con tecnología
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 drop-shadow">
          Soluciones integrales con BIM, maquinaria y concreto especializado
        </p>
      </div>

      {/* Canvas 3D */}
      <div className="absolute top-10 right-10 w-72 h-72 z-20 pointer-events-none">
        <Canvas camera={{ position: [4, 4, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} />
          <Suspense fallback={null}>
            <AnimatedCube />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
}
