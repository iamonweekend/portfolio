import React from "react";
import { ProjectRow } from "./ProjectRow";

export function WorkSection({ projects }) {
  return (
    <section id="work" className="site-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title">
          <span>Selected Work</span>
          <span style={{ color: "var(--text-faint)", fontWeight: 400 }}>
            {projects.length} Projects
          </span>
        </div>

        {/* Project Rows */}
        <div>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
