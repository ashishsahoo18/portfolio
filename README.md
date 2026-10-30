# Ashish Sahoo — Developer Portfolio

A modern, futuristic, responsive personal portfolio website designed and built specifically for **Ashish Sahoo**, a Computer Science and Technology (CST) student and aspiring software developer based in Bhubaneswar, Odisha, India.

---

## 🎨 Visual Identity & Theme

- **Background Palette**: Deep Onyx (`#080808` / `#111111`) with subtle high-tech grid accents
- **Accent Color**: Electric Yellow (`#FFD600`)
- **Typography**: Space Grotesk (Headings) & Inter (Body)
- **Design Philosophy**: Minimalist, high contrast, clean component hierarchy, zero clutter, and 100% truthful presentation of learning progress.

---

## 🚀 Technologies Used

- **Framework**: React 18
- **Bundler & Dev Server**: Vite 6
- **Icons**: Lucide React
- **Styling**: Modern vanilla CSS with CSS Variables, Flexbox, Grid, glassmorphism, and responsive breakpoints
- **Language**: JavaScript (ES6+)

---

## 📂 Project Structure

```text
Portfolio Website/
├── index.html                 # HTML shell, metadata, and Google Fonts
├── vite.config.js             # Vite development & build configuration
├── package.json               # Dependencies and npm scripts
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Root application assembling all sections
│   ├── index.css              # Global styles, variables, reset, and responsive rules
│   │
│   ├── data/                  # Centralized data files for easy customization
│   │   ├── config.js          # Personal details, bio, and social links
│   │   ├── skills.js          # Categorized skills (learning vs familiar)
│   │   ├── projects.js        # Featured projects, descriptions, and URLs
│   │   ├── journey.js         # 5-step development journey timeline
│   │   ├── whatIBuild.js      # Engineering interests & application types
│   │   └── certificates.js    # Verified certificates & milestones
│   │
│   └── components/            # Reusable UI Components
│       ├── Navbar.jsx         # Sticky header with active highlight & mobile drawer
│       ├── Hero.jsx           # Hero banner, status badge & abstract code graphic
│       ├── About.jsx          # Narrative & 4 compact info cards
│       ├── Skills.jsx         # Categorized skills with interactive filter tabs
│       ├── Projects.jsx       # Project gallery with preview mockups & modals
│       ├── Journey.jsx        # Vertical milestone timeline
│       ├── WhatIBuild.jsx     # Future project & application categories
│       ├── Certificates.jsx   # Milestone showcase & placeholder notice
│       ├── Contact.jsx        # Direct coordinates & interactive demo form
│       ├── Footer.jsx         # Dynamic year, quick links & back-to-top button
│       └── PlaceholderModal.jsx # Accessible popup explaining placeholder links
└── dist/                      # Production build output
```

---

## 🛠️ How to Run the Website Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Open your terminal in this folder
```bash
cd "c:\Users\ASHISH\OneDrive\Desktop\Portfolio Website"
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser and navigate to either:
```
http://ashish-personal-portfolio.localhost:3000/
# or
http://localhost:3000/
```

### 3. Build for production
```bash
npm run build
```
This produces an optimized build inside the `dist/` folder.

### 4. Preview the production build locally
```bash
npm run preview
```

---

## ✏️ How to Customize Your Portfolio

All personal information and content are organized into simple JavaScript files in the `src/data/` folder so you don't have to touch complex component code.

### 1. Update Your Email & Social Links
Open: `src/data/config.js`
- Find `social.email`: Replace `'ashish.placeholder@example.com'` with your actual email address.
- Find `social.linkedin`: Replace the placeholder with your LinkedIn profile URL.
- Find `social.github`: Already points to `https://github.com/ashishsahoo18`.

### 2. Add Real GitHub Repositories & Live Demos
Open: `src/data/projects.js`
For each project (e.g. Blockrock, Fokus, Connect Four):
- Set `githubUrl`: Your repository link once pushed to GitHub.
- Set `liveUrl`: Your deployed demo link (e.g. on GitHub Pages or Vercel).
- Set `isPlaceholderLink`: Change from `true` to `false` when your real link is ready.

### 3. Add or Update Skills
Open: `src/data/skills.js`
- You can add new skills or change their status (`'Currently Learning'` vs `'Familiar With'`).

### 4. Add Real Certificates
Open: `src/data/certificates.js`
- Once you earn a certificate, uncomment the template and enter your course title, issuing organization, and credential link.

---

## 🌐 How to Deploy Your Website Online (Free)

### Option A: Deploy with Vercel (Recommended — 2 Minutes)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/ashishsahoo18/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign up with your GitHub account.
3. Click **Add New Project** and select your `portfolio` repository.
4. Click **Deploy**. Vercel will automatically build and host your portfolio with a live `https://...vercel.app` URL.

### Option B: Deploy with Netlify
1. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).
2. Your site will be live instantly!

---

## 🔒 Accuracy & Honesty Pledge

This website adheres strictly to professional developer integrity:
- No fabricated employment or internships.
- No misleading skill percentages.
- Transparent distinction between technologies in active learning vs those familiar.
- Placeholders are clearly marked and fully functional without broken links.

