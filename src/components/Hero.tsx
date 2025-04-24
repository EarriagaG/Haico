export default function Hero() {
    return (
      <section className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/fondo-haico.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow">
              Urbanizamos el futuro con tecnología
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Especialistas en desarrollo, maquinaria y metodología BIM
            </p>
            <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition">
              Cotiza ahora
            </a>
          </div>
        </div>
      </section>
    );
  }
  