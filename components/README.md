# Components Directory

This directory contains all React components for the Web Dev Course Platform.

## Structure

```
components/
├── layout/           # Layout components
│   ├── MainLayout.tsx    # Main layout wrapper with sidebar
│   ├── Header.tsx        # Top navigation header
│   └── Sidebar.tsx       # Collapsible navigation sidebar
└── README.md
```

## Layout Components

### MainLayout
The main layout wrapper that provides the overall structure for the application.

**Features:**
- Responsive sidebar toggle
- Fixed header with content area
- Automatic margin adjustment based on sidebar state

**Usage:**
```tsx
import { MainLayout } from "@/components/layout/MainLayout";

export default function Page() {
  return (
    <MainLayout>
      <YourContent />
    </MainLayout>
  );
}
```

### Header
Fixed top navigation bar with branding and menu toggle.

**Features:**
- Platform branding with logo
- Mobile-responsive menu toggle
- Status indicator
- Retro arcade styling

### Sidebar
Collapsible navigation sidebar with course structure.

**Features:**
- Expandable/collapsible course sections
- Progress tracking per section
- Visual completion indicators
- Responsive behavior (overlay on mobile, fixed on desktop)
- Overall progress bar at bottom

**Course Structure:**
- HTML Fundamentals (5 lessons)
- CSS Fundamentals (5 lessons)
- JavaScript Fundamentals (5 lessons)

## Styling

All components use the retro arcade theme configured via shadcn/ui with:
- Custom color variables from globals.css
- Tailwind CSS utility classes
- Responsive breakpoints
- Smooth transitions and hover effects
