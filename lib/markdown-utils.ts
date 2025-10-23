/**
 * Remove the first H1 heading from HTML content to avoid duplication
 * when the title is already displayed separately
 */
export function removeFirstH1(html: string): string {
  // Match the first <h1>...</h1> tag and remove it
  return html.replace(/<h1[^>]*>.*?<\/h1>/, '');
}

/**
 * Extract the first H1 heading text from HTML content
 */
export function extractFirstH1(html: string): string | null {
  const match = html.match(/<h1[^>]*>(.*?)<\/h1>/);
  return match ? match[1].replace(/<[^>]*>/g, '') : null;
}
