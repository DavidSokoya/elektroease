
import { blogPostsData, type BlogPost } from '@/app/data/blog-data';
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import BackToTopButton from '@/components/layout/back-to-top-button';
import Image from 'next/image';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - David Sokoya's Blog`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.imageUrl ? [{ url: post.imageUrl, alt: post.title }] : [],
    }
  };
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-grow py-12 md:py-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2">
              <div className="flex items-center">
                <CalendarDays className="mr-1.5 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              {post.author && (
                <div className="flex items-center">
                  <UserCircle className="mr-1.5 h-4 w-4" />
                  <span>By {post.author}</span>
                </div>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            )}
          </header>

          {post.imageUrl && (
            <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 md:mb-12 rounded-lg overflow-hidden shadow-md">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={post.imageAiHint || 'blog post header image'}
                priority // Prioritize loading the main blog image
              />
            </div>
          )}
          
          {/* Basic styling for HTML content. More advanced styling can be added. */}
          <div
            className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none 
                       prose-headings:font-bold prose-headings:text-foreground 
                       prose-p:text-foreground/90 prose-p:leading-relaxed
                       prose-a:text-primary hover:prose-a:underline
                       prose-strong:text-foreground
                       prose-ul:list-disc prose-ul:pl-6 prose-li:text-foreground/80
                       prose-ol:list-decimal prose-ol:pl-6
                       prose-blockquote:border-l-primary prose-blockquote:pl-4 prose-blockquote:italic
                       prose-code:bg-muted prose-code:p-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                       prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-pre:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <AppFooter />
      <BackToTopButton />
    </div>
  );
}

// Tailwind CSS JIT might miss dynamically generated prose classes if not used elsewhere.
// If you have issues with prose styling, ensure tailwind.config.ts content array covers this file.
// And potentially install @tailwindcss/typography if not already implicitly available or add its styles manually.
// For ShadCN, basic prose styling is usually handled well.
// We can refine the prose classes further if needed.
