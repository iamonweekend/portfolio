import React from "react";
import { ProjectCard } from "./ProjectCard";

export function Projects({ projects }) {
  return (
    <section id="projects" style={{ paddingBottom: "clamp(3.5rem, 7vw, 5.5rem)" }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ marginBottom: "2rem" }}>
          <h2 className="retro-section-heading">
            Projects
          </h2>
        </div>

        {/* Two-Column Browser Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
