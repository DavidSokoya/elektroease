
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import ProfileSection from '@/components/sections/profile-section';
import StatsSection from '@/components/sections/stats-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import BackToTopButton from '@/components/layout/back-to-top-button';
import { profileData, skillsData, projectsData } from './data/portfolio-data';
import BlogPreviewSection from '@/components/sections/blog-preview-section';
import ContactSection from '@/components/sections/contact-section';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-grow">
        <ProfileSection data={profileData} />
        <StatsSection />
        <SkillsSection skills={skillsData} />
        <ProjectsSection projects={projectsData} />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <AppFooter />
      <BackToTopButton />
    </div>
  );
}
