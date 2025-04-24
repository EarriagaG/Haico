'use client';

import dynamic from 'next/dynamic';

// Carga diferida del viewer para que no rompa SSR
const Viewer3D = dynamic(() => import('@/components/Viewer3D'), { ssr: false });

export default function Urbanizacion() {
  return (
    <main className="min-h-screen pt-20 px-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Haico Urbanización y Construcción</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Nos especializamos en la urbanización de fraccionamientos, vialidades, infraestructura de obra civil y desarrollos habitacionales con alto nivel de precisión, maquinaria propia y control tecnológico.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        {["Movimientos de tierra", "Infraestructura", "Pavimentaciones"].map((item) => (
          <div key={item} className="bg-white shadow rounded-lg p-6 text-center border hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
            <p className="text-gray-500 mt-2">Soluciones completas para proyectos urbanos</p>
          </div>
        ))}
      </section>

      <section className="mb-20 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Proyectos ejecutados</h2>
        <p className="text-gray-500 mb-4">A continuación, puedes explorar algunos de nuestros proyectos en 3D</p>
        <Viewer3D />
      </section>
    </main>
  );
}
