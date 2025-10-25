"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Home, CheckCircle2, Circle, Bookmark } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { useProgress } from "@/lib/progress-context";
import { ProgressTracker } from "@/components/progress-tracker";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  completed?: boolean;
}

const courseData: Section[] = [
  {
    id: "html",
    title: "HTML Fundamentals",
    icon: <FaHtml5 className="w-5 h-5" />,
    lessons: [
      { id: "html-introduction", title: "Introduction to HTML" },
      { id: "html-attributes", title: "HTML Attributes" },
      { id: "html-text-elements", title: "Text Elements" },
      { id: "html-links-images", title: "Links & Images" },
      { id: "html-lists", title: "Lists" },
      { id: "html-forms", title: "Forms" },
      { id: "html-tables", title: "Tables" },
      { id: "html-semantic-html", title: "Semantic HTML" },
      { id: "html-media-elements", title: "Media Elements" },
      { id: "html-document-structure", title: "Document Structure" },
      { id: "html-entities", title: "HTML Entities" },
    ],
  },
  {
    id: "css",
    title: "CSS Fundamentals",
    icon: <FaCss3Alt className="w-5 h-5" />,
    lessons: [
      { id: "css-introduction", title: "Introduction to CSS" },
      { id: "css-selectors", title: "CSS Selectors" },
      { id: "css-box-model", title: "Box Model" },
      { id: "css-flexbox", title: "Flexbox" },
      { id: "css-responsive-design", title: "Responsive Design" },
      { id: "css-typography", title: "Typography" },
      { id: "css-positioning", title: "Positioning" },
      { id: "css-grid-layout", title: "Grid Layout" },
      { id: "css-transitions-animations", title: "Transitions & Animations" },
      { id: "css-colors", title: "Colors" },
      { id: "css-units", title: "CSS Units" },
      { id: "css-specificity", title: "Specificity & Cascade" },
      { id: "css-pseudo-classes", title: "Pseudo-classes & Pseudo-elements" },
      { id: "css-display", title: "Display Property" },
      { id: "css-backgrounds", title: "Backgrounds" },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript Fundamentals",
    icon: <FaJs className="w-5 h-5" />,
    lessons: [
      { id: "javascript-introduction", title: "Introduction to JavaScript" },
      { id: "javascript-functions", title: "Functions" },
      { id: "javascript-dom-manipulation", title: "DOM Manipulation" },
      { id: "javascript-arrays", title: "Arrays" },
      { id: "javascript-objects", title: "Objects" },
      { id: "javascript-conditionals-loops", title: "Conditionals & Loops" },
      { id: "javascript-events", title: "Events" },
      { id: "javascript-es6-features", title: "ES6+ Features" },
      { id: "javascript-async-javascript", title: "Async JavaScript" },
      { id: "javascript-operators", title: "Operators" },
      { id: "javascript-scope", title: "Scope" },
      { id: "javascript-type-coercion", title: "Type Coercion" },
      { id: "javascript-error-handling", title: "Error Handling" },
      { id: "javascript-this-keyword", title: "The 'this' Keyword" },
      { id: "javascript-modules", title: "Modules" },
    ],
  },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { isCompleted, isBookmarked } = useProgress();

  // Get the current category from the pathname
  const currentCategory = useMemo(() => {
    const pathParts = pathname.split('/').filter(Boolean);
    return pathParts.length >= 1 ? pathParts[0] : null;
  }, [pathname]);

  // Track manually toggled sections
  const [manuallyToggledSections, setManuallyToggledSections] = useState<Set<string>>(new Set());

  // Compute expanded sections: always include current category unless manually collapsed
  const expandedSections = useMemo(() => {
    const sections = new Set<string>();
    
    // Always expand the current category unless it was manually collapsed
    if (currentCategory && !manuallyToggledSections.has(currentCategory)) {
      sections.add(currentCategory);
    }
    
    // Add back any manually expanded sections
    manuallyToggledSections.forEach(sectionId => {
      // If it's in the manually toggled set and it's not the current category,
      // or if it is the current category, check if we should keep it expanded
      const section = courseData.find(s => s.id === sectionId);
      if (section) {
        // Check if any lesson in this section is active
        const hasActiveLesson = section.lessons.some(lesson => 
          pathname === `/${sectionId}/${lesson.id}`
        );
        
        if (hasActiveLesson || sectionId !== currentCategory) {
          sections.add(sectionId);
        }
      }
    });
    
    return Array.from(sections);
  }, [pathname, currentCategory, manuallyToggledSections]);

  const toggleSection = (sectionId: string) => {
    setManuallyToggledSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        data-tour="sidebar"
        className={`fixed left-0 top-16 bottom-0 w-72 bg-sidebar border-r border-sidebar-border z-40 transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {/* Home Link */}
          <Link
            href="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
              isActive("/")
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </Link>

          <div className="h-px bg-sidebar-border my-4" />

          {/* Course Sections */}
          {courseData.map((section) => {
            const isExpanded = expandedSections.includes(section.id);
            const completedCount = section.lessons.filter((l) => isCompleted(l.id)).length;
            const totalCount = section.lessons.length;

            return (
              <div key={section.id} className="space-y-1">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-sidebar-primary group-hover:text-sidebar-accent-foreground">
                      {section.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-sm">{section.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {completedCount}/{totalCount} completed
                      </div>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                {/* Lessons */}
                {isExpanded && (
                  <div className="ml-4 pl-4 border-l-2 border-sidebar-border space-y-1">
                    {section.lessons.map((lesson) => {
                      const lessonPath = `/${section.id}/${lesson.id}`;
                      const isLessonActive = isActive(lessonPath);
                      const completed = isCompleted(lesson.id);
                      const bookmarked = isBookmarked(lesson.id);
                      
                      return (
                        <Link
                          key={lesson.id}
                          href={lessonPath}
                          className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                            isLessonActive
                              ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                              : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 flex-1">
                              {completed ? (
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                              )}
                              <span className="truncate">{lesson.title}</span>
                            </div>
                            {bookmarked && (
                              <Bookmark className="w-3 h-3 text-primary fill-primary shrink-0" />
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Progress Footer - at bottom of nav */}
        <div className="p-4 bg-sidebar border-t border-sidebar-border" data-tour="progress">
          <ProgressTracker />
        </div>
      </aside>
    </>
  );
}
