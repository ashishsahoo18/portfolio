/**
 * Featured Projects Data
 *
 * Real repository links:
 * - Block-Rock-E-Commerce: https://github.com/ashishsahoo18/Block-Rock-E-Commerce
 * - Desktop-Notifier: https://github.com/ashishsahoo18/Desktop-Notifier
 * - selenium-google-search: https://github.com/ashishsahoo18/selenium-google-search
 * - my-own-voice-assistant: https://github.com/ashishsahoo18/my-own-voice-assistant
 */

export const projectFilters = [
  { id: "all", label: "All Projects" },
  { id: "web-app", label: "Web Applications" },
  { id: "automation", label: "Python & Automation" }
];

export const projects = [
  {
    id: "voice-assistant",
    title: "My Own Voice Assistant",
    category: "automation",
    badge: "AI & Desktop Assistant",
    description:
      "An autonomous voice assistant and Windows desktop cockpit built with Python. Powered locally by Ollama (Llama 3.2), offline Vosk speech recognition, and CustomTkinter HUD GUI with zero paid cloud API dependencies.",
    technologies: ["Python", "Ollama (Llama 3.2)", "CustomTkinter", "Vosk", "pyttsx3"],
    features: [
      "Offline-first speech recognition (Vosk) and speech synthesis (pyttsx3 / SAPI5)",
      "Local LLM intelligence powered by Ollama and Llama 3.2",
      "Windows desktop automation, live system telemetry, and multi-step agent loop",
      "Thread-safe CustomTkinter cockpit HUD interface with central security policy gate"
    ],
    githubUrl: "https://github.com/ashishsahoo18/my-own-voice-assistant",
    liveUrl: "",
    isPlaceholderLink: false,
    liveIsPlaceholder: false,
    placeholderNote: "Desktop AI assistant executed locally via Python",
    iconType: "mic",
    themeColor: "#FFD600"
  },
  {
    id: "blockrock",
    title: "Block Rock Fashion Store",
    category: "web-app",
    badge: "E-Commerce & Django",
    description:
      "A comprehensive fashion e-commerce platform built with Python, Django, and modern frontend styling. Features product catalogs, shopping cart sessions, user authentication, and order workflows.",
    technologies: ["Python", "Django", "JavaScript", "HTML5", "CSS3", "SQLite"],
    features: [
      "Product catalog with categories, details, and image uploads",
      "Dynamic session-based shopping cart and checkout process",
      "User authentication with accounts and order management",
      "Custom responsive storefront design"
    ],
    githubUrl: "https://github.com/ashishsahoo18/Block-Rock-E-Commerce",
    liveUrl: "",
    isPlaceholderLink: false,
    liveIsPlaceholder: true,
    placeholderNote: "Add your deployed live URL in src/data/projects.js",
    iconType: "shopping-bag",
    themeColor: "#FFD600"
  },
  {
    id: "desktop-notifier",
    title: "Desktop Notifier",
    category: "automation",
    badge: "Desktop GUI & Utilities",
    description:
      "A modern desktop notification application built with Python and Tkinter that allows users to configure custom alert titles, messages, and scheduled intervals with sound alerts.",
    technologies: ["Python", "Tkinter", "Plyer", "Winsound"],
    features: [
      "Custom notification title and message inputs",
      "Configurable notification time intervals for recurring alerts",
      "Start and stop notification scheduling system",
      "Windows sound alert integration (Winsound) and dark-themed GUI"
    ],
    githubUrl: "https://github.com/ashishsahoo18/Desktop-Notifier",
    liveUrl: "",
    isPlaceholderLink: false,
    liveIsPlaceholder: false,
    placeholderNote: "Desktop application executed locally via Python",
    iconType: "bell",
    themeColor: "#FFD600"
  },
  {
    id: "selenium-google-search",
    title: "Selenium Google Search",
    category: "automation",
    badge: "Browser Automation",
    description:
      "A Python-based browser automation tool built with Selenium WebDriver to automate web searches, capture timestamped screenshots of results, and maintain search history logs.",
    technologies: ["Python", "Selenium WebDriver", "Chrome", "Firefox"],
    features: [
      "Automated search query execution via Selenium WebDriver",
      "Multi-browser support for Google Chrome and Mozilla Firefox",
      "Automatic timestamped screenshot capture of search results",
      "Search history logging with queries, timestamps, and result URLs"
    ],
    githubUrl: "https://github.com/ashishsahoo18/selenium-google-search",
    liveUrl: "",
    isPlaceholderLink: false,
    liveIsPlaceholder: false,
    placeholderNote: "Browser automation script run via Selenium WebDriver",
    iconType: "search",
    themeColor: "#FFD600"
  }
];
