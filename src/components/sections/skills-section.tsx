
'use client';

import type { SkillCategory } from '@/app/data/portfolio-data';
import * as LucideIcons from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

const getIcon = (name?: string): LucideIcons.LucideIcon | null => {
  if (!name || !(name in LucideIcons)) return null;
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as LucideIcons.LucideIcon;
  if (typeof IconComponent === 'function') {
    return IconComponent;
  }
  return null;
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) {
    return null; 
  }

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-8 md:py-10 bg-background scroll-mt-20"> {/* Adjusted padding */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">Technical Skills</h2> {/* Adjusted margin bottom */}
        <p className="text-center text-muted-foreground text-sm mb-6 md:mb-8 max-w-xl mx-auto"> {/* Adjusted margin bottom */}
          I&apos;m proficient in a variety of modern technologies and tools, continuously expanding my skillset.
        </p>
        
        <div className="overflow-hidden no-scrollbar mt-4 md:mt-6">
          <div className="flex animate-marquee hover:pause">
            {duplicatedSkills.map((category, index) => {
              const CategoryIcon = getIcon(category.icon);
              return (
                <div 
                  key={`${category.name}-${index}`} 
                  aria-hidden={index >= skills.length ? "true" : undefined}
                  className="flex-shrink-0 w-60 sm:w-64 md:w-72 p-3 mr-4 rounded-lg border border-border/50 bg-card/50 shadow-sm" // Increased padding, added border/bg
                >
                  <h3 className="flex items-center text-lg font-bold text-primary mb-2.5"> {/* Increased font size, weight, margin */}
                    {CategoryIcon && <CategoryIcon className="mr-2 h-5 w-5 flex-shrink-0" />} {/* Adjusted icon size & margin */}
                    {category.name}
                  </h3>
                  <ul className="space-y-1"> {/* Increased spacing */}
                    {category.skills.map((skill) => {
                      return (
                        <li key={skill.name} className="flex items-center text-foreground/80">
                          <CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-primary flex-shrink-0" /> {/* Adjusted icon size & margin */}
                          <span className="text-sm">{skill.name}</span> {/* Increased text size */}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
