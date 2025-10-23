'use client';

import { CodePreview } from './code-preview';
import { PracticeEditor } from './practice-editor';
import { ReactElement } from 'react';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Parse the HTML content and replace markers with actual components
  const renderContent = () => {
    const parts: (string | ReactElement)[] = [];
    
    // Combined regex to match both preview and practice markers
    const regex = /<div data-(code-preview|practice-editor)="([^"]+)"><\/div>/g;
    
    let lastIndex = 0;
    let match;
    let key = 0;
    
    console.log('MarkdownRenderer: Looking for markers in content');
    
    while ((match = regex.exec(content)) !== null) {
      const markerType = match[1];
      const encodedData = match[2];
      
      console.log(`Found ${markerType} marker:`, encodedData.substring(0, 50));
      
      // Add HTML content before the match
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }
      
      // Decode and render the appropriate component
      try {
        const data = JSON.parse(
          Buffer.from(encodedData, 'base64').toString('utf-8')
        );
        
        console.log(`Decoded ${markerType} data:`, data);
        
        if (markerType === 'code-preview') {
          parts.push(
            <CodePreview
              key={key++}
              html={data.html}
              css={data.css}
              js={data.js}
              height={data.height}
            />
          );
        } else if (markerType === 'practice-editor') {
          parts.push(
            <div key={key++} data-tour="practice-editor">
              <PracticeEditor
                title={data.title}
                instructions={data.instructions}
                initialCode={data.code}
              />
            </div>
          );
        }
      } catch (error) {
        console.error(`Failed to parse ${markerType} data:`, error);
      }
      
      lastIndex = regex.lastIndex;
    }
    
    console.log('Total parts found:', parts.length);
    
    // Add remaining HTML content
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }
    
    return parts;
  };
  
  const parts = renderContent();
  
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {parts.map((part, index) => 
        typeof part === 'string' ? (
          <div key={`html-${index}`} dangerouslySetInnerHTML={{ __html: part }} />
        ) : (
          <div key={`component-${index}`}>{part}</div>
        )
      )}
    </div>
  );
}
