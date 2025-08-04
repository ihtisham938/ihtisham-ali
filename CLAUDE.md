# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern personal portfolio website for Ihtisham Ali, a Full Stack Developer. Built with Next.js 15.4.5 using the Pages Router architecture, TypeScript, React 19, and Tailwind CSS v4. The portfolio features advanced animations, responsive design, and a professional developer-focused presentation.

## Common Commands

- **Development**: `npm run dev` - Starts development server on http://localhost:3000
- **Build**: `npm run build` - Creates production build
- **Production**: `npm run start` - Runs production server
- **Linting**: `npm run lint` - Runs ESLint with Next.js TypeScript config

## Architecture

### Portfolio Structure
The portfolio is a single-page application with the following sections:
- **Hero Section**: Animated landing with name, title, and call-to-action
- **About Section**: Personal introduction with photo placeholder and skills badges
- **Skills Section**: Tech stack grid with hover animations and gradient effects
- **Experience Section**: Timeline-style professional experience display
- **Contact Section**: Contact form with social links and animated inputs
- **Footer**: Simple footer with branding and copyright

### Key Technologies
- **Framework**: Next.js 15.4.5 with Pages Router
- **Styling**: Tailwind CSS v4 with custom CSS variables and animations
- **Typography**: Inter font family (300-900 weights) from Google Fonts
- **Animations**: Framer Motion for scroll-triggered and hover animations
- **Forms**: React Hook Form for contact form with validation
- **TypeScript**: Strict mode with full type coverage

### Animation System
- **Framer Motion**: Used throughout for sophisticated animations
- **Scroll Triggers**: `whileInView` animations for section reveals
- **Hover Effects**: Scale, rotate, and glow effects on interactive elements
- **Page Load**: Staggered entrance animations in hero section
- **Form Interactions**: Focus animations and submission feedback

### Styling Architecture
- **Design System**: Purple/pink/cyan gradient theme with slate grays
- **Layout**: Full-width sections with centered content containers
- **Responsive**: Mobile-first approach with `sm:`, `lg:` breakpoints
- **Custom CSS**: Variables for consistent colors, shadows, and effects
- **Component Styling**: Utility-first approach with Tailwind classes

### Content Management
- **Skills Data**: Array-based configuration with icons and gradient colors
- **Experience Data**: Structured objects with company, role, and technology tags
- **Contact Form**: TypeScript-typed form with validation rules
- **Static Content**: Embedded in components (no CMS integration)

### Code Patterns
- **Components**: Functional components with TypeScript interfaces
- **State Management**: React hooks for form state and UI interactions
- **Animation Variants**: Reusable Framer Motion animation objects
- **Responsive Design**: Consistent use of Tailwind responsive utilities
- **Type Safety**: Full TypeScript coverage with proper form typing

### Configuration Files
- `tsconfig.json` - TypeScript with strict mode and path aliases (`@/*` → `./src/*`)
- `eslint.config.mjs` - ESLint with Next.js and TypeScript rules
- `postcss.config.mjs` - PostCSS with Tailwind plugin
- `next.config.ts` - Next.js configuration with React Strict Mode
- `src/styles/globals.css` - Custom CSS variables, animations, and global styles

### Development Notes
- **Alignment**: All sections use full-width containers with proper centering
- **Performance**: Optimized animations with proper viewport triggers
- **Accessibility**: Semantic HTML with proper ARIA attributes
- **Browser Support**: Modern browsers with CSS Grid and Flexbox
- **Mobile Optimization**: Touch-friendly interactions and responsive typography