'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Code, Play, RotateCcw, Maximize2, Minimize2, Eye, EyeOff } from 'lucide-react';

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [autoRun] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const autoRunTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleReset = () => {
    setCode(initialCode);
    setPreviewContent('');
  };

  const handleRun = useCallback(() => {
    setPreviewContent(code);
    setPreviewKey(prev => prev + 1);
  }, [code]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Auto-run with debounce
  useEffect(() => {
    if (autoRun && code) {
      if (autoRunTimeoutRef.current) {
        clearTimeout(autoRunTimeoutRef.current);
      }
      autoRunTimeoutRef.current = setTimeout(() => {
        handleRun();
      }, 1000);
    }
    return () => {
      if (autoRunTimeoutRef.current) {
        clearTimeout(autoRunTimeoutRef.current);
      }
    };
  }, [code, autoRun, handleRun]);

  // Run on initial open
  useEffect(() => {
    if (open && !previewContent) {
      // Use setTimeout to avoid calling setState synchronously in effect
      const timer = setTimeout(() => {
        handleRun();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [open, previewContent, handleRun]);

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
      <DialogContent className={`p-0 flex flex-col ${isFullscreen ? 'w-screen h-screen max-w-none' : 'w-[95vw] max-w-7xl h-[90vh]'}`}>
        <div className="flex items-center justify-between px-5 py-3.5 border-b bg-background shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold leading-none">{title}</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowInstructions(!showInstructions)}
                className="h-7 text-xs"
                title={showInstructions ? "Hide instructions" : "Show instructions"}
              >
                {showInstructions ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleFullscreen}
                className="h-7 text-xs"
                title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
              </Button>
            </div>
          </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 flex-1 min-h-0 overflow-hidden">
          {/* Left Panel - Instructions & Code Editor */}
          <div className="flex flex-col gap-4 h-full min-h-0 overflow-hidden">
            {/* Instructions */}
            {showInstructions && (
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Instructions</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {instructions}
                </div>
              </div>
            )}

            {/* Code Editor */}
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-muted border rounded-t-lg shrink-0">
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
              <div className="flex-1 flex border border-t-0 rounded-b-lg overflow-hidden bg-background min-h-0">
                {/* Line Numbers */}
                <div
                  ref={lineNumbersRef}
                  className="py-4 px-2 bg-muted/50 text-muted-foreground text-sm font-mono select-none overflow-hidden border-r shrink-0"
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
                  className="flex-1 py-4 px-4 font-mono text-sm bg-transparent focus:outline-none resize-none leading-6 overflow-y-auto"
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
          <div className="flex flex-col min-h-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-muted border rounded-t-lg shrink-0">
              <span className="text-sm font-medium">Preview</span>
            </div>
            <div className="flex-1 border border-t-0 rounded-b-lg bg-white dark:bg-gray-50 overflow-hidden min-h-0">
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
