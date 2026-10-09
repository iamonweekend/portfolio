import React, { useState } from "react";
import { CheckCircle, Search, Filter } from "lucide-react";
import { playHapticClick } from "../utils/audio";

export function Skills({ skills }) {
  const [filterQuery, setFilterQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = skills.categories;

  return (
    <section
      id="skills"
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
            <span>{skills.sectionNumber}</span>
            <span>/</span>
            <span>{skills.sectionTitle}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.035em",
                  color: "var(--text-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                Technical capabilities &amp; engineering ethos.
              </h2>
              <p style={{ maxWidth: "600px", fontSize: "1.05rem", color: "var(--text-secondary)" }}>
                {skills.intro}
              </p>
            </div>

            {/* Quick Filter Search */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.5rem 0.9rem",
                borderRadius: "8px",
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
                width: "240px",
              }}
            >
              <Search size={14} style={{ color: "var(--text-tertiary)" }} />
              <input
                type="text"
                placeholder="Filter capabilities..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "0.825rem",
                  fontFamily: "var(--font-sans)",
                  color: "var(--text-primary)",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Matrix */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {categories.map((cat, idx) => {
            const matchingItems = cat.items.filter((item) =>
              item.toLowerCase().includes(filterQuery.toLowerCase())
            );

            return (
              <div
                key={idx}
                className="interactive-hover"
                style={{
                  padding: "2rem",
                  borderRadius: "14px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-tertiary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      color: "var(--text-tertiary)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {cat.desc}
                  </p>

                  {/* List of items */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    {matchingItems.length === 0 ? (
                      <li style={{ fontSize: "0.8rem", color: "var(--text-tertiary)", fontStyle: "italic" }}>
                        No matching item
                      </li>
                    ) : (
                      matchingItems.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            fontSize: "0.9rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <span
                            style={{
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              backgroundColor: "var(--text-tertiary)",
                              flexShrink: 0,
                            }}
                          />
                          <span>{item}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <div
                  style={{
                    paddingTop: "1.5rem",
                    marginTop: "1.5rem",
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-tertiary)",
                  }}
                >
                  <span>STATUS: PRODUCTION</span>
                  <span>{cat.items.length} SKILLS</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
