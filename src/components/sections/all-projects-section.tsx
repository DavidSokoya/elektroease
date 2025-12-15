
'use client';

import type { Project } from '@/app/data/portfolio-data';
import ProjectCard from '@/components/project/ProjectCard';

interface AllProjectsSectionProps {
  projects: Project[];
}

export default function AllProjectsSection({ projects }: AllProjectsSectionProps) {
  if (!projects || projects.length === 0) {
    return <p className="text-center py-12">Loading projects...</p>;
  }

  return (
    <section id="all-projects-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6 md:mb-8">
          My Projects
        </h1>
        <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-2xl mx-auto">
          Explore a comprehensive collection of my software development work, showcasing a range of technologies and solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
