import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Send, Mail, MapPin, Calendar } from "lucide-react";
import { playHapticClick } from "../utils/audio";

export function Contact({ contact, personal, onCopyEmail, copiedEmail, showToast }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    scope: "Product Architecture",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      showToast("Please fill in all required fields", "info");
      return;
    }
    setLoading(true);
    playHapticClick(1400, 0.03);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      playHapticClick(1800, 0.05);
      showToast("Inquiry sent successfully. Speak soon!", "success");
    }, 600);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "7rem",
        paddingBottom: "8rem",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Marker */}
        <div className="section-marker">
          <span>{contact.sectionNumber}</span>
          <span>/</span>
          <span>{contact.sectionTitle}</span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Headline & Direct Contact Channels */}
          <div>
            <h2
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                lineHeight: 1.12,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                textWrap: "balance",
              }}
            >
              {contact.headline}
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "var(--text-secondary)",
                marginBottom: "2.5rem",
                maxWidth: "520px",
              }}
            >
              {contact.subtext}
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div
              className="glass-panel"
              style={{
                padding: "1.5rem 1.75rem",
                marginBottom: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}
                >
                  DIRECT EMAIL DISPATCH
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {contact.email}
                </div>
              </div>

              <button
                onClick={() => {
                  playHapticClick(1600, 0.04);
                  onCopyEmail();
                }}
                className="btn-primary"
                style={{ fontSize: "0.825rem", padding: "0.6rem 1.1rem" }}
              >
                {copiedEmail ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} />}
                <span>{copiedEmail ? "Copied" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social & Reference Channels */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-tertiary)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                NETWORK &amp; CODE PROFILES
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {[
                  { label: "GitHub", href: personal.github },
                  { label: "X / Twitter", href: personal.twitter },
                  { label: "LinkedIn", href: personal.linkedin },
                  { label: "Read.cv", href: personal.readcv },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: "0.825rem", padding: "0.55rem 0.95rem" }}
                    onClick={() => playHapticClick(1200, 0.02)}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Inquiry Form */}
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "16px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  padding: "3rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--text-primary)",
                    color: "var(--bg-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={24} strokeWidth={2.5} />
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 500, color: "var(--text-primary)" }}>
                  Message Transmitted
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "340px" }}>
                  Thank you for reaching out. I’ll review your note and respond within 24–48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", scope: "Product Architecture", message: "" });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: "1rem" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-tertiary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "8px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-tertiary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. elena@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "8px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-tertiary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Engagement Scope
                  </label>
                  <select
                    value={formState.scope}
                    onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "8px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Product Architecture">Product Architecture &amp; Engineering</option>
                    <option value="Design Systems">Design System Craft &amp; Tokens</option>
                    <option value="Performance Audit">Performance &amp; Latency Optimization</option>
                    <option value="Staff Advisory">Staff Advisory / Consulting</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-tertiary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your product, timeline, and vision..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      padding: "0.85rem 1rem",
                      borderRadius: "8px",
                      background: "var(--bg-tertiary)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                      fontSize: "0.95rem",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: "100%", padding: "0.95rem", marginTop: "0.5rem" }}
                >
                  <Send size={15} />
                  <span>{loading ? "Transmitting..." : "Send Direct Inquiry"}</span>
                </button>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--text-tertiary)",
                    textAlign: "center",
                  }}
                >
                  {contact.responseTime}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
