import About from "./components/about";
import Approach from "./components/approach";
import CaseStudies from "./components/case-studies";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <section className="relative text-white lg:flex-row  overflow-hidden">
        <Hero />
      </section>
      <Services />
      <About />
      <CaseStudies />
      <Approach />
    </>
  );
}
