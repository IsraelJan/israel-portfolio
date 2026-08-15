const projects = [
  {
    number: "01",
    category: "Productivity Platform",
    title: "IsraelOS",
    description:
      "A personal operating system concept designed to organize projects, learning, finances, goals, and daily priorities in one focused workspace.",
    tags: ["Next.js", "TypeScript", "React"],
    status: "In Development",
    visual: "israelos",
  },
  {
    number: "02",
    category: "PropTech",
    title: "ZariQ",
    description:
      "A property technology platform concept focused on modern property discovery, tenant and landlord workflows, maintenance, payments, and property management.",
    tags: ["Next.js", "Supabase", "AI"],
    status: "Concept & MVP",
    visual: "zariq",
  },
  {
    number: "03",
    category: "Web Development",
    title: "Business Websites",
    description:
      "Responsive websites and digital experiences built for businesses using modern web tools, WordPress, Wix, and conversion-focused design principles.",
    tags: ["WordPress", "Wix", "Elementor"],
    status: "Client Experience",
    visual: "website",
  },
  {
    number: "04",
    category: "Automation & Systems",
    title: "CRM & Workflow Automation",
    description:
      "Business workflow solutions involving CRM management, automation, integrations, lead workflows, booking systems, and operational processes.",
    tags: ["GoHighLevel", "Zapier", "Make"],
    status: "Systems Experience",
    visual: "automation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div>
          <span className="section-eyebrow">SELECTED WORK</span>
          <h2>Featured Projects</h2>
        </div>

        <p>
          A selection of software concepts, web projects, and business
          systems that reflect my development and technical experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-visual ${project.visual}`}>
              <div className="visual-window">
                <div className="visual-topbar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="visual-content">
                  <div className="visual-label">{project.title}</div>
                  <div className="visual-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-status">{project.status}</span>
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <a href="#contact" className="project-link">
              View Project <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}