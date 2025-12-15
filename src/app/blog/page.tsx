
'use client';

import { useState, useMemo } from 'react';
import { blogPostsData } from '@/app/data/blog-data';
import BlogPostCard from '@/components/blog/BlogPostCard';
import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import BackToTopButton from '@/components/layout/back-to-top-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ALL_POSTS_FILTER = 'All Posts';

export default function BlogListingPage() {
  const [selectedTag, setSelectedTag] = useState<string>(ALL_POSTS_FILTER);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    blogPostsData.forEach(post => {
      post.tags?.forEach(tag => tagsSet.add(tag));
    });
    return [ALL_POSTS_FILTER, ...Array.from(tagsSet).sort()];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedTag === ALL_POSTS_FILTER) {
      return blogPostsData;
    }
    return blogPostsData.filter(post => post.tags?.includes(selectedTag));
  }, [selectedTag]);

  // Metadata would typically be in a separate function for Server Components,
  // but for client components, you might manage document.title via useEffect or a library.
  // For simplicity, we'll just note that metadata for this client page needs careful handling.
  // For now, we can set a generic title.
  if (typeof window !== 'undefined') {
    document.title = selectedTag === ALL_POSTS_FILTER 
      ? 'Blog - David Sokoya' 
      : `${selectedTag} Posts - David Sokoya's Blog`;
  }


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6 md:mb-8">
            My Blog
          </h1>

          {allTags.length > 1 && ( // Only show filters if there are tags
            <div className="flex justify-center flex-wrap gap-2 mb-8 md:mb-10">
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? 'default' : 'outline'}
                  onClick={() => setSelectedTag(tag)}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ease-in-out hover:shadow-sm focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    selectedTag === tag ? 'shadow-md' : 'hover:bg-accent/80'
                  )}
                >
                  {tag}
                </Button>
              ))}
            </div>
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg">
              No blog posts found {selectedTag !== ALL_POSTS_FILTER ? `for the tag "${selectedTag}"` : "yet. Check back soon!"}
            </p>
          )}
        </div>
      </main>
      <AppFooter />
      <BackToTopButton />
    </div>
  );
}
