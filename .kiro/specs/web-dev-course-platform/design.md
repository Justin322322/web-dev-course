# Design Document

## Overview

The Web Development Course Platform is a modern, single-page application (SPA) built with React, Next.js, and shadcn/ui components. It features a retro arcade theme and provides an intuitive learning experience for HTML, CSS, and JavaScript fundamentals. The platform integrates Meilisearch for fast content discovery and curates high-quality YouTube educational content.

## Architecture

### Technology Stack

- **Frontend Framework**: Next.js 14+ (App Router)
- **UI Components**: shadcn/ui with retro arcade theme
- **Styling**: Tailwind CSS with custom theme configuration
- **Search Engine**: Meilisearch (self-hosted or cloud)
- **Content Management**: Static JSON/Markdown files for course content
- **Video Integration**: YouTube iframe embeds (no API required)
- **State Management**: React Context API / Zustand (for user progress)
- **Deployment**: Vercel or similar platform

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Next.js Frontend                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Course     │  │   Search     │  │   Video      │  │
│  │   Browser    │  │   Interface  │  │   Player     │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│           │                │                 │           │
│           └────────────────┴─────────────────┘           │
│                          │                               │
└──────────────────────────┼───────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
┌───────────────┐  ┌──────────────┐  ┌──────────────┐
│   Content     │  │ Meilisearch  │  │   YouTube    │
│   Data Store  │  │    Server    │  │   (iframe    │
│   (Static)    │  │              │  │    embeds)   │
└───────────────┘  └──────────────┘  └──────────────┘
```

## Components and Interfaces

### Core Components

#### 1. Layout Components

**MainLayout**
- Implements retro arcade theme wrapper
- Contains navigation sidebar/header
- Manages responsive breakpoints
- Provides consistent page structure

**Sidebar**
- Displays course navigation tree
- Shows HTML, CSS, JS sections
- Indicates progress/completion status
- Supports collapsible sections

**Header**
- Contains search bar
- Displays platform branding
- Includes user progress indicator
- Mobile menu toggle

#### 2. Content Components

**LessonView**
- Renders lesson content from markdown/JSON
- Displays code examples with syntax highlighting
- Embeds YouTube videos
- Shows navigation to previous/next lessons

**CodeBlock**
- Syntax highlighting using Prism.js or Shiki
- Copy-to-clipboard functionality
- Language indicator badge
- Line numbering option

**VideoEmbed**
- Simple YouTube iframe embed (no API calls)
- Lazy loading implementation
- Responsive aspect ratio (16:9)
- Video metadata display from local data

**SearchResults**
- Displays Meilisearch query results
- Highlights matching text snippets
- Filters by content type (HTML/CSS/JS)
- Pagination for large result sets

#### 3. Interactive Components

**SearchBar**
- Real-time search with debouncing
- Autocomplete suggestions
- Keyboard navigation support
- Clear/reset functionality

**ProgressTracker**
- Visual progress indicators
- Bookmark/favorite functionality
- Completion checkmarks
- Local storage persistence

### Data Models

#### Course Content Structure

```typescript
interface Course {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  category: 'html' | 'css' | 'javascript';
  order: number;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string; // Markdown content
  codeExamples: CodeExample[];
  videoResources: VideoResource[];
  duration: number; // estimated minutes
  difficulty: 'beginner' | 'intermediate';
}

interface CodeExample {
  id: string;
  language: string;
  code: string;
  title?: string;
  description?: string;
}

interface VideoResource {
  id: string;
  youtubeId: string;
  title: string;
  channel: string;
  duration: number;
  description: string;
}
```

#### Search Index Schema

```typescript
interface SearchDocument {
  id: string;
  type: 'lesson' | 'code' | 'video';
  title: string;
  content: string;
  category: 'html' | 'css' | 'javascript';
  difficulty: string;
  keywords: string[];
  sectionId: string;
  lessonId: string;
}
```

#### User Progress Model

```typescript
interface UserProgress {
  completedLessons: string[]; // lesson IDs
  bookmarkedLessons: string[];
  lastAccessedLesson?: string;
  progressPercentage: number;
}
```

## Implementation Details

### Theme Integration

The retro arcade theme will be applied using shadcn's theme system:

1. Run: `npx shadcn@latest add https://tweakcn.com/r/themes/retro-arcade.json`
2. This configures Tailwind CSS variables and component styles
3. Custom CSS variables will be defined in `globals.css`
4. Components will automatically inherit the theme

### Meilisearch Integration

**Setup Process:**
1. Install Meilisearch client: `npm install meilisearch`
2. Configure Meilisearch connection (API key, host)
3. Create index for course content
4. Implement indexing script to populate search data
5. Configure search settings (typo tolerance, ranking rules)

**Search Implementation:**
- Client-side search queries via Meilisearch JS client
- Debounced search input (300ms delay)
- Faceted search by category and difficulty
- Highlighted search results using Meilisearch's built-in highlighting

### Content Organization

**File Structure:**
```
/content
  /html
    /lessons
      - 01-introduction.md
      - 02-elements.md
      ...
  /css
    /lessons
      - 01-selectors.md
      - 02-box-model.md
      ...
  /javascript
    /lessons
      - 01-variables.md
      - 02-functions.md
      ...
  /videos
    - curated-videos.json
```

**Content Loading:**
- Static generation at build time using Next.js
- Markdown parsing with `remark` and `rehype`
- Code syntax highlighting with `rehype-prism-plus`
- Video metadata stored in JSON files

### YouTube Video Curation

**Recommended Sources:**
- freeCodeCamp.org
- Traversy Media
- Web Dev Simplified
- The Net Ninja
- Kevin Powell (CSS)
- JavaScript Mastery

**Video Integration:**
- Use simple YouTube iframe embeds (standard `<iframe>` with video ID)
- Lazy load videos (load on scroll or click to improve performance)
- Store video metadata (title, channel, duration) locally in JSON files
- No YouTube API calls required - just embed URLs

## Error Handling

### Search Errors
- Display user-friendly message if Meilisearch is unavailable
- Implement fallback to client-side filtering if search fails
- Log errors for monitoring

### Content Loading Errors
- Show error boundary for failed lesson loads
- Provide "retry" option for failed requests
- Display cached content if available

### Video Embedding Errors
- Handle unavailable or deleted YouTube videos (iframe will show YouTube's error)
- Provide fallback message if video fails to load
- Display alternative video suggestions from local data

## Testing Strategy

### Unit Tests
- Test utility functions (markdown parsing, search formatting)
- Test data transformation logic
- Test progress tracking functions

### Component Tests
- Test SearchBar with mock Meilisearch responses
- Test CodeBlock copy functionality
- Test VideoEmbed lazy loading
- Test ProgressTracker state updates

### Integration Tests
- Test navigation flow between lessons
- Test search functionality end-to-end
- Test content loading and rendering
- Test responsive layout behavior

### E2E Tests (Optional)
- Test complete user journey through a course section
- Test search and navigation workflows
- Test video playback integration

## Performance Considerations

### Optimization Strategies

1. **Code Splitting**: Lazy load lesson content and components
2. **Image Optimization**: Use Next.js Image component for thumbnails
3. **Search Caching**: Cache recent search queries client-side
4. **Static Generation**: Pre-render all lesson pages at build time
5. **Video Lazy Loading**: Load YouTube iframes only when visible
6. **Bundle Size**: Tree-shake unused shadcn components

### Meilisearch Performance

- Index optimization with appropriate ranking rules
- Limit search results to 20 per query
- Use Meilisearch's typo tolerance settings
- Implement search result caching for common queries

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for search and navigation
- Color contrast compliance with WCAG 2.1 AA
- Screen reader friendly content structure
