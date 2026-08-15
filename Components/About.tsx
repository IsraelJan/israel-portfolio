export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        
        <div className="about-content">
          <span className="section-eyebrow">ABOUT ME</span>

          <h2>
            Building at the intersection of
            <span> technology, systems, and business.</span>
          </h2>

          <p>
            I am a frontend-focused developer with hands-on experience in web
            development, digital systems, CRM administration, workflow
            automation, and remote business operations.
          </p>

          <p>
            My journey began with design and problem-solving, before expanding
            into websites, business systems, automation, and software
            engineering. Today, I focus on building responsive, user-friendly
            digital experiences while continuously developing my skills in
            modern frontend and backend technologies.
          </p>

          <p>
            I bring a systems mindset to development. Beyond building
            interfaces, I enjoy understanding how users, workflows, data, and
            technology connect to solve real business problems.
          </p>

          <div className="about-highlights">
            <div>
              <strong>Frontend Focus</strong>
              <span>Modern web interfaces and responsive experiences</span>
            </div>

            <div>
              <strong>Systems Thinking</strong>
              <span>Automation, integrations, and business workflows</span>
            </div>

            <div>
              <strong>Continuous Growth</strong>
              <span>Growing toward full-stack software engineering</span>
            </div>
          </div>
        </div>

        <div className="about-side">
          <div className="about-card">
            <span className="about-card-label">CURRENTLY</span>

            <h3>Building & Learning</h3>

            <ul>
              <li>
                <span>01</span>
                Frontend Development
              </li>
              <li>
                <span>02</span>
                Software Engineering
              </li>
              <li>
                <span>03</span>
                Backend Development
              </li>
              <li>
                <span>04</span>
                AI & Automation Systems
              </li>
            </ul>
          </div>

          <div className="about-quote">
            <span>“</span>
            <p>
              I believe the best technology is not just built to work, but
              designed to make complex problems simpler.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}