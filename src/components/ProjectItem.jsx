import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectItem({ project, index }) {
  const [hovered, setHovered] = useState(false);

  // Render bespoke editorial preview artwork for each specimen
  const renderPreviewGraphic = (type) => {
    switch (type) {
      case "typography":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f4f2ec",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2rem",
              fontFamily: "var(--font-sans)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>{project.preview.figure}</span>
              <span>KERNING: METRIC · AXIS: OPTICAL</span>
            </div>
            
            <div style={{ margin: "2rem 0" }}>
              <div
                style={{
                  fontSize: "clamp(3rem, 6vw, 4.75rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  color: "var(--text-primary)",
                  transition: "letter-spacing 0.4s ease",
                  letterSpacing: hovered ? "-0.02em" : "-0.04em",
                }}
              >
                Aa Bb Gg
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.75rem" }}>
                120PT GROTESK · CONDENSED SPECIMEN
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border-medium)", paddingTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>SUB-PIXEL RENDER</span>
              <span>0.00 GC LATENCY</span>
            </div>
          </div>
        );

      case "monograph":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f4f2ec",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2rem",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>{project.preview.figure}</span>
              <span>PROPORTION: 1:1.618</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "180px" }}>
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  border: "1px solid var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: hovered ? "rotate(8deg) scale(1.04)" : "rotate(0deg)",
                  transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div style={{ width: "90px", height: "90px", border: "1px dashed var(--border-medium)" }} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border-medium)", paddingTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>ANODIZED STEEL</span>
              <span>EDITION 25</span>
            </div>
          </div>
        );

      case "terminal":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f4f2ec",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>{project.preview.figure}</span>
              <span>BUFFER: ACTIVE</span>
            </div>

            <div style={{ padding: "1.5rem 0", fontSize: "0.78rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
              <p style={{ color: "var(--text-primary)", fontWeight: 700 }}>$ chrono --init --silent</p>
              <p>&gt; load buffer memory: 8.4MB [OK]</p>
              <p>&gt; telemetry render loop: 60fps [SYNC]</p>
              <p>&gt; zero layout shift verified</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border-medium)", paddingTop: "1rem", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>LOCAL PERSISTENCE</span>
              <span>SUB-10MS</span>
            </div>
          </div>
        );

      case "cartography":
      default:
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#f4f2ec",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>{project.preview.figure}</span>
              <span>VECTOR ISOLINES</span>
            </div>

            <div style={{ height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 320 120" style={{ width: "100%", height: "100%", stroke: "var(--text-primary)", fill: "none", strokeWidth: 1.2 }}>
                <path d="M10,60 Q80,20 160,70 T310,50" />
                <path d="M10,80 Q90,40 170,90 T310,70" strokeDasharray="3 3" />
                <path d="M10,40 Q70,10 150,50 T310,30" opacity="0.4" />
              </svg>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--border-medium)", paddingTop: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              <span>1,420 STREAMLINES</span>
              <span>CANVAS 2D</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1.4fr",
        gap: "clamp(2rem, 5vw, 4.5rem)",
        alignItems: "stretch",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderBottom: "1px solid var(--border-medium)",
        transition: "border-color 0.3s ease",
      }}
      className="project-item-grid"
    >
      {/* Left Column: Information, Metadata & Description */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: hovered ? "translateX(4px)" : "none",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div>
          {/* Top meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.25rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ color: "var(--text-primary)", fontWeight: 700 }}>
              {project.number}
            </span>
            <span>—</span>
            <span>{project.category}</span>
            <span>/</span>
            <span>{project.year}</span>
          </div>

          {/* Project Name */}
          <h3
            style={{
              fontSize: "clamp(1.85rem, 3.2vw, 2.75rem)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
            }}
          >
            {project.name}
          </h3>

          {/* Role identifier */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "var(--text-secondary)",
              letterSpacing: "0.06em",
              marginBottom: "1.5rem",
            }}
          >
            ROLE: {project.role}
          </div>

          {/* Narrative Description */}
          <p
            style={{
              fontSize: "1.025rem",
              lineHeight: 1.68,
              color: "var(--text-secondary)",
              marginBottom: "2rem",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.04em",
                  padding: "0.25rem 0.55rem",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "2px",
                  color: "var(--text-secondary)",
                  background: "transparent",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* View Project Indicator Link */}
        <div>
          <a
            href={project.link}
            className="editorial-link"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span>VIEW PROJECT</span>
            <ArrowUpRight
              size={14}
              style={{
                transform: hovered ? "translate(3px, -3px)" : "none",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </a>
        </div>
      </div>

      {/* Right Column: Visual Preview Area */}
      <div
        style={{
          position: "relative",
          border: "1px solid var(--border-strong)",
          borderRadius: "4px",
          overflow: "hidden",
          minHeight: "340px",
          transform: hovered ? "scale(1.02)" : "scale(1)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease",
          boxShadow: hovered ? "0 18px 36px -12px rgba(10, 10, 10, 0.08)" : "none",
        }}
      >
        {renderPreviewGraphic(project.preview.specimenType)}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .project-item-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </article>
  );
}
