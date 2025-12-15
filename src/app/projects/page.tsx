
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import BackToTopButton from '@/components/layout/back-to-top-button';
import { projectsData } from '@/app/data/portfolio-data';
import AllProjectsSection from '@/components/sections/all-projects-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Projects - David Sokoya',
  description: 'A comprehensive list of projects by David Sokoya, spanning software, hardware, blockchain, and AI.',
};

export default function AllProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-grow">
        <AllProjectsSection projects={projectsData} />
      </main>
      <AppFooter />
      <BackToTopButton />
    </div>
  );
}
