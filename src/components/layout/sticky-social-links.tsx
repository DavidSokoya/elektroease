
'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileData } from '@/app/data/portfolio-data';

export default function StickySocialLinks() {
  return (
    <aside className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {profileData.contacts.twitter && (
        <Button asChild variant="outline" size="icon" aria-label="X / Twitter" className="rounded-full shadow-md hover:shadow-lg transition-shadow">
          <Link href={profileData.contacts.twitter} target="_blank" rel="noopener noreferrer">
            <X className="h-5 w-5" />
          </Link>
        </Button>
      )}
      <Button asChild variant="outline" size="icon" aria-label="LinkedIn" className="rounded-full shadow-md hover:shadow-lg transition-shadow">
        <Link href={profileData.contacts.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon" aria-label="GitHub" className="rounded-full shadow-md hover:shadow-lg transition-shadow">
        <Link href={profileData.contacts.github} target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon" aria-label="Email Me" className="rounded-full shadow-md hover:shadow-lg transition-shadow">
        <Link href={`mailto:${profileData.contacts.email}`}>
          <Mail className="h-5 w-5" />
        </Link>
      </Button>
    </aside>
  );
}
