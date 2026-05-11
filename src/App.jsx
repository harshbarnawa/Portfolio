function App() {
  return (
    <div className="min-h-screen bg-white text-black text-sm">

      {/* NAVBAR */}
      <nav className="border-b border-gray-300">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">

          <h1 className="font-semibold">
            harshbarnawa
          </h1>

          <div className="flex gap-5 text-gray-700">
            <a href="#about" className="hover:underline">
              about
            </a>

            <a href="#projects" className="hover:underline">
              projects
            </a>

            <a href="#contact" className="hover:underline">
              contact
            </a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            <p className="text-gray-600">
              software engineer / competitive programmer
            </p>

            <h1 className="text-3xl font-semibold mt-2">
              Harsh Barnawa
            </h1>

            <p className="mt-5 leading-7 text-gray-700 max-w-2xl">
              I build full-stack applications,
              solve algorithmic problems,
              and create modern web experiences with a strong focus on performance,
              simplicity, and clean engineering.

              I mainly work with JavaScript, React, Node.js, C++,
              and modern frontend technologies while continuously exploring
              system design, scalable architectures, and AI-powered tools.
            </p>

          </div>

          {/* PROFILE IMAGE PLACEHOLDER */}
          <div className="w-40 h-40 border border-gray-300 flex items-center justify-center text-gray-400 text-xs">
            profile image
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-gray-300"
      >
        <div className="max-w-5xl mx-auto px-6 py-10">

          <h2 className="font-semibold mb-5">
            About
          </h2>

          <p className="leading-8 text-gray-700 max-w-3xl">
            I enjoy building real-world products,
            competitive programming,
            and experimenting with complex frontend systems and interactive UI experiences.

            Recently I’ve been working on modern React-based applications,
            authentication systems,
            real-time interfaces,
            and advanced JavaScript projects.

            I also actively practice DSA and problem solving in C++
            while improving my understanding of scalable software engineering.
          </p>

        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-gray-300">

        <div className="max-w-5xl mx-auto px-6 py-10">

          <h2 className="font-semibold mb-5">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 text-gray-700">

            <p>C++</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Node.js</p>
            <p>MongoDB</p>
            <p>Express</p>
            <p>TailwindCSS</p>
            <p>Python</p>
            <p>Git</p>
            <p>Frontend Systems</p>
            <p>Authentication</p>
            <p>DSA</p>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-gray-300"
      >

        <div className="max-w-5xl mx-auto px-6 py-10">

          <h2 className="font-semibold mb-6">
            Projects
          </h2>

          <div className="space-y-10">

            {/* Edito Studio */}
            <div>

              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-medium">
                  Edito Studio
                </h3>

                <a
                  href="https://edit-studio-sage.vercel.app/"
                  target="_blank"
                  className="text-blue-600 hover:underline text-xs"
                >
                  live
                </a>
              </div>

              <p className="text-gray-700 mt-2 leading-7 max-w-3xl">
                Modern frontend-focused creative agency website
                built using React and modern UI practices.
                Focused on smooth layouts, responsive design,
                clean typography, and polished user experience.
              </p>

            </div>

            {/* Chess Arena */}
            <div>

              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-medium">
                  ChessArena
                </h3>

                <a
                  href="https://chessbylibrary.vercel.app/"
                  target="_blank"
                  className="text-blue-600 hover:underline text-xs"
                >
                  live
                </a>
              </div>

              <p className="text-gray-700 mt-2 leading-7 max-w-3xl">
                JavaScript-based chess platform featuring
                authentication systems,
                game logic,
                interactive gameplay,
                and complex frontend state management.
              </p>

            </div>

            {/* AI Cube Solver */}
            <div>

              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-medium">
                  AI Cube Solver
                </h3>

                <a
                  href="https://github.com/harshbarnawa"
                  target="_blank"
                  className="text-blue-600 hover:underline text-xs"
                >
                  github
                </a>
              </div>

              <p className="text-gray-700 mt-2 leading-7 max-w-3xl">
                Intelligent Rubik’s Cube solving project
                focused on algorithmic logic,
                optimization,
                and AI-assisted solving techniques.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-gray-300"
      >

        <div className="max-w-5xl mx-auto px-6 py-10">

          <h2 className="font-semibold mb-5">
            Contact
          </h2>

          <div className="space-y-3 text-gray-700">

            <p>
              harshbarnawa.info@gmail.com
            </p>

            <a
              href="https://github.com/harshbarnawa"
              target="_blank"
              className="block hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-barnawa/"
              target="_blank"
              className="block hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="https://codeforces.com/profile/harshbarnawa.info"
              target="_blank"
              className="block hover:underline"
            >
              Codeforces
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App