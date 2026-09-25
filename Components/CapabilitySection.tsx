const capabilities = [
  {
    number: "01",
    title: "Operations",
    statement: "I understand how businesses actually operate.",
    items: ["Business Process", "CRM", "SOPs", "Lead Management", "Client Lifecycle", "Reporting"],
  },
  {
    number: "02",
    title: "Systems",
    statement: "I connect the moving parts.",
    items: ["CRM Architecture", "Workflow Automation", "API Integrations", "AI Systems", "Data Flows", "Business Intelligence"],
  },
  {
    number: "03",
    title: "Engineering",
    statement: "I turn systems into digital products.",
    items: ["Web Applications", "Dashboards", "Frontend Development", "Responsive Interfaces", "APIs", "Software Architecture"],
  },
];

export default function CapabilitySection() {
  return (
    <section id="systems" className="capability-section">
      <div className="site-container">
        <div className="section-kicker">CAPABILITY / 01</div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.number}>
              <div className="capability-card__number">{capability.number}</div>
              <h2>{capability.title}</h2>
              <p className="capability-card__statement">{capability.statement}</p>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
