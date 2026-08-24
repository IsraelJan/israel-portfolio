"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Tracy King",
    company: "Real Tasking",
    role: "Client",
    image: "/clients/tracy-king.jpg",
    quote:
      "Israel has been someone I could rely on across so many different projects. He’s always willing to figure things out, learn what’s needed, and follow through. What I’ve appreciated most is that he understands both the technical side of the work and the day-to-day needs of the business. Working with him has always felt easy and collaborative.",
  },
  {
    name: "Nicole Creegan",
    company: "The 5 Star Host",
    role: "Client",
    image: "/clients/nicole-creegan.jpg",
    quote:
      "Working with Israel made managing our website and short-term rental concierge work much easier. He helped keep the website updated, worked through the details of our systems, and was always willing to help when something needed attention. He understood what we were trying to achieve and turned it into practical solutions.",
  },
  {
    name: "Gordana Hamati",
    company: "Venus Property AU",
    role: "Client",
    image: "/clients/gordana-hamati.jpg",
    quote:
      "Israel brought a lot of consistency to our day-to-day real estate operations. He helped with our systems, client communication, property information, and the many small things that need to stay organized behind the scenes. I appreciated his reliability and the fact that he was always looking for a better way to get things done.",
  },
  {
    name: "Stanley James",
    company: "ZARIQ",
    role: "Client",
    image: "/clients/stanley-james.jpg",
    quote:
      "Israel is dependable, curious, and easy to work with. He takes the time to understand what needs to be done and doesn't give up when something doesn't work the first time. I’ve enjoyed working with him because he brings both a practical mindset and a genuine willingness to learn.",
  },
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the testimonials so the animation can loop seamlessly.
  const sliderItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      {/* =========================
          HEADER
      ========================== */}
      <div className="testimonials-header">
        <span className="section-eyebrow">CLIENT FEEDBACK</span>

        <h2 id="testimonials-heading">
          Trusted by teams I&apos;ve worked with.
        </h2>

        <p>
          A few words from people and teams I&apos;ve supported across
          frontend development, digital systems, CRM, and operations.
        </p>
      </div>

      {/* =========================
          SLIDER
      ========================== */}
      <div
        className={`testimonials-slider ${
          isPaused ? "is-paused" : ""
        }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="testimonials-track">
          {sliderItems.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={`${testimonial.name}-${index}`}
            >
              <div className="testimonial-card-top">
                <div className="testimonial-client">
                  <div className="testimonial-avatar">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name}`}
                    />
                  </div>

                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>

                <span className="testimonial-mark">“</span>
              </div>

              <blockquote>{testimonial.quote}</blockquote>

              <div className="testimonial-company">
                {testimonial.company}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* =========================
          CONTROLS
      ========================== */}
      <div className="testimonials-controls">
        <button
          type="button"
          className="testimonial-pause-button"
          onClick={() => setIsPaused((current) => !current)}
          aria-label={
            isPaused
              ? "Resume testimonials"
              : "Pause testimonials"
          }
          aria-pressed={isPaused}
        >
          <span className="pause-icon">
            {isPaused ? "▶" : "Ⅱ"}
          </span>

          {isPaused
            ? "Resume testimonials"
            : "Pause testimonials"}
        </button>

        <span className="testimonial-scroll-hint">
          Hover to pause
        </span>
      </div>
    </section>
  );
}