'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card3D from '@/components/Card3d';
import ModelShowcase from '@/components/ModelShowcase';

gsap.registerPlugin(ScrollTrigger);

export default function SectionUrbanizacion() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-in').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%'
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-32 px-6 flex flex-col items-center gap-48 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-dots [background-size:24px_24px] opacity-5 animate-pulse-slow" />

      {/* Hero técnico */}
      <div className="text-center max-w-4xl mx-auto z-10 fade-in">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Urbanización y Movimiento de Tierra</h2>
        <p className="text-lg text-gray-700 mb-8">
          Desarrollamos infraestructura con metodología BIM, escaneo láser y control digital desde el trazo hasta el último centímetro.
        </p>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-700 transition">
          Ver proyectos urbanizados
        </button>
      </div>

      {/* Modelo 3D técnico con HUD */}
      <ModelShowcase />

      {/* Estadísticas en tarjetas 3D */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl z-10">
        {["+380,000 m³ de tierra", "+24 fraccionamientos", "+60 km de vialidades", "Monitoreo por dron"].map((stat, i) => (
          <Card3D key={i} className="p-4 text-center fade-in">
            <h4 className="text-lg font-bold text-blue-600">{stat}</h4>
          </Card3D>
        ))}
      </div>

      {/* Gráfica técnica */}
      <div className="w-full max-w-5xl mt-20 fade-in z-10">
        <h3 className="text-2xl font-bold text-center mb-6">Crecimiento de obras urbanizadas</h3>
        <div className="bg-white border border-blue-100 rounded-xl shadow-xl p-6 h-[320px] flex items-center justify-center text-gray-500">
          [Aquí irá una gráfica técnica con animación - placeholder]
        </div>
      </div>

      {/* Cards de procesos técnicos */}
      <div className="w-full max-w-6xl mt-20 grid md:grid-cols-3 gap-8 z-10">
        {[
          'Corte y relleno con topografía GNSS',
          'Nivelación controlada con estación total',
          'Supervisión con drone y nube de puntos'
        ].map((desc, i) => (
          <Card3D key={i} className="p-6 fade-in">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Proceso #{i + 1}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </Card3D>
        ))}
      </div>

      {/* Galería de terreno urbanizado */}
      <div className="w-full max-w-6xl mt-32 z-10">
        <h3 className="text-2xl font-bold text-center mb-6">Galería de obra</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-xl shadow-inner">Imagen #{i}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
