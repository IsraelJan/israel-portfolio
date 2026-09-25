import Image from "next/image";
import IntroScreen from "../Components/IntroScreen";
import PublicNavbar from "../Components/PublicNavbar";
import CapabilitySection from "../Components/CapabilitySection";

export default function Home() {
  return (
    <>
      <IntroScreen />

      <div className="public-site">
        <PublicNavbar />

        <main>
          <section className="hero" id="work">
            <div className="site-container hero__grid">
              <div className="hero__content">
                <p className="eyebrow">SYSTEMS & TECHNOLOGY</p>
                <h1>I DESIGN AND BUILD SYSTEMS THAT MAKE BUSINESSES WORK BETTER.</h1>
                <p className="hero__lead">
                  I combine software engineering, business operations, CRM architecture,
                  automation and digital systems to turn complex processes into connected,
                  scalable solutions.
                </p>

                <div className="hero__actions">
                  <a className="button button--dark" href="#systems">View my work</a>
                  <a className="button button--light" href="/Israel-Jan-CV.pdf" download>Download CV</a>
                </div>

                <div className="hero__meta">
                  <span>Software Engineering</span>
                  <span>Digital Systems</span>
                  <span>Automation</span>
                  <span>Operations</span>
                </div>
              </div>

              <div className="hero__visual" aria-label="Israel Jan portrait">
                <div className="hero__frame">
                  <Image
                    src="/images/israel-profile.jpg"
                    alt="Israel Jan"
                    fill
                    priority
                    sizes="(max-width: 900px) 82vw, 520px"
                  />
                </div>
                <div className="hero__caption">
                  <span>ISRAEL JAN.</span>
                  <span>SYSTEMS / TECHNOLOGY / 2026</span>
                </div>
              </div>
            </div>
          </section>

          <CapabilitySection />

          <section className="placeholder-section" id="engineering">
            <div className="site-container">
              <div className="section-kicker">NEXT / ENGINEERING</div>
              <h2>Engineering capability will be built here next.</h2>
              <p>
                This section will show the technologies, architecture patterns and
                engineering practices behind the systems.
              </p>
            </div>
          </section>

          <section className="placeholder-section placeholder-section--grey" id="about">
            <div className="site-container">
              <div className="section-kicker">NEXT / ABOUT</div>
              <h2>The person behind the systems.</h2>
            </div>
          </section>

          <section className="contact-strip" id="contact">
            <div className="site-container contact-strip__inner">
              <div>
                <p className="section-kicker">LET&apos;S WORK</p>
                <h2>Have a system that needs to work better?</h2>
              </div>
              <a className="button button--dark" href="mailto:hello@israeljan.com">Get in touch</a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-container site-footer__inner">
            <span>ISRAEL JAN.</span>
            <span>Systems & Technology</span>
            <span>© 2026</span>
          </div>
        </footer>
      </div>
    </>
  );
}
