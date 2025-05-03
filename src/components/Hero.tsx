'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

function FloatingLogo() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Haico-sim.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Texto central con animación */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Urbanizamos el futuro con tecnología
        </h1>
        <p className="text-white text-lg md:text-xl drop-shadow">
          Soluciones integrales con BIM, maquinaria y concreto especializado
        </p>
      </motion.div>

      {/* Logo 3D flotante */}
      <div className="absolute top-10 right-10 w-64 h-64 z-30 pointer-events-none">
        <Canvas camera={{ position: [3, 3, 3] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} />
          <Suspense fallback={null}>
            <FloatingLogo />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>
    </section>
  );
}
