import { useState } from "react"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <div
      className={`min-h-screen text-sm transition-colors duration-300 ${
        darkMode
          ? "bg-[#111111] text-[#e5e5e5]"
          : "bg-[#ededeb] text-[#2f2f2f]"
      }`}
    >

      <nav
        className={`border-b transition-colors duration-300 ${
          darkMode
            ? "border-[#262626] bg-[#161616]"
            : "border-[#d8d8d8] bg-[#e7e7e5]"
        }`}
      >

        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">

          <img
            src="/assets/logo.png"
            alt=""
            className="w-[210px] object-contain"
          />

          <div
            className={`flex items-center gap-6 text-[11px] uppercase tracking-[2px] ${
              darkMode
                ? "text-[#8a8a8a]"
                : "text-[#8a8a8a]"
            }`}
          >

            <a
              href="#about"
              className={`transition ${
                darkMode
                  ? "hover:text-white"
                  : "hover:text-[#4a4a4a]"
              }`}
            >
              about
            </a>

            <a
              href="#projects"
              className={`transition ${
                darkMode
                  ? "hover:text-white"
                  : "hover:text-[#4a4a4a]"
              }`}
            >
              projects
            </a>

            <a
              href="#contact"
              className={`transition ${
                darkMode
                  ? "hover:text-white"
                  : "hover:text-[#4a4a4a]"
              }`}
            >
              contact
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`transition ${
                darkMode
                  ? "text-[#8a8a8a] hover:text-white"
                  : "text-[#8a8a8a] hover:text-[#2f2f2f]"
              }`}
            >
              {darkMode ? "light" : "dark"}
            </button>

          </div>

        </div>

      </nav>

      <section className="max-w-3xl mx-auto px-6 py-28 text-center">

        <p
          className={`text-[11px] uppercase tracking-[3px] ${
            darkMode
              ? "text-[#7a7a7a]"
              : "text-[#8a8a8a]"
          }`}
        >
          software engineer / competitive programmer
        </p>

        <h1
          className={`text-6xl font-semibold mt-6 tracking-tight leading-none ${
            darkMode
              ? "text-white"
              : "text-[#2f2f2f]"
          }`}
        >
          Harsh Barnawa
        </h1>

        <p
          className={`mt-10 leading-8 max-w-2xl mx-auto ${
            darkMode
              ? "text-[#a1a1a1]"
              : "text-[#5f5f5f]"
          }`}
        >
          I like building things that feel smooth,
          solving problems that probably shouldn’t take hours,
          and turning random ideas into working products.

          Most of the time I’m either writing JavaScript,
          debugging something unnecessarily complex,
          or grinding C++ problems late at night.
        </p>

      </section>

      <section
        id="about"
        className={`border-t ${
          darkMode
            ? "border-[#262626]"
            : "border-[#d8d8d8]"
        }`}
      >

        <div className="max-w-3xl mx-auto px-6 py-14">

          <h2
            className={`text-[11px] uppercase tracking-[3px] mb-8 ${
              darkMode
                ? "text-[#7a7a7a]"
                : "text-[#8a8a8a]"
            }`}
          >
            About
          </h2>

          <p
            className={`leading-8 ${
              darkMode
                ? "text-[#a1a1a1]"
                : "text-[#5f5f5f]"
            }`}
          >
            I enjoy building products that are clean,
            minimal, and actually pleasant to use.

            Lately I’ve been spending most of my time
            working with React, building frontend systems,
            experimenting with UI structure,
            and solving competitive programming problems in C++.

            I also have a bad habit of rebuilding perfectly working projects
            just because I think they can look 2% cleaner.
          </p>

        </div>

      </section>

      <section
        id="projects"
        className={`border-t ${
          darkMode
            ? "border-[#262626]"
            : "border-[#d8d8d8]"
        }`}
      >

        <div className="max-w-3xl mx-auto px-6 py-14">

          <h2
            className={`text-[11px] uppercase tracking-[3px] mb-10 ${
              darkMode
                ? "text-[#7a7a7a]"
                : "text-[#8a8a8a]"
            }`}
          >
            Projects
          </h2>

          <div className="space-y-14">

            {[
              {
                title: "ChessArena",
                link: "https://chessbylibrary.vercel.app/",
                desc: "JavaScript-based chess platform featuring authentication systems and complex frontend logic."
              },
              {
                title: "AlgoBuddy",
                link: "https://github.com/harshbarnawa",
                desc: "Interactive DSA learning platform with real-time visualizations for algorithms, trees, graphs, heaps, recursion, and data structures."
              },
              {
                title: "Edito Studio",
                link: "https://edit-studio-sage.vercel.app/",
                desc: "Modern frontend-focused creative agency website built using React and modern UI systems."
              },
              {
                title: "AI Cube Solver",
                link: "https://github.com/harshbarnawa",
                desc: "Intelligent Rubik’s Cube solving project focused on algorithmic optimization systems."
              }
            ].map((project) => (

              <div key={project.title}>

                <div className="flex items-center gap-4">

                  <h3
                    className={`font-medium text-base ${
                      darkMode
                        ? "text-white"
                        : "text-[#3a3a3a]"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-[11px] transition ${
                      darkMode
                        ? "text-[#7a7a7a] hover:text-white"
                        : "text-[#8a8a8a] hover:text-[#3a3a3a]"
                    }`}
                  >
                    project link
                  </a>

                </div>

                <p
                  className={`mt-4 leading-8 ${
                    darkMode
                      ? "text-[#a1a1a1]"
                      : "text-[#5f5f5f]"
                  }`}
                >
                  {project.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section
        id="contact"
        className={`border-t ${
          darkMode
            ? "border-[#262626]"
            : "border-[#d8d8d8]"
        }`}
      >

        <div className="max-w-3xl mx-auto px-6 py-14">

          <h2
            className={`text-[11px] uppercase tracking-[3px] mb-8 ${
              darkMode
                ? "text-[#7a7a7a]"
                : "text-[#8a8a8a]"
            }`}
          >
            Contact
          </h2>

          <div className="mb-10 space-y-3">

            <a
              href="mailto:harshbarnawa.info@gmail.com"
              className={`block transition ${
                darkMode
                  ? "text-[#a1a1a1] hover:text-white"
                  : "text-[#5f5f5f] hover:text-[#2f2f2f]"
              }`}
            >
              harshbarnawa.info@gmail.com
            </a>

            <a
              href="https://wa.me/916264232915"
              target="_blank"
              rel="noreferrer"
              className={`block transition ${
                darkMode
                  ? "text-[#a1a1a1] hover:text-white"
                  : "text-[#5f5f5f] hover:text-[#2f2f2f]"
              }`}
            >
              +91 62642 32915
            </a>

          </div>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/harshbarnawa"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/github.png"
                alt=""
                className="w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-barnawa/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/linkedin.png"
                alt=""
                className="w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300"
              />
            </a>

            <a
              href="https://x.com/harshbarnawa"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/twitter.png"
                alt=""
                className="w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300"
              />
            </a>

            <a
              href="https://codeforces.com/profile/harshbarnawa.info"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/codeforces.png"
                alt=""
                className="w-12 h-12 object-contain opacity-60 hover:opacity-100 transition duration-300"
              />
            </a>

          </div>

        </div>

      </section>

      <footer
        className={`border-t transition-colors duration-300 ${
          darkMode
            ? "border-[#262626] bg-[#161616]"
            : "border-[#d8d8d8] bg-[#e7e7e5]"
        }`}
      >

        <div
          className={`max-w-3xl mx-auto px-6 py-5 flex items-center justify-between text-[11px] ${
            darkMode
              ? "text-[#7a7a7a]"
              : "text-[#8a8a8a]"
          }`}
        >

          <p>
            © 2026 Harsh Barnawa
          </p>

          <p>
            built by Harsh Barnawa
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App