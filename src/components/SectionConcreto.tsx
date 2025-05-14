'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Droplet, Ruler, Building2, Hammer } from 'lucide-react';
import Card3D from '@/components/Card3d';

gsap.registerPlugin(ScrollTrigger);

const concretes = [
  {
    icon: Droplet,
    title: '150,000 m³+',
    subtitle: 'Concreto suministrado',
    desc: 'Calidad certificada, fabricado y bombeado con eficiencia en obra.'
  },
  {
    icon: Truck,
    title: '15+ desarrollos',
    subtitle: 'Servidos entre 2021 y 2024',
    desc: 'Infraestructura vertical, cimentaciones, y pavimento hidráulico.'
  },
  {
    icon: Ruler,
    title: 'Aplicaciones',
    subtitle: 'Versatilidad estructural',
    desc: 'Colados para muros, losas, zapatas y elementos especiales.'
  },
  {
    icon: Building2,
    title: 'Casos destacados',
    subtitle: 'Zitadela, Valarte, Carima',
    desc: 'Obras atendidas para Grupo Govacasa, Tulia, Anteus y más.'
  },
  {
    icon: Hammer,
    title: 'Preparado para obra',
    subtitle: 'Soluciones personalizadas',
    desc: 'Adaptado a resistencia, tiempo de fraguado y condiciones locales.'
  }
];

export default function SectionConcreto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.card').forEach((el: any) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-32 px-6 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Fondo tipo malla tenue */}
      <div className="absolute inset-0 z-0 bg-grid-dots [background-size:24px_24px] opacity-5 animate-pulse-slow"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 z-10">
        Haico Soluciones en Concreto
      </h2>
      <p className="max-w-3xl text-lg text-gray-700 mb-16 z-10">
        Fabricamos y distribuimos concreto personalizado para proyectos residenciales y de infraestructura con exigencia estructural y eficiencia constructiva.
      </p>

      {/* Cards con efecto 3D */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl z-10">
        {concretes.map(({ icon: Icon, title, subtitle, desc }, i) => (
          <Card3D key={i} className="card text-left">
            <Icon className="w-10 h-10 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
            <p className="text-md font-medium text-gray-800">{subtitle}</p>
            <p className="text-sm text-gray-600">{desc}</p>
          </Card3D>
        ))}
      </div>

      {/* Imagen o video de referencia */}
      <div className="w-full max-w-5xl mt-24 z-10">
        <h3 className="text-2xl font-bold text-center mb-6">Proceso de suministro</h3>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video concreto"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Carrusel de imágenes (placeholder) */}
      <div className="w-full max-w-6xl mt-32 z-10">
        <h3 className="text-2xl font-bold text-center mb-6">Galería de aplicaciones</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-xl shadow-inner">Image #{i}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
