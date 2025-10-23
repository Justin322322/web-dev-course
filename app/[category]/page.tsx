import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Code, Palette, Zap } from 'lucide-react';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

const categoryData = {
  html: {
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of web pages with HTML. Master elements, attributes, forms, and semantic markup.',
    icon: Code,
    color: 'text-orange-500',
    lessons: [
      { id: 'html-intro', title: 'Introduction to HTML', description: 'Get started with HTML basics and structure' },
      { id: 'html-elements', title: 'HTML Elements & Tags', description: 'Learn about text elements, headings, and formatting' },
      { id: 'html-attributes', title: 'Attributes & Properties', description: 'Master links, images, and element attributes' },
      { id: 'html-forms', title: 'Forms & Input', description: 'Create interactive forms and handle user input' },
      { id: 'html-semantic', title: 'Semantic HTML', description: 'Use semantic elements for better structure' },
    ],
  },
  css: {
    title: 'CSS Fundamentals',
    description: 'Style your web pages with CSS. Learn selectors, layouts, and responsive design techniques.',
    icon: Palette,
    color: 'text-blue-500',
    lessons: [
      { id: 'css-intro', title: 'Introduction to CSS', description: 'Get started with CSS styling basics' },
      { id: 'css-selectors', title: 'Selectors & Specificity', description: 'Master CSS selectors and specificity rules' },
      { id: 'css-box-model', title: 'Box Model', description: 'Understand padding, margin, and borders' },
      { id: 'css-flexbox', title: 'Flexbox Layout', description: 'Create flexible layouts with Flexbox' },
      { id: 'css-grid', title: 'Grid Layout', description: 'Build responsive designs with CSS Grid' },
    ],
  },
  javascript: {
    title: 'JavaScript Fundamentals',
    description: 'Add interactivity to your websites with JavaScript. Learn programming concepts and DOM manipulation.',
    icon: Zap,
    color: 'text-yellow-500',
    lessons: [
      { id: 'js-intro', title: 'Introduction to JavaScript', description: 'Get started with JavaScript basics' },
      { id: 'js-variables', title: 'Variables & Data Types', description: 'Learn about variables and data types' },
      { id: 'js-functions', title: 'Functions', description: 'Master functions and code reusability' },
      { id: 'js-dom', title: 'DOM Manipulation', description: 'Interact with HTML elements using JavaScript' },
      { id: 'js-events', title: 'Events & Event Handling', description: 'Handle user interactions and events' },
    ],
  },
};

export async function generateStaticParams() {
  return [
    { category: 'html' },
    { category: 'css' },
    { category: 'javascript' },
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  if (!['html', 'css', 'javascript'].includes(category)) {
    notFound();
  }

  const data = categoryData[category as keyof typeof categoryData];
  const Icon = data.icon;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className={`${data.color}`}>
              <Icon className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold">{data.title}</h1>
          </div>
          <p className="text-lg text-muted-foreground">{data.description}</p>
        </div>

        {/* Lessons Grid */}
        <div className="grid gap-4">
          {data.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/${category}/${lesson.id}`}
              className="block p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground">{lesson.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
