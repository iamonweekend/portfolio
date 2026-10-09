import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid var(--border)",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        transition: "background-color 0.25s ease, padding 0.25s ease",
        backgroundColor: hovered ? "var(--bg-hover)" : "transparent",
        paddingLeft: hovered ? "1rem" : "0",
        paddingRight: hovered ? "1rem" : "0",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1.4fr",
          gap: "clamp(1.5rem, 4vw, 3.5rem)",
          alignItems: "baseline",
        }}
        className="project-row-grid"
      >
        {/* Left: Number, Name, Meta */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--text-faint)",
              }}
            >
              {project.number}
            </span>
            <h3
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                color: "var(--text)",
              }}
            >
              {project.name}
            </h3>
          </div>

          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              display: "flex",
              gap: "0.75rem",
              paddingLeft: "2rem",
            }}
          >
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Right: Description & Subtle Arrow Interaction */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.975rem",
              lineHeight: 1.6,
              color: "var(--text-muted)",
              maxWidth: "520px",
            }}
          >
            {project.description}
          </p>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text)",
              opacity: hovered ? 1 : 0.4,
              transform: hovered ? "translate(3px, -3px)" : "translate(0, 0)",
              transition: "transform 0.25s ease, opacity 0.25s ease",
              flexShrink: 0,
              marginTop: "4px",
            }}
          >
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      {/* Subtle Restrained Visual Preview on Hover */}
      {hovered && (
        <div
          style={{
            marginTop: "1.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              color: "var(--text-faint)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {project.previewLabel}
          </span>
          <span style={{ fontSize: "0.78rem", color: "var(--text)" }}>
            View project ↗
          </span>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .project-row-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </article>
  );
}
