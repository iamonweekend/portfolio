import React from "react";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="site-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span>Experience</span>
          <span style={{ color: "var(--text-faint)", fontWeight: 400 }}>
            Chronology
          </span>
        </div>

        {/* Experience List */}
        <div>
          {experience.map((item, idx) => (
            <ExperienceItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
