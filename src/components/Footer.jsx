import React from "react";
import { portfolio } from "../data/portfolio";

export function Footer({ footer }) {
  const copyright =
    footer?.copyright ||
    portfolio.footer?.copyright ||
    "© 2026 Vansh. All rights reserved.";
  const role = portfolio.about?.role || "Frontend Developer";
  const basedIn = portfolio.about?.basedIn || "Haryana, India";

  return (
    <footer
      style={{
        borderTop: "2px solid #000000",
        borderBottom: "2px solid #000000",
        backgroundColor: "var(--c-offwhite)",
        paddingTop: "clamp(3.5rem, 6vw, 4.75rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 4.75rem)",
        textAlign: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Top: Role & Location */}
        <div
          className="footer-role-location"
          style={{
            fontFamily: "var(--font-retro)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#000000",
            marginBottom: "clamp(2rem, 4.5vw, 3rem)",
          }}
        >
          <span>{role}</span>
          <span className="footer-dot" style={{ margin: "0 0.5rem", opacity: 0.6 }}>
            ·
          </span>
          <span>{basedIn}</span>
        </div>

        {/* Bottom: Copyright */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
            color: "var(--c-darkgray)",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          {copyright}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .footer-role-location {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }
          .footer-dot {
            display: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
