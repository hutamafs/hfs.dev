import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CTA from "./components/cta";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <CTA />
    </div>
  );
}
