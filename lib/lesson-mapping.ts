/**
 * Maps sidebar lesson IDs to markdown filenames
 */
export const lessonMapping: Record<string, string> = {
  // HTML lessons
  'html-introduction': '01-introduction.md',
  'html-attributes': '02-attributes.md',
  'html-text-elements': '03-text-elements.md',
  'html-links-images': '04-links-images.md',
  'html-lists': '05-lists.md',
  'html-forms': '06-forms.md',
  'html-tables': '07-tables.md',
  'html-semantic-html': '08-semantic-html.md',
  'html-media-elements': '09-media-elements.md',
  'html-document-structure': '10-document-structure.md',
  'html-entities': '11-entities.md',
  
  // CSS lessons
  'css-introduction': '01-introduction.md',
  'css-selectors': '02-selectors.md',
  'css-box-model': '03-box-model.md',
  'css-flexbox': '04-flexbox.md',
  'css-responsive-design': '05-responsive-design.md',
  'css-typography': '06-typography.md',
  'css-positioning': '07-positioning.md',
  'css-grid-layout': '08-grid-layout.md',
  'css-transitions-animations': '09-transitions-animations.md',
  'css-colors': '10-colors.md',
  'css-units': '11-units.md',
  'css-specificity': '12-specificity.md',
  'css-pseudo-classes': '13-pseudo-classes.md',
  'css-display': '14-display.md',
  'css-backgrounds': '15-backgrounds.md',
  
  // JavaScript lessons
  'javascript-introduction': '01-introduction.md',
  'javascript-functions': '02-functions.md',
  'javascript-dom-manipulation': '03-dom-manipulation.md',
  'javascript-arrays': '04-arrays.md',
  'javascript-objects': '05-objects.md',
  'javascript-conditionals-loops': '06-conditionals-loops.md',
  'javascript-events': '07-events.md',
  'javascript-es6-features': '08-es6-features.md',
  'javascript-async-javascript': '09-async-javascript.md',
  'javascript-operators': '10-operators.md',
  'javascript-scope': '11-scope.md',
  'javascript-type-coercion': '12-type-coercion.md',
  'javascript-error-handling': '13-error-handling.md',
  'javascript-this-keyword': '14-this-keyword.md',
  'javascript-modules': '15-modules.md',
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
