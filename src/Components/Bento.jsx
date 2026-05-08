const cards = [

  {
    title:"AI Threat Detection",
    desc:"Real-time phishing analysis system using AI.",
    size:"large"
  },

  {
    title:"Cinematic Portfolio",
    desc:"Immersive motion-driven developer experience.",
    size:"small"
  },

  {
    title:"MERN Ecommerce",
    desc:"Scalable full stack shopping platform.",
    size:"medium"
  },

  {
    title:"Interactive UI System",
    desc:"Experimental cinematic frontend interactions.",
    size:"wide"
  }

];

function Bento(){

  return (

    <section className="bento">

      <div className="bento-top">

        <p className="bento-tag">
          Featured Builds
        </p>

        <h2 className="bento-title">
          Interactive
          <br />
          project space.
        </h2>

      </div>

      <div className="bento-grid">

        {cards.map((card,index)=>(

          <div
            className={`bento-card ${card.size}`}
            key={index}
          >

            <div className="bento-noise"></div>

            <div className="bento-content">

              <p className="bento-index">
                0{index + 1}
              </p>

              <div>

                <h3 className="bento-name">
                  {card.title}
                </h3>

                <p className="bento-desc">
                  {card.desc}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Bento;