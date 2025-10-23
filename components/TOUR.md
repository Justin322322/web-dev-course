# App Tour Feature

React Joyride has been integrated to provide an interactive tour of the web dev course platform.

## Components

- **AppTour** (`components/app-tour.tsx`): Main tour component with step definitions
- **TourTrigger** (`components/tour-trigger.tsx`): Help button in header to restart the tour

## Tour Steps

1. Welcome message
2. Sidebar navigation overview
3. Progress tracker explanation
4. Theme toggle feature
5. Lesson content area
6. Practice editor introduction
7. Lesson action buttons

## Behavior

- Tour automatically starts on first visit
- Stored in localStorage (`hasSeenTour`)
- Can be restarted anytime via the help icon (?) in the header
- Users can skip or complete the tour

## Customization

Edit `components/app-tour.tsx` to:
- Add/remove/modify tour steps
- Change styling (colors, positioning)
- Adjust timing and behavior

## Data Attributes

Components use `data-tour` attributes for targeting:
- `data-tour="sidebar"` - Sidebar navigation
- `data-tour="progress"` - Progress tracker
- `data-tour="theme-toggle"` - Theme toggle button
- `data-tour="lesson-content"` - Main lesson content
- `data-tour="practice-editor"` - Interactive code editor
- `data-tour="lesson-actions"` - Complete/bookmark buttons
