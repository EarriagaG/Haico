'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Proyectos() {
  return (
    <main className="min-h-screen pt-20 px-6">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-blue-800">Haico Proyectos y Desarrollos</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Aplicamos metodología BIM en cada fase de diseño, planeación y ejecución de proyectos propios y para clientes externos.
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
          Metodología BIM
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {["Modelado", "Coordinación", "Control de avance"].map((fase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-6 bg-white shadow rounded-lg border transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{fase}</h3>
              <p className="text-gray-500">Procesos digitales para mejorar precisión, tiempo y calidad de obra.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="max-w-6xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Proyecto propio: Vireo</h2>
        <p className="text-gray-500 mb-6">Nuestro primer desarrollo integral como Haico. Planeado y ejecutado 100% con tecnología BIM.</p>
        <Link
          href="/vireo"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Ver proyecto Vireo
        </Link>
      </motion.section>

      <motion.section
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Proyectos con clientes</h2>
        <p className="text-gray-500 mb-6">Estos desarrollos fueron ejecutados por Haico aplicando metodología BIM y control de obra.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {["Zitadela", "Valarte", "Vivento"].map((nombre, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-4 bg-white border rounded-lg shadow text-left hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-blue-600">{nombre}</h3>
              <p className="text-gray-500">Supervisión y coordinación BIM por parte de Haico.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
