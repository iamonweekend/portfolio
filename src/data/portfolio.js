/**
 * VANSH — PORTFOLIO DATA ARCHITECTURE
 * 
 * Centralized data store for all personal information,
 * projects, experience, and links.
 */

export const portfolio = {
  personal: {
    name: "VANSH",
    fullName: "Vansh",
    greeting: "Hello.",
    intro: "I'm Vansh.",
    bio: "I'm a developer who likes building websites, experimenting with technology, and making things on the internet.",
    location: "Based in India",
    focus: "Building for the web",
    interests: "Interested in technology & design",
    email: "iamonweekend@gmail.com",
    year: "2026",
  },

  quickLinks: [
    { label: "Projects", targetId: "projects" },
    { label: "Experience", targetId: "experience" },
    { label: "About", targetId: "about" },
    { label: "Find Me", targetId: "find-me" },
  ],

  projects: [
    {
      id: 1,
      number: "01",
      filename: "bambukatharyanvi.com",
      title: "BambukatHaryanvi",
      name: "BambukatHaryanvi",
      category: "Website / Web Development",
      year: "2026",
      description: "A website created for Bambukat Haryanvi.",
      url: "https://bambukatharyanvi.com/",
      link: "https://bambukatharyanvi.com/",
      image: "/bambukat-logo.png",
      imageType: "logo",
    },
    {
      id: 2,
      number: "02",
      filename: "sjwpmultiservices.com",
      title: "SJWPMULTISERVICES",
      name: "SJWPMULTISERVICES",
      category: "Website / Web Development",
      year: "2026",
      description: "A modern business website developed for SJWP Multiservices.",
      url: "https://sjwpmultiservices.com/",
      link: "https://sjwpmultiservices.com/",
      image: "/sjwp-logo.png",
      imageType: "logo",
    },
  ],

  totalExperience: "2 YEARS OF BUILDING ON THE WEB.",
  experience: [
    {
      id: 1,
      number: "01",
      company: "Freelance",
      duration: "1 Year",
      type: "Freelance / Independent Work",
      description: "Worked independently on websites, frontend development, design, and digital projects for clients and personal projects.",
      url: "",
    },
    {
      id: 2,
      number: "02",
      company: "BambukatHaryanvi",
      duration: "6 Months",
      type: "Web Development / Digital Work",
      description: "Worked on the BambukatHaryanvi website and contributed to its web development and digital presence.",
      url: "https://bambukatharyanvi.com/",
      displayUrl: "bambukatharyanvi.com",
    },
    {
      id: 3,
      number: "03",
      company: "SJWP Multiservices",
      duration: "6 Months",
      type: "Web Development / Digital Work",
      description: "Worked on web development and digital projects for SJWP Multiservices.",
      url: "https://sjwpmultiservices.com/",
      displayUrl: "sjwpmultiservices.com",
    },
  ],

  about: {
    title: "About",
    bio: "I'm Vansh, a Frontend Developer based in Haryana. I build websites, web apps, and AI/ML projects, with a focus on creating simple and useful digital experiences.",
    role: "Frontend Developer",
    basedIn: "Haryana, India",
  },

  socials: [
    { name: "GitHub", url: "https://github.com/iamonweekend", handle: "github.com/iamonweekend" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/vansh" },
    { name: "Gmail", url: "mailto:iamonweekend@gmail.com", handle: "iamonweekend@gmail.com" },
  ],

  footer: {
    brand: "VANSH",
    tagline: "Made on the internet.",
    copyright: "© 2026 Vansh. All rights reserved.",
  },
};
