'use client';

import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const x = useTransform(rotateY, [-50, 50], ['-8deg', '8deg']);
  const y = useTransform(rotateX, [-50, 50], ['8deg', '-8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set(posX - centerX);
    rotateX.set(posY - centerY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative bg-white rounded-xl shadow-xl border border-blue-100 p-6 transition-transform ${className}`}
      style={{ rotateX: y, rotateY: x, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
