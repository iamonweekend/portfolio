import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RetroIllustration } from "./RetroIllustration";

export function Hero({ personal, onNavigate }) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "clamp(2rem, 5vw, 3.5rem)",
        paddingBottom: "clamp(4.5rem, 8vw, 6.5rem)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "center",
          }}
          className="hero-two-col"
        >
          {/* Left Column: Greeting, Name, Intro, Retro CTA Button */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", minWidth: 0 }}>
            <div>
              <h1
                style={{
                  fontSize: "clamp(2.35rem, 7.5vw, 4.75rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--c-black)",
                  wordBreak: "break-word",
                }}
              >
                {personal.greeting}
                <br />
                {personal.intro}
              </h1>
            </div>

            <p
              style={{
                fontSize: "clamp(1.02rem, 1.4vw, 1.2rem)",
                lineHeight: 1.6,
                color: "var(--c-darkgray)",
                maxWidth: "460px",
              }}
            >
              {personal.bio}
            </p>

            <div style={{ paddingTop: "0.5rem" }}>
              <button
                onClick={() => onNavigate("projects")}
                className="retro-btn"
                style={{
                  fontSize: "0.95rem",
                  padding: "0.85rem 1.5rem",
                  maxWidth: "100%",
                }}
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Column: Original Retro Monochrome Computer Art */}
          <div style={{ display: "flex", justifyContent: "center", minWidth: 0, width: "100%", overflow: "hidden" }}>
            <RetroIllustration />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-two-col {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
