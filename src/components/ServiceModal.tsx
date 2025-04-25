'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  images: string[];
};

export default function ServiceModal({ isOpen, onClose, title, description, images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden max-h-[90vh]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold z-50"
            >
              &times;
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">{title}</h2>
              <p className="text-gray-700 mb-4">{description}</p>
            </div>

            {/* Carrusel */}
            <div className="relative w-full aspect-video">
              <Image
                src={images[currentIndex]}
                alt={`Trabajo ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />

              {/* Botones */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-blue-100 z-40"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow hover:bg-blue-100 z-40"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
