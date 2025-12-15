
'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Scroll back to top"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full shadow-md transition-opacity duration-300 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
