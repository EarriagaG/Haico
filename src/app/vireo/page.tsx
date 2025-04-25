'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Viewer3D = dynamic(() => import('../../components/Viewer3D'), { ssr: false });

export default function Vireo() {
  return (
    <main className="min-h-screen pt-20 px-6">
      <motion.section
        className="text-center mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-green-700">Vireo</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Nuestro primer desarrollo integral. Vireo es un fraccionamiento vertical ubicado en Bahía de Banderas, impulsado 100% por Haico.
        </p>
      </motion.section>

      <motion.section
            className="max-w-5xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
            <p className="text-gray-500 mb-6">
                Explora una vista interactiva del desarrollo en 3D
            </p>
            <div className="mb-6">
                <Viewer3D path="/models/caterpillar.glb" height={600} />
            </div>
            <p className="text-gray-500 mb-4">
                Más información sobre lotes, etapas y preventa próximamente.
            </p>
</motion.section>

    </main>
  );
}
