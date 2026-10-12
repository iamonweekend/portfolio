import React from "react";
import { ArrowUpRight } from "lucide-react";

export function FindMe({ socials }) {
  return (
    <section id="find-me" style={{ paddingBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 className="retro-section-heading">
            Find Me
          </h2>
        </div>

        {/* Retro Hyperlink Buttons Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "1.25rem",
          }}
          className="find-me-grid"
        >
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "var(--c-white)",
                border: "2px solid #000000",
                boxShadow: "3px 3px 0 #000000",
                padding: "clamp(0.85rem, 2.5vw, 1rem) clamp(1rem, 3vw, 1.4rem)",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#000000",
                transition: "all 0.15s ease",
                borderRadius: "2px",
                minWidth: 0,
                maxWidth: "100%",
              }}
              className="retro-find-me-btn"
            >
              <div style={{ minWidth: 0, overflow: "hidden", flex: 1, marginRight: "0.5rem" }}>
                <div>{social.name}</div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 400,
                    opacity: 0.7,
                    marginTop: "2px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {social.handle}
                </div>
              </div>
              <ArrowUpRight size={18} strokeWidth={2.5} style={{ flexShrink: 0 }} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .find-me-grid {
          min-width: 0;
        }
        .retro-find-me-btn:hover {
          background-color: #000000 !important;
          color: #FFFFFF !important;
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #000000 !important;
        }
        @media (max-width: 480px) {
          .find-me-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 1rem !important;
          }
          .retro-find-me-btn {
            padding: 0.85rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
