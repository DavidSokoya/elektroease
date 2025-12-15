
'use client';

import Link from 'next/link';
import { MountainIcon, Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";
import type { LinkProps } from 'next/link';
import type React from 'react';
import { useState } from 'react';
import { ThemeToggleButton } from './theme-toggle-button';
import { usePathname } from 'next/navigation'; 

interface NavLinkItem {
  href: string;
  label: string;
  type: 'scroll' | 'navigate';
}

interface SmoothScrollLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SmoothScrollLink = ({ href, children, className, onClick, ...props }: SmoothScrollLinkProps) => {
  const currentPathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // href is expected to be like '/#section-id' for scroll links
    // or '/some-page' for direct navigation links
    const isScrollLinkToHomepage = typeof href === 'string' && href.startsWith('/#');

    if (isScrollLinkToHomepage && currentPathname === '/') {
      event.preventDefault();
      const targetId = href.substring(2); // remove '/#'
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If it's a scroll link but not on homepage, or a direct navigation link,
    // Next.js Link will handle the navigation. The browser will attempt to scroll to hash if present.
    // `scroll-margin-top` on target sections should handle sticky header offset.

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
};

export default function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const pathname = usePathname(); // No longer directly needed in AppHeader for navLink rendering logic

  const navLinks: NavLinkItem[] = [
    { href: "/", label: "Home", type: "navigate" },
    { href: "/#my-projects", label: "Portfolio", type: "scroll" },
    { href: "/#blog-preview", label: "Blog", type: "scroll" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (link: NavLinkItem, isMobile: boolean = false) => {
    const commonClasses = isMobile
      ? "text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
      : "text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md";
    
    return (
      <SmoothScrollLink
        key={link.label}
        href={link.href}
        className={commonClasses}
        onClick={isMobile ? handleLinkClick : undefined}
        // Default prefetch behavior (true) is generally fine for header links
      >
        {link.label}
      </SmoothScrollLink>
    );
  };

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">David Sokoya</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => renderNavLink(link))}
          <ThemeToggleButton />
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent/10 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6 bg-card">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 mb-4"
                  onClick={handleLinkClick}
                  prefetch={false}
                >
                  <MountainIcon className="h-7 w-7 text-primary" />
                  <span className="text-2xl font-semibold text-foreground">David Sokoya</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      {renderNavLink(link, true)}
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
