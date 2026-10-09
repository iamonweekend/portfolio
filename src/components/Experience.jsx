import React from "react";
import { ExperienceCard } from "./ExperienceCard";

export function Experience({ experience, totalExperience = "2 YEARS OF BUILDING ON THE WEB." }) {
  return (
    <section id="experience" style={{ paddingBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ marginBottom: "1.75rem" }}>
          <h2 className="retro-section-heading">
            Experience
          </h2>
        </div>

        {/* Total Experience Callout Module */}
        <div
          style={{
            backgroundColor: "var(--c-white)",
            border: "2.5px solid #000000",
            boxShadow: "4px 4px 0 #000000",
            borderRadius: "2px",
            marginBottom: "2rem",
            overflow: "hidden",
          }}
        >
          <div className="retro-window-header">
            <div className="retro-window-dots">
              <span className="retro-dot" />
              <span className="retro-dot empty" />
              <span className="retro-dot empty" />
            </div>
            <span>Experience</span>
          </div>

          <div
            style={{
              padding: "clamp(1.5rem, 3.5vw, 2.25rem)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "var(--c-darkgray)",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                TOTAL EXPERIENCE
              </div>

              <div
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#000000",
                  textTransform: "uppercase",
                }}
              >
                2 YEARS<br />
                OF BUILDING<br />
                ON THE WEB.
              </div>
            </div>

            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 700,
                backgroundColor: "var(--c-lightgray)",
                border: "2px solid #000000",
                boxShadow: "3px 3px 0 #000000",
                padding: "0.65rem 1.15rem",
                letterSpacing: "0.04em",
                color: "#000000",
                borderRadius: "2px",
              }}
            >
              2 YEARS EXPERIENCE
            </div>
          </div>
        </div>

        {/* Boxed Experience Modules Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {experience.map((item, idx) => (
            <ExperienceCard key={item.id || idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
