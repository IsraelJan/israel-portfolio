export default function Technologies() {
  const frontend = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
  ];

  const webTools = [
    "WordPress",
    "Wix",
    "Elementor",
    "Figma",
    "Git",
    "GitHub",
    "VS Code",
  ];

  const automation = [
    "GoHighLevel",
    "Zapier",
    "Make",
    "HoneyBook",
    "HubSpot",
    "API Integration",
    "Webhook Workflows",
  ];

  const learning = [
    "Software Engineering",
    "Backend Development",
    "Supabase",
    "AWS",
    "DevOps",
    "AI Integration",
  ];

  return (
    <section id="skills" className="technologies-section">
      <div className="section-heading">
        <span className="section-icon">&lt;/&gt;</span>

        <div>
          <h2>Technologies & Tools</h2>
          <p>
            A combination of frontend development, web technologies,
            automation, and business systems experience.
          </p>
        </div>
      </div>

      {/* Frontend Development */}
      <div className="skill-category">
        <div className="category-title">
          <span>01</span>
          <h3>Frontend Development</h3>
        </div>

        <div className="technologies-grid">
          {frontend.map((technology) => (
            <div className="technology-card" key={technology}>
              <div className="technology-icon">
                {technology === "JavaScript"
                  ? "JS"
                  : technology === "TypeScript"
                  ? "TS"
                  : technology === "React"
                  ? "⚛"
                  : technology === "Next.js"
                  ? "N"
                  : technology === "Tailwind CSS"
                  ? "≈"
                  : "</>"}
              </div>

              <p>{technology}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Web Development & Design */}
      <div className="skill-category">
        <div className="category-title">
          <span>02</span>
          <h3>Web Development & Design</h3>
        </div>

        <div className="technologies-grid">
          {webTools.map((tool) => (
            <div className="technology-card" key={tool}>
              <div className="technology-icon">
                {tool === "GitHub"
                  ? "GH"
                  : tool === "VS Code"
                  ? "</>"
                  : tool === "Figma"
                  ? "F"
                  : tool === "WordPress"
                  ? "W"
                  : tool === "Wix"
                  ? "Wi"
                  : tool === "Elementor"
                  ? "E"
                  : "Git"}
              </div>

              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Automation & Business Systems */}
      <div className="skill-category">
        <div className="category-title">
          <span>03</span>
          <h3>Automation & Business Systems</h3>
        </div>

        <div className="technologies-grid">
          {automation.map((tool) => (
            <div className="technology-card" key={tool}>
              <div className="technology-icon">⚙</div>
              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div className="skill-category learning-category">
        <div className="category-title">
          <span>04</span>
          <h3>Currently Learning</h3>
        </div>

        <div className="technologies-grid">
          {learning.map((skill) => (
            <div className="technology-card learning-card" key={skill}>
              <div className="technology-icon">↗</div>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}