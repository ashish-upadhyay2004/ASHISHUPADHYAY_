import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { PortfolioFooter } from '@/components/portfolio/PortfolioFooter';
import { SEOHead } from '@/components/seo/SEOHead';

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  published_at: string | null;
  created_at: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (error || !data) {
      navigate('/blog');
      return;
    }

    setPost(data);
    setIsLoading(false);
  };

  const estimateReadTime = (content: string) => {
    const words = content.split(' ').length;
    return Math.max(3, Math.ceil(words / 200)) + ' min read';
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, i) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-semibold mt-8 mb-4">{line.slice(4)}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold mt-10 mb-4">{line.slice(3)}</h2>;
      }
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-3xl font-bold mt-12 mb-6">{line.slice(2)}</h1>;
      }
      // Code blocks
      if (line.startsWith('```')) {
        return null; // Handle multi-line code blocks separately if needed
      }
      // Inline code
      const codeRegex = /`([^`]+)`/g;
      const processedLine = line.replace(codeRegex, '<code class="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">$1</code>');
      // Bold
      const boldLine = processedLine.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      // Links
      const linkLine = boldLine.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
      // Empty lines
      if (!line.trim()) {
        return <br key={i} />;
      }
      // Regular paragraphs
      return (
        <p
          key={i}
          className="text-muted-foreground leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: linkLine }}
        />
      );
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center animated-bg">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt || `Read ${post.title} on Ashish Upadhyay's blog`}
        image={post.cover_image || undefined}
      />

      <div className="min-h-screen bg-background">
        <PortfolioNavbar />

        <main className="pt-24 pb-16">
          <article className="max-w-3xl mx-auto px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>

            {/* Cover Image */}
            {post.cover_image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8"
              >
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {format(
                    new Date(post.published_at || post.created_at),
                    'MMMM d, yyyy'
                  )}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {estimateReadTime(post.content)}
                </span>
              </div>
            </motion.header>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert max-w-none"
            >
              {renderContent(post.content)}
            </motion.div>

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <Button asChild>
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Posts
                </Link>
              </Button>
            </motion.div>
          </article>
        </main>

        <PortfolioFooter />
      </div>
    </>
  );
}
