import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Status from "@/components/Status";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <Background />

      <div className="relative z-10 max-w-5xl px-8 text-center">

        <Hero />

        <Status />

        <Footer />

      </div>

    </main>
  );
}