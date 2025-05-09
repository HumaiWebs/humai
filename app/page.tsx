import About from "./components/about";
import Approach from "./components/approach";
import ClientSaying from "./components/clients-saying";
import Footer from "./components/footer";

import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <section className="relative -z-1 text-white lg:flex-row  overflow-hidden">
        <Hero />
      </section>
      <Services />
      <About />
      <Approach />
    </>
  );
}
