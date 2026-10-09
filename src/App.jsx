import React, { useEffect } from "react";
import { portfolio } from "./data/portfolio";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { FindMe } from "./components/FindMe";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "Vansh Portfolio";
  }, []);

  const handleNavigate = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* 1. RETRO RECTANGULAR NAVIGATION BAR */}
      <Navbar
        personal={portfolio.personal}
        onNavigate={handleNavigate}
      />

      {/* Main Single Long Scrolling Flow */}
      <main>
        {/* 2. HERO SECTION */}
        <Hero
          personal={portfolio.personal}
          onNavigate={handleNavigate}
        />

        {/* 3. SELECTED PROJECTS */}
        <Projects
          projects={portfolio.projects}
        />

        {/* 5. EXPERIENCE */}
        <Experience
          experience={portfolio.experience}
          totalExperience={portfolio.totalExperience}
        />

        {/* 6. ABOUT */}
        <About
          about={portfolio.about}
        />

        {/* 7. FIND ME */}
        <FindMe
          socials={portfolio.socials}
        />
      </main>

      {/* 8. FOOTER */}
      <Footer
        footer={portfolio.footer}
      />
    </div>
  );
}
