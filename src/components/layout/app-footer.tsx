
import Link from 'next/link';
import { profileData } from '@/app/data/portfolio-data';
import { Mail, Linkedin, Github, X } from 'lucide-react';

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          {profileData.contacts.twitter && (
            <Link href={profileData.contacts.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-primary transition-colors">
              <X className="h-6 w-6" />
            </Link>
          )}
          <Link href={profileData.contacts.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href={profileData.contacts.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href={`mailto:${profileData.contacts.email}`} aria-label="Email" className="hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">&copy; {currentYear} {profileData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
