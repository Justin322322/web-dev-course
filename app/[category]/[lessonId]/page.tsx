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
    { id: 'html-elements', title: 'HTML Elements & Tags' },
    { id: 'html-attributes', title: 'Attributes & Properties' },
    { id: 'html-forms', title: 'Forms & Input' },
    { id: 'html-semantic', title: 'Semantic HTML' },
  ],
  css: [
    { id: 'css-intro', title: 'Introduction to CSS' },
    { id: 'css-selectors', title: 'Selectors & Specificity' },
    { id: 'css-box-model', title: 'Box Model' },
    { id: 'css-flexbox', title: 'Flexbox Layout' },
    { id: 'css-grid', title: 'Grid Layout' },
  ],
  javascript: [
    { id: 'js-intro', title: 'Introduction to JavaScript' },
    { id: 'js-variables', title: 'Variables & Data Types' },
    { id: 'js-functions', title: 'Functions' },
    { id: 'js-dom', title: 'DOM Manipulation' },
    { id: 'js-events', title: 'Events & Event Handling' },
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
