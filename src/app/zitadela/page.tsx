'use client';

import Viewer3D from '@/components/Viewer3D';
import ThreeModelCarousel from '@/components/ThreeModelCarousel';

export default function Zitadela() {
  return (
    <main className="pt-20 px-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Zitadela</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Desarrollo habitacional urbano con múltiples etapas de construcción.
        </p>
      </section>

      <section className="mb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Modelo general del desarrollo</h2>
        <Viewer3D path="/models/zitadela-general.glb" height={600} />
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Modelos de unidades y áreas</h2>
        <ThreeModelCarousel
          models={[
            { title: 'Unidad A', path: '/models/unidad-a.glb' },
            { title: 'Unidad B', path: '/models/unidad-b.glb' },
            { title: 'Área común', path: '/models/area-comun.glb' },
          ]}
        />
      </section>
    </main>
  );
}
