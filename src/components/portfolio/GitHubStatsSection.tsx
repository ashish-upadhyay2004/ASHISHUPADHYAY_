import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Star, GitFork, Code2, Activity } from 'lucide-react';
import { githubUsername } from '@/data/portfolio';

export function GitHubStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--glow-primary)_0%,transparent_70%)] opacity-20" />
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
              GitHub <span className="gradient-text">Stats</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My open source contributions and activity
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* GitHub Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* GitHub Stats Card */}
          <div className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Stats Overview</h3>
            </div>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=06b6d4&text_color=94a3b8&icon_color=06b6d4&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Top Languages Card */}
          <div className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Top Languages</h3>
            </div>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=06b6d4&text_color=94a3b8&bg_color=00000000`}
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <div className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Github className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">Contribution Graph</h3>
            </div>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&bg_color=00000000&color=06b6d4&line=8b5cf6&point=06b6d4&area=true&area_color=06b6d4`}
              alt="Contribution Graph"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Github className="h-5 w-5" />
            View Full Profile on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
