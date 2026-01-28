import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { PortfolioFooter } from '@/components/portfolio/PortfolioFooter';
import { SEOHead } from '@/components/seo/SEOHead';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image: string | null;
  published_at: string | null;
  created_at: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, cover_image, published_at, created_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setIsLoading(false);
  };

  const estimateReadTime = (excerpt: string | null) => {
    // Rough estimate based on excerpt length
    const words = excerpt?.split(' ').length || 100;
    return Math.max(3, Math.ceil(words / 50)) + ' min read';
  };

  return (
    <>
      <SEOHead
        title="Blog | Ashish Upadhyay"
        description="Articles about software development, web technologies, and building scalable systems."
      />

      <div className="min-h-screen bg-background">
        <PortfolioNavbar />

        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </Button>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Thoughts on software development, web technologies, and building scalable systems.
              </p>
            </motion.div>

            {/* Posts Grid */}
            {isLoading ? (
              <div className="flex justify-center py-24">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : posts.length === 0 ? (
              <div className="glass-card rounded-2xl p-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
                <p className="text-muted-foreground">
                  Check back soon for new articles!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group glass-card rounded-2xl overflow-hidden block hover:border-primary/50 transition-all duration-300"
                    >
                      {/* Cover Image */}
                      {post.cover_image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.cover_image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>

                        {post.excerpt && (
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {format(
                                new Date(post.published_at || post.created_at),
                                'MMM d, yyyy'
                              )}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {estimateReadTime(post.excerpt)}
                            </span>
                          </div>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </main>

        <PortfolioFooter />
      </div>
    </>
  );
}
