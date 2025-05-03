'use client';

import { motion } from 'framer-motion';

type Props = {
  videoSrc: string;
  title: string;
  subtitle: string;
  color?: string; // fallback color si no carga video
};

export default function FullScreenSection({ videoSrc, title, subtitle, color = 'bg-black' }: Props) {
  return (
    <section
      className={`relative w-full h-screen snap-start flex items-center justify-center text-white ${color}`}
    >
      {/* Fondo de video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa de color para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
