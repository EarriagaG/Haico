'use client';

import { motion } from 'framer-motion';

export default function Concreto() {
  return (
    <main className="min-h-screen pt-20 px-6">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-800">Haico Soluciones en Concreto</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Brindamos soluciones personalizadas en concreto con control de calidad, abastecimiento continuo y capacidad técnica para proyectos de gran escala.
        </p>
      </motion.section>

      <section className="max-w-6xl mx-auto mb-20">
        <motion.h2
          className="text-2xl font-semibold text-gray-700 text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros productos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {["Concreto estructural", "Autocompactante", "Concreto para pavimentos"].map((tipo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 bg-white shadow rounded-lg border transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{tipo}</h3>
              <p className="text-gray-500">Calidad controlada y adaptado a tus necesidades de obra.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Visualización del proceso (próximamente)</h2>
        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
          Modelo 3D de la planta de concreto en desarrollo...
        </div>
      </motion.section>
    </main>
  );
}
