'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // Mover el cursor principal
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Crear partícula tipo chispa
      const spark = document.createElement('div');
      spark.className =
        'fixed w-[3px] h-[3px] rounded-full bg-[#1e40af] pointer-events-none z-[9999]';
      spark.style.left = `${e.clientX}px`;
      spark.style.top = `${e.clientY}px`;
      document.body.appendChild(spark);

      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 10 + 5;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      spark.animate(
        [
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 },
        ],
        {
          duration: 400,
          easing: 'ease-out',
        }
      );

      setTimeout(() => spark.remove(), 400);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Hover en botones/enlaces
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, .cursor-hover'));
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Partículas al clic
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const count = 12;
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className =
          'fixed w-[4px] h-[4px] rounded-full bg-[#1e40af] pointer-events-none z-[9999]';
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / count;
        const x = Math.cos(angle) * 30;
        const y = Math.sin(angle) * 30;

        particle.animate(
          [
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 },
          ],
          { duration: 600, easing: 'ease-out' }
        );

        setTimeout(() => particle.remove(), 600);
      }
    };

    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-[9999] pointer-events-none rounded-full 
        mix-blend-difference transition-all duration-150 ease-out
        ${hovering ? 'w-10 h-10 scale-110' : 'w-6 h-6 scale-100'}
        bg-[#1e40af] shadow-[0_0_10px_rgba(30,64,175,0.5)]`}
    />
  );
}
