'use client';

import { HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

export function TourTrigger() {
  const startTour = () => {
    localStorage.removeItem('hasSeenTour');
    window.location.reload();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={startTour}
      title="Start Tour"
      className="h-9 w-9"
    >
      <HelpCircle className="h-5 w-5" />
    </Button>
  );
}
