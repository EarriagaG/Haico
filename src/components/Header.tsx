export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Haico</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#maquinaria" className="hover:text-blue-600">Maquinaria</a>
            <a href="#proyectos" className="hover:text-blue-600">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </nav>
        </div>
      </header>
    );
  }
  