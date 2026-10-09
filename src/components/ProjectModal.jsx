import React, { useEffect } from "react";
import { X, ExternalLink, Code2, ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";
import { playHapticClick } from "../utils/audio";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9990,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "760px",
          height: "100vh",
          backgroundColor: "var(--bg-primary)",
          borderLeft: "1px solid var(--border-medium)",
          boxShadow: "-20px 0 50px rgba(0, 0, 0, 0.7)",
          display: "flex",
          flexDirection: "column",
          animation: "slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          overflowY: "auto",
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: "var(--glass-bg)",
            backdropFilter: "var(--glass-blur)",
            WebkitBackdropFilter: "var(--glass-blur)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "1.25rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-tertiary)",
                letterSpacing: "0.1em",
              }}
            >
              PROJECT {project.index} · {project.year}
            </span>
          </div>

          <button
            onClick={() => {
              playHapticClick(1200, 0.03);
              onClose();
            }}
            aria-label="Close modal"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--button-secondary-bg)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-primary)",
              transition: "transform 0.15s ease",
            }}
            className="interactive-hover"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "2.5rem 2rem 4rem 2rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Title & Tagline */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              {project.category}
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 500,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                color: "var(--text-primary)",
                marginBottom: "1rem",
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.6, color: "var(--text-secondary)" }}>
              {project.tagline}
            </p>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              onClick={() => playHapticClick(1500, 0.04)}
            >
              <span>Visit Live Experience</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              onClick={() => playHapticClick(1400, 0.03)}
            >
              <Code2 size={15} />
              <span>Inspect Source Code</span>
            </a>
          </div>

          {/* Key Metrics Ribbon */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              padding: "1.5rem",
              borderRadius: "12px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {project.metrics.map((metric, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <CheckCircle2 size={16} style={{ color: "var(--text-primary)", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                  {metric}
                </span>
              </div>
            ))}
          </div>

          {/* Case Study Section: Challenge */}
          <div>
            <h3
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                marginBottom: "0.75rem",
              }}
            >
              01 / THE CHALLENGE
            </h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
              {project.caseStudy.challenge}
            </p>
          </div>

          {/* Case Study Section: Architecture & Solution */}
          <div>
            <h3
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                marginBottom: "0.75rem",
              }}
            >
              02 / TECHNICAL ARCHITECTURE
            </h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
              {project.caseStudy.architecture}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h3
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                marginBottom: "1rem",
              }}
            >
              03 / SYSTEM STACK
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="mono-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Section: Impact & Outcome */}
          <div>
            <h3
              style={{
                fontSize: "0.8rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                marginBottom: "0.75rem",
              }}
            >
              04 / VERIFIED IMPACT
            </h3>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-secondary)" }}>
              {project.caseStudy.outcome}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
