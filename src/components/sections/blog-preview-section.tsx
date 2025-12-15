
import Link from 'next/link';
import { blogPostsData } from '@/app/data/blog-data';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MAX_PREVIEW_POSTS = 3;

export default function BlogPreviewSection() {
  const recentPosts = blogPostsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_PREVIEW_POSTS);

  if (recentPosts.length === 0) {
    return null; // Don't render if no posts
  }

  return (
    <section id="blog-preview" className="py-12 md:py-16 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center sm:text-left mb-4 sm:mb-0">
            From The Blog
          </h2>
          <Button asChild variant="outline" className="hover:shadow-sm">
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
