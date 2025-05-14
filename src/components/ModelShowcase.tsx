'use client';

import { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';
import Card3D from '@/components/Card3d';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function RotatingModel({ path }: { path: string }) {
  const gltf = useGLTF(path);
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} scale={1} />;
}

export default function ModelShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.card-explainer').forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto h-[720px]">
      {/* Fondo HUD */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white z-0" />

      {/* Canvas 3D */}
      <Canvas className="rounded-xl shadow-2xl z-10 h-[1000px] w-full" camera={{ position: [0, 2.5, 12], fov: 45 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <group scale={[1.5, 1.5, 1.5]}><RotatingModel path="/models/convenience_store.glb" /></group>

          {/* HUD Icons */}
          <Html position={[-2.5, 1.5, 0]} center className="text-blue-600 font-bold text-sm bg-white/80 px-2 py-1 rounded shadow">
            GPS<br />Position
          </Html>
          <Html position={[2.2, 0.8, 0]} center className="text-blue-600 font-bold text-sm bg-white/80 px-2 py-1 rounded shadow">
            Elevation<br />92%
          </Html>
          <Html position={[0, -1.2, 0]} center className="text-blue-600 font-bold text-sm bg-white/80 px-2 py-1 rounded shadow">
            Depth<br />1.25m
          </Html>
        </Suspense>
      </Canvas>

      {/* Tarjetas explicativas animadas debajo */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Topografía', desc: 'Modelado del terreno y curvas de nivel integradas.' },
          { title: 'Coordenadas GNSS', desc: 'Sistema de referencia global con precisión centimétrica.' },
          { title: 'BIM Referenciado', desc: 'Coherencia con modelos multidisciplinarios.' },
          { title: 'Preparado para obra', desc: 'Listo para replanteo, excavación y cimentación.' },
        ].map((item, i) => (
          <Card3D key={i} className="card-explainer p-4 text-left">
            <h4 className="text-blue-600 font-semibold text-md mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </Card3D>
        ))}
      </div>
    </div>
  );
} 
