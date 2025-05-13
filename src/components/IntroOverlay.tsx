'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function IntroOverlay() {
  const [showBlueLogo, setShowBlueLogo] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
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
          shake(sectionRef.current);
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
          opacity: 1,
          scale: 1.25,
          duration: 1.2,
          onComplete: () => setShowBlueLogo(true),
        },
        '+=0.2'
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
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gray-100 overflow-hidden flex items-center justify-center"
    >
      {/* 🎥 Video de fondo */}
      <video
        src="/videos/jaico-Sim.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌫 Canvas de polvo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Logo blanco animado */}
      <img
        ref={logoWhiteRef}
        src="/HAICO blanco.svg"
        alt="Logo blanco"
        className="absolute w-60 sm:w-72 md:w-80"
      />

      {/* Logo azul permanente */}
      <img
        ref={logoBlueRef}
        src="/HAICO azul.svg"
        alt="Logo azul"
        className={`absolute w-60 sm:w-72 md:w-80 transition-opacity ${
          showBlueLogo ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </section>
  );
}
