
import type { Project } from '@/app/data/portfolio-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, UserCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isGif = project.imageUrl.endsWith('.gif');

  return (
    <Card className="flex flex-col shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-card">
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          data-ai-hint={project.imageAiHint || 'project image'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={isGif} // Unoptimize if it's a GIF
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-primary">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-20 overflow-y-auto">
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
          {project.role && (
          <div>
            <h4 className="font-semibold text-sm mb-1 flex items-center text-foreground/90">
              <UserCheck className="mr-2 h-4 w-4 text-muted-foreground flex-shrink-0" /> Role:
            </h4>
            <p className="text-xs text-muted-foreground">{project.role}</p>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-sm mb-1 text-foreground/90">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
          <div>
          <h4 className="font-semibold text-sm mb-1">Challenges Solved:</h4>
          <p className="text-xs text-muted-foreground">{project.challenges}</p>
        </div>
        {project.solutions && (
        <div>
          <h4 className="font-semibold text-sm mb-1">Solutions:</h4>
          <p className="text-xs text-muted-foreground">{project.solutions}</p>
        </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2 justify-end pt-4 border-t border-border/70">
        {project.liveDemoUrl && project.liveDemoUrl !== '#' && (
          <Button asChild variant="outline" size="sm" className="hover:shadow-sm">
            <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
        {project.githubRepoUrl && project.githubRepoUrl !== '#' && (
          <Button asChild variant="outline" size="sm" className="hover:shadow-sm">
            <Link href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
