function Contact(){

  return (

    <section className="contact" id="contact">

      <div className="contact-top">

        <p className="contact-tag">
          Contact
        </p>

        <h2 className="contact-title">
          Have an idea,
          a project,
          or just want
          to connect?
        </h2>

      </div>

      <div className="contact-bottom">

        <a
          href="mailto:youremail@gmail.com"
          className="contact-email"
        >
          youremail@gmail.com
        </a>

        <div className="contact-links">

          <a href="#">
            GitHub
          </a>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Instagram
          </a>

        </div>

      </div>

    </section>

  );
}

export default Contact;