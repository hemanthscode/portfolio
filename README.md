# Portfolio

Welcome to my **Portfolio**, a modern, responsive, and visually stunning website built to showcase my skills as a web developer and designer. This project leverages cutting-edge technologies like React, TypeScript, Tailwind CSS, and Vite to deliver a fast, accessible, and user-friendly experience. Explore my work, learn about me, and get in touch through a seamless, animated interface.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Screenshot)

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices using Tailwind CSS and custom media query hooks.
- **Light/Dark Theme**: Smooth theme switching with a context-based implementation and local storage persistence.
- **Dynamic Routing**: Client-side navigation with React Router for a single-page app experience.
- **Animated Transitions**: Subtle animations powered by Framer Motion for engaging user interactions.
- **Modern Icons**: High-quality icons from Lucide React for a polished look across components.
- **Type Safety**: TypeScript ensures robust, error-free code with well-defined interfaces.
- **Accessible UI**: WCAG-compliant design with keyboard navigation and ARIA labels.
- **Production-Ready**: Optimized build with Vite for fast load times and Netlify deployment.

## Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── projects/
│   │   │   ├── project1.jpg
│   │   │   └── project2.jpg
│   │   └── profile.jpg
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── molecules/
│   │   │   ├── NavItem.tsx
│   │   │   └── ProjectCard.tsx
│   │   ├── organisms/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Work.tsx
│   │   │   └── Contact.tsx
│   │   ├── templates/
│   │   │   └── MainLayout.tsx
│   │   └── pages/
│   │       ├── HomePage.tsx
│   │       ├── AboutPage.tsx
│   │       ├── WorkPage.tsx
│   │       ├── ContactPage.tsx
│   │       └── NotFoundPage.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useMediaQuery.ts
│   ├── styles/
│   │   ├── theme.ts
│   │   ├── global.css
│   │   └── tailwind.css
│   ├── types/
│   │   ├── theme.types.ts
│   │   ├── project.types.ts
│   │   └── nav.types.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   └── formatters.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── netlify.toml
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the portfolio.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Deployment

Deploy the portfolio to **Netlify** for a live, production-ready site:

1. Push the project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```

2. Connect to Netlify:
   - Sign in to [Netlify](https://app.netlify.com).
   - Click **New site from Git** and select your GitHub repository.
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Deploy the site. Netlify will provide a live URL (e.g., `https://your-portfolio.netlify.app`).

3. Ensure SPA routing works by including `netlify.toml` or `public/_redirects` (already included in the project).

## Customization

- **Assets**: Replace placeholder images in `public/assets/` (e.g., `profile.jpg`, `project1.jpg`, `project2.jpg`) and `src/assets/logo.svg` with your own.
- **Content**: Update `src/utils/constants.ts` with your project details and `src/components/organisms/` (e.g., `Hero.tsx`, `About.tsx`) with your bio and skills.
- **Form**: Integrate a form submission service (e.g., [Formspree](https://formspree.io)) in `src/components/organisms/Contact.tsx`.
- **Theme**: Customize colors and fonts in `tailwind.config.js` and `src/styles/theme.ts` to match your brand.

## Technologies Used

- **React**: Frontend library for building dynamic UI.
- **TypeScript**: Type-safe JavaScript for robust code.
- **Tailwind CSS**: Utility-first CSS for rapid, responsive styling.
- **Vite**: Fast build tool and development server.
- **React Router**: Client-side routing for SPA navigation.
- **Framer Motion**: Smooth animations for enhanced UX.
- **Lucide React**: Modern, accessible icon library.
- **Netlify**: Hosting and deployment platform.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome-feature`).
3. Commit your changes (`git commit -m "Add awesome feature"`).
4. Push to the branch (`git push origin feature/awesome-feature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Email**: your.email@example.com
- **GitHub**: [your-username](https://github.com/your-username)
- **LinkedIn**: [your-linkedin](https://linkedin.com/in/your-linkedin)

---

Built with ❤️ by [Your Name]. Explore the code, deploy your own version, and let’s connect to create something amazing!