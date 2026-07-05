export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-3xl text-center">

        <span className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-300 rounded-full px-5 py-2 text-sm mb-8">
          🚀 Novo site em desenvolvimento
        </span>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Nick Wifi
          <br />
          <span className="text-blue-500">Money</span>
        </h1>

        <p className="text-xl text-gray-300 mt-8 leading-9">
          Estamos preparando uma nova experiência para apresentar nossos
          resultados, cases de sucesso e estratégias de crescimento através do
          Meta Ads e Google Ads.
        </p>

        <p className="text-gray-500 mt-6">
          Enquanto isso, fale diretamente comigo.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <a
            href="https://wa.me/5531998770516"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 transition-all px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-green-500/20"
          >
            💬 Agendar Diagnóstico Gratuito
          </a>

          <a
            href="https://instagram.com/nick.wifimoney"
            target="_blank"
            className="border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 transition-all px-8 py-4 rounded-xl font-semibold text-lg"
          >
            📷 Instagram
          </a>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-gray-500 text-sm">
          © 2026 Nick Wifi Money
          <br />
          Todos os direitos reservados.
        </div>

      </div>
    </main>
  );
}