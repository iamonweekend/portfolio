import React, { useEffect } from "react";
import { Check } from "lucide-react";

export function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 2400);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.85rem",
        borderRadius: "4px",
        backgroundColor: "var(--text)",
        color: "var(--bg)",
        fontSize: "0.78rem",
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.02em",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
      }}
    >
      <Check size={12} strokeWidth={2.5} />
      <span>{message}</span>
    </div>
  );
}
