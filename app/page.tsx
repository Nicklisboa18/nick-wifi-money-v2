export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050816] via-[#081122] to-[#09182d] text-white flex items-center justify-center overflow-hidden relative">

      {/* Luz de fundo */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative z-10 max-w-3xl text-center px-8">

        <div className="inline-flex items-center gap-2 border border-blue-500/30 rounded-full px-6 py-2 text-blue-300 text-sm mb-10 backdrop-blur-md">
          🚀 Novo site em desenvolvimento
        </div>

        <h1 className="text-6xl md:text-8xl font-serif tracking-wide font-semibold">
          Nick Wifi
        </h1>

        <h2 className="mt-2 text-4xl md:text-5xl tracking-[12px] text-blue-500 font-light">
          MONEY
        </h2>

        <p className="mt-12 text-xl text-gray-300 leading-9">
          Estamos construindo uma experiência totalmente nova.
        </p>

        <p className="mt-4 text-lg text-gray-400 leading-8">
          Estratégias de tráfego pago - Marketing Digital para crescimento de empresas e projetos pessoais.
        </p>

        <div className="mt-14 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-gray-300 backdrop-blur-md">
          ⏳ Aguarde...
          <span className="text-blue-400 font-semibold">
            Estamos preparando tudo.
          </span>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-sm text-gray-500">
          © 2026 Nick Wifi Money
          <br />
          Todos os direitos reservados.
        </div>

      </div>

    </main>
  );
}