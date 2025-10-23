import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import matter from 'gray-matter';

export interface ParsedMarkdown {
  content: string;
  data: {
    title?: string;
    description?: string;
    [key: string]: unknown;
  };
}

/**
 * Parse markdown content to HTML with syntax highlighting and code previews
 */
export async function parseMarkdown(markdown: string): Promise<ParsedMarkdown> {
  // Parse frontmatter if present
  const { content, data } = matter(markdown);

  // Transform preview blocks before processing
  const transformedContent = transformPreviewBlocks(content);

  // Process markdown to HTML
  const processedContent = await remark()
    .use(gfm) // GitHub Flavored Markdown
    .use(html, { sanitize: false }) // Allow HTML in markdown
    .process(transformedContent);

  return {
    content: processedContent.toString(),
    data,
  };
}

/**
 * Transform :::preview and :::practice blocks into special markers
 */
function transformPreviewBlocks(markdown: string): string {
  // First, transform practice blocks
  markdown = transformPracticeBlocks(markdown);
  
  // Match :::preview blocks with optional height parameter
  const previewRegex = /:::preview(?:\s+height=["']?(\d+(?:px|%)?)["']?)?\s*\n([\s\S]*?)\n:::/g;
  
  return markdown.replace(previewRegex, (match, height, content) => {
    console.log('Processing preview block, content length:', content.length);
    console.log('Content preview:', content.substring(0, 200));
    
    // More flexible regex patterns that handle whitespace
    const htmlMatch = content.match(/```html\s*\n([\s\S]*?)\n```/);
    const cssMatch = content.match(/```css\s*\n([\s\S]*?)\n```/);
    const jsMatch = content.match(/```(?:js|javascript)\s*\n([\s\S]*?)\n```/);
    
    const htmlCode = htmlMatch ? htmlMatch[1].trim() : '';
    const cssCode = cssMatch ? cssMatch[1].trim() : '';
    const jsCode = jsMatch ? jsMatch[1].trim() : '';
    
    console.log('Extracted HTML length:', htmlCode.length);
    console.log('Extracted CSS length:', cssCode.length);
    console.log('Extracted JS length:', jsCode.length);
    
    const heightValue = height || '300px';
    
    // Encode the data as base64 to preserve it through markdown processing
    const previewData = Buffer.from(JSON.stringify({
      html: htmlCode,
      css: cssCode,
      js: jsCode,
      height: heightValue
    })).toString('base64');
    
    // Return the original code blocks plus a special marker
    return `${content}\n\n<div data-code-preview="${previewData}"></div>`;
  });
}

/**
 * Transform :::practice blocks into special markers for interactive editor
 */
function transformPracticeBlocks(markdown: string): string {
  const practiceRegex = /:::practice(?:\s+title=["']([^"']+)["'])?\s*\n([\s\S]*?)\n:::/g;
  
  return markdown.replace(practiceRegex, (match, title, content) => {
    // Extract instructions (text before code block)
    const instructionsMatch = content.match(/^([\s\S]*?)(?=```)/);
    const instructions = instructionsMatch ? instructionsMatch[1].trim() : '';
    
    // Extract HTML code
    const htmlMatch = content.match(/```html\s*\n([\s\S]*?)\n```/);
    const htmlCode = htmlMatch ? htmlMatch[1].trim() : '';
    
    const practiceTitle = title || 'Practice Exercise';
    
    // Encode the data as base64
    const practiceData = Buffer.from(JSON.stringify({
      title: practiceTitle,
      instructions,
      code: htmlCode
    })).toString('base64');
    
    return `<div data-practice-editor="${practiceData}"></div>`;
  });
}

/**
 * Extract code blocks from markdown for separate rendering
 */
export function extractCodeBlocks(markdown: string): Array<{
  language: string;
  code: string;
  title?: string;
}> {
  const codeBlockRegex = /```(\w+)(?:\s+(.+?))?\n([\s\S]*?)```/g;
  const blocks: Array<{ language: string; code: string; title?: string }> = [];
  
  let match;
  while ((match = codeBlockRegex.exec(markdown)) !== null) {
    blocks.push({
      language: match[1],
      code: match[3].trim(),
      title: match[2],
    });
  }
  
  return blocks;
}
