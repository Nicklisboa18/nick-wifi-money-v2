
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-[#050816] text-white">

      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />
        <div className="absolute right-[-200px] bottom-[-250px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0d1229,transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 pt-28 pb-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-blue-300 text-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Gestão de Tráfego • Marketing Digital
            </span>

            <h1 className="mt-10 text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Transformamos
              <br />
              <span className="text-blue-500">anúncios</span> em
              <br />
              clientes para sua empresa.
            </h1>

            <p className="mt-8 max-w-xl text-xl text-gray-300 leading-9">
              Escalamos empresas utilizando campanhas inteligentes,
              estratégias de alta conversão e otimização contínua
              no Meta Ads e Google Ads.
            </p>

            <div className="mt-12 flex gap-5">
              <button className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition">
                Agendar Diagnóstico
              </button>

              <button className="rounded-2xl border border-white/20 px-6 py-3 hover:bg-white/5 transition">
                Ver Cases
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>
                <h2 className="text-4xl font-black text-blue-500">+120</h2>
                <p className="mt-2 text-gray-400">Empresas</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-green-400">8.9x</h2>
                <p className="mt-2 text-gray-400">ROAS Médio</p>
              </div>

              <div>
                <h2 className="text-4xl font-black text-cyan-400">+4M</h2>
                <p className="mt-2 text-gray-400">Investidos</p>
              </div>

            </div>

          </div>

          <div className="relative">

            <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              <h3 className="text-gray-400 uppercase tracking-[0.3em]">
                Dashboard
              </h3>

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8">
                <p>Receita</p>
                <h2 className="mt-3 text-4xl font-black">R$108.540</h2>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-gray-400">ROAS</p>
                  <h3 className="mt-2 text-3xl font-bold text-blue-400">8.9x</h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-gray-400">Leads</p>
                  <h3 className="mt-2 text-3xl font-bold text-green-400">327+</h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-gray-400">Conversão</p>
                  <h3 className="mt-2 text-3xl font-bold text-cyan-400">13%</h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <p className="text-gray-400">Investimento</p>
                  <h3 className="mt-2 text-3xl font-bold">R$12.430</h3>
                </div>

              </div>

              <div className="mt-10 flex h-44 items-end gap-3">
                <div className="h-20 flex-1 rounded-t-xl bg-blue-500/30"></div>
                <div className="h-28 flex-1 rounded-t-xl bg-blue-500/40"></div>
                <div className="h-16 flex-1 rounded-t-xl bg-blue-500/30"></div>
                <div className="h-36 flex-1 rounded-t-xl bg-blue-500"></div>
                <div className="h-32 flex-1 rounded-t-xl bg-cyan-500"></div>
                <div className="h-44 flex-1 rounded-t-xl bg-green-400"></div>
              </div>

            </div>

          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
              Scroll
            </span>

            <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">
              <div className="mt-2 h-3 w-3 rounded-full bg-blue-500 animate-bounce"></div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
