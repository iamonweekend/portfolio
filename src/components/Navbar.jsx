import React from "react";

export function Navbar({ onNavigate }) {
  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "find-me", label: "Find Me" },
  ];

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "clamp(1.75rem, 3.5vw, 2.5rem)",
        paddingBottom: "clamp(1rem, 2.5vw, 1.75rem)",
        width: "100%",
      }}
    >
      <nav
        style={{
          backgroundColor: "var(--c-lightgray)",
          border: "2px solid #000000",
          boxShadow: "3px 3px 0 #000000",
          borderRadius: "0px",
          display: "inline-flex",
          alignItems: "stretch",
          overflow: "hidden",
          maxWidth: "calc(100% - 2rem)",
        }}
        className="retro-nav-box"
      >
        {navItems.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate(item.id);
              }
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.65rem clamp(0.75rem, 2.2vw, 1.4rem)",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)",
              fontFamily: "var(--font-retro)",
              color: "#000000",
              textDecoration: "none",
              borderRight: idx < navItems.length - 1 ? "2px solid #000000" : "none",
              transition: "background-color 0.12s ease, color 0.12s ease",
              cursor: "pointer",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
            className="retro-nav-item"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <style>{`
        .retro-nav-item:hover {
          background-color: #000000 !important;
          color: #FFFFFF !important;
        }
        @media (max-width: 480px) {
          .retro-nav-item {
            padding: 0.55rem 0.65rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </header>
  );
}
