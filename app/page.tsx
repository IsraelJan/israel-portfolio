import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import Technologies from "../Components/Technologies";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import About from "../Components/About";
import Testimonials from "@/Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Technologies />
      <Projects />
      <Experience />

      <About />
      <Testimonials/>
      <Contact />
      <Footer />
    </main>
  );
}