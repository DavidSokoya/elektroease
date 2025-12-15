
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggleButton() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null until mounted to avoid hydration mismatch
    return <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10" disabled />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const currentThemeIcon = resolvedTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 md:h-10 md:w-10 rounded-full transition-all duration-300 hover:shadow-sm"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {currentThemeIcon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
