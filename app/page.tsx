import About from "./components/about";
import Approach from "./components/approach";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative -z-1 text-white lg:flex-row  overflow-hidden">
        <Hero />
      </section>
      <Services />
      <About />
      <Approach />
      <Footer />
    </>
  );
}
