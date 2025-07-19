import About from "./components/About";
import Expereince from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Expereince />
      <Services />
      <About />
    </>
  );
}
