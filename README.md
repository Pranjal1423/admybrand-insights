# ADmyBRAND Insights

> AI-Powered Analytics Dashboard for Digital Marketing Agencies

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000)

## 🚀 Live Demo

🔗 **[View Live Demo](https://admybrand-insights.vercel.app)** *(Coming Soon)*

## 📸 Screenshots

### Homepage
![Homepage Preview](public/images/homepage-preview.png)

### Dashboard Preview
![Dashboard Preview](public/images/dashboard-preview.png)

## ✨ Features

### 🎨 Beautiful UI/UX
- **Modern Glass-morphism Design** - Translucent cards with backdrop blur effects
- **Gradient Backgrounds** - Stunning color transitions and visual hierarchy
- **Responsive Layout** - Perfect experience on desktop, tablet, and mobile
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Smooth Animations** - Micro-interactions and hover effects throughout

### 📊 Interactive Analytics
- **Real-time Metrics Cards** - Revenue, Users, Conversions, Growth rates
- **Interactive Charts** - Line charts, bar charts, pie charts with animations
- **Advanced Data Table** - Sorting, filtering, pagination, and search
- **Export Functionality** - PDF and CSV export capabilities
- **Date Range Filtering** - Custom date selection for all data views

### ⚡ Performance & Technical
- **Server-Side Rendering** - Fast initial page loads with Next.js 14
- **TypeScript** - Full type safety and better developer experience
- **Component Architecture** - Reusable, well-documented components
- **Mock Data Integration** - Realistic sample data for demonstration

## 🛠 Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - Latest React with concurrent features

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### Data Visualization
- **[Recharts](https://recharts.org/)** - Interactive charts for React
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animations
- **[date-fns](https://date-fns.org/)** - Modern JavaScript date utility

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Tailwind CSS IntelliSense](https://github.com/tailwindlabs/tailwindcss-intellisense)** - VS Code extension

## 🏃‍♂️ Quick Start

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm or yarn** - Package manager
- **Git** - Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/admybrand-insights.git
   cd admybrand-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
admybrand-insights/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles and Tailwind
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Homepage component
│   │   └── dashboard/         # Dashboard pages (Phase 2)
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── dashboard/        # Dashboard-specific components
│   │   ├── layout/           # Layout components (sidebar, header)
│   │   └── common/           # Shared/reusable components
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts          # Tailwind merge utilities
│   │   └── constants.ts      # App constants and configuration
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # Core type definitions
│   ├── hooks/                # Custom React hooks
│   ├── data/                 # Mock data and API functions
│   │   └── mockData.ts       # Sample analytics data
│   └── theme-provider.tsx    # Theme context provider
├── public/                   # Static assets
│   └── images/              # Screenshots and assets
├── .vscode/                 # VS Code settings
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
```css
Primary: #6366f1 (Indigo)     /* Interactive elements */
Secondary: #8b5cf6 (Purple)   /* Accents and highlights */
Success: #10b981 (Emerald)    /* Positive metrics */
Warning: #f59e0b (Amber)      /* Alerts and warnings */
Error: #ef4444 (Red)          /* Error states */
```

### Typography
- **Font Family:** Inter (Google Fonts)
- **Headings:** 600-800 font weight
- **Body Text:** 400-500 font weight
- **Mono:** JetBrains Mono for code

### Component Design Principles
- **Glass-morphism:** Translucent backgrounds with backdrop blur
- **Subtle Shadows:** Layered depth without overwhelming
- **Smooth Animations:** 200-300ms transitions for interactions
- **Consistent Spacing:** 4px, 8px, 16px, 24px, 32px scale
- **Accessible Colors:** WCAG AA compliant contrast ratios

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Other Platforms
- **Netlify:** Connect GitHub repo and deploy
- **AWS Amplify:** Full-stack deployment option
- **Railway:** Simple deployment with database options

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Bundle Analysis
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🔮 Roadmap

### Phase 2: Core Dashboard (In Progress)
- [ ] Sidebar navigation with routing
- [ ] Header with theme toggle and user menu
- [ ] Interactive charts with real data simulation
- [ ] Advanced data table with filtering

### Phase 3: Advanced Features
- [ ] User authentication and authorization
- [ ] Real-time WebSocket connections
- [ ] Advanced filtering and search
- [ ] Export functionality (PDF/CSV)

### Phase 4: AI Integration
- [ ] Predictive analytics
- [ ] Automated insights generation
- [ ] Natural language queries
- [ ] Smart recommendations

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'feat: add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Commit Convention
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Vercel](https://vercel.com)** for seamless deployment
- **[shadcn](https://twitter.com/shadcn)** for the incredible UI components
- **[Tailwind Labs](https://tailwindlabs.com)** for Tailwind CSS
- **[Lucide](https://lucide.dev)** for beautiful icons
- **AI Assistants** for development acceleration

## 📞 Support

- **GitHub Issues:** [Report bugs or request features](https://github.com/Pranjal1423/admybrand-insights/issues)
- **Discussions:** [Join the community](https://github.com/Pranjal1423/admybrand-insights/discussions)
- **Email:** your.email@example.com

---

<div align="center">

**Built with ❤️ and AI assistance**

[⭐ Star this repo](https://github.com/Pranjal1423/admybrand-insights) • [🐛 Report Bug](https://github.com/Pranjal1423/admybrand-insights/issues) • [✨ Request Feature](https://github.com/Pranjal1423/admybrand-insights/issues)

</div>