export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#050816]/70 border-b border-white/5">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          Nick Wifi Money
        </h1>

        <nav className="hidden md:flex gap-10 text-gray-300">

          <a href="#services" className="hover:text-white">
            Serviços
          </a>

          <a href="#results" className="hover:text-white">
            Resultados
          </a>

          <a href="#about" className="hover:text-white">
            Sobre
          </a>

          <a href="#faq" className="hover:text-white">
            FAQ
          </a>

        </nav>

        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold">
          Agendar
        </button>

      </div>

    </header>
  );
}