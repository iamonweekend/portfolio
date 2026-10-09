import React, { useState, useRef } from "react";
import { Sparkles, Sliders, Volume2, Shield, Eye, Layers } from "lucide-react";
import { playHapticClick } from "../utils/audio";

export function Lab({ lab }) {
  const [blurVal, setBlurVal] = useState(24);
  const [specularOpacity, setSpecularOpacity] = useState(15);
  const [pointerPos, setPointerPos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointerPos({ x, y });
  };

  return (
    <section
      id="lab"
      style={{
        paddingTop: "7rem",
        paddingBottom: "7rem",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="section-marker">
            <span>LAB</span>
            <span>/</span>
            <span>INTERACTION CRAFT</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "1.5rem" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 500,
                letterSpacing: "-0.035em",
                color: "var(--text-primary)",
              }}
            >
              Liquid glass &amp; tactile mechanics.
            </h2>
            <p style={{ maxWidth: "460px", fontSize: "1rem", color: "var(--text-secondary)" }}>
              {lab.subtitle}
            </p>
          </div>
        </div>

        {/* Interactive Lab Workbench */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "2.5rem",
            alignItems: "stretch",
          }}
          className="lab-grid"
        >
          {/* Interactive Specimen Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => playHapticClick(1200, 0.02)}
            style={{
              minHeight: "360px",
              borderRadius: "18px",
              padding: "2.5rem",
              background: `radial-gradient(circle at ${pointerPos.x}% ${pointerPos.y}%, rgba(255, 255, 255, ${specularOpacity / 100}) 0%, rgba(20, 20, 24, 0.6) 70%)`,
              backdropFilter: `blur(${blurVal}px) saturate(160%)`,
              WebkitBackdropFilter: `blur(${blurVal}px) saturate(160%)`,
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, ${specularOpacity / 100 + 0.05}), 0 25px 50px -15px rgba(0, 0, 0, 0.7)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.2s ease",
            }}
          >
            {/* Specimen Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  color: "var(--text-tertiary)",
                  textTransform: "uppercase",
                }}
              >
                SPECIMEN / LIQUID GLASS SHADER
              </span>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-tertiary)",
                }}
              >
                X: {Math.round(pointerPos.x)}% · Y: {Math.round(pointerPos.y)}%
              </div>
            </div>

            {/* Specimen Statement */}
            <div style={{ margin: "2rem 0" }}>
              <div
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.25,
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Tangible digital materiality.
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "420px" }}>
                Hover to steer the dynamic specular highlight across the glass surface. Pure CSS shaders without heavy 3D engine overhead.
              </p>
            </div>

            {/* Specimen Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "1.25rem",
                borderTop: "1px solid var(--border-subtle)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--text-tertiary)",
              }}
            >
              <span>BACKDROP: {blurVal}PX</span>
              <span>HIGHLIGHT: {specularOpacity}%</span>
              <span>LATENCY: ZERO</span>
            </div>
          </div>

          {/* Interactive Controls Panel */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "16px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.75rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-tertiary)",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                PHYSICAL TUNING CONTROLS
              </div>

              {/* Slider 1: Backdrop Blur */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-primary)" }}>Backdrop Blur</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                    {blurVal}px
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="48"
                  value={blurVal}
                  onChange={(e) => {
                    setBlurVal(Number(e.target.value));
                    playHapticClick(700 + Number(e.target.value) * 15, 0.015);
                  }}
                  style={{ width: "100%", accentColor: "var(--text-primary)", cursor: "pointer" }}
                />
              </div>

              {/* Slider 2: Specular Highlight Intensity */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-primary)" }}>Specular Highlight Opacity</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                    {specularOpacity}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={specularOpacity}
                  onChange={(e) => {
                    setSpecularOpacity(Number(e.target.value));
                    playHapticClick(900 + Number(e.target.value) * 20, 0.015);
                  }}
                  style={{ width: "100%", accentColor: "var(--text-primary)", cursor: "pointer" }}
                />
              </div>

              {/* Spring Button Demo */}
              <div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                  Tactile Spring Trigger
                </div>
                <button
                  onClick={() => playHapticClick(1600, 0.05)}
                  className="btn-primary"
                  style={{ width: "100%", padding: "0.85rem" }}
                >
                  <Sparkles size={15} />
                  <span>Test Tactile Spring Trigger</span>
                </button>
              </div>
            </div>

            <p style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", lineHeight: 1.5 }}>
              Engineered with zero third-party canvas or 3D bloat. Clean modern CSS custom properties bound directly to pointer coordinate events.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .lab-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
