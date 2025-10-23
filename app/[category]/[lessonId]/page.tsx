import { notFound } from 'next/navigation';
import { LessonView } from '@/components/content/LessonView';
import { MainLayout } from '@/components/layout/MainLayout';
import { getMarkdownFilename, getLessonIds } from '@/lib/lesson-mapping';
import { removeFirstH1, extractFirstH1 } from '@/lib/markdown-utils';
import { getVideosForLesson } from '@/lib/video-loader';
import fs from 'fs';
import path from 'path';
import { parseMarkdown } from '@/lib/markdown';

interface PageProps {
  params: Promise<{
    category: string;
    lessonId: string;
  }>;
}

// Lesson metadata for navigation
const lessonData: Record<string, { id: string; title: string }[]> = {
  html: [
    { id: 'html-intro', title: 'Introduction to HTML' },
    { id: 'html-elements', title: 'Text Elements' },
    { id: 'html-attributes', title: 'Links & Images' },
    { id: 'html-lists', title: 'Lists' },
    { id: 'html-forms', title: 'Forms' },
    { id: 'html-tables', title: 'Tables' },
    { id: 'html-semantic', title: 'Semantic HTML' },
    { id: 'html-media', title: 'Media Elements' },
  ],
  css: [
    { id: 'css-intro', title: 'Introduction to CSS' },
    { id: 'css-selectors', title: 'CSS Selectors' },
    { id: 'css-box-model', title: 'Box Model' },
    { id: 'css-flexbox', title: 'Flexbox' },
    { id: 'css-responsive', title: 'Responsive Design' },
    { id: 'css-typography', title: 'Typography' },
    { id: 'css-positioning', title: 'Positioning' },
    { id: 'css-grid', title: 'Grid Layout' },
    { id: 'css-animations', title: 'Transitions & Animations' },
  ],
  javascript: [
    { id: 'js-intro', title: 'Introduction to JavaScript' },
    { id: 'js-functions', title: 'Functions' },
    { id: 'js-dom', title: 'DOM Manipulation' },
    { id: 'js-arrays', title: 'Arrays' },
    { id: 'js-objects', title: 'Objects' },
    { id: 'js-conditionals', title: 'Conditionals & Loops' },
    { id: 'js-events', title: 'Events' },
    { id: 'js-es6', title: 'ES6+ Features' },
    { id: 'js-async', title: 'Async JavaScript' },
  ],
};

export async function generateStaticParams() {
  const categories = ['html', 'css', 'javascript'];
  const params: { category: string; lessonId: string }[] = [];

  for (const category of categories) {
    const lessonIds = getLessonIds(category as 'html' | 'css' | 'javascript');
    for (const lessonId of lessonIds) {
      params.push({ category, lessonId });
    }
  }

  return params;
}

export default async function LessonPage({ params }: PageProps) {
  const { category, lessonId } = await params;

  // Validate category
  if (!['html', 'css', 'javascript'].includes(category)) {
    notFound();
  }

  // Get markdown filename
  const filename = getMarkdownFilename(lessonId);
  if (!filename) {
    notFound();
  }

  // Load lesson content
  const contentPath = path.join(process.cwd(), 'content', category, filename);
  
  if (!fs.existsSync(contentPath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(contentPath, 'utf-8');
  const { content, data } = await parseMarkdown(fileContent);

  // Extract title from content H1 or use metadata
  const h1Title = extractFirstH1(content);
  const lessons = lessonData[category] || [];
  const currentLesson = lessons.find(l => l.id === lessonId);
  const title = h1Title || (data.title as string) || currentLesson?.title || 'Lesson';

  // Remove the first H1 from content to avoid duplication
  const contentWithoutH1 = removeFirstH1(content);

  // Load relevant videos for this lesson
  const videoResources = getVideosForLesson(
    category as 'html' | 'css' | 'javascript',
    lessonId,
    fileContent
  );

  // Get previous and next lessons
  const currentIndex = lessons.findIndex(l => l.id === lessonId);
  const previousLesson = currentIndex > 0 ? lessons[currentIndex - 1] : undefined;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : undefined;
  const isLastLesson = currentIndex === lessons.length - 1;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <LessonView
          lessonId={lessonId}
          title={title}
          content={contentWithoutH1}
          category={category}
          videoResources={videoResources}
          isLastLesson={isLastLesson}
          previousLesson={previousLesson}
          nextLesson={nextLesson}
        />
      </div>
    </MainLayout>
  );
}
