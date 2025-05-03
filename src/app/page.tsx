'use client';

import { useEffect, useState } from 'react';
import IntroOverlay from '../components/IntroOverlay';
import FullScreenSection from '../components/FullScreenSection';
import Timeline from '../components/Timeline';

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500); // Duración de intro
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full h-full overflow-hidden">
      {/* Intro animada */}
      {showIntro && <IntroOverlay />}

      {/* Contenido principal con scroll tipo presentación */}
      {!showIntro && (
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
          <FullScreenSection
            videoSrc="/videos/sample1.mp4"
            title="Haico Urbanización"
            subtitle="Infraestructura con visión tecnológica"
            color="bg-blue-900"
          />
          <FullScreenSection
            videoSrc="/videos/sample2.mp4"
            title="Haico Proyectos"
            subtitle="Diseño, modelado y desarrollos activos"
            color="bg-slate-800"
          />
          <FullScreenSection
            videoSrc="/videos/sample3.mp4"
            title="Haico Concretos"
            subtitle="Soluciones especializadas y logística a obra"
            color="bg-neutral-900"
          />

          {/* Línea del tiempo */}
          <Timeline />
        </div>
      )}
    </main>
  );
}
