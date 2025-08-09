import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}
