import React, { useState, useEffect, useRef } from "react";
import { Search, ArrowRight, Sun, Moon, Copy, FileText, Compass, X } from "lucide-react";
import { playHapticClick } from "../utils/audio";

export function CommandPalette({ isOpen, onClose, onNavigate, onToggleTheme, isDark, onCopyEmail }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = [
    {
      id: "work",
      category: "Navigation",
      title: "View Selected Work",
      shortcut: "G W",
      icon: <Compass size={15} />,
      perform: () => {
        onNavigate("work");
        onClose();
      },
    },
    {
      id: "about",
      category: "Navigation",
      title: "Read About & Philosophy",
      shortcut: "G A",
      icon: <Compass size={15} />,
      perform: () => {
        onNavigate("about");
        onClose();
      },
    },
    {
      id: "skills",
      category: "Navigation",
      title: "Inspect Capabilities & Architecture",
      shortcut: "G S",
      icon: <Compass size={15} />,
      perform: () => {
        onNavigate("skills");
        onClose();
      },
    },
    {
      id: "experience",
      category: "Navigation",
      title: "Review Career Experience",
      shortcut: "G E",
      icon: <Compass size={15} />,
      perform: () => {
        onNavigate("experience");
        onClose();
      },
    },
    {
      id: "contact",
      category: "Navigation",
      title: "Send Message & Direct Contact",
      shortcut: "G C",
      icon: <Compass size={15} />,
      perform: () => {
        onNavigate("contact");
        onClose();
      },
    },
    {
      id: "theme",
      category: "Appearance",
      title: isDark ? "Switch to Paper (Light) Mode" : "Switch to Obsidian (Dark) Mode",
      shortcut: "⌘ T",
      icon: isDark ? <Sun size={15} /> : <Moon size={15} />,
      perform: () => {
        onToggleTheme();
        onClose();
      },
    },
    {
      id: "email",
      category: "Actions",
      title: "Copy Email Address",
      shortcut: "⌘ C",
      icon: <Copy size={15} />,
      perform: () => {
        onCopyEmail();
        onClose();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      playHapticClick(1400, 0.03);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
        playHapticClick(900, 0.02);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
        playHapticClick(900, 0.02);
      } else if (e.key === "Enter" && filtered.length > 0) {
        e.preventDefault();
        playHapticClick(1600, 0.04);
        filtered[selectedIndex]?.perform();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "14vh",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "580px",
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-medium)",
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <Search size={18} style={{ color: "var(--text-tertiary)" }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              fontSize: "0.95rem",
              fontFamily: "var(--font-sans)",
              outline: "none",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-tertiary)",
              padding: "0.2rem 0.45rem",
              borderRadius: "4px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            ESC
          </span>
        </div>

        {/* Action List */}
        <div style={{ maxHeight: "360px", overflowY: "auto", padding: "0.5rem" }}>
          {filtered.length === 0 ? (
            <div
              style={{
                padding: "2.5rem 1rem",
                textAlign: "center",
                color: "var(--text-tertiary)",
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              No matching commands found.
            </div>
          ) : (
            filtered.map((action, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={action.id}
                  onClick={() => {
                    playHapticClick(1600, 0.04);
                    action.perform();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 0.9rem",
                    borderRadius: "8px",
                    background: isSelected ? "var(--bg-tertiary)" : "transparent",
                    cursor: "pointer",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        color: isSelected ? "var(--text-primary)" : "var(--text-tertiary)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {action.icon}
                    </span>
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                        fontWeight: isSelected ? 500 : 400,
                      }}
                    >
                      {action.title}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {action.category}
                    </span>
                    {action.shortcut && (
                      <kbd
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "var(--text-tertiary)",
                          padding: "0.15rem 0.4rem",
                          borderRadius: "4px",
                          border: "1px solid var(--border-subtle)",
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                        }}
                      >
                        {action.shortcut}
                      </kbd>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div
          style={{
            padding: "0.6rem 1.25rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.72rem",
            color: "var(--text-tertiary)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span>Use ↑ ↓ to navigate, Enter to select</span>
          <span>Liquid Navigation</span>
        </div>
      </div>
    </div>
  );
}
