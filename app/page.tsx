import About from "./components/about";
import Approach from "./components/approach";
import ClientSaying from "./components/clients-saying";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import TechnologiesSection from "./components/technologies";

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative text-white lg:flex-row  overflow-hidden">
        <Hero />
      </section>
      <Services />
      <About />
      <Approach />
      <Footer />
      \\\\
    </>
  );
}
