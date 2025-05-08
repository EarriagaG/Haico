'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import IntroOverlay from '@/components/IntroOverlay';
import SectionUrbanizacion from '@/components/SectionUrbanizacion';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introKey, setIntroKey] = useState(Date.now());
  const welcomeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 5000); // duración de intro
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && !showIntro) {
        setIntroKey(Date.now());
        setShowIntro(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  useEffect(() => {
    if (!showIntro && welcomeRef.current) {
      gsap.fromTo(
        welcomeRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }
  }, [showIntro]);

  return (
    <main className="relative w-full min-h-screen bg-white overflow-x-hidden">
      {/* 🎥 Video de fondo (solo cuando no hay intro) */}
      {!showIntro && (
        <video
          className="fixed inset-0 w-full h-full object-cover z-0"
          src="/videos/Haico-sim.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* 🟡 Intro de entrada */}
      {showIntro && <IntroOverlay key={introKey} visible />}

      {/* ⚪ Contenido principal */}
      <div
        className={`relative transition-opacity duration-500 ${
          showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Sección bienvenida */}
        <section className="w-full h-screen flex items-center justify-center bg-white border-b border-black z-10 relative">
          <h1
            ref={welcomeRef}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Bienvenido a Haico
          </h1>
        </section>

        {/* Sección Urbanización */}
        <SectionUrbanizacion />

        {/* Sección Proyectos */}
        <section className="w-full h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Haico Proyectos
            </h2>
            <p className="text-lg text-gray-600">
              Diseño y ejecución de proyectos propios y de terceros
            </p>
          </div>
        </section>

        {/* Sección Concreto */}
        <section className="w-full h-screen bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Haico Concreto
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones personalizadas en concreto y bombeo
            </p>
          </div>
        </section>

        {/* Línea del tiempo */}
        <section className="w-full min-h-[150vh] bg-white flex items-center justify-center">
          <div className="text-center max-w-4xl px-6 py-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-700">
              Aquí irá la línea del tiempo con multimedia
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
