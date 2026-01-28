import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star, GitFork, Code2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGitHubRepos, GitHubRepo } from '@/hooks/useGitHubRepos';
import { githubUsername } from '@/data/portfolio';

// Map GitHub languages to colors
const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-500',
  HTML: 'bg-orange-500',
  CSS: 'bg-purple-500',
  PHP: 'bg-indigo-400',
  'C++': 'bg-pink-500',
  Java: 'bg-red-500',
  Go: 'bg-cyan-400',
  Rust: 'bg-orange-600',
  Vue: 'bg-emerald-500',
  Svelte: 'bg-red-400',
};

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasLiveUrl = repo.homepage && repo.homepage.trim() !== '';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {repo.name}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {repo.stargazers_count}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
        {repo.description || 'No description available'}
      </p>

      {/* Topics/Tech */}
      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
          <span className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
            <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`} />
            {repo.language}
          </span>
        )}
        {repo.topics?.slice(0, 2).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 mt-auto">
        {hasLiveUrl ? (
          <Button asChild size="sm" className="flex-1 btn-glow">
            <a href={repo.homepage!} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Website
            </a>
          </Button>
        ) : (
          <Button asChild variant="outline" size="sm" className="flex-1 glass-card border-glass-border">
            <a
  href={repo.html_url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View source code on GitHub"
  title="View source code on GitHub"
>

              <Github className="mr-2 h-4 w-4" />
              View Code
            </a>
          </Button>
        )}
        {hasLiveUrl && (
          <Button asChild variant="outline" size="sm" className="glass-card border-glass-border">
            <a
  href={repo.html_url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="View source code on GitHub"
  title="View source code on GitHub"
>

              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

export function GitHubProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { repos, loading, error } = useGitHubRepos(githubUsername, 6);

  return (
    <section id="github-projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--glow-primary)_0%,transparent_70%)] opacity-10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Github className="h-10 w-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              GitHub <span className="gradient-text">Repositories</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live data from my GitHub profile - always up to date
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Loading repositories...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Unable to load repositories. Please check back later.</p>
          </div>
        )}

        {/* Repos Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <RepoCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        )}

        {/* View All Link */}
        {!loading && !error && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <a
              href={`https://github.com/${githubUsername}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Github className="h-5 w-5" />
              View All Repositories on GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
