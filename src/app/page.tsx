'use client';

import Hero from '../components/Hero';
import Viewer3D from '../components/Viewer3D';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <section className="max-w-5xl mx-auto text-center py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Visualización 3D</h2>
        <p className="text-gray-600 mb-6">
          Integrado con Three.js y React Three Fiber
        </p>

        {/* Carga del modelo principal */}
        <Viewer3D path="/models/convenience_store.glb" height={700} />
      </section>
    </main>
  );
}
