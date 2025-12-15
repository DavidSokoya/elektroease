
import type { ProfileData } from '@/app/data/portfolio-data';
import { ArrowRight, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface ProfileSectionProps {
  data: ProfileData;
}

export default function ProfileSection({ data }: ProfileSectionProps) {
  return (
    <section
      id="profile"
      className="relative py-20 md:py-28 scroll-mt-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/david_sokoya.jpg')" }}
      data-ai-hint="abstract background"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-sm"></div>

      {/* Content container */}
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 opacity-0 animate-fade-in-up-slow">{data.name}</h1>
            <h2 className="text-2xl md:text-3xl text-primary-foreground/90 dark:text-slate-200 font-medium mb-4 opacity-0 animate-fade-in-up-normal">{data.title}</h2>
            
            <div className="mb-6 opacity-0 animate-fade-in-up-normal" style={{ animationDelay: '0.3s' }}>
              <Badge variant="secondary" className="text-sm px-4 py-1.5 shadow-md">
                <Briefcase className="mr-2 h-4 w-4" />
                Open to New Opportunities
              </Badge>
            </div>

            <p className="text-slate-200 dark:text-slate-300 max-w-xl mx-auto mb-8 whitespace-pre-line leading-relaxed opacity-0 animate-fade-in-up-fast">{data.bio}</p>
            
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3 opacity-0 animate-fade-in-up-buttons">
              <Button asChild variant="default" size="lg" className="transition-all duration-300 hover:shadow-md">
                <Link href="#my-projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-slate-300 hover:bg-foreground hover:text-background dark:hover:bg-white/10 dark:hover:text-white transition-all duration-300 hover:shadow-md">
                <Link href="https://docs.google.com/document/d/1b9QbXR-ds7rbD9NjnI47mqecxFyJo-ASipy1oFPOdE4/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                  Download Resume <Download className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
