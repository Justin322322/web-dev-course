# Web Development Learning Platform

An interactive web development course platform built with Next.js 16, featuring a retro arcade theme and comprehensive lessons on HTML, CSS, and JavaScript.

## Features

- **Interactive Lessons**: Structured curriculum covering HTML, CSS, and JavaScript fundamentals
- **Live Code Editor**: Practice coding directly in the browser with real-time preview
- **Syntax Highlighting**: Beautiful code blocks with Prism.js syntax highlighting and copy functionality
- **Video Integration**: Curated YouTube tutorials from trusted sources like freeCodeCamp and Traversy Media
- **Progress Tracking**: Track your learning journey with local storage persistence
- **Retro Arcade Theme**: Nostalgic design with dark/light mode support
- **Guided Tour**: Interactive onboarding experience using React Joyride
- **Responsive Design**: Fully responsive layout that works on all devices
- **Markdown-Based Content**: Easy-to-maintain lesson content using markdown files

## Tech Stack

- **Framework**: Next.js 15 with App Router and React 19
- **Styling**: Tailwind CSS 4 with custom retro arcade theme
- **UI Components**: shadcn/ui component library
- **Markdown Processing**:
  - `remark` and `rehype` for parsing and rendering
  - `remark-gfm` for GitHub Flavored Markdown
  - `rehype-prism-plus` for syntax highlighting
  - `gray-matter` for frontmatter parsing
- **Code Highlighting**: Prism.js with multiple language support
- **Icons**: Lucide React
- **Theme Management**: next-themes for dark/light mode
- **Animations**: canvas-confetti for celebration effects
- **Tour Guide**: react-joyride for onboarding
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                          # Next.js app router
│   ├── [category]/              # Dynamic category routes
│   │   ├── [lessonId]/         # Individual lesson pages
│   │   │   └── page.tsx        # Lesson page component
│   │   └── page.tsx            # Category overview page
│   ├── layout.tsx              # Root layout with MainLayout wrapper
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles and Tailwind
├── components/                  # React components
│   ├── content/                # Content rendering components
│   │   ├── code-preview.tsx   # Live code editor with preview
│   │   ├── LessonView.tsx     # Main lesson display component
│   │   ├── markdown-renderer.tsx # Markdown content renderer
│   │   ├── practice-editor.tsx # Interactive practice editor
│   │   └── VideoEmbed.tsx     # YouTube video embed component
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx         # Top navigation header
│   │   ├── MainLayout.tsx     # Main layout wrapper (persists across routes)
│   │   └── Sidebar.tsx        # Course navigation sidebar
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   └── ...                # Other UI primitives
│   ├── app-tour.tsx           # Onboarding tour component
│   ├── lesson-actions.tsx     # Complete/bookmark buttons
│   ├── progress-tracker.tsx   # Progress bar display
│   └── theme-toggle.tsx       # Dark/light mode toggle
├── content/                    # Markdown lesson content
│   ├── html/                  # HTML lessons (8 lessons)
│   ├── css/                   # CSS lessons (9 lessons)
│   ├── javascript/            # JavaScript lessons (9 lessons)
│   └── videos/                # Video resource data
│       └── video-resources.json
├── lib/                        # Utility functions and helpers
│   ├── content-loader.ts      # Content loading utilities
│   ├── lesson-mapping.ts      # Lesson ID to filename mapping
│   ├── markdown.ts            # Markdown processing with remark/rehype
│   ├── markdown-utils.ts      # Markdown helper functions
│   ├── progress-context.tsx   # React context for progress state
│   ├── progress-tracker.ts    # Progress tracking with localStorage
│   ├── types.ts               # TypeScript type definitions
│   └── video-loader.ts        # Video resource loading
└── public/                     # Static assets
```

## Content Structure

Lessons are organized by category (HTML, CSS, JavaScript) and stored as markdown files:

### Lesson Files

```markdown
---
title: "Lesson Title"
description: "Brief description"
---

# Lesson Content

Your markdown content here with code blocks, images, and more...
```

### Course Curriculum

- **HTML Fundamentals** (8 lessons): Introduction, Text Elements, Links & Images, Lists, Forms, Tables, Semantic HTML, Media Elements
- **CSS Fundamentals** (9 lessons): Introduction, Selectors, Box Model, Flexbox, Responsive Design, Typography, Positioning, Grid Layout, Transitions & Animations
- **JavaScript Fundamentals** (9 lessons): Introduction, Functions, DOM Manipulation, Arrays, Objects, Conditionals & Loops, Events, ES6+ Features, Async JavaScript

Total: 26 lessons

## Features in Detail

### Practice Editor

Interactive code editor with live preview for HTML, CSS, and JavaScript. Students can experiment with code and see results instantly in an iframe sandbox.

### Progress Tracking

- Automatically saves lesson completion status and bookmarks to local storage
- Visual progress bar showing overall completion percentage
- Completion indicators on each lesson in the sidebar
- Confetti animation when marking lessons complete
- Progress persists across page navigations (MainLayout mounted at root level)

### Video Resources

Curated video content from reputable sources (freeCodeCamp, Traversy Media, Web Dev Simplified), embedded directly in lessons with lazy loading for optimal performance.

### Guided Tour

First-time users are greeted with an interactive tour using React Joyride, highlighting key features like the sidebar, lesson actions, and progress tracker.

### Responsive Sidebar

- Collapsible sidebar with course navigation
- Auto-expands current category
- Shows completion status for each lesson
- Bookmark indicators
- Smooth transitions without remounting

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Theme inspired by retro arcade aesthetics
- Video content from educational creators on YouTube
