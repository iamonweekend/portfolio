import React, { useState } from "react";
import { Sliders, X, Check, Copy, RotateCcw } from "lucide-react";
import { playHapticClick } from "../utils/audio";

export function CustomizerDrawer({
  personal,
  hero,
  onUpdatePersonal,
  onUpdateHero,
  onReset,
  showToast,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyConfig = () => {
    const configCode = JSON.stringify({ personal, hero }, null, 2);
    navigator.clipboard.writeText(configCode);
    playHapticClick(1800, 0.05);
    showToast("Configuration copied as JSON to clipboard!", "success");
  };

  return (
    <>
      {/* Floating Trigger Chip at Bottom Left */}
      <div
        style={{
          position: "fixed",
          bottom: "1.75rem",
          left: "1.75rem",
          zIndex: 850,
        }}
      >
        <button
          onClick={() => {
            playHapticClick(1400, 0.03);
            setIsOpen(!isOpen);
          }}
          className="glass-panel"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.55rem 0.95rem",
            borderRadius: "9999px",
            color: "var(--text-primary)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-mono)",
            cursor: "pointer",
            border: "1px solid var(--border-medium)",
          }}
        >
          <Sliders size={13} />
          <span>Quick Customize Placeholders</span>
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "4.5rem",
            left: "1.75rem",
            zIndex: 851,
            width: "360px",
            maxWidth: "calc(100vw - 3.5rem)",
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-medium)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
            borderRadius: "14px",
            padding: "1.5rem",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                Personalize Information
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                Live updates preview in real time
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: "var(--text-tertiary)" }}
              aria-label="Close customizer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Form Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxHeight: "380px", overflowY: "auto", paddingRight: "4px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
                YOUR NAME [YOUR NAME]
              </label>
              <input
                type="text"
                value={personal.name}
                onChange={(e) => onUpdatePersonal({ name: e.target.value })}
                style={{
                  padding: "0.55rem 0.75rem",
                  borderRadius: "6px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
                YOUR ROLE [YOUR ROLE]
              </label>
              <input
                type="text"
                value={personal.role}
                onChange={(e) => onUpdatePersonal({ role: e.target.value })}
                style={{
                  padding: "0.55rem 0.75rem",
                  borderRadius: "6px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
                EYEBROW LABEL
              </label>
              <input
                type="text"
                value={personal.eyebrow}
                onChange={(e) => onUpdatePersonal({ eyebrow: e.target.value })}
                style={{
                  padding: "0.55rem 0.75rem",
                  borderRadius: "6px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
                LOCATION [LOCATION]
              </label>
              <input
                type="text"
                value={personal.location}
                onChange={(e) => onUpdatePersonal({ location: e.target.value })}
                style={{
                  padding: "0.55rem 0.75rem",
                  borderRadius: "6px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-tertiary)" }}>
                HERO INTRO PARAGRAPH
              </label>
              <textarea
                rows={3}
                value={hero.paragraph}
                onChange={(e) => onUpdateHero({ paragraph: e.target.value })}
                style={{
                  padding: "0.55rem 0.75rem",
                  borderRadius: "6px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-sans)",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>
          </div>

          {/* Footer Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1.25rem",
              paddingTop: "0.75rem",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <button
              onClick={() => {
                onReset();
                playHapticClick(1000, 0.02);
                showToast("Reset to default placeholders", "info");
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.72rem",
                color: "var(--text-tertiary)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <RotateCcw size={12} />
              <span>Reset</span>
            </button>

            <button
              onClick={handleCopyConfig}
              className="btn-secondary"
              style={{ fontSize: "0.75rem", padding: "0.4rem 0.75rem" }}
            >
              <Copy size={13} />
              <span>Export JSON</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
