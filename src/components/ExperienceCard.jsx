import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ExperienceCard({ item }) {
  const hasUrl = Boolean(item.url && item.url.trim() !== "");
  const displayUrl =
    item.displayUrl ||
    (hasUrl ? item.url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "");

  return (
    <article
      style={{
        backgroundColor: "var(--c-white)",
        border: "2px solid #000000",
        boxShadow: "3px 3px 0 #000000",
        borderRadius: "2px",
        overflow: "hidden",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      className="retro-exp-card"
    >
      {/* Top Module Header */}
      <div
        className="retro-window-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "var(--c-lightgray)",
          borderBottom: "2px solid #000000",
          padding: "0.45rem 1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div className="retro-window-dots">
            <span className="retro-dot" />
            <span className="retro-dot empty" />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            {item.number}
          </span>
        </div>

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#000000",
            letterSpacing: "0.05em",
          }}
        >
          {item.duration.toUpperCase()}
        </span>
      </div>

      {/* Module Body */}
      <div
        style={{
          padding: "1.35rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {/* Company Title & Type Tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "0.6rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#000000",
              margin: 0,
            }}
          >
            {hasUrl ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#000000",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
                className="exp-company-link"
              >
                <span>{item.company.toUpperCase()}</span>
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
            ) : (
              <span>{item.company.toUpperCase()}</span>
            )}
          </h3>

          <span className="retro-tag">{item.type}</span>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "var(--c-darkgray)",
            margin: 0,
          }}
        >
          {item.description}
        </p>

        {/* Clickable Website Link (if provided) */}
        {hasUrl && (
          <div style={{ paddingTop: "0.35rem" }}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#000000",
                textDecoration: "none",
                borderBottom: "1.5px solid #000000",
                paddingBottom: "1px",
              }}
              className="exp-url-link"
            >
              <span>{displayUrl}</span>
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        )}
      </div>

      <style>{`
        .retro-exp-card:hover {
          transform: translate(-1px, -1px);
          box-shadow: 4px 4px 0 #000000 !important;
        }
        .exp-company-link:hover {
          text-decoration: underline !important;
        }
        .exp-url-link:hover {
          background-color: #000000;
          color: #FFFFFF !important;
        }
      `}</style>
    </article>
  );
}
