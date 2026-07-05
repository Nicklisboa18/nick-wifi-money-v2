import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Process from "../components/Process";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}