import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <About />
    </>
  );
}
