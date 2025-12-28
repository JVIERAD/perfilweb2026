import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Courses />
      <Testimonials />
      <Contact />
    </>
  );
}
