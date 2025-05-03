'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">Haico</Link>
        <nav className="space-x-4 text-sm md:text-base font-medium text-gray-700">
          <Link href="/urbanizacion" className="hover:text-blue-600">Urbanización</Link>
          <Link href="/vireo" className="hover:text-blue-600">Construcción y Edificación</Link>
          <Link href="/proyectos" className="hover:text-blue-600">Proyectos</Link>
          <Link href="/concreto" className="hover:text-blue-600">Concreto</Link>
          <Link href="/vireo" className="hover:text-blue-600">Alianzas</Link>
          
        </nav>
      </div>
    </header>
  );
}
