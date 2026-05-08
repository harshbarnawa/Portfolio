const projects = [

  {
    title:"AI Phishing Detector",
    category:"Cybersecurity • AI",
    year:"2026"
  },

  {
    title:"Cinematic Agency Website",
    category:"Creative Development",
    year:"2026"
  },

  {
    title:"MERN Ecommerce Platform",
    category:"Full Stack",
    year:"2025"
  },

  {
    title:"Interactive 3D Portfolio",
    category:"Frontend Experience",
    year:"2026"
  }

];

function Projects(){

  return (

    <section className="projects"  id="projects">

      <div className="projects-top">

        <p className="projects-tag">
          Selected Work
        </p>

        <h2 className="projects-title">
          Featured
          <br />
          projects.
        </h2>

      </div>

      <div className="projects-list">

        {projects.map((project,index)=>(

          <div
            className="project-card"
            key={index}
          >

            <div className="project-left">

              <p className="project-index">
                0{index + 1}
              </p>

              <div>

                <h3 className="project-name">
                  {project.title}
                </h3>

                <p className="project-category">
                  {project.category}
                </p>

              </div>

            </div>

            <p className="project-year">
              {project.year}
            </p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;