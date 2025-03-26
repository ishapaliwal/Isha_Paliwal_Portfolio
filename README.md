# Isha Paliwal - Portfolio Website

Welcome to my personal portfolio website! This is a **pixel-perfect** digital showcase of my skills, projects, experience, and journey as a developer. Built with creativity and functionality in mind, it's fully responsive and interactive.

## Screenshots

### Desktop View
![Desktop View](./public/assets/screenshot-desktop.png)

### Mobile View
![Mobile View](./public/assets/screenshot-mobile.png)

---

## Features

- Smooth scrolling and animated navigation
- Quick Links section with hover effects
- Interactive progress bar with a surprise at the end
- Dark/light theme toggle switch 
- Fully responsive on mobile and desktop devices
- Linked resume and multiple contact options
- Animated Card Section on the main landing page
- Scroll-to-bottom button for easy navigation
- Game added in the Contact section using Three.js
- Background pattern designed using [Pattern.Monster](https://pattern.monster)
- Image Carousel on the Experience page to showcase highlights
- Filterable Card Grid on the Projects page:
  - Filter by keywords in project names
  - Filter by project status (completed, in-progress, etc.)
  - Filter by technologies/languages used

---

## Tech Stack

- **React.js** with JSX
- **HTML5**, **CSS3**, and **JavaScript**
- **Responsive Design** via Flexbox and Media Queries

---

## Extra Libraries & Functionalities

| Library / Tool            | Purpose                                         |
|---------------------------|-------------------------------------------------|
| `react-icons`             | Icons across navbar and footer                  |
| `react-scroll`            | Smooth scrolling to sections                    |
| `react-switch`            | Toggle for Dark Mode                           |
| `react-router-dom`        | Routing between different pages (if used)       |
| `pdf.worker.min.js`       | PDF rendering functionality (PDF.js)           |
| `three`, `@react-three/fiber` | Game rendering with Three.js in Contact page   |
| `react-slick` or similar  | For Image Carousel in Experience section        |
| Custom filtering logic    | Used for Project card filtering (name, status, tech) |
| `_redirects` file         | Netlify-compatible routing                      |

---

## Game Credit

The Crossy Road-style game embedded in the **Contact** section is built using **Three.js** and React Three Fiber, inspired by this amazing tutorial:  
[Crossy Road Game Tutorial](https://javascriptgametutorials.com/tutorials/react-three-fiber/crossy-road)

---

## Folder Structure (Main Parts)

```
isha-paliwal-portfolio-app/
├── public/
│   ├── assets/         # Images, resume, logos
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── ...components
├── screenshot-desktop.png
├── screenshot-mobile.png
├── package.json
└── README.md
```

---

_A pixel-perfect masterpiece by © Isha Paliwal_