'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Truck, Building2, Scan, Activity } from 'lucide-react';
import Card3D from './Card3d';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: '+1,800',
    label: 'viviendas urbanizadas',
    description: 'Infraestructura urbana entregada con precisión.',
    icon: Home,
  },
  {
    value: '+150,000 m³',
    label: 'de concreto suministrado',
    description: 'Fabricación y bombeo con calidad garantizada.',
    icon: Truck,
  },
  {
    value: '+15',
    label: 'desarrollos entre 2021–2024',
    description: 'Obras ejecutadas con procesos digitalizados.',
    icon: Building2,
  },
  {
    value: '100%',
    label: 'modelos integrados en BIM',
    description: 'Diseño, supervisión y ejecución con modelo único.',
    icon: Activity,
  },
  {
    value: '+10',
    label: 'proyectos escaneados con drones',
    description: 'Control topográfico y visualización exacta.',
    icon: Scan,
  }
];

export default function SectionHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stat').forEach((el: any) => {
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
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-32 px-6 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Fondo técnico tipo grid animado */}
      <div className="absolute inset-0 z-0 bg-grid-dots [background-size:24px_24px] opacity-10 animate-pulse-slow"></div>

      {/* Microcopy central */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 relative z-10 max-w-3xl">
        Transformamos el terreno en infraestructura viva. La tecnología es nuestra herramienta, la precisión nuestra promesa.
      </h2>

      {/* Tarjetas con cifras clave */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl z-10">
        {stats.map(({ value, label, description, icon: Icon }, idx) => (
          <Card3D key={idx} className="stat w-64">
            <Icon className="w-10 h-10 text-blue-600" />
            <h3 className="text-3xl font-bold text-blue-600">{value}</h3>
            <p className="text-lg font-medium text-gray-800">{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </Card3D>
        ))}
      </div>
    </section>
  );
}
