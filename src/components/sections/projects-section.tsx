
'use client';

import type { Project } from '@/app/data/portfolio-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/project/ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featuredProjects = projects.slice(0, 3); // Show first 3 projects as featured

  if (!featuredProjects || featuredProjects.length === 0) {
    return null; // Don't render the section if there are no projects
  }

  return (
    <section id="my-projects" className="py-12 md:py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center sm:text-left mb-4 sm:mb-0">
            Featured Projects
          </h2>
          <Button asChild variant="outline" className="hover:shadow-sm">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
