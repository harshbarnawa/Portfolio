import { useState } from "react"

const projects = [
  {
    id: "A",
    title: "Chess Arena",
    link: "https://chessbylibrary.vercel.app/",
    tags: ["js", "auth", "frontend"],
    desc: "JavaScript-based chess platform featuring authentication systems and complex frontend logic."
  },
  {
    id: "B",
    title: "Algo Buddy",
    link: "https://github.com/harshbarnawa",
    tags: ["dsa", "visualization", "react"],
    desc: "Interactive DSA learning platform with real-time visualizations for algorithms, trees, graphs, heaps, recursion, and data structures."
  },
  {
    id: "C",
    title: "Cube Solver",
    link: "https://github.com/harshbarnawa",
    tags: ["algorithm", "optimization"],
    desc: "Intelligent Rubik’s Cube solving project focused on algorithmic optimization systems."
  },
  {
    id: "D",
    title: "Edito Studio",
    link: "https://edit-studio-sage.vercel.app/",
    tags: ["react", "ui", "agency"],
    desc: "Modern frontend-focused creative agency website built using React and modern UI systems."
  }
]

const skills = [
  ["Languages", "C/C++  Python  JavaScript  TypeScript  Java  Go  SQL"],
  ["Frontend", "React  Next.js  Tailwind"],
  ["Backend", "Node.js  Express  MongoDB"],
  ["Tools", "Git"]
]

const socials = [
  {
    label: "github",
    href: "https://github.com/harshbarnawa"
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/harsh-barnawa/"
  },
  {
    label: "twitter/x",
    href: "https://x.com/harshbarnawa"
  },
  {
    label: "codeforces",
    href: "https://codeforces.com/profile/harshbarnawa.info"
  }
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  const bg = darkMode ? "#111111" : "#f5f5f5"
  const fg = darkMode ? "#d4d4d4" : "#111111"
  const dim = darkMode ? "#777777" : "#7a7a7a"
  const border = darkMode ? "#262626" : "#dddddd"
  const head = darkMode ? "#ffffff" : "#000000"
  const tagBg = darkMode ? "#1c1c1c" : "#ebebeb"
  const tagText = darkMode ? "#8c8c8c" : "#666666"
  const link = darkMode ? "#8ab4ff" : "#3366cc"

  const mono = {
    fontFamily: "'Consolas', 'Courier New', monospace"
  }

  const Section = ({ id, label, children }) => (
    <section id={id} style={{ marginTop: "56px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "22px"
        }}
      >
        <span
          style={{
            ...mono,
            color: dim,
            fontSize: "11px"
          }}
        >
          {`/* ${label} */`}
        </span>

        <div
          style={{
            flex: 1,
            height: "1px",
            background: border
          }}
        />
      </div>

      {children}
    </section>
  )

  return (
    <div
      style={{
        ...mono,
        background: bg,
        color: fg,
        minHeight: "100vh",
        transition: "0.3s ease",
        paddingBottom: "60px"
      }}
    >
      <style>{`
        *{
          box-sizing:border-box;
          scroll-behavior:smooth;
        }

        body{
          margin:0;
          background:${bg};
        }

        a{
          text-decoration:none;
        }

        a:hover{
          text-decoration:underline;
        }

        @keyframes blink {
          0%,100%{opacity:1}
          50%{opacity:0}
        }
      `}</style>

      {/* NAVBAR */}

      <nav
        style={{
          borderBottom: `1px solid ${border}`,
          position: "sticky",
          top: 0,
          background: bg,
          zIndex: 50
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px"
          }}
        >
          <div
            style={{
              color: dim,
              fontSize: "12px"
            }}
          >
            <span style={{ color: link }}>harsh</span>
            @barnawa:~$

            <span
              style={{
                display: "inline-block",
                width: "7px",
                height: "13px",
                background: dim,
                marginLeft: "5px",
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite"
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap"
            }}
          >
            {["about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                style={{
                  color: dim,
                  fontSize: "12px"
                }}
              >
                {item}
              </a>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: "transparent",
                border: `1px solid ${border}`,
                color: dim,
                fontFamily: "inherit",
                fontSize: "11px",
                padding: "4px 10px",
                cursor: "pointer"
              }}
            >
              {darkMode ? "light" : "dark"}
            </button>
          </div>
        </div>
      </nav>

      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        {/* HERO */}

        <section
          style={{
            paddingTop: "70px"
          }}
        >
          <div
            style={{
              color: dim,
              fontSize: "12px",
              marginBottom: "22px"
            }}
          >
            {`> whoami`}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            <div>
              <h1
                style={{
                  margin: 0,
                  color: head,
                  fontSize: "26px",
                  fontWeight: "normal"
                }}
              >
                Harsh Barnawa
              </h1>

              <div
                style={{
                  color: dim,
                  fontSize: "12px",
                  marginTop: "6px"
                }}
              >
                engineering student · competitive programmer · builder
              </div>
            </div>

            <div
              style={{
                width: "72px",
                height: "72px",
                overflow: "hidden",
                borderRadius: "999px",
                border: `1px solid ${border}`
              }}
            >
              <img
                src="me.jpeg"
                alt="profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>

          <p
            style={{
              marginTop: "28px",
              lineHeight: "1.9",
              color: fg,
              maxWidth: "620px",
              fontSize: "14px"
            }}
          >
            I like building clean things and overthinking small details that probably don't matter that much. mostly building random projects, solving cpp problems and rebuilding things again because{" "}
            <span style={{ color: dim }}>
              “something still feels off”
            </span>
          </p>
        </section>

        {/* ABOUT */}

        <Section id="about" label="about">
          <div
            style={{
              border: `1px solid ${border}`,
              padding: "18px",
              borderRadius: "4px"
            }}
          >
            <div
              style={{
                color: dim,
                fontSize: "11px",
                marginBottom: "14px"
              }}
            >
              {`// github activity — harshbarnawa`}
            </div>

            <img
              src={`https://ghchart.rshah.org/${
                darkMode ? "555555" : "333333"
              }/harshbarnawa`}
              alt="github graph"
              style={{
                width: "100%",
                opacity: 0.75
              }}
            />
          </div>
        </Section>

        {/* PROJECTS */}

        <Section id="projects" label="projects">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                display: "grid",
                gridTemplateColumns: "22px 1fr",
                gap: "0 16px",
                padding: "18px 0",
                borderBottom:
                  index !== projects.length - 1
                    ? `1px solid ${border}`
                    : "none"
              }}
            >
              <span
                style={{
                  color: dim,
                  fontSize: "12px",
                  paddingTop: "2px"
                }}
              >
                {project.id}.
              </span>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "8px"
                  }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: link,
                      fontSize: "15px"
                    }}
                  >
                    {project.title}
                  </a>

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: tagBg,
                        color: tagText,
                        padding: "2px 7px",
                        borderRadius: "3px",
                        fontSize: "10px"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    margin: 0,
                    color: dim,
                    lineHeight: "1.8",
                    fontSize: "13px"
                  }}
                >
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </Section>

        {/* SKILLS */}

        <Section id="skills" label="skills_and_technologies">
          <div
            style={{
              display: "grid",
              gap: "12px"
            }}
          >
            {skills.map(([category, value]) => (
              <div
                key={category}
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr",
                  gap: "0 18px",
                  fontSize: "13px"
                }}
              >
                <span
                  style={{
                    color: dim
                  }}
                >
                  {category}
                </span>

                <span
                  style={{
                    color: fg,
                    lineHeight: "1.8"
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}

        <Section id="contact" label="contact">
          <div
            style={{
              display: "grid",
              gap: "10px"
            }}
          >
            <div>
              <span
                style={{
                  color: dim,
                  display: "inline-block",
                  width: "100px"
                }}
              >
                email
              </span>

              <a
                href="mailto:harshbarnawa.info@gmail.com"
                style={{
                  color: link
                }}
              >
                harshbarnawa.info@gmail.com
              </a>
            </div>

            <div>
              <span
                style={{
                  color: dim,
                  display: "inline-block",
                  width: "100px"
                }}
              >
                whatsapp
              </span>

              <a
                href="https://wa.me/916264232915"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: link
                }}
              >
                +91 62642 32915
              </a>
            </div>

            {socials.map((social) => (
              <div key={social.label}>
                <span
                  style={{
                    color: dim,
                    display: "inline-block",
                    width: "100px"
                  }}
                >
                  {social.label}
                </span>

                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: link
                  }}
                >
                  {social.href.replace("https://", "")}
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* FOOTER */}

        <footer
          style={{
            marginTop: "60px",
            paddingTop: "18px",
            borderTop: `1px solid ${border}`,
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            flexWrap: "wrap",
            color: dim,
            fontSize: "11px"
          }}
        >
          <span>© 2026 Harsh Barnawa</span>

          <span>Built by Harsh Barnawa</span>
        </footer>
      </div>
    </div>
  )
}