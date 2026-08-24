import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* =========================
    BACKGROUND IMAGE
========================== */}
<div className="hero-image-bg">
  <Image
    src="/images/hero-workspace.jpg"
    alt=""
    fill
    priority
    className="hero-background-image"
    sizes="100vw"
  />
</div>

<div className="hero-image-overlay" />

      {/* Background overlay for readability */}
      <div className="hero-video-overlay" />

      <div className="hero-content">
        {/* =========================
            LEFT: HERO CONTENT
        ========================== */}
        <div className="hero-text">
          <span className="hero-intro">HELLO, I&apos;M</span>

          <h1>
            Israel Jan
            <span>Otieno.</span>
          </h1>

          <h2>Frontend Developer & Systems Builder</h2>

          <p>
            I build responsive interfaces, useful digital systems, and
            automation solutions that help turn ideas into practical digital
            products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work <span>→</span>
            </a>

            <a href="#contact" className="btn-secondary">
              Let&apos;s Talk <span>↗</span>
            </a>
          </div>

          <div className="hero-tech">
            <p>TECHNOLOGIES I WORK WITH</p>

            <div className="hero-tech-icons">
              <span>React</span>
              <span>TS</span>
              <span>Next</span>
              <span>JS</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT: PROFILE VISUAL
        ========================== */}
        <div className="hero-image-area">
          {/* Existing laptop / workspace visual */}
          <div className="hero-workspace-bg">
            <div className="workspace-screen">
              <div className="screen-top">
                <span />
                <span />
                <span />
              </div>

              <div className="screen-code">
                <span className="code-line line-one" />
                <span className="code-line line-two" />
                <span className="code-line line-three" />
                <span className="code-line line-four" />
                <span className="code-line line-five" />
              </div>
            </div>
          </div>

          {/* Main profile image */}
          <div className="hero-image-wrapper">
            <Image
              src="/images/israel-profile.jpg"
              alt="Israel Jan Otieno"
              fill
              priority
              className="hero-profile-image"
              sizes="(max-width: 900px) 80vw, 430px"
            />
          </div>

          {/* Small coding card */}
          <div className="code-card">
            <div className="code-card-header">
              <span />
              <span />
              <span />
            </div>

            <code>
              <span className="code-blue">const</span> israel = {"{"}
              <br />
              &nbsp;&nbsp;role:{" "}
              <span className="code-green">
                &quot;Frontend Developer&quot;
              </span>
              ,
              <br />
              &nbsp;&nbsp;focus:{" "}
              <span className="code-green">
                &quot;Digital Products&quot;
              </span>
              ,
              <br />
              &nbsp;&nbsp;available:{" "}
              <span className="code-blue">true</span>
              <br />
              {"}"}
            </code>
          </div>

          {/* Available for work */}
          <div className="hero-available-card">
            <span className="availability-dot" />

            <div>
              <span className="availability-label">
                Available for Work
              </span>

              <p>Open to remote opportunities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}