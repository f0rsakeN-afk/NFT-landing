# NFT Music Marketplace Landing Page

A modern, responsive landing page for an NFT music marketplace built with React, TypeScript, and Tailwind CSS.

![Project Screenshot](./src/assets/1.png) 

## 🚀 Features

- 🎨 Modern and clean UI design
- 🌓 Dark/Light mode support
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎵 Music NFT showcase
- 💳 Wallet integration ready
- 🎨 Customizable components
- 🔧 Built with modern tools and frameworks

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Radix UI](https://www.radix-ui.com/) - Headless UI Components
- [Lucide React](https://lucide.dev/) - Icon Library
- [React Fast Marquee](https://www.react-fast-marquee.com/) - Marquee Component

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/f0rsakeN-afk/NFT-landing
```

2. Navigate to the project directory
```bash
cd NFT-landing
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Build for production
```bash
npm run build
# or
yarn build
```


## 🎨 Components

- `Navbar` - Main navigation component with theme switcher
- `Hero` - Landing page hero section
- `MarketPlace` - NFT marketplace showcase
- `HowItWorks` - Information section about NFT functionality
- `Discover` - NFT discovery section
- `Engage` - Community engagement section
- `Footer` - Page footer with navigation and social links

## 🔧 Configuration

### Theme Configuration

The project uses a theme provider that supports light and dark modes. Theme preferences are stored in local storage.

```typescript
// Customize theme in src/context/ThemeProvider.tsx
const ThemeProvider = ({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
})
```

### Tailwind Configuration

Customize the theme, colors, and other styles in `tailwind.config.js`.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

[Naresh Rajbanshi](https://github.com/f0rsakeN-afk)

## 🙏 Acknowledgments

- Design inspiration from various NFT marketplaces
- Icons from Lucide React
- UI components from Radix UI

---
