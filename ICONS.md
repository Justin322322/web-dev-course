# React Icons Reference

We've switched from Lucide React to React Icons for brand and technology icons.

## Currently Used Icons

### Brand Icons (from `react-icons/fa`)

```tsx
import { FaHtml5, FaCss3Alt, FaJs, FaCode, FaVideo, FaBolt, FaChartLine } from "react-icons/fa";
```

- **FaHtml5** - HTML5 logo (orange)
- **FaCss3Alt** - CSS3 logo (blue)
- **FaJs** - JavaScript logo (yellow)
- **FaCode** - Generic code icon
- **FaVideo** - Video icon
- **FaBolt** - Lightning bolt (fast/speed)
- **FaChartLine** - Chart/progress tracking

## Files Updated

1. **components/layout/Sidebar.tsx** - Category icons in sidebar
2. **app/page.tsx** - Home page category cards and feature icons
3. **app/[category]/page.tsx** - Category page headers

## Other Available Brand Icons

React Icons provides many more brand icons you can use:

```tsx
// From react-icons/fa
import { 
  FaReact, FaNode, FaPython, FaGithub, 
  FaGitAlt, FaNpm, FaYarn, FaDocker 
} from "react-icons/fa";

// From react-icons/si (Simple Icons - more brands)
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiRedis 
} from "react-icons/si";
```

## Usage Example

```tsx
import { FaHtml5 } from "react-icons/fa";

<FaHtml5 className="w-6 h-6 text-orange-500" />
```

## Resources

- [React Icons Documentation](https://react-icons.github.io/react-icons/)
- Browse all available icons at: https://react-icons.github.io/react-icons/
