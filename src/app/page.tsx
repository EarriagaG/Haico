'use client';

import IntroOverlay from '@/components/IntroOverlay';
import SectionUrbanizacion from '@/components/SectionUrbanizacion';

export default function Home() {
  return (
    <main className="relative w-full bg-white overflow-x-hidden text-gray-900">
      {/* ✅ IntroOverlay ocupa la primera pantalla */}
      <IntroOverlay />

      {/* 🏗 Urbanización */}
      <SectionUrbanizacion />

      {/* 🏢 Proyectos */}
      <section className="w-full h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Haico Proyectos</h2>
          <p className="text-lg text-gray-600">Diseño y ejecución de proyectos propios y de terceros</p>
        </div>
      </section>

      {/* 🧱 Concreto */}
      <section className="w-full h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Haico Concreto</h2>
          <p className="text-lg text-gray-600">Soluciones personalizadas en concreto y bombeo</p>
        </div>
      </section>

      {/* 📜 Historia */}
      <section className="w-full min-h-[150vh] bg-white flex items-center justify-center">
        <div className="text-center max-w-4xl px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Nuestra Historia</h2>
          <p className="text-lg text-gray-700">Aquí irá la línea del tiempo con multimedia</p>
        </div>
      </section>
    </main>
  );
}
