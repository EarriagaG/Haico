'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Viewer3D from '@/components/Viewer3D';
import ServiceModal from '@/components/ServiceModal';

const servicios = [
  {
    title: 'Movimientos de tierra',
    desc: 'Excavaciones, rellenos, nivelaciones y compactaciones.',
    fullDesc:
      'Este servicio incluye limpieza de terreno, despalme, excavaciones, zanjas, rellenos compactados con vibrocompactador o rodillo liso.',
    images: ['/img/mov1.jpg', '/img/mov2.jpg'],
  },
  {
    title: 'Infraestructura',
    desc: 'Instalaciones hidráulicas, sanitarias y eléctricas.',
    fullDesc:
      'Ejecutamos la infraestructura de urbanizaciones desde cero, cumpliendo con normativas locales y asegurando compatibilidad con redes municipales.',
    images: ['/img/infra1.jpg', '/img/infra2.jpg'],
  },
  {
    title: 'Pavimentaciones',
    desc: 'Concreto o asfalto con banquetas y señalización.',
    fullDesc:
      'Construcción de vialidades urbanas con concreto hidráulico o carpeta asfáltica, banquetas de concreto y guarniciones con acabados profesionales.',
    images: ['/img/pav1.jpg', '/img/pav2.jpg'],
  },
  {
    title: 'Maquinaria',
    desc: 'Concreto o asfalto con banquetas y señalización.',
    fullDesc:
      'Construcción de vialidades urbanas con concreto hidráulico o carpeta asfáltica, banquetas de concreto y guarniciones con acabados profesionales.',
    images: ['/img/pav1.jpg', '/img/pav2.jpg'],
  },
];

export default function Urbanizacion() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="min-h-screen pt-20 px-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Haico Urbanización y Construcción</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Nos especializamos en la urbanización de fraccionamientos, vialidades, infraestructura de obra civil y desarrollos habitacionales.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
        {servicios.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => setSelected(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white shadow-md rounded-xl p-6 border hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Modelo 3D de referencia</h2>
        <Viewer3D path="/models/convenience_store.glb" height={600} />

      </section>

      <ServiceModal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected !== null ? servicios[selected].title : ''}
        description={selected !== null ? servicios[selected].fullDesc : ''}
        images={selected !== null ? servicios[selected].images : []}
      />
    </main>
  );
}
