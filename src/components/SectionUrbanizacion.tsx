'use client';

import { useEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

function RotatingModel({ path }: { path: string }) {
  const gltf = useGLTF(path);
  const modelRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; // Rotación sutil
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} scale={1} />;
}

export default function SectionUrbanizacion() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.model-block').forEach((block: any) => {
        const canvas = block.querySelector('canvas');
        const text = block.querySelector('.text');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        });

        tl.fromTo(
          text,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
          0
        ).fromTo(
          canvas,
          { scale: 0.95 },
          { scale: 1, duration: 1 },
          0
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-32 px-6 flex flex-col items-center gap-48"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">
        Haico Urbanización y Construcción
      </h2>

      <p className="max-w-3xl text-center text-lg text-gray-700 mb-12">
        Desarrollamos y construimos proyectos de urbanización e infraestructura con enfoque BIM. Desde la preparación del terreno hasta la instalación de redes y vialidades, garantizamos eficiencia, precisión y cumplimiento de los más altos estándares.
      </p>

      {[
        {
          model: '/models/caterpillar.glb',
          title: 'Maquinaria para Terracerías',
          desc: 'Uso de maquinaria pesada especializada para urbanización de terrenos a gran escala, con supervisión técnica directa.',
        },
        {
          model: '/models/convenience_store.glb',
          title: 'Infraestructura Residencial',
          desc: 'Diseño y ejecución de plataformas habitacionales, vialidades y servicios urbanos en proyectos como Vivento y Zitadela.',
        },
      ].map((item, i) => (
        <div
          key={i}
          className="model-block relative w-full max-w-6xl flex flex-col md:flex-row items-center gap-12"
        >
          {/* Modelo 3D */}
          <div
            className={`w-full md:w-1/2 h-[600px] ${
              i % 2 === 0 ? 'order-1 md:order-2' : ''
            } transition-transform duration-500`}
          >
            <Canvas
              className="rounded-xl shadow-xl bg-white transition-all duration-700"
              camera={{ position: [0, 2, 6] }}
              dpr={[1, 2]}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                <RotatingModel path={item.model} />
              </Suspense>
            </Canvas>
          </div>

          {/* Texto animado con borde azul dinámico */}
         <div
            className={`text glow-container relative w-full md:w-1/2 text-center md:text-left text-gray-700 space-y-4 px-6 py-8 bg-white shadow-xl overflow-hidden ${
              i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
            }`}
            onMouseMove={(e) => {
              const container = e.currentTarget;
              const glow = container.querySelector('.glow') as HTMLElement;
              const rect = container.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              glow.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
            }}
          >
            {/* 🌌 Luz tipo nebulosa que sigue al mouse */}
            <div className="glow absolute w-52 h-52 bg-[#0070f3] opacity-10 rounded-full pointer-events-none transition-transform duration-100 ease-out blur-[30px] z-0"></div>

            <h3 className="text-2xl font-bold relative z-10">{item.title}</h3>
            <p className="relative z-10">{item.desc}</p>
          </div>


        </div>
      ))}
    </section>
  );
}
