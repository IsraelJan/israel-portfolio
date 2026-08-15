export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Israel Jan. Otieno<span>.</span>
          </a>

          <p>
            Frontend-focused developer building responsive digital experiences,
            business systems, and automation solutions.
          </p>
        </div>

        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {2026} Israel Jan. Otieno. All rights reserved.</p>

        <p>Built with Next.js & TypeScript.</p>
      </div>
    </footer>
  );
}