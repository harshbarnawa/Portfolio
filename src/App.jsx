function App() {
  return (
    <div className="min-h-screen bg-[#ededeb] text-[#2f2f2f] text-sm">

      <nav className="border-b border-[#d8d8d8] bg-[#e7e7e5]">

        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">

          <img
            src="/assets/logo.png"
            alt=""
            className="w-[210px] object-contain"
          />

          <div className="flex gap-6 text-[11px] uppercase tracking-[2px] text-[#8a8a8a]">

            <a
              href="#about"
              className="hover:text-[#4a4a4a] transition"
            >
              about
            </a>

            <a
              href="#projects"
              className="hover:text-[#4a4a4a] transition"
            >
              projects
            </a>

            <a
              href="#contact"
              className="hover:text-[#4a4a4a] transition"
            >
              contact
            </a>

          </div>

        </div>

      </nav>

      <section className="max-w-3xl mx-auto px-6 py-28 text-center">

        <p className="text-[11px] uppercase tracking-[3px] text-[#8a8a8a]">
          software engineer / competitive programmer
        </p>

        <h1 className="text-6xl font-semibold mt-6 tracking-tight leading-none text-[#2f2f2f]">
          Harsh Barnawa
        </h1>

        <p className="mt-10 leading-8 text-[#5f5f5f] max-w-2xl mx-auto">
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
        className="border-t border-[#d8d8d8]"
      >

        <div className="max-w-3xl mx-auto px-6 py-14">

          <h2 className="text-[11px] uppercase tracking-[3px] text-[#8a8a8a] mb-8">
            About
          </h2>

          <p className="leading-8 text-[#5f5f5f]">
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
        className="border-t border-[#d8d8d8]"
      >

        <div className="max-w-3xl mx-auto px-6 py-14">

          <h2 className="text-[11px] uppercase tracking-[3px] text-[#8a8a8a] mb-10">
            Projects
          </h2>

          <div className="space-y-14">

            <div>

              <div className="flex items-center gap-4">

                <h3 className="font-medium text-base text-[#3a3a3a]">
                  ChessArena
                </h3>

                <a
                  href="https://chessbylibrary.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#8a8a8a] hover:text-[#3a3a3a] transition"
                >
                  project link
                </a>

              </div>

              <p className="mt-4 text-[#5f5f5f] leading-8">
                JavaScript-based chess platform featuring
                authentication systems and complex frontend logic.
              </p>

            </div>

            <div>

              <div className="flex items-center gap-4">

                <h3 className="font-medium text-base text-[#3a3a3a]">
                  AlgoBuddy
                </h3>

                <a
                  href="https://github.com/harshbarnawa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#8a8a8a] hover:text-[#3a3a3a] transition"
                >
                  project link
                </a>

              </div>

              <p className="mt-4 text-[#5f5f5f] leading-8">
                Interactive DSA learning platform with real-time visualizations
                for algorithms, trees, graphs, heaps, recursion,
                and data structures to help students learn concepts visually.
              </p>

            </div>

            <div>

              <div className="flex items-center gap-4">

                <h3 className="font-medium text-base text-[#3a3a3a]">
                  Edito Studio
                </h3>

                <a
                  href="https://edit-studio-sage.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#8a8a8a] hover:text-[#3a3a3a] transition"
                >
                  project link
                </a>

              </div>

              <p className="mt-4 text-[#5f5f5f] leading-8">
                Modern frontend-focused creative agency website
                built using React and modern UI systems.
              </p>

            </div>

            <div>

              <div className="flex items-center gap-4">

                <h3 className="font-medium text-base text-[#3a3a3a]">
                  AI Cube Solver
                </h3>

                <a
                  href="https://github.com/harshbarnawa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#8a8a8a] hover:text-[#3a3a3a] transition"
                >
                  project link
                </a>

              </div>

              <p className="mt-4 text-[#5f5f5f] leading-8">
                Intelligent Rubik’s Cube solving project
                focused on algorithmic optimization systems.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section
        id="contact"
        className="border-t border-[#d8d8d8]"
      >

        <div className="max-w-3xl mx-auto px-6 py-14">

          <h2 className="text-[11px] uppercase tracking-[3px] text-[#8a8a8a] mb-8">
            Contact
          </h2>

          <div className="mb-10 space-y-3">

            <a
              href="mailto:harshbarnawa.info@gmail.com"
              className="block text-[#5f5f5f] hover:text-[#2f2f2f] transition"
            >
              harshbarnawa.info@gmail.com
            </a>

            <a
              href="https://wa.me/916264232915"
              target="_blank"
              rel="noreferrer"
              className="block text-[#5f5f5f] hover:text-[#2f2f2f] transition"
            >
              +91 62642 32915
            </a>

          </div>

          <div className="flex items-center gap-5">

            <a
              href="https://github.com/harshbarnawa"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-100 transition duration-300"
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
              className="hover:opacity-100 transition duration-300"
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
              className="hover:opacity-100 transition duration-300"
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
              className="hover:opacity-100 transition duration-300"
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

      <footer className="border-t border-[#d8d8d8] bg-[#e7e7e5]">

        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between text-[11px] text-[#8a8a8a]">

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