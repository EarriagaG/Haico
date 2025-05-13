'use client';

import IntroOverlay from '@/components/IntroOverlay';
import SectionUrbanizacion from '@/components/SectionUrbanizacion';
import SectionHighlights from '@/components/SectionHighlights';
// import SectionProyectos from '@/components/SectionProyectos'; // pendiente
// import SectionConcreto from '@/components/SectionConcreto'; // pendiente

export default function Home() {
  return (
    <main className="relative w-full bg-white overflow-x-hidden text-gray-900">
      {/* 🎬 Intro con logo y video */}
      <IntroOverlay />

      {/* 🏗️ Urbanización */}
      <SectionUrbanizacion />

      {/* ⭐ Métricas clave / branding técnico */}
      <SectionHighlights />

      {/* 🏢 Proyectos (pendiente de implementación) */}
      <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Haico Proyectos</h2>
          <p className="text-lg text-gray-600">
            Diseño y ejecución de proyectos propios y de terceros.
          </p>
        </div>
      </section>

      {/* 🧱 Concreto (próximo componente) */}
      <section className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Haico Concreto</h2>
          <p className="text-lg text-gray-600">
            Soluciones personalizadas en concreto y bombeo.
          </p>
        </div>
      </section>
    </main>
  );
}
