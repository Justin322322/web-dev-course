'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CodePreviewProps {
  html?: string;
  css?: string;
  js?: string;
  height?: string;
}

export function CodePreview({ html = '', css = '', js = '', height = '300px' }: CodePreviewProps) {
  const [key, setKey] = useState(0);

  // Debug: Log what we're receiving
  console.log('CodePreview props:', { html: html.substring(0, 100), css, js, height });

  // Check if html already contains a full document
  const isFullDocument = html.trim().toLowerCase().startsWith('<!doctype');

  const content = isFullDocument
    ? html // Use the full HTML document as-is
    : `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { margin: 16px; font-family: system-ui, -apple-system, sans-serif; }
      ${css}
    </style>
  </head>
  <body>
    ${html}
    <script>
      try {
        ${js}
      } catch (error) {
        console.error('Error in preview:', error);
      }
    </script>
  </body>
</html>`;

  console.log('Generated content:', content.substring(0, 200));

  const handleRefresh = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="my-4 border rounded-lg overflow-hidden bg-background">
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
        <span className="text-sm font-medium">Preview</span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleRefresh}
          className="h-7 text-xs"
        >
          Refresh
        </Button>
      </div>
      <div className="bg-white dark:bg-gray-50">
        <iframe
          key={key}
          title="Code Preview"
          sandbox="allow-scripts"
          srcDoc={content}
          style={{ 
            width: '100%', 
            height, 
            border: 'none',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
}
