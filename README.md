# Openmarket Frontend

A modern, responsive frontend application for a gig marketplace platform built with Vite, Tailwind CSS, and vanilla JavaScript.

## 🎯 Project Overview

Openmarket Frontend is a comprehensive web application that enables users to connect as buyers and sellers in a gig marketplace. The platform allows freelancers to showcase their services, buyers to browse and purchase gigs, manage profiles, and explore a community blog.

## ✨ Features

- **User Authentication**: Login and registration pages with form validation
- **Responsive Design**: Mobile-first approach with responsive layouts for all screen sizes
- **Dark Mode**: Toggle between light and dark themes with persistent UI state
- **Mobile Navigation**: Smooth mobile menu with overlay backdrop
- **Gig Marketplace**: Browse, explore, and view individual gig details
- **User Profiles**: Dedicated profile pages for both freelancers and buyers
- **Blog System**: Blog archive and single post pages for community engagement
- **Contact Page**: Get in touch with the platform team
- **Seller Onboarding**: Dedicated page for users to become sellers
- **Service Browsing**: Explore gigs and freelancer offerings
- **Modern Styling**: Tailwind CSS for utility-first styling

## 🛠️ Tech Stack

- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **CSS Processing**: PostCSS with Autoprefixer for cross-browser compatibility
- **JavaScript**: Vanilla ES6+
- **Package Manager**: Yarn or npm

## 📁 Project Structure

```
openmarket-frontend/
├── index.html                 # Landing/index page
├── home.html                  # Home page
├── login.html                 # User login page
├── register.html              # User registration page
├── become-seller.html         # Seller onboarding page
├── explore-gigs.html          # Browse gigs marketplace
├── gig.html                   # Individual gig details
├── freelancer-profile.html    # Freelancer profile page
├── buyer-profile.html         # Buyer profile page
├── blog.html                  # Blog archive page
├── single-post.html           # Individual blog post page
├── contact.html               # Contact/support page
├── main.js                    # Main JavaScript entry point
├── style.css                  # Global styles
├── package.json               # Project dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── public/                    # Static assets
│   └── images/               # Image assets organized by page
│       ├── auth/             # Authentication page images
│       ├── become-seller/    # Seller onboarding images
│       ├── blog/             # Blog page images
│       ├── footer/           # Footer images
│       ├── Header/           # Header/navigation images
│       └── home/             # Home page images
├── .git/                      # Git version control
├── .gitignore                 # Git ignore rules
└── node_modules/              # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** or **Yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd openmarket-frontend
   ```

2. **Install dependencies**
   
   Using Yarn (recommended):
   ```bash
   yarn install
   ```
   
   Or using npm:
   ```bash
   npm install
   ```

## 📝 Available Scripts

### Development

Start the development server with hot module replacement:

```bash
yarn dev
```
or
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default).

### Build

Build the project for production:

```bash
yarn build
```
or
```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
yarn preview
```
or
```bash
npm run preview
```

## 📄 Pages Documentation

| Page | URL | Purpose |
|------|-----|---------|
| Landing/Index | `/index.html` | Links to all main pages and navigation hub |
| Home | `/home.html` | Main landing page with platform overview |
| Login | `/login.html` | User authentication and login form |
| Register | `/register.html` | New user registration and account creation |
| Become Seller | `/become-seller.html` | Information and form to onboard as a seller |
| Explore Gigs | `/explore-gigs.html` | Browse and filter available gigs |
| Gig Details | `/gig.html` | Individual gig details and booking/purchase |
| Freelancer Profile | `/freelancer-profile.html` | View freelancer's portfolio and reviews |
| Buyer Profile | `/buyer-profile.html` | Buyer's account and order history |
| Blog Archive | `/blog.html` | Community blog posts listing |
| Single Post | `/single-post.html` | Individual blog article view |
| Contact | `/contact.html` | Contact form and support information |

## 🎨 Styling & Theming

### Tailwind CSS

The project uses Tailwind CSS v3.3.3 with:
- Utility-first CSS approach
- Dark mode support (class-based toggle)
- Custom theme extensions available in `tailwind.config.js`
- Responsive breakpoints for mobile, tablet, and desktop

### Dark Mode

Implemented with JavaScript toggle that:
- Adds/removes `dark` class to the body element
- Persists user preference
- Works seamlessly with Tailwind's dark mode classes

## ⚙️ Configuration Files

### `tailwind.config.js`
Configures Tailwind CSS settings including:
- Content paths for scanning HTML files
- Theme extensions
- Dark mode configuration
- Plugin setup

### `postcss.config.js`
PostCSS plugins configuration:
- Tailwind CSS processing
- Autoprefixer for vendor prefixes

### `vite.config.js` (implicit)
Uses Vite's default configuration for module bundling and development server.

## 🖱️ JavaScript Functionality

### Main Features in `main.js`

1. **Mobile Menu Toggle**
   - Hamburger menu for mobile navigation
   - Toggles mobile menu visibility
   - Background overlay to close menu

2. **Dark Mode Toggle**
   - Button to switch between light and dark themes
   - Updates button text based on current theme
   - Uses CSS classes for theme switching

3. **Event Listeners**
   - Mobile menu open/close interactions
   - Dark mode toggle with visual feedback

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS responsive utilities
- Mobile menu with hamburger navigation
- Responsive images and layouts across all pages

## 🔄 Browser Compatibility

Using Autoprefixer to ensure compatibility with:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Automatic vendor prefix injection

## 📦 Dependencies

### Dev Dependencies
- `vite@^4.4.0` - Build tool and dev server
- `tailwindcss@^3.3.3` - CSS framework
- `postcss@^8.4.26` - CSS processor
- `autoprefixer@^10.4.14` - Vendor prefix tool

## 🚦 Development Workflow

1. Run `yarn dev` to start the development server
2. Make changes to HTML, CSS, or JavaScript files
3. Changes automatically refresh in the browser
4. Use Tailwind CSS classes for styling
5. Write vanilla JavaScript for interactivity
6. Run `yarn build` when ready for production

## 📌 Tips & Best Practices

- Use Tailwind utility classes instead of custom CSS when possible
- Keep images optimized in the `public/images/` folder
- Maintain consistent file naming conventions
- Use semantic HTML for accessibility
- Test responsive design across different screen sizes
- Use dark mode classes in Tailwind for theme support

## 🐛 Troubleshooting

**Dev server not starting?**
- Ensure Node.js is installed: `node --version`
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Check if port 5173 is in use

**Tailwind styles not appearing?**
- Rebuild the project: `yarn dev`
- Ensure all HTML files are in the content path in `tailwind.config.js`
- Clear browser cache for development builds

**Dark mode not working?**
- Check if JavaScript is enabled
- Verify `dark-mode-btn` and `dark-mode-btn-txt` element IDs exist in HTML

## 📞 Support & Contact

For issues or inquiries, visit the Contact page in the application or submit an issue in the repository.

---

**Last Updated**: April 2026
**Project Version**: 0.0.0 (Development)
