import React from "react";

export function About({ about }) {
  return (
    <section id="about" style={{ paddingBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 className="retro-section-heading">
            {about.title || "About"}
          </h2>
        </div>

        {/* Retro Boxed About Card */}
        <div
          style={{
            backgroundColor: "var(--c-white)",
            border: "2.5px solid #000000",
            boxShadow: "4px 4px 0 #000000",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          {/* Top Window Bar */}
          <div className="retro-window-header">
            <div className="retro-window-dots">
              <span className="retro-dot" />
              <span className="retro-dot empty" />
              <span className="retro-dot empty" />
            </div>
            <span>About</span>
          </div>

          {/* Main Statement */}
          <div
            style={{
              padding: "clamp(1.75rem, 4vw, 2.75rem)",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                fontWeight: 500,
                lineHeight: 1.6,
                color: "#000000",
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              {about.bio}
            </p>
          </div>

          {/* Bottom Split Meta Info */}
          <div
            style={{
              borderTop: "2px solid #000000",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              backgroundColor: "var(--c-offwhite)",
            }}
            className="about-meta-grid"
          >
            {/* Role */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderRight: "2px solid #000000",
              }}
              className="about-meta-col-left"
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--c-darkgray)",
                  marginBottom: "0.35rem",
                }}
              >
                ROLE
              </div>
              <div
                style={{
                  fontFamily: "var(--font-retro)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#000000",
                  letterSpacing: "-0.01em",
                }}
              >
                {about.role}
              </div>
            </div>

            {/* Based In */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--c-darkgray)",
                  marginBottom: "0.35rem",
                }}
              >
                BASED IN
              </div>
              <div
                style={{
                  fontFamily: "var(--font-retro)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#000000",
                  letterSpacing: "-0.01em",
                }}
              >
                {about.basedIn}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .about-meta-grid {
            grid-template-columns: 1fr !important;
          }
          .about-meta-col-left {
            border-right: none !important;
            border-bottom: 2px solid #000000 !important;
          }
        }
      `}</style>
    </section>
  );
}
