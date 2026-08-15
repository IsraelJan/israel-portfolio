export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <span className="logo-mark">IJ</span>
        <span className="logo-name">Israel Jan Otieno</span>
      </a>

      <nav className="nav-links">
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="/resume.pdf" className="cv-button">
        Download CV
      </a>
    </header>
  );
}