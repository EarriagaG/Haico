'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoWhiteRef = useRef<HTMLImageElement>(null);
  const logoBlueRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Ajustar tamaño del canvas al montar
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }

    // Preparar animación GSAP
    const tl = gsap.timeline();

    gsap.set(overlayRef.current, { opacity: 1, pointerEvents: 'auto' });
    gsap.set(logoWhiteRef.current, { opacity: 0, scale: 1, y: 0 });
    gsap.set(logoBlueRef.current, { opacity: 0, scale: 1, y: 0 });
    clearCanvas();

    tl.to(logoWhiteRef.current, { opacity: 1, duration: 1.2 })
      .to(logoWhiteRef.current, { y: -30, duration: 0.3 })
      .to(logoWhiteRef.current, {
        y: 0,
        duration: 0.3,
        onStart: () => {
          triggerDust();
          shakeScreen();
        },
      })
      .to(logoWhiteRef.current, {
        scale: 1.4,
        opacity: 0,
        duration: 2,
        delay: 2.2,
      })
      .to(
        logoBlueRef.current,
        {
          scale: 1.5,
          opacity: 1,
          duration: 1.5,
        },
        '<'
      );
  }, []);

  const shakeScreen = () => {
    if (overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { x: -8 },
        {
          x: 8,
          duration: 0.1,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: 5,
        }
      );
    }
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const triggerDust = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = Array.from({ length: 200 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 10,
      size: Math.random() * 3 + 1,
      opacity: 1,
    }));

    const animate = () => {
      clearCanvas();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.008;
        ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (particles.some((p) => p.opacity > 0)) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-1000"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <img
        ref={logoWhiteRef}
        src="/HAICO blanco.svg"
        alt="Haico Blanco"
        className="absolute w-60 sm:w-72 md:w-80"
      />
      <img
        ref={logoBlueRef}
        src="/HAICO azul.svg"
        alt="Haico Azul"
        className="absolute w-60 sm:w-72 md:w-80"
      />
    </div>
  );
}
