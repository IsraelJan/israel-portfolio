const experiences = [
  {
    period: "Jan 2026 – Present",
    role: "Frontend Developer | CRM & Operations Support",
    company: "The Marisel Group",
    logo: "/companies/marisel-group.jpg",
    type: "Remote",
    location: "New York, USA",
    description:
      "Build and improve responsive web experiences while connecting websites with CRM systems, automation workflows, forms, bookings, and other business tools.",
    skills: [
      "JavaScript",
      "Frontend Development",
      "Responsive Design",
      "UI/UX",
      "CRM",
      "GoHighLevel",
      "Zapier",
      "System Integration",
    ],
  },

  {
    period: "Aug 2025 – Aug 2026",
    role: "Frontend Developer | Web Systems & CRM Automation",
    company: "Real Tasking",
    logo: "/companies/real-tasking.jpg",
    type: "Contract · Remote",
    location: "Texas, USA",
    description:
      "Build and maintain responsive websites while supporting CRM administration, lead workflows, business integrations, and automated client communication.",
    skills: [
      "Frontend Development",
      "JavaScript",
      "Responsive Design",
      "UI/UX",
      "GoHighLevel",
      "Zapier",
      "CRM",
      "System Integration",
    ],
  },

  {
    period: "May 2025 – Jan 2026",
    role: "Property Operations & CRM Automation Specialist",
    company: "Venus Property AU",
    logo: "/companies/venus-property.jpg",
    type: "Remote",
    location: "Sydney, Australia",
    description:
      "Managed property operations while building and supporting CRM workflows, automated processes, websites, bookings, and digital systems used across property management operations.",
    skills: [
      "CRM",
      "GoHighLevel",
      "HoneyBook",
      "Zapier",
      "Workflow Automation",
      "Web Systems",
      "Property Operations",
    ],
  },

  {
    period: "Jun 2025 – Oct 2025",
    role: "Web Designer & Digital Systems Specialist",
    company: "The 5 Star Host",
    logo: "/companies/five-star-host.jpg",
    type: "Freelance · Remote",
    location: "Miami, USA",
    description:
      "Designed and maintained responsive websites while supporting booking systems, lead capture, CRM integrations, and automated client communication for real estate operations.",
    skills: [
      "Web Design",
      "Responsive Design",
      "UI/UX",
      "Wix",
      "Booking Systems",
      "CRM",
      "Automation",
    ],
  },

  {
    period: "Apr 2023 – Oct 2025",
    role: "Digital Operations & CRM Support Specialist",
    company: "ZARIQ",
    logo: "/companies/zariq.jpg",
    type: "Remote",
    location: "New South Wales, Australia",
    description:
      "Supported digital operations for real estate and service-based clients through CRM management, lead generation, research, scheduling, property listings, and digital content.",
    skills: [
      "CRM",
      "Digital Operations",
      "Lead Generation",
      "Research",
      "Client Communication",
      "Property Listings",
    ],
  },

  {
    period: "Oct 2021 – Mar 2025",
    role: "Live Ops Agent",
    company: "CCI Global",
    logo: "/companies/cci-global.jpg",
    type: "Full-time",
    location: "Kenya",
    description:
      "Supported high-volume daily operations through workflow monitoring, customer service, database management, order processing, and CRM-based case handling.",
    skills: [
      "Operations",
      "Customer Service",
      "CRM",
      "Zendesk",
      "Salesforce",
      "Problem Solving",
    ],
  },

  {
    period: "Jan 2021 – Sep 2021",
    role: "Customer Service / Culture Ambassador",
    company: "KFC",
    logo: "/companies/kfc.png",
    type: "Part-time · On-site",
    location: "Kenya",
    description:
      "Supported customer service and daily operations while helping onboard team members, improve communication, and maintain service standards in a fast-paced environment.",
    skills: [
      "Customer Service",
      "Operations",
      "Teamwork",
      "Communication",
      "Problem Solving",
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
          Building from operations and digital systems into frontend
          development, combining technical skills with real-world business
          experience.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article
            className="experience-card"
            key={`${experience.company}-${experience.period}`}
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
                  {experience.type} · {experience.location}
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