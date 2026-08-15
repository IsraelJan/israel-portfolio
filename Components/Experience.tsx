const experiences = [
  {
    period: "Aug 2025 – Present",
    role: "Web Designer & Workflow Automation / CRM Admin",
    company: "Real Tasking",
    logo: "/companies/real-tasking.png",
    type: "Remote · Texas, USA",
    description:
      "Designed and improved responsive business websites and user-facing digital experiences while supporting CRM administration, workflow automation, and system integrations.",
    skills: [
      "Web Development",
      "Responsive Design",
      "UI/UX",
      "CRM",
      "Automation",
      "System Integration",
    ],
  },
  {
    period: "May 2025 – Present",
    role: "Virtual Property Management Assistant | CRM & Automation Specialist",
    company: "Marisel Hub",
    logo: "/companies/marisel-hub.png",
    type: "Remote · Sydney, Australia",
    description:
      "Supported property management operations through CRM workflows, automation, digital systems, and process optimization.",
    skills: [
      "Web Systems",
      "CRM",
      "Automation",
      "API Integration",
      "Workflow Design",
    ],
  },
  {
    period: "Jun 2025 – Oct 2025",
    role: "Web Designer & Digital Systems Specialist",
    company: "The 5 Star Host",
    logo: "/companies/five-star-host.png",
    type: "Freelance · Miami, USA",
    description:
      "Designed and maintained responsive web pages and digital experiences with a focus on usability, mobile responsiveness, booking flows, and website integrations.",
    skills: [
      "Wix",
      "Web Design",
      "Responsive Design",
      "UI/UX",
      "Booking Systems",
    ],
  },
  {
    period: "Apr 2023 – Oct 2025",
    role: "Virtual Operations Assistant | Digital Systems Support",
    company: "Remote Operations",
    logo: "/companies/remote-operations.png",
    type: "Remote · Australia",
    description:
      "Supported remote business operations while working with websites, CRM platforms, digital tools, and technical workflows.",
    skills: [
      "Digital Systems",
      "Technical Support",
      "CRM",
      "Troubleshooting",
      "Operations",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <span className="section-eyebrow">CAREER JOURNEY</span>

        <h2>Professional Experience</h2>

        <p>
          Real-world experience building websites, managing digital systems,
          automating workflows, and supporting business operations across
          international remote teams.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article
            className="experience-card"
            key={experience.company + experience.period}
          >
            <div className="experience-period">
              {experience.period}
            </div>

            <div className="experience-main">
              <div className="experience-role-row">
                <div className="experience-company-info">
                  <div className="company-logo">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                    />
                  </div>

                  <div>
                    <h3>{experience.role}</h3>
                    <h4>{experience.company}</h4>
                  </div>
                </div>

                <span className="experience-type">
                  {experience.type}
                </span>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}