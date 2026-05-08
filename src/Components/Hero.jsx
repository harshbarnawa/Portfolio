import { useEffect } from "react";

function Hero() {

  useEffect(() => {

    const glow = document.querySelector(".hero-glow");

    window.addEventListener("mousemove",(e)=>{

      const x = e.clientX;
      const y = e.clientY;

      glow.style.transform =
`translate(${x * 0.02}px,calc(-50% + ${y * 0.02}px))`;

    });

  },[]);

  return (
    <section className="hero">

      <div className="hero-glow"></div>

      <div className="hero-grid"></div>

      <div className="hero-content">

        <p className="hero-tag">
          Developer • Designer • Creator
        </p>

        <h1 className="hero-title">
          Building
          <br />
          digital
          <br />
          experiences.
        </h1>

        <p className="hero-sub">
          MERN Stack Developer crafting cinematic,
          immersive and high-performance web experiences.
        </p>

       <div className="hero-buttons">

  <a
    href="#projects"
    className="hero-btn"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="hero-btn ghost"
  >
    Contact Me
  </a>

</div>

      </div>

    </section>
  );
}

export default Hero;