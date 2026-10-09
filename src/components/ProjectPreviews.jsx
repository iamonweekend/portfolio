import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Sliders, Layers, Eye, Activity, Box } from "lucide-react";
import { playHapticClick } from "../utils/audio";

/**
 * 1. Aura Spatial OS Preview Mockup
 */
export function AuraDesktopPreview() {
  const [activeTab, setActiveTab] = useState("editor");

  return (
    <div
      style={{
        width: "100%",
        height: "380px",
        backgroundColor: "var(--bg-secondary)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--border-subtle)",
        position: "relative",
        userSelect: "none",
      }}
    >
      {/* OS Header Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.6rem 1rem",
          background: "rgba(0, 0, 0, 0.4)",
          borderBottom: "1px solid var(--border-subtle)",
          fontSize: "0.72rem",
          fontFamily: "var(--font-mono)",
          color: "var(--text-tertiary)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#444" }} />
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#555" }} />
            <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#666" }} />
          </div>
          <span style={{ marginLeft: "0.5rem", color: "var(--text-secondary)" }}>aura://spatial-workspace</span>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span>60 FPS</span>
          <span>GPU ACCEL</span>
        </div>
      </div>

      {/* OS Canvas with Spatial Windows */}
      <div
        style={{
          flex: 1,
          padding: "1.25rem",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "1rem",
        }}
      >
        {/* Window 1: Spatial Code Editor */}
        <div
          style={{
            background: "rgba(10, 10, 12, 0.75)",
            backdropFilter: "blur(12px)",
            borderRadius: "8px",
            border: "1px solid var(--border-medium)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "0.45rem 0.75rem",
              background: "rgba(255, 255, 255, 0.03)",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.68rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-tertiary)",
            }}
          >
            <span>WindowMatrix.ts</span>
            <span>TypeScript</span>
          </div>
          <div
            style={{
              padding: "0.85rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              overflow: "hidden",
            }}
          >
            <p><span style={{ color: "#888" }}>const</span> spatialTransform = (</p>
            <p style={{ paddingLeft: "1rem" }}>node: <span style={{ color: "var(--text-primary)" }}>SpatialNode</span>,</p>
            <p style={{ paddingLeft: "1rem" }}>velocity: <span style={{ color: "var(--text-primary)" }}>Vector3</span></p>
            <p>): <span style={{ color: "#aaa" }}>Matrix4</span> =&gt; &#123;</p>
            <p style={{ paddingLeft: "1rem", color: "var(--text-primary)" }}>return matrix.compose(node.pos, velocity);</p>
            <p>&#125;;</p>
          </div>
        </div>

        {/* Window 2: Physics / Canvas Inspector */}
        <div
          style={{
            background: "rgba(10, 10, 12, 0.75)",
            backdropFilter: "blur(12px)",
            borderRadius: "8px",
            border: "1px solid var(--border-subtle)",
            padding: "0.85rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)", marginBottom: "0.5rem" }}>
              SPATIAL MATRIX 3D
            </div>
            <div
              style={{
                height: "110px",
                border: "1px dashed var(--border-subtle)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid var(--text-primary)",
                  borderRadius: "6px",
                  transform: "rotate(15deg) skew(-10deg)",
                  transition: "transform 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  fontFamily: "var(--font-mono)",
                }}
              >
                XYZ
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
            <span>DELTA: 0.001ms</span>
            <span>NODES: 12</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Dock */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          padding: "5px 12px",
          borderRadius: "9999px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        {["Terminal", "Editor", "Canvas", "Metrics"].map((item, i) => (
          <div
            key={i}
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "6px",
              background: i === 0 ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.65rem",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {item[0]}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 2. Synthesis Variable Typography Preview Mockup
 */
export function TypographySpecimenPreview() {
  const [weight, setWeight] = useState(500);
  const [slant, setSlant] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "380px",
        backgroundColor: "var(--bg-secondary)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--border-subtle)",
        padding: "1.5rem",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Specimen Controls Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          paddingBottom: "1.25rem",
          borderBottom: "1px solid var(--border-subtle)",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Sliders size={14} style={{ color: "var(--text-tertiary)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-primary)" }}>
            VARIABLE AXES WORKBENCH
          </span>
        </div>

        {/* Sliders */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-tertiary)" }}>
              wght: {weight}
            </span>
            <input
              type="range"
              min="100"
              max="900"
              step="50"
              value={weight}
              onChange={(e) => {
                setWeight(Number(e.target.value));
                playHapticClick(800 + Number(e.target.value), 0.015);
              }}
              style={{
                width: "90px",
                accentColor: "var(--text-primary)",
                cursor: "pointer",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-tertiary)" }}>
              slnt: {slant}°
            </span>
            <input
              type="range"
              min="-12"
              max="0"
              step="1"
              value={slant}
              onChange={(e) => {
                setSlant(Number(e.target.value));
                playHapticClick(1000, 0.015);
              }}
              style={{
                width: "70px",
                accentColor: "var(--text-primary)",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>

      {/* Live Specimen View Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.25rem",
        }}
      >
        <div
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
            fontWeight: weight,
            fontStyle: slant < 0 ? "italic" : "normal",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
            transition: "font-weight 0.1s ease, font-style 0.1s ease",
            wordBreak: "break-word",
          }}
        >
          Form follows function.
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            color: "var(--text-tertiary)",
            letterSpacing: "0.06em",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            paddingTop: "1rem",
            borderTop: "1px dashed var(--border-subtle)",
          }}
        >
          <span>ABCDEFGH 0123456789</span>
          <span>OPTICAL SIZING: AUTO</span>
          <span>HINTING: SUBPIXEL</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Velocity Real-Time Telemetry Terminal Preview Mockup
 */
export function TelemetryTerminalPreview() {
  const [tick, setTick] = useState(248);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev > 300 ? 230 : prev + Math.floor(Math.random() * 7 - 3)));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "380px",
        backgroundColor: "var(--bg-secondary)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--border-subtle)",
        padding: "1.25rem",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Telemetry Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--border-subtle)",
          fontSize: "0.72rem",
          color: "var(--text-tertiary)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Activity size={14} style={{ color: "var(--text-primary)" }} />
          <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>FEED: L2_ORDER_BOOK_DIRECT</span>
        </div>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <span>LATENCY: 4.12ms</span>
          <span>QUEUE: 0</span>
        </div>
      </div>

      {/* Live Sparkline Area */}
      <div style={{ flex: 1, padding: "1.25rem 0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginBottom: "0.2rem" }}>
              AGGREGATED THROUGHPUT
            </div>
            <div style={{ fontSize: "1.75rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
              52,840 <span style={{ fontSize: "0.85rem", fontWeight: 400, color: "var(--text-tertiary)" }}>msg/s</span>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", marginBottom: "0.2rem" }}>
              LAST PRICE TICK
            </div>
            <div style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}>
              {tick}.45 USD
            </div>
          </div>
        </div>

        {/* Minimal SVG Sparkline Wire */}
        <div style={{ width: "100%", height: "80px", margin: "1rem 0" }}>
          <svg viewBox="0 0 500 80" style={{ width: "100%", height: "100%", overflow: "visible" }}>
            <path
              d="M0,45 Q50,20 100,50 T200,30 T300,55 T400,25 T500,38"
              fill="none"
              stroke="var(--text-primary)"
              strokeWidth="1.8"
            />
            {/* Soft grid guides */}
            <line x1="0" y1="20" x2="500" y2="20" stroke="var(--border-subtle)" strokeDasharray="3 3" />
            <line x1="0" y1="60" x2="500" y2="60" stroke="var(--border-subtle)" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Telemetry Status Bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.7rem",
            color: "var(--text-tertiary)",
          }}
        >
          <div>BUFFER: 0.04%</div>
          <div>OFFSCREEN CANVAS: OK</div>
          <div>GC PAUSE: 0.00ms</div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Mono Atelier & Objects Commerce Preview Mockup
 */
export function MonoCommercePreview() {
  const [viewAngle, setViewAngle] = useState("isometric");

  return (
    <div
      style={{
        width: "100%",
        height: "380px",
        backgroundColor: "var(--bg-secondary)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--border-subtle)",
        padding: "1.5rem",
        position: "relative",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Spec Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "1rem",
          borderBottom: "1px solid var(--border-subtle)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--text-tertiary)",
        }}
      >
        <span>COLLECTION 04 / OBJECT N° 08</span>
        <span>EDITION OF 25</span>
      </div>

      {/* Architectural Form Visualizer */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          padding: "1rem 0",
        }}
      >
        {/* Minimal Wireframe Geometry */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "130px",
              height: "130px",
              border: "1px solid var(--text-primary)",
              borderRadius: "4px",
              transform: viewAngle === "isometric" ? "rotate(45deg) skew(-15deg, -15deg)" : "none",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                border: "1px dashed var(--border-medium)",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Object Spec Sheet */}
        <div style={{ width: "220px", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              MATERIAL SPEC
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500 }}>
              Bead-Blasted Titanium
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
              DIMENSIONS
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              420 × 280 × 850 mm
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <button
              onClick={() => {
                setViewAngle("isometric");
                playHapticClick(1100, 0.03);
              }}
              style={{
                padding: "0.3rem 0.6rem",
                borderRadius: "4px",
                fontSize: "0.68rem",
                fontFamily: "var(--font-mono)",
                background: viewAngle === "isometric" ? "var(--text-primary)" : "transparent",
                color: viewAngle === "isometric" ? "var(--bg-primary)" : "var(--text-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              ISO
            </button>
            <button
              onClick={() => {
                setViewAngle("ortho");
                playHapticClick(1100, 0.03);
              }}
              style={{
                padding: "0.3rem 0.6rem",
                borderRadius: "4px",
                fontSize: "0.68rem",
                fontFamily: "var(--font-mono)",
                background: viewAngle === "ortho" ? "var(--text-primary)" : "transparent",
                color: viewAngle === "ortho" ? "var(--bg-primary)" : "var(--text-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
