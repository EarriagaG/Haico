'use client';

import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2015',
    title: 'Fundación de Haico',
    description: 'Inicio de operaciones con enfoque en urbanización.',
  },
  {
    year: '2018',
    title: 'Expansión en infraestructura',
    description: 'Adquisición de maquinaria pesada y desarrollo de proyectos propios.',
  },
  {
    year: '2022',
    title: 'Integración BIM y tecnología DJI/Trimble',
    description: 'Digitalización total de procesos y avances en nube de puntos.',
  },
  {
    year: '2024',
    title: 'Primer desarrollo propio: Vireo',
    description: 'Inicio de obra del primer proyecto 100% desarrollado por Haico.',
  },
];

export default function Timeline() {
  return (
    <section className="relative w-full min-h-screen bg-neutral-950 text-white px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Nuestra historia</h2>

        <div className="relative border-l-4 border-blue-500 ml-4">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 pl-6 relative"
            >
              <div className="absolute left-[-13px] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white" />
              <h3 className="text-xl font-semibold">{item.year} — {item.title}</h3>
              <p className="text-gray-300 mt-2">{item.description}</p>
              {/* Placeholder para video, imagen o modelo */}
              <div className="mt-4 h-40 w-full bg-white/10 rounded-md flex items-center justify-center text-sm text-gray-400">
                Contenido multimedia (imagen, video o modelo 3D)
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
