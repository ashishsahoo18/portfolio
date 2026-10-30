/**
 * Skills Data
 *
 * Technologies represent learning areas and practical practice, not arbitrary percentages.
 * Proficiency levels honestly reflect "Currently Learning" or "Familiar With".
 */

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Languages" },
  { id: "tools", label: "Tools & Workflow" }
];

export const skills = [
  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    status: "Familiar With",
    level: "Intermediate",
    description: "Semantic page markup, accessibility best practices, and clean document structure.",
    badgeColor: "yellow"
  },
  {
    name: "CSS3",
    category: "frontend",
    status: "Familiar With",
    level: "Intermediate",
    description: "Modern layouts (Flexbox, CSS Grid), responsive design, animations, and custom styling.",
    badgeColor: "yellow"
  },
  {
    name: "JavaScript",
    category: "frontend",
    status: "Familiar With",
    level: "Intermediate",
    description: "ES6+ syntax, DOM manipulation, asynchronous programming, event handling, and logic.",
    badgeColor: "yellow"
  },
  {
    name: "React",
    category: "frontend",
    status: "Currently Learning",
    level: "Learning",
    description: "Component architecture, hooks (useState, useEffect), props, and reactive state management.",
    badgeColor: "accent"
  },

  // Backend and Programming
  {
    name: "Python",
    category: "backend",
    status: "Familiar With",
    level: "Intermediate",
    description: "Scripting, algorithm implementations, problem-solving, and foundational backend concepts.",
    badgeColor: "yellow"
  },
  {
    name: "Django",
    category: "backend",
    status: "Currently Learning",
    level: "Learning",
    description: "Understanding MVT architecture, backend routing, views, models, and RESTful principles.",
    badgeColor: "accent"
  },
  {
    name: "C++",
    category: "backend",
    status: "Familiar With",
    level: "Foundational",
    description: "Object-oriented programming, standard template library (STL), and core data structure concepts.",
    badgeColor: "yellow"
  },

  // Tools & Workflow
  {
    name: "Git",
    category: "tools",
    status: "Familiar With",
    level: "Practical",
    description: "Version control fundamentals, branching, commits, merging, and local repository tracking.",
    badgeColor: "yellow"
  },
  {
    name: "GitHub",
    category: "tools",
    status: "Familiar With",
    level: "Practical",
    description: "Remote code repository management, documentation, issue tracking, and open collaboration.",
    badgeColor: "yellow"
  },
  {
    name: "VS Code",
    category: "tools",
    status: "Familiar With",
    level: "Daily Driver",
    description: "Primary development environment, extensions, debugging setup, and shortcut workflows.",
    badgeColor: "yellow"
  }
];

