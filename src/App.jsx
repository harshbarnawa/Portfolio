import { useEffect } from "react";

import Lenis from "lenis";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import Bento from "./components/Bento";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration:1.2,
      smoothWheel:true,
      smoothTouch:true
    });

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <>
    <Cursor />
      <Navbar />
      <Hero />
      <Projects />
      <Bento />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;