export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <span className="section-eyebrow">GET IN TOUCH</span>

          <h2>
            Let&apos;s build something
            <span> meaningful together.</span>
          </h2>

          <p>
            I&apos;m open to remote frontend development, junior software
            engineering, web development, and technical systems opportunities.
            If you&apos;re looking for someone who combines development,
            automation, and real-world business systems experience, I&apos;d
            love to connect.
          </p>

          <a
            href="mailto:israeljan.78@gmail.com"
            className="contact-email"
          >
            israeljan.78@gmail.com <span>↗</span>
          </a>
        </div>

        <div className="contact-actions">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/israel-jan-35a702308/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-number">01</span>

            <div>
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-number">02</span>

            <div>
              <h3>GitHub</h3>
              <p>Explore my code and projects</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254115889691?text=Hello%20Israel%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-number">03</span>

            <div>
              <h3>WhatsApp</h3>
              <p>Send me a direct message</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          {/* Email */}
          <a
            href="mailto:israeljan.78@gmail.com"
            className="contact-card"
          >
            <span className="contact-number">04</span>

            <div>
              <h3>Email</h3>
              <p>Start a conversation</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}