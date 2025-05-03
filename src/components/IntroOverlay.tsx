'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 80, damping: 12 },
          }}
          exit={{ y: 100, opacity: 0, transition: { duration: 0.8 } }}
          className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl"
        >
          Urbanizamos el futuro con tecnología
        </motion.h1>

        {/* Polvo animado (simulado con blur) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white/30 to-transparent blur-2xl"
        />
      </motion.div>
    </AnimatePresence>
  );
}
