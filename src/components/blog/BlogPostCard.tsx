
import type { BlogPost } from '@/app/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-card">
      {post.imageUrl && (
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint={post.imageAiHint || 'blog post image'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-primary hover:underline">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
          <span>{post.date}</span>
          {post.author && <span className="mx-1.5">•</span>}
          {post.author && <span>By {post.author}</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-4 border-t border-border/70">
        <Button asChild variant="link" size="sm" className="p-0 h-auto text-primary hover:underline">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
