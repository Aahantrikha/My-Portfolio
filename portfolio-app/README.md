# Aahan Trikha - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and achievements as a Computer Science student and Software Developer.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Elements**: 
  - 3D atomic orbital animation showcasing tech stack
  - Hover effects on cards and buttons
  - Smooth scroll animations
  - Dynamic navigation with active section tracking
- **Sections**:
  - Hero section with animated tech stack visualization
  - About Me with education, personal info, and skills overview
  - Featured Projects showcase
  - Technical Skills with proficiency levels
  - Achievements & Recognition
  - Contact section with social links

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Animations**: Custom CSS animations

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/aahantrikha/portfolio.git
cd portfolio/portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for full configuration control

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── aahan-photo.jpg      # Profile photo
│   ├── index.html            # HTML template
│   └── ...
├── src/
│   ├── App.tsx               # Main application component
│   ├── App.css               # Custom animations and styles
│   ├── index.tsx             # Application entry point
│   └── ...
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information
Edit the content in `src/App.tsx`:
- Personal details in the About section
- Project information in the Projects section
- Skills and proficiency levels
- Achievements and awards
- Contact information and social links

### Modify Styling
- Tailwind classes are used inline in components
- Custom animations are defined in `src/App.css`
- Color scheme uses purple/pink gradients (easily customizable)

### Add New Sections
Follow the existing section structure in `App.tsx` and add corresponding navigation items

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://aahantrikha.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Key Highlights

- **3D Atomic Orbital Animation**: Unique tech stack visualization with orbiting technology badges
- **Smooth Scroll Animations**: Elements fade in as you scroll through sections
- **Interactive Cards**: Hover effects with scale, rotation, and glow
- **Active Navigation**: Automatically highlights current section while scrolling
- **Performance Optimized**: Fast loading with optimized assets

## 📧 Contact

- **Email**: aahantrikha19@gmail.com
- **Phone**: +91 9540519594
- **LinkedIn**: [Aahan Trikha](https://www.linkedin.com/in/aahan-trikha-090a7a220)
- **GitHub**: [aahantrikha](https://github.com/aahantrikha)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons from [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with ❤️ by Aahan Trikha**
