# Domi Adiwijaya - Personal Portfolio

A modern, responsive personal portfolio website built with TypeScript and Tailwind CSS, featuring a social media-inspired design.

## 🚀 Features

- **Modern Design**: Clean, social media-inspired layout with Twitter-like profile structure
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **TypeScript**: Full type safety and modern development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla TypeScript** - No framework dependencies for maximum performance

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/domiadiwijaya/portfolio.git
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

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The `netlify.toml` file is already configured for automatic deployment.

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the settings from `vercel.json`
3. Deploy!

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.ts       # Navigation header
│   ├── Hero.ts         # Hero section
│   ├── About.ts        # About section
│   ├── Tweets.ts       # Social media-style updates
│   ├── Projects.ts     # Projects showcase
│   ├── Blog.ts         # Blog posts preview
│   ├── Contact.ts      # Contact form and links
│   └── Footer.ts       # Site footer
├── data/               # Static data
│   └── portfolio.ts    # Projects, blog posts, and tweets data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── main.ts             # Application entry point
└── style.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Personal Information

Update your personal information in:
- `src/data/portfolio.ts` - Projects, blog posts, and social updates
- `src/components/` - Various components with personal details

### Styling

The design uses a carefully crafted color palette:
- **Primary**: Blue (#3b82f6) for accents and CTAs
- **Gray Scale**: Various shades for text and backgrounds
- **White**: Clean backgrounds and cards

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content

1. **Projects**: Update the `projects` array in `src/data/portfolio.ts`
2. **Blog Posts**: Modify the `blogPosts` array
3. **Social Updates**: Edit the `tweets` array for your latest updates
4. **About Section**: Update the content in `src/components/About.ts`

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Enhanced layout for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Fast Loading**: Optimized assets and minimal JavaScript
- **Smooth Animations**: Hardware-accelerated CSS transitions
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: domi@example.com
- **LinkedIn**: [linkedin.com/in/domiadiwijaya](https://linkedin.com/in/domiadiwijaya)
- **GitHub**: [github.com/domiadiwijaya](https://github.com/domiadiwijaya)

---

Built with ❤️ by Domi Adiwijaya