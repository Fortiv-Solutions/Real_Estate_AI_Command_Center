# Fortiv Solutions · Real Estate AI Command Center

A world-class, premium SaaS application designed for real estate developers and brokers to manage leads, analytics, pipelines, and AI-driven conversational workflows. Built with modern web technologies and a focus on top-tier design aesthetics.

## 🚀 Tech Stack

This project is built using a bleeding-edge, high-performance tech stack:

- **Framework**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router) & [TanStack Start](https://tanstack.com/start)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (headless primitives)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts & Data Visualization**: [Recharts](https://recharts.org/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)

## ✨ Key Features

- **Premium Glassmorphic UI**: A highly polished, deep indigo/violet base theme with custom shadow tokens (`--shadow-glass`, `--shadow-premium`) and smooth micro-animations.
- **Unified 3-Column Layout**: Strict structural consistency across all sub-modules for a seamless user experience.
- **Executive Dashboard**: Consolidated KPIs, real-time lead acquisition funnels, and live pipeline feeds.
- **AI Brain & Conversations**: Simulated multi-channel communication (WhatsApp, Email) and AI intent scoring.
- **Property & Finance Management**: High-density data tables, P&L snapshots, and dynamic market pulse trackers.

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed.

### Installation

1. Clone the repository and navigate to the project folder:
   ```bash
   cd "Real Estate"
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Build for Production

To build the application for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

```
├── src/
│   ├── components/       # Shared UI components (AppShell, Cards, Pills, Stats)
│   ├── routes/           # TanStack Router page components (index, leads, finance, etc.)
│   ├── styles.css        # Global design system, Tailwind directives, and custom tokens
│   └── ...
├── package.json          # Project metadata and dependencies
├── vite.config.ts        # Vite configuration
└── ...
```

## 🎨 Design System

The application relies on a bespoke design system implemented in `src/styles.css`.
- **Colors**: Custom variables driven by the `@theme` directive in Tailwind v4.
- **Typography**: `font-sans-dm` (DM Sans), `font-display` (Outfit), and `font-mono-jb` (JetBrains Mono).
- **Utilities**: Custom classes like `.hover-lift` and `.interactive-element` standardise micro-interactions.

---

*Developed by Fortiv Solutions · [fortivsolutions.in](https://fortivsolutions.in)*
