
import { useState } from "react"

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className={`min-h-screen text-sm transition-colors duration-300 relative overflow-x-hidden ${
        darkMode
          ? "bg-[#111111] text-[#e5e5e5]"
          : "bg-[#ededeb] text-[#2f2f2f]"
      }`}
    >

     <div
  className={`absolute top-0 left-0 w-full h-full pointer-events-none z-0 ${
    darkMode ? "invert" : ""
  }`}
>

 <div
  className={`absolute top-0 left-0 w-full h-full bg-repeat ${
    darkMode
      ? "opacity-[0.03]"
      : "opacity-[0.08]"
  }`}
  style={{
    backgroundImage: "url('/assets/background.jpg')",
    backgroundSize: "300px",
    backgroundPosition: "center top",
  }}
/>

</div>

      <nav
        className={`border-b fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-300 ${
          darkMode
            ? "border-[#262626] bg-[#161616]/85"
            : "border-[#d8d8d8] bg-[#e7e7e5]/85"
        }`}
      >

        <div className="relative z-20 max-w-3xl mx-auto px-5 md:px-6 py-5 flex items-center justify-between">

          <img
            src="/assets/logo.png"
            alt=""
            className="w-[100px] md:w-[140px] object-contain"
          />

          <div className="hidden md:flex items-center gap-8">

            <div className="flex items-center gap-6 text-[11px] uppercase tracking-[2px] text-[#8a8a8a]">

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
                href="#blogs"
                className={`transition ${
                  darkMode
                    ? "hover:text-white"
                    : "hover:text-[#4a4a4a]"
                }`}
              >
                blogs
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

              <div
                className={`hidden lg:flex items-center rounded-full px-4 py-2 text-[10px] normal-case border transition ${
                  darkMode
                    ? "border-[#2f2f2f] bg-[#1a1a1a] text-[#6f6f6f]"
                    : "border-[#d3d3d3] bg-[#efefef] text-[#8a8a8a]"
                }`}
              >
                search blog here...
              </div>

            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 rounded-full flex items-center px-1 transition duration-300 ${
                darkMode
                  ? "bg-[#2a2a2a] justify-end"
                  : "bg-[#d0d0d0] justify-start"
              }`}
            >

              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition duration-300 ${
                  darkMode
                    ? "bg-white"
                    : "bg-[#2f2f2f]"
                }`}
              >

                <img
                  src={darkMode ? "/assets/moon.png" : "/assets/sun.png"}
                  alt=""
                  className={`w-3 h-3 object-contain ${
                    darkMode
                      ? ""
                      : "invert"
                  }`}
                />

              </div>

            </button>

          </div>

          <div className="md:hidden flex items-center gap-4">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition duration-300 ${
                darkMode
                  ? "bg-[#2a2a2a] justify-end"
                  : "bg-[#d0d0d0] justify-start"
              }`}
            >

              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center transition duration-300 ${
                  darkMode
                    ? "bg-white"
                    : "bg-[#2f2f2f]"
                }`}
              >

                <img
                  src={darkMode ? "/assets/moon.png" : "/assets/sun.png"}
                  alt=""
                  className={`w-2 h-2 object-contain ${
                    darkMode
                      ? ""
                      : "invert"
                  }`}
                />

              </div>

            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[4px]"
            >

              <div className={`w-5 h-[1.5px] ${darkMode ? "bg-white" : "bg-black"}`} />
              <div className={`w-5 h-[1.5px] ${darkMode ? "bg-white" : "bg-black"}`} />
              <div className={`w-5 h-[1.5px] ${darkMode ? "bg-white" : "bg-black"}`} />

            </button>

          </div>

        </div>

        {menuOpen && (

          <div
            className={`md:hidden border-t px-5 py-5 flex flex-col gap-5 text-[11px] uppercase tracking-[2px] relative z-20 ${
              darkMode
                ? "border-[#262626] bg-[#161616]/95 text-[#8a8a8a]"
                : "border-[#d8d8d8] bg-[#e7e7e5]/95 text-[#8a8a8a]"
            }`}
          >

            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#blogs">blogs</a>
            <a href="#contact">contact</a>

          </div>

        )}

      </nav>

   <section className="relative z-10 max-w-3xl mx-auto px-5 md:px-6 pt-40 md:pt-52 pb-24 md:pb-28">

  <div
    className={`border rounded-[28px] p-8 md:p-10 transition ${
      darkMode
        ? "border-[#262626] bg-[#151515]/70"
        : "border-[#d8d8d8] bg-[#efefef]/70"
    }`}
  >

    <div className="flex items-center justify-between mb-10">

      <p
        className={`text-[11px] uppercase tracking-[3px] ${
          darkMode
            ? "text-[#727272]"
            : "text-[#8a8a8a]"
        }`}
      >
        harsh barnawa
      </p>

      <div
        className={`w-2 h-2 rounded-full ${
          darkMode
            ? "bg-[#d4d4d4]"
            : "bg-[#3a3a3a]"
        }`}
      />

    </div>

    <p
      className={`text-[15px] md:text-[17px] leading-[2] tracking-[-0.01em] ${
        darkMode
          ? "text-[#cfcfcf]"
          : "text-[#4a4a4a]"
      }`}
    >
      I like building clean things and overthinking small details that probably don't matter that much. mostly building random projects, solving cpp problems and rebuilding things again because “something still feels off”</p>

  </div>

</section>
<section
  id="about"
  className={`relative z-10 border-t ${
    darkMode
      ? "border-[#262626]"
      : "border-[#d8d8d8]"
  }`}
>

  <div className="max-w-3xl mx-auto px-5 md:px-6 py-14">

    <h2
      className={`text-[11px] uppercase tracking-[3px] mb-8 ${
        darkMode
          ? "text-[#7a7a7a]"
          : "text-[#8a8a8a]"
      }`}
    >
      About
    </h2>

    <div className="space-y-10">

      <p
        className={`leading-8 ${
          darkMode
            ? "text-[#a1a1a1]"
            : "text-[#5f5f5f]"
        }`}
      >

       currently studying engineering, building random ideas into actual products and spending way too much time solving problems that could’ve probably been avoided with better planning. i enjoy coding, competitive programming, system design, late night debugging sessions and pushing random commits to github at 3am pretending everything is under control.
      </p>

      <div
  className={`border rounded-[24px] p-5 overflow-hidden ${
    darkMode
      ? "border-[#262626] bg-[#151515]/70"
      : "border-[#d8d8d8] bg-[#efefef]/70"
  }`}
>

  <img
    src={`https://ghchart.rshah.org/${
      darkMode ? "4a4a4a" : "2f2f2f"
    }/harshbarnawa`}
    alt=""
    className={`w-full ${
      darkMode
        ? "opacity-80"
        : "opacity-80"
    }`}
  />

</div>

    </div>

  </div>

</section>

      <section
        id="projects"
        className={`relative z-10 border-t ${
          darkMode
            ? "border-[#262626]"
            : "border-[#d8d8d8]"
        }`}
      >

        <div className="max-w-3xl mx-auto px-5 md:px-6 py-14">

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
                title: "Chess Arena",
                link: "https://chessbylibrary.vercel.app/",
                desc: "JavaScript-based chess platform featuring authentication systems and complex frontend logic."
              },
              {
                title: "Algo Buddy",
                link: "https://github.com/harshbarnawa",
                desc: "Interactive DSA learning platform with real-time visualizations for algorithms, trees, graphs, heaps, recursion, and data structures."
              },
              {
                title: "Cube Solver",
                link: "https://github.com/harshbarnawa",
                desc: "Intelligent Rubik’s Cube solving project focused on algorithmic optimization systems."
              },
              {
                title: "Edito Studio",
                link: "https://edit-studio-sage.vercel.app/",
                desc: "Modern frontend-focused creative agency website built using React and modern UI systems."
              },

            ].map((project) => (

              <div key={project.title}>

                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">

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
        id="blogs"
        className={`relative z-10 border-t ${
          darkMode
            ? "border-[#262626]"
            : "border-[#d8d8d8]"
        }`}
      >

        <div className="max-w-3xl mx-auto px-5 md:px-6 py-14">

          <h2
            className={`text-[11px] uppercase tracking-[3px] mb-10 ${
              darkMode
                ? "text-[#7a7a7a]"
                : "text-[#8a8a8a]"
            }`}
          >
            Blogs
          </h2>

          <div className="space-y-10">

            {[
              {
                title: "Rebuilding This Portfolio Again",
                desc: "Turns out more animations don't make the work look smarterr..after rebuilding this way too many times I realized simple layouts age better than aggressive UI animations...",
                date: "May 2026"
              },
              {
                title: "How I Connect People",
                desc: "I usually start being myself and share my thoughts to other to make network, Like it's easy to connect people by doing whatever you do and show whatever you are...",
                date: "May 2026"
              }
            ].map((blog) => (

              <div
                key={blog.title}
                className={`border rounded-2xl p-6 transition ${
                  darkMode
                    ? "border-[#262626] hover:bg-[#171717]"
                    : "border-[#d8d8d8] hover:bg-[#e8e8e8]"
                }`}
              >

                <div className="flex items-center justify-between gap-4 mb-4">

                  <h3
                    className={`text-base font-medium ${
                      darkMode
                        ? "text-white"
                        : "text-[#2f2f2f]"
                    }`}
                  >
                    {blog.title}
                  </h3>

                  <p
                    className={`text-[10px] uppercase tracking-[2px] ${
                      darkMode
                        ? "text-[#6f6f6f]"
                        : "text-[#9a9a9a]"
                    }`}
                  >
                    {blog.date}
                  </p>

                </div>

                <p
                  className={`leading-7 text-[14px] ${
                    darkMode
                      ? "text-[#a1a1a1]"
                      : "text-[#5f5f5f]"
                  }`}
                >
                  {blog.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


<section
  id="skills"
  className={`relative z-10 border-t ${
    darkMode
      ? "border-[#262626]"
      : "border-[#d8d8d8]"
  }`}
>

  <div className="max-w-3xl mx-auto px-5 md:px-6 py-14">

    <h2
      className={`text-[11px] uppercase tracking-[3px] mb-10 ${
        darkMode
          ? "text-[#7a7a7a]"
          : "text-[#8a8a8a]"
      }`}
    >
      Skills & Technologies
    </h2>

    <div className="flex flex-wrap gap-3">

      {[
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C/C++",
        "SQL",
        "Git",
        "Docker",
        "PostgresSQL",
        "Prisma",
        "Linux",
        "Go",
        "Postman",
        "Cloudflare"
      ].map((skill) => (

        <div
          key={skill}
          className={`border rounded-full px-4 py-2 text-[13px] transition duration-300 cursor-default ${
            darkMode
              ? "border-[#2b2b2b] bg-[#171717]/70 text-[#cfcfcf] hover:bg-[#1e1e1e]"
              : "border-[#d4d4d4] bg-[#f2f2f2]/70 text-[#4a4a4a] hover:bg-[#ebebeb]"
          }`}
        >
          {skill}
        </div>

      ))}

    </div>

  </div>

</section>


      <section
        id="contact"
        className={`relative z-10 border-t ${
          darkMode
            ? "border-[#262626]"
            : "border-[#d8d8d8]"
        }`}
      >

        <div className="max-w-3xl mx-auto px-5 md:px-6 py-14">

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
              className={`block transition break-all ${
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

          <div className="flex items-center flex-wrap gap-5">

            <a
              href="https://github.com/harshbarnawa"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/github.png"
                alt=""
                className={`w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                  darkMode
                    ? "invert hover:invert-0"
                    : ""
                }`}
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
                className={`w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                  darkMode
                    ? "invert hover:invert-0"
                    : ""
                }`}
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
                className={`w-10 h-10 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                  darkMode
                    ? "invert hover:invert-0"
                    : ""
                }`}
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
                className={`w-12 h-12 object-contain opacity-60 hover:opacity-100 transition duration-300 ${
                  darkMode
                    ? "invert hover:invert-0"
                    : ""
                }`}
              />
            </a>

          </div>

        </div>

      </section>

      <footer
        className={`relative z-10 border-t transition-colors duration-300 ${
          darkMode
            ? "border-[#262626] bg-[#161616]/80"
            : "border-[#d8d8d8] bg-[#e7e7e5]/80"
        }`}
      >

        <div
          className={`max-w-3xl mx-auto px-5 md:px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[11px] ${
            darkMode
              ? "text-[#7a7a7a]"
              : "text-[#8a8a8a]"
          }`}
        >

          <p>
            © 2026 Harsh Barnawa
          </p>

          <p>
            Built by Harsh Barnawa
          </p>

        </div>

      </footer>

    </div>
  )
}

export default App