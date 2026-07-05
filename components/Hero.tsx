import Logo from "./Logo";

export default function Hero() {
  return (
    <>

      <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-blue-300">

        🚀 Novo site em desenvolvimento

      </div>

      <Logo />

      <h2 className="mt-16 text-4xl text-white">
        Estamos construindo uma experiência totalmente nova.
      </h2>

      <p className="mt-8 max-w-4xl text-xl leading-10 text-gray-400">

        Estratégias de tráfego pago • Marketing Digital para crescimento
        de empresas e projetos pessoais.

      </p>

    </>
  );
}