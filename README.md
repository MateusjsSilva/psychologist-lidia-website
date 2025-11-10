# Lídia Tibúrcio - Psychologist Website

Official website for psychologist **Lídia Tibúrcio**, specialized in Logotherapy. The platform presents her professional profile, services (online and in-person in Maceió-AL), and her therapeutic approach based on Viktor Frankl's work.

## About the Project

Institutional website developed with focus on:
- **Minimalist design** with serene colors that convey calm and trust
- **Responsiveness** for all devices
- **SEO optimized** to appear in Google searches
- **Performance** optimized for fast loading
- **Accessibility** following web best practices

## Features

- Complete professional profile
- Information about Logotherapy
- Services offered (online and in-person)
- Office location in Maceió-AL
- Contact form via WhatsApp
- Links to social networks (Instagram)
- Responsive and modern design
- SEO optimized with meta tags and Schema.org
- Sitemap and robots.txt configured

## Technologies Used

- **Angular 20.2.0** - Main framework
- **TypeScript 5.9.2** - Programming language
- **HTML5 & CSS3** - Structure and styling
- **RxJS** - Reactive programming

## Prerequisites

Before starting, you need to have installed:
- **Node.js** (version 18 or higher)
- **npm** (usually comes with Node.js)
- **Angular CLI** (installed globally)

## How to Install and Run

### 1. Clone the repository

```bash
git clone git@github.com:MateusjsSilva/psychologist-lidia-website.git
cd psychologist-lidia-website
```

### 2. Install dependencies

```bash
cd lidia-web
npm install
```

### 3. Run the development server

```bash
npm start
# or
ng serve
```

The site will be available at `http://localhost:4200/`

### 4. Build for production

```bash
npm run build
# or
ng build
```

The compiled files will be in `dist/lidia-web/browser/`

## Project Structure

```
psychologist-lidia-website/
├── lidia-web/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/
│   │   │   │   └── home/      # Main component
│   │   │   ├── app.config.ts
│   │   │   └── app.routes.ts
│   │   ├── assets/            # Images, icons, etc.
│   │   └── index.html         # Main HTML with SEO meta tags
│   ├── public/                # Public files
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── angular.json
│   └── package.json
└── README.md
```

## SEO and Optimizations

The site is optimized for search engines with:

- Complete meta tags (description, keywords, Open Graph)
- Schema.org structured data (ProfessionalService)
- Sitemap.xml configured
- Robots.txt configured
- Canonical URLs
- Geographic meta tags (Maceió-AL)
- Structured data for Google My Business

### To submit to Google Search Console:

1. Access [Google Search Console](https://search.google.com/search-console)
2. Add your property (site domain)
3. Submit the sitemap: `https://your-domain.com/sitemap.xml`

## Contact Information

- **Name:** Lídia Tibúrcio
- **CRP:** 15/6683
- **WhatsApp:** +55 82 9835-9755
- **Email:** mlidiatiburcio@gmail.com
- **Instagram:** [@lidia.tiburcio](https://www.instagram.com/lidia.tiburcio)
- **Location:** Edifício Empresarial Le Monde, Rua José Soares Sobrinho, Jatiúca, Maceió - AL, CEP: 57036-640

## Design Features

- Serene and professional color palette
- Modern and readable typography
- Smooth animations
- Responsive layout (mobile-first)
- Intuitive navigation
- Floating WhatsApp button

## Available Scripts

```bash
# Development
npm start          # Start development server
ng serve           # Alternative

# Build
npm run build      # Production build
ng build           # Alternative

# Development with watch
npm run watch      # Build with watch mode

# Tests
npm test           # Run unit tests
ng test            # Alternative
```

## Important Configurations

### Assets

Assets are organized in:
- `src/assets/` - Images, icons, logos
- `public/` - Public files (robots.txt, sitemap.xml)

## License

This project is private and belongs to psychologist Lídia Tibúrcio.

**Note:** This repository is public on GitHub for portfolio and demonstration purposes. All rights reserved.

## Developed by

Developed by [Mateus Silva](https://www.mateussilva.dev.br)