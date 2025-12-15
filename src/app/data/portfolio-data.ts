
import type { LucideIcon } from 'lucide-react';

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  contacts: {
    email: string;
    linkedin: string;
    github: string;
    twitter?: string;
  };
}

export interface Skill {
  name: string;
  icon?: string; // For lucide-react icon name
}

export interface SkillCategory {
  name: string;
  icon?: string; // For lucide-react icon name for category
  skills: Skill[];
}

export type ProjectCategory = 'Software' | 'Hardware' | 'Blockchain' | 'AI';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  category: ProjectCategory;
  liveDemoUrl?: string;
  githubRepoUrl?: string;
  technologies: string[];
  role?: string;
  challenges: string;
  solutions?: string;
}

export const profileData: ProfileData = {
  name: 'David Sokoya',
  title: 'Software Engineer',
  bio: "I’m a creative technologist with close to a decade of experience in software and hardware development, building cutting-edge solutions for businesses and individuals. I’m passionate about leveraging emerging technologies such as AI and blockchain to solve real-world problems and drive innovation.",
  avatarUrl: '/images/david_sokoya.jpg',
  contacts: {
    email: 'sokoya08@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sokoyadavid/',
    github: 'https://github.com/davidsokoya?tab=overview&from=2024-01-01&to=2024-12-31',
    twitter: 'https://x.com/davidsokoya_',
  },
};

export const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'C/C++' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    icon: 'Layers',
    skills: [
      { name: 'React' },
      { name: 'NextJS' },
      { name: 'Node.js' },
      { name: 'Express' },
    ],
  },
  {
    name: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MongoDB' },
      { name: 'Supabase' },
      { name: 'Firebase' },
    ],
  },
  {
    name: 'Tools',
    icon: 'Settings2',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'VS Code' },
      { name: 'Postman' },
    ],
  },
  {
    name: 'Other Tech',
    icon: 'Cpu',
    skills: [
      { name: 'APIs' },
      { name: 'CI/CD pipelines' },
      { name: 'Agile methodologies' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'project-electroease',
    title: 'ElektroEase',
    description: 'A user-friendly learning platform for tech hobbyists to build Arduino, IoT, and electronics projects with guided content and clear instructions.',
    imageUrl: '/images/electroease.png',
    imageAiHint: 'electronics learning platform',
    category: 'Software',
    liveDemoUrl: 'https://elektroeasee.vercel.app/',
    githubRepoUrl: 'https://github.com/DavidSokoya/elektroease',
    technologies: ['React', 'NextJS', 'TailwindCSS', 'Firebase'],
    role: 'Full Stack Developer',
    challenges: 'Developing a modular structure for diverse user-generated content and ensuring real-time data synchronization for a seamless learning experience.',
  },
  {
    id: 'project-autogrant',
    title: 'Autogrant',
    description: 'A streamlined platform designed to simplify the grant application process, helping users discover and apply for grants efficiently.',
    imageUrl: '/images/autogrant.png',
    imageAiHint: 'grant application dashboard',
    category: 'Software',
    liveDemoUrl: 'https://autogrant-nine.vercel.app/',
    technologies: ['React', 'NextJS', 'Vercel', 'TailwindCSS'],
    role: 'Lead Developer',
    challenges: 'Building an intuitive and accessible multi-step form, integrating with various grant APIs, and ensuring a secure and reliable application submission workflow.',
  },
  {
    id: 'project-leasbeauty',
    title: "Lea's Beauty",
    description: 'A full-stack e-commerce platform for a beauty brand, featuring product catalogs, user authentication, a shopping cart, and an admin dashboard for managing products and orders.',
    imageUrl: '/images/lea.gif',
    imageAiHint: 'beauty product ecommerce',
    category: 'Software',
    githubRepoUrl: 'https://github.com/DavidSokoya/leasbeauty',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    role: 'Full Stack Developer',
    challenges: 'Implementing secure user authentication and authorization, creating a seamless and responsive checkout flow, and designing a scalable backend architecture.',
  },
  {
    id: 'project-portfolio',
    title: 'Personal Portfolio Website',
    description: 'My personal portfolio (the site you are on now), designed to showcase my skills and projects in a clean, minimalist, and performant manner.',
    imageUrl: '/images/portfolio.png',
    imageAiHint: 'personal website developer',
    category: 'Software',
    liveDemoUrl: 'http://davidsokoya.com/',
    githubRepoUrl: 'https://github.com/davidsokoya/portfolio',
    technologies: ['Next.js', 'React', 'ShadCN UI', 'TailwindCSS', 'Genkit'],
    role: 'Designer & Developer',
    challenges: 'Achieving a highly performant, accessible, and visually consistent site that effectively communicates my personal brand and technical capabilities.',
  },
    {
    id: 'project-genesis-intelligence',
    title: 'Genesis Intelligence Website Redesign',
    description: 'Led the complete redesign and optimization of the Genesis Intelligence website, improving performance and user experience. See the difference: <a href="https://genesisintelligence.org/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Before</a> vs <a href="https://genesisintel.netlify.app/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">After</a>.',
    imageUrl: '/images/genesisintelligence.png',
    imageAiHint: 'website redesign before after',
    category: 'Software',
    liveDemoUrl: 'https://genesisintel.netlify.app/',
    githubRepoUrl: 'https://github.com/DavidSokoya/genesis-intelligence',
    technologies: ['UI/UX Design', 'Next.js', 'Performance Optimization', 'SEO'],
    role: 'Lead Designer & Developer',
    challenges: 'Re-architecting the information flow for clarity and user engagement, significantly improving load times, and implementing a modern, responsive design.',
  },
  {
    id: 'project-resinbybiluxe',
    title: 'ResinbyBiluxe',
    description: 'An elegant e-commerce website for a bespoke resin art business, featuring a product gallery, detailed product pages, and a seamless checkout experience.',
    imageUrl: '/images/resin.png',
    imageAiHint: 'ecommerce art website',
    category: 'Software',
    liveDemoUrl: 'https://biluxe.netlify.app/',
    githubRepoUrl: 'https://github.com/davidsokoya',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    role: 'Frontend Developer',
    challenges: 'Creating a visually appealing and responsive gallery to showcase artistic products, and implementing a user-friendly and secure payment flow.',
  },
];
