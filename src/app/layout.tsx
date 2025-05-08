import './globals.css';
import Header from '../components/Header';
import type { Metadata } from 'next';
import CustomCursor from '../components/CustomCursor';
import IntroOverlay from '@/components/IntroOverlay';


export const metadata: Metadata = {
  title: 'Haico',
  description: 'Urbanización y tecnología con visualización 3D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-800">
        <Header />
        <CustomCursor />
        <IntroOverlay />
        <main className="pt-20">{children}</main>
        
      </body>
    </html>
  );
}
