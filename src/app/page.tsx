'use client';

import IntroOverlay from '@/components/IntroOverlay';
import SectionUrbanizacion from '@/components/SectionUrbanizacion';
import SectionHighlights from '@/components/SectionHighlights';
import SectionConcreto from '@/components/SectionConcreto';

export default function Home() {
  return (
    <main className="relative w-full bg-white overflow-x-hidden text-gray-900">
      {/* 🎬 Intro con logo animado y video */}
      <IntroOverlay />

      {/* 🏗️ Urbanización y maquinaria */}
      <SectionUrbanizacion />

      {/* ⭐ Métricas técnicas y branding visual */}
      <SectionHighlights />

      {/* 🧱 Concreto personalizado y estructural */}
      <SectionConcreto />
    </main>
  );
}
