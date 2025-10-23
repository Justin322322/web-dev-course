'use client';

import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Code, Play, RotateCcw } from 'lucide-react';

interface PracticeEditorProps {
  title: string;
  instructions: string;
  initialCode: string;
  height?: string;
}

export function PracticeEditor({ 
  title, 
  instructions, 
  initialCode,
  height = '400px' 
}: PracticeEditorProps) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(initialCode);
  const [previewContent, setPreviewContent] = useState('');
  const [previewKey, setPreviewKey] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setCode(initialCode);
    setPreviewContent('');
  };

  const handleRun = () => {
    setPreviewContent(code);
    setPreviewKey(prev => prev + 1);
  };

  // Sync scroll between line numbers and textarea
  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  // Calculate line numbers
  const lineCount = code.split('\n').length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          <Code className="w-4 h-4 mr-2" />
          Open Practice Editor
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-7xl p-0">
        <div className="flex items-center justify-between px-5 py-3.5 border-b">
          <h2 className="text-lg font-semibold leading-none">{title}</h2>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full opacity-70 hover:opacity-100 transition-all p-1 hover:bg-accent -mr-1"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
          {/* Left Panel - Instructions & Code Editor */}
          <div className="flex flex-col gap-4">
            {/* Instructions */}
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Instructions</h3>
              <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                {instructions}
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 bg-muted border rounded-t-lg">
                <span className="text-sm font-medium">HTML Editor</span>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleReset}
                    className="h-7 text-xs"
                  >
                    <RotateCcw className="w-3 h-3 mr-1" />
                    Reset
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={handleRun}
                    className="h-7 text-xs"
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Run
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex border border-t-0 rounded-b-lg overflow-hidden bg-background">
                {/* Line Numbers */}
                <div 
                  ref={lineNumbersRef}
                  className="flex flex-col py-4 px-2 bg-muted/50 text-muted-foreground text-sm font-mono select-none overflow-hidden border-r"
                  style={{ minWidth: '3.5rem', textAlign: 'right' }}
                >
                  {lineNumbers.map((num) => (
                    <div key={num} className="leading-6 pr-2">
                      {num}
                    </div>
                  ))}
                </div>
                {/* Code Textarea */}
                <textarea
                  ref={textareaRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onScroll={handleScroll}
                  className="flex-1 min-h-[300px] py-4 px-4 font-mono text-sm bg-transparent focus:outline-none resize-none leading-6"
                  spellCheck={false}
                  style={{ 
                    tabSize: 2,
                    lineHeight: '1.5rem'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 bg-muted border rounded-t-lg">
              <span className="text-sm font-medium">Preview</span>
            </div>
            <div className="flex-1 border border-t-0 rounded-b-lg bg-white dark:bg-gray-50 overflow-hidden">
              {previewContent ? (
                <iframe
                  key={previewKey}
                  title="Practice Preview"
                  sandbox="allow-scripts"
                  srcDoc={previewContent}
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    minHeight: height,
                    border: 'none',
                    display: 'block'
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center">
                    <Play className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Click &quot;Run&quot; to see your code in action</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
