# Power News Times

A modern, responsive news website built with vanilla HTML, CSS (SCSS), and JavaScript. This project showcases a clean, professional news portal with multiple category sections and a dynamic breaking news ticker.

## 🌟 Features

-   **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
-   **Multiple News Categories**:
    -   Home (Inicio)
    -   Global News
    -   Technology (Tecnología)
    -   Sports (Deportes)
    -   Politics (Política)
-   **Breaking News Ticker**: Animated scrolling news updates
-   **Modern UI**: Clean, professional design with smooth animations
-   **SCSS Styling**: Organized and maintainable stylesheets using Sass
-   **Static Assets**: Optimized images for various news content

## 🚀 Quick Start

### Prerequisites

-   Node.js (for running the development server and Sass compilation)
-   npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/thedackss/arleth-news-vanilla.git
cd arleth-news-vanilla
```

2. Install dependencies:

```bash
npm install
```

### Development

1. **Start the development server**:

```bash
npm start
```

This will start an HTTP server serving the `src` directory, typically available at `http://localhost:8080`.

2. **Watch and compile SCSS** (in a separate terminal):

```bash
npm run sass
```

This will watch for changes in your SCSS files and automatically compile them to CSS.

## 📁 Project Structure

```
arleth-news-vanilla/
├── package.json          # Project dependencies and scripts
├── src/                  # Source files
│   ├── index.html       # Home page
│   ├── global.html      # Global news page
│   ├── tecnologia.html  # Technology news page
│   ├── deportes.html    # Sports news page
│   ├── politica.html    # Politics news page
│   ├── assets/          # Images and media files
│   └── styles/          # Stylesheets
│       ├── estilos.css     # Compiled CSS
│       ├── estilos.css.map # Source map
│       └── estilos.scss    # Main SCSS file
```

## 🎨 Styling

The project uses SCSS for styling with the following features:

-   **CSS Custom Properties**: For consistent theming and easy customization
-   **Google Fonts**: Roboto font family for modern typography
-   **Responsive Grid Layouts**: Flexible layouts that adapt to different screen sizes
-   **CSS Animations**: Smooth transitions and effects
-   **Component-based Organization**: Modular SCSS structure

### Color Scheme

```scss
:root {
    --primary-color: rgb(219 34 34); // Red accent
    --secondary-color: #f0f0f0; // Light gray
    --text-color: #111; // Dark text
    --background-color: #eee; // Light background
}
```

## 🔧 Scripts

-   `npm start`: Start the development server
-   `npm run sass`: Watch and compile SCSS files
-   `npm test`: Run tests (currently not implemented)

## 🌐 Browser Support

This project is built with modern web standards and supports:

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:

-   Mobile devices (320px - 768px)
-   Tablets (768px - 1024px)
-   Desktop (1024px+)

## 🚀 Deployment

The project consists of static files and can be deployed to any static hosting service:

1. **GitHub Pages**: Push to a `gh-pages` branch
2. **Netlify**: Connect your GitHub repository
3. **Vercel**: Import your GitHub project
4. **Traditional hosting**: Upload the `src` folder contents

### Build for Production

1. Compile SCSS to CSS:

```bash
npm run sass
```

2. Deploy the `src` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

-   **Repository**: [https://github.com/thedackss/arleth-news-vanilla](https://github.com/thedackss/arleth-news-vanilla)
-   **Issues**: [https://github.com/thedackss/arleth-news-vanilla/issues](https://github.com/thedackss/arleth-news-vanilla/issues)

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Power News Times** - Keeping you informed with the latest news and updates.
