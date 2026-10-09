import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const projectUrl = project.url || project.link || "#";
  const projectTitle = project.title || project.name;

  // Render high-contrast monochrome retro compositions for project previews when no image is available
  const renderFallbackPreview = (type) => {
    switch (type) {
      case "window":
        return (
          <div
            style={{
              width: "100%",
              height: "190px",
              backgroundColor: "var(--c-offwhite)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.25rem",
              borderBottom: "2px solid #000000",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--c-darkgray)" }}>
              <span>SJWP_APP_V2</span>
              <span>FULL_STACK</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", margin: "auto 0" }}>
              <div style={{ border: "1.5px solid #000", padding: "0.4rem", background: "#FFF", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                &gt; CLIENTS: 140+
              </div>
              <div style={{ border: "1.5px solid #000", padding: "0.4rem", background: "#FFF", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                &gt; UPTIME: 99.9%
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1.5px dashed #000000", paddingTop: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.68rem" }}>
              <span>MULTISERVICES</span>
              <span>DB: POSTGRES</span>
            </div>
          </div>
        );

      case "terminal":
        return (
          <div
            style={{
              width: "100%",
              height: "190px",
              backgroundColor: "var(--c-offwhite)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.25rem",
              borderBottom: "2px solid #000000",
              fontFamily: "var(--font-mono)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--c-darkgray)" }}>
              <span>CANVAS_EXPERIMENT</span>
              <span>FPS: 60</span>
            </div>

            <div style={{ padding: "0.5rem 0", fontSize: "0.75rem", lineHeight: 1.6, color: "#000" }}>
              <p>&gt; load modules... [OK]</p>
              <p>&gt; render typography vector</p>
              <p>&gt; interactive state mounted</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1.5px dashed #000000", paddingTop: "0.5rem", fontSize: "0.68rem" }}>
              <span>WEB_EXPERIMENT</span>
              <span>DOM_CANVAS</span>
            </div>
          </div>
        );

      case "disk":
      default:
        return (
          <div
            style={{
              width: "100%",
              height: "190px",
              backgroundColor: "var(--c-offwhite)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.25rem",
              borderBottom: "2px solid #000000",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--c-darkgray)" }}>
              <span>PROTOTYPE_LAB</span>
              <span>TOOLS // 04</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "auto 0" }}>
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  border: "2px solid #000",
                  transform: "rotate(45deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFF",
                }}
              >
                <div style={{ width: "30px", height: "30px", border: "1.5px dashed #000" }} />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1.5px dashed #000000", paddingTop: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.68rem" }}>
              <span>ALGORITHMIC</span>
              <span>OPEN_SOURCE</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article
      style={{
        backgroundColor: "var(--c-white)",
        border: "2.5px solid #000000",
        boxShadow: "4px 4px 0 #000000",
        borderRadius: "2px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      className="project-browser-card"
    >
      {/* Top Retro Browser Bar (Clickable) */}
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="retro-window-header">
          <div className="retro-window-dots">
            <span className="retro-dot" />
            <span className="retro-dot empty" />
            <span className="retro-dot empty" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ opacity: 0.6 }}>{project.number}</span>
            <span>{project.filename}</span>
          </div>
        </div>
      </a>

      {/* Project Visual Preview Area: Real monochrome screenshot or fallback (Clickable) */}
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          textDecoration: "none",
          overflow: "hidden",
        }}
      >
        {project.image && !imgError ? (
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "var(--c-offwhite)",
              borderBottom: "2px solid #000000",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: project.imageType === "logo" ? "1.5rem" : "0",
            }}
          >
            <img
              src={project.image}
              alt={projectTitle}
              onError={() => setImgError(true)}
              style={{
                width: project.imageType === "logo" ? "auto" : "100%",
                maxWidth: project.imageType === "logo" ? "75%" : "100%",
                height: project.imageType === "logo" ? "auto" : "100%",
                maxHeight: project.imageType === "logo" ? "130px" : "100%",
                objectFit: project.imageType === "logo" ? "contain" : "cover",
                objectPosition: project.imageType === "logo" ? "center" : "top center",
                filter: "grayscale(100%) contrast(120%) brightness(96%)",
                display: "block",
                transition: "transform 0.25s ease",
              }}
              className="project-preview-img"
            />
          </div>
        ) : (
          renderFallbackPreview(project.previewType)
        )}
      </a>

      {/* Content Area */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* Category Tag, Number & Year */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.6rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                {project.number}
              </span>
              <span className="retro-tag">{project.category}</span>
            </div>

            {project.year && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--c-darkgray)",
                }}
              >
                {project.year}
              </span>
            )}
          </div>

          {/* Project Title (Clickable link) */}
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#000000",
              marginBottom: "0.6rem",
            }}
          >
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {projectTitle}
            </a>
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.55,
              color: "var(--c-darkgray)",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* View Project Button (Clickable, opens in new tab) */}
        <div style={{ paddingTop: "0.5rem" }}>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="retro-btn"
            style={{
              fontSize: "0.85rem",
              padding: "0.65rem 1.1rem",
              width: "100%",
              textDecoration: "none",
            }}
          >
            <span>VIEW PROJECT</span>
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      <style>{`
        .project-browser-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #000000 !important;
        }
        .project-browser-card:hover .project-preview-img {
          transform: scale(1.03);
        }
      `}</style>
    </article>
  );
}
