import React from "react";

export function ExperienceItem({ item }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--border)",
        paddingTop: "2.25rem",
        paddingBottom: "2.25rem",
        display: "grid",
        gridTemplateColumns: "1.2fr 1.4fr",
        gap: "clamp(1.5rem, 4vw, 3.5rem)",
        alignItems: "baseline",
      }}
      className="experience-item-grid"
    >
      {/* Left: Period & Location */}
      <div>
        <div
          style={{
            fontSize: "0.85rem",
            fontWeight: 500,
            color: "var(--text)",
            marginBottom: "0.25rem",
          }}
        >
          {item.period}
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--text-faint)" }}>
          {item.location}
        </div>
      </div>

      {/* Right: Company, Role, Description */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "0.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "var(--text)",
              letterSpacing: "-0.015em",
            }}
          >
            {item.company}
          </h3>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            — {item.role}
          </span>
        </div>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "var(--text-muted)",
            maxWidth: "520px",
          }}
        >
          {item.description}
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-item-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}
