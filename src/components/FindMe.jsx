import React from "react";
import { ArrowUpRight } from "lucide-react";

export function FindMe({ socials }) {
  return (
    <section id="find-me" style={{ paddingBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 className="retro-section-heading">
            Find me
          </h2>
        </div>

        {/* Retro Hyperlink Buttons Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.25rem",
          }}
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
                padding: "1rem 1.4rem",
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#000000",
                transition: "all 0.15s ease",
                borderRadius: "2px",
              }}
              className="retro-find-me-btn"
            >
              <div>
                <div>{social.name}</div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 400,
                    opacity: 0.7,
                    marginTop: "2px",
                  }}
                >
                  {social.handle}
                </div>
              </div>
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .retro-find-me-btn:hover {
          background-color: #000000 !important;
          color: #FFFFFF !important;
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #000000 !important;
        }
      `}</style>
    </section>
  );
}
