/**
 * Maps sidebar lesson IDs to markdown filenames
 */
export const lessonMapping: Record<string, string> = {
  // HTML lessons
  'html-intro': '01-introduction.md',
  'html-elements': '02-text-elements.md',
  'html-attributes': '03-links-images.md',
  'html-forms': '05-forms.md',
  'html-semantic': '04-lists.md',
  
  // CSS lessons
  'css-intro': '01-introduction.md',
  'css-selectors': '02-selectors.md',
  'css-box-model': '03-box-model.md',
  'css-flexbox': '04-flexbox.md',
  'css-grid': '05-responsive-design.md',
  
  // JavaScript lessons
  'js-intro': '01-introduction.md',
  'js-functions': '02-functions.md',
  'js-dom': '03-dom-manipulation.md',
  'js-arrays': '04-arrays.md',
  'js-objects': '05-objects.md',
};

/**
 * Get the markdown filename for a lesson ID
 */
export function getMarkdownFilename(lessonId: string): string | null {
  return lessonMapping[lessonId] || null;
}

/**
 * Get all lesson IDs for a category
 */
export function getLessonIds(category: 'html' | 'css' | 'javascript'): string[] {
  return Object.keys(lessonMapping).filter(id => id.startsWith(category));
}
