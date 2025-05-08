'use client';

import IntroOverlay from '@/components/IntroOverlay';

export default function Home() {
  return (
    <main className="relative w-full bg-white overflow-x-hidden text-gray-900">
      <IntroOverlay />

      {/* Secciones adicionales */}
      <section className="w-full h-screen bg-[#f9f9f9] flex items-center justify-center">
        <h2 className="text-4xl font-bold">Urbanización</h2>
      </section>

      <section className="w-full h-screen bg-[#e5e5e5] flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Proyectos</h2>
      </section>

      <section className="w-full h-screen bg-[#dcdcdc] flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Concreto</h2>
      </section>
    </main>
  );
}
