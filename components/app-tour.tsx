'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { CallBackProps, STATUS, Step } from 'react-joyride';

const Joyride = dynamic(() => import('react-joyride'), { ssr: false });

// Base steps that are always available
const baseSteps: Step[] = [
  {
    target: 'body',
    content: 'Welcome to the Web Development Course! Let me show you around.',
    placement: 'center',
  },
  {
    target: '[data-tour="sidebar"]',
    content: 'This is your course navigation. Browse through HTML, CSS, and JavaScript lessons here.',
    placement: 'right',
  },
  {
    target: '[data-tour="progress"]',
    content: 'Track your learning progress here. Complete lessons to see your progress grow!',
    placement: 'bottom',
  },
  {
    target: '[data-tour="theme-toggle"]',
    content: 'Switch between light and dark mode for comfortable learning.',
    placement: 'bottom',
  },
];

// Lesson page specific steps
const lessonSteps: Step[] = [
  {
    target: '[data-tour="lesson-content"]',
    content: 'Your lesson content appears here with interactive examples and explanations.',
    placement: 'top',
  },
  {
    target: '[data-tour="lesson-actions"]',
    content: 'Mark lessons as complete and navigate between lessons using these buttons.',
    placement: 'top',
  },
  {
    target: '[data-tour="practice-editor"]',
    content: 'Try out code in the practice editor and see live results!',
    placement: 'top',
  },
];

export function AppTour() {
  const [run, setRun] = useState(false);
  const pathname = usePathname();

  // Determine which steps to show based on current page
  const isLessonPage = pathname && pathname.split('/').filter(Boolean).length >= 2;
  const tourSteps = isLessonPage ? [...baseSteps, ...lessonSteps] : baseSteps;

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('hasSeenTour');
    if (!hasSeenTour) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => setRun(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
      localStorage.setItem('hasSeenTour', 'true');
    }
  };

  return (
    <Joyride
      steps={tourSteps}
      run={run}
      continuous
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: '#2563eb',
          zIndex: 10000,
        },
      }}
    />
  );
}
