import Hero from '../components/Hero';
import Viewer3D from '../components/Viewer3D';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <section className="max-w-5xl mx-auto text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Visualización 3D</h2>
        <p className="text-gray-600 mb-6">Integrado con Three.js y React Three Fiber</p>
        <Viewer3D />
      </section>
    </main>
  );
}
