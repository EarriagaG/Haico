'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Props {
  visible: boolean;
}

export default function IntroOverlay({ visible }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWhiteRef = useRef<HTMLImageElement>(null);
  const logoBlueRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasReady, setCanvasReady] = useState(false);

  // Preparar canvas al montar
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      setCanvasReady(true);
    }
  }, []);

  // Ejecutar animación solo si está visible
  useEffect(() => {
    if (!canvasReady || !visible) return;

    const tl = gsap.timeline();

    // Reset
    gsap.set(overlayRef.current, { opacity: 1, pointerEvents: 'auto' });
    gsap.set(logoWhiteRef.current, { opacity: 0, scale: 1, y: 0 });
    gsap.set(logoBlueRef.current, { opacity: 0, scale: 1, y: 0 });
    clearCanvas();

    tl.to(logoWhiteRef.current, { opacity: 1, duration: 0.8 })
      .to(logoWhiteRef.current, { y: -30, duration: 0.3 })
      .to(logoWhiteRef.current, {
        y: 0,
        duration: 0.2,
        onStart: () => {
          startDust();
          shakeOverlay();
        },
      })
      .to(logoWhiteRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        delay: 2.5,
      })
      .to(logoBlueRef.current, {
        scale: 1.25,
        opacity: 1,
        duration: 1.2,
      }, "<")
      .to(overlayRef.current, {
        opacity: 0,
        duration: 2,
        delay: 1,
        onComplete: () => {
          gsap.set(overlayRef.current, { pointerEvents: 'none' });
        },
      });
  }, [canvasReady, visible]);

  const clearCanvas = () => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const startDust = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = Array.from({ length: 180 }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 8,
      size: Math.random() * 3 + 1,
      opacity: 1,
    }));

    const animate = () => {
      clearCanvas();
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.008;
        ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (particles.some(p => p.opacity > 0)) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  const shakeOverlay = () => {
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

  // Si no está visible, no renderizar nada
  if (!visible) return null;

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
