import Link from "next/link";

export default function PublicNavbar() {
  return (
    <header className="public-navbar">
      <div className="site-container public-navbar__inner">
        <Link href="/" className="brand" aria-label="Israel Jan home">
          ISRAEL JAN<span>.</span>
        </Link>

        <nav className="public-navbar__links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#systems">Systems</a>
          <a href="#engineering">Engineering</a>
          <a href="#about">About</a>
        </nav>

        <div className="public-navbar__actions">
          <a className="nav-cv" href="/Israel-Jan-CV.pdf" download>
            Download CV
          </a>
          <a className="nav-contact" href="#contact">
            Let&apos;s Work
          </a>
        </div>
      </div>
    </header>
  );
}
