"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("israel-portfolio-intro-seen");
    if (seen) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => exitIntro(), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  function exitIntro() {
    sessionStorage.setItem("israel-portfolio-intro-seen", "true");
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 650);
  }

  if (!visible) return null;

  return (
    <div className={`intro-screen ${leaving ? "intro-screen--leaving" : ""}`} role="dialog" aria-label="Portfolio introduction">
      <div className="intro-screen__top">
        <span>ISRAEL JAN.</span>
        <span>01 / 01</span>
      </div>

      <div className="intro-screen__content">
        <div className="intro-screen__portrait">
          <Image
            src="/images/israel-profile.jpg"
            alt="Israel Jan"
            fill
            priority
            sizes="(max-width: 768px) 72vw, 320px"
          />
        </div>

        <div className="intro-screen__copy">
          <p className="eyebrow">SYSTEMS & TECHNOLOGY</p>
          <h1>DESIGNING<br />SYSTEMS THAT WORK.</h1>
          <p className="intro-screen__role">
            Software Engineering · Digital Systems · Automation · Operations
          </p>
        </div>
      </div>

      <div className="intro-screen__bottom">
        <span>PORTFOLIO / 2026</span>
        <button type="button" onClick={exitIntro}>Skip intro</button>
      </div>
    </div>
  );
}
