import React from "react";
import { ArrowUpRight } from "lucide-react";

export function QuickLinks({ links, onNavigate }) {
  return (
    <section style={{ paddingBottom: "clamp(3rem, 6vw, 4.5rem)" }}>
      <div className="container">
        {/* Section Heading */}
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            marginBottom: "1rem",
            color: "var(--c-black)",
          }}
        >
          Quick links
        </h2>

        {/* Group of Retro Bordered Link Boxes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.targetId}
              href={`#${link.targetId}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.targetId);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "var(--c-white)",
                border: "2px solid #000000",
                boxShadow: "3px 3px 0 #000000",
                padding: "0.85rem 1.15rem",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#000000",
                transition: "all 0.15s ease",
                cursor: "pointer",
                borderRadius: "2px",
              }}
              className="quick-link-box"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={17} strokeWidth={2.5} className="arrow-icon" />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .quick-link-box:hover {
          background-color: #000000 !important;
          color: #FFFFFF !important;
          transform: translate(2px, 2px);
          box-shadow: 1px 1px 0 #000000 !important;
        }
        .quick-link-box:hover .arrow-icon {
          transform: translate(2px, -2px);
          transition: transform 0.15s ease;
        }
      `}</style>
    </section>
  );
}
