# Tejas Dalavi — DevOps & Cloud Engineer Portfolio

A modern, animated portfolio website built with **React.js**, showcasing DevOps and Cloud Engineering skills, experience, projects, and certifications.

## 🚀 Quick Start

### Prerequisites
- Node.js v16+ installed ([Download here](https://nodejs.org/))
- npm (comes with Node.js)

### Installation & Run

```bash
# 1. Extract the zip and navigate into the folder
cd tejas-dalavi-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at **http://localhost:3000** in your browser automatically.

### Build for Production

```bash
npm run build
```

This creates an optimized `/build` folder you can deploy to any static host.

## 🌐 Free Deployment Options

| Platform | Command / Steps |
|----------|----------------|
| **Netlify** | Drag & drop the `/build` folder at netlify.com/drop |
| **Vercel** | `npx vercel` in the project root |
| **GitHub Pages** | Push to GitHub → Settings → Pages → Deploy from `/build` |

## 📁 Project Structure

```
tejas-dalavi-portfolio/
├── public/
│   ├── index.html          # HTML template
│   └── favicon.svg         # Custom terminal favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed navigation bar
│   │   ├── Hero.jsx         # Landing hero section
│   │   ├── About.jsx        # About + certifications
│   │   ├── Skills.jsx       # Skills grid
│   │   ├── Experience.jsx   # Timeline work history
│   │   ├── Projects.jsx     # Project cards
│   │   ├── Education.jsx    # Education cards
│   │   └── Contact.jsx      # Contact + footer
│   ├── styles/
│   │   └── global.css       # Global CSS variables & resets
│   ├── App.jsx              # Root component
│   └── index.js             # React entry point
├── .gitignore
├── package.json
└── README.md
```

## ✏️ Customization

- **Update your GitHub/LinkedIn links** in `src/components/Contact.jsx` and `src/components/Projects.jsx`
- **Add your photo** by placing `photo.jpg` in `/public` and updating `Hero.jsx`
- **Add real project GitHub links** in `src/components/Projects.jsx`
- **Change colors** via CSS variables in `src/styles/global.css`

## 🛠 Tech Stack

- React 18
- CSS3 (custom properties, animations, grid)
- Google Fonts (Space Mono + Outfit)
- No external UI libraries — fully custom

## 📧 Contact

Tejas Dalavi · tejdal2000@gmail.com · +91 9370631957
