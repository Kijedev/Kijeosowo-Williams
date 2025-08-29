"use client";

import { useState } from "react";
// import "./modern-marquee.css";

const technologies = [
  "Let's work together.",
  "Let's work together.",
  // "React.js",
  // "TypeScript",
  // "Next.js",
  // "JavaScript",
  // "Tailwind CSS",
  // "HTML5",
  // "CSS3",
  // "AI",
  // "ChatGPT",
  // "Claude",
  // "WordPress",
  // "React Native (Expo)",
  // "Git",
  // "GitHub",
  // "REST API",
  // "Vue.js",
  // "Bootstrap",
  // "Netlify",
  // "Vercel",
];

function MarqueeRow({
  technologies,
  direction = "left",
  speed = 100,
  className = "",
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array to create seamless loop
  const duplicatedTechs = [...technologies];
  // const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div
      className={`marquee-container ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`marquee-content ${
          direction === "left" ? "marquee-left" : "marquee-right"
        } ${isPaused ? "paused" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <span key={index} className="marquee-item">
            <span className="tech-name">{tech}</span>
            {/* <span className="star">🌟</span> */}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ModernMarquee() {
  return (
    <div className="modern-marquee">
      <div className="marquee-rows">
        {/* First row - moving right */}
        <MarqueeRow
          technologies={technologies}
          direction="right"
          speed={70}
          className="large-text"
        />

        {/* Second row - moving left */}
        {/* <MarqueeRow
          technologies={technologies}
          direction="left"
          speed={70}
          className="large-text"
        /> */}

        {/* Third row - moving right (optional, slower) */}
        {/* <MarqueeRow
          technologies={technologies.slice().reverse()}
          direction="right"
          speed={70}
          className="medium-text"
        /> */}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="fade-left"></div>
      <div className="fade-right"></div>
    </div>
  );
}
