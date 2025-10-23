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
 * Parse markdown content to HTML with syntax highlighting
 */
export async function parseMarkdown(markdown: string): Promise<ParsedMarkdown> {
  // Parse frontmatter if present
  const { content, data } = matter(markdown);

  // Process markdown to HTML
  const processedContent = await remark()
    .use(gfm) // GitHub Flavored Markdown
    .use(html, { sanitize: false }) // Allow HTML in markdown
    .process(content);

  return {
    content: processedContent.toString(),
    data,
  };
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
