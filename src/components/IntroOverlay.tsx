'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoWhiteRef = useRef<HTMLImageElement>(null);
  const logoBlueRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    gsap.set([logoWhiteRef.current, logoBlueRef.current], {
      opacity: 0,
      scale: 1,
      y: 0,
    });

    const tl = gsap.timeline();

    tl.to(logoWhiteRef.current, { opacity: 1, duration: 0.8 })
      .to(logoWhiteRef.current, { y: -30, duration: 0.3 })
      .to(logoWhiteRef.current, {
        y: 0,
        duration: 0.2,
        onStart: () => {
          startDust(ctx, canvas);
          shake(overlayRef.current);
        },
      })
      .to(logoWhiteRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        delay: 2,
      })
      .to(
        logoBlueRef.current,
        {
          scale: 1.25,
          opacity: 1,
          duration: 1.2,
        },
        '<'
      );
  }, []);

  const startDust = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const particles = Array.from({ length: 180 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 8,
      size: Math.random() * 3 + 1,
      opacity: 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.008;
        ctx.fillStyle = `rgba(200,200,200,${p.opacity})`;
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

  const shake = (element: HTMLElement | null) => {
    if (!element) return;
    gsap.fromTo(
      element,
      { x: -8 },
      {
        x: 8,
        duration: 0.1,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: 5,
      }
    );
  };

  return (
    <>
      {/* Animación de introducción */}
      <section
        ref={overlayRef}
        className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center"
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
      </section>

      {/* Logo azul flotante */}
      <img
        ref={logoBlueRef}
        src="/HAICO azul.svg"
        alt="Haico Azul"
        className="fixed top-6 left-6 w-24 sm:w-28 md:w-32 z-[999] pointer-events-none opacity-0"
        style={{ transition: 'opacity 1s ease, transform 1s ease' }}
      />
    </>
  );
}
