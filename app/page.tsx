import Image from "next/image";
import Hero from "./components/hero";
import Header from "./components/header";

export default function Home() {
  return (
    <section className="relative bg-[#05093d] text-white  lg:flex-row  overflow-hidden">
      <Header />

      <Hero />
    </section>
  );
}
