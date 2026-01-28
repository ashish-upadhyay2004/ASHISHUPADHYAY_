import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Database, Cloud, Wrench, Layout,
  Server, Globe, Cpu, GitBranch, Palette,
  Terminal, Box, Layers, Shield, Zap
} from 'lucide-react';
import { skills } from '@/data/portfolio';

const categoryIcons: Record<string, typeof Code> = {
  frontend: Layout,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  tools: Wrench,
   languages: Terminal,
  iot: Cpu,
  networking: Shield,
};

const categoryColors: Record<string, string> = {
  frontend: 'from-primary to-cyan-400',
  backend: 'from-green-400 to-emerald-500',
  databases: 'from-orange-400 to-amber-500',
  cloud: 'from-purple-400 to-violet-500',
  tools: 'from-pink-400 to-rose-500',
  // ADD THESE
  languages: 'from-indigo-400 to-blue-500',
  iot: 'from-teal-400 to-emerald-500',
  networking: 'from-red-400 to-orange-500',
};

const skillIcons: Record<string, typeof Code> = {
  react: Code,
  typescript: Terminal,
  tailwind: Palette,
  nextjs: Globe,
  framer: Zap,
  html: Code,
  css: Palette,
  nodejs: Server,
  express: Layers,
  python: Cpu,
  api: Globe,
  cpp: Terminal,
  php: Code,
  postgresql: Database,
  supabase: Shield,
  mongodb: Database,
  redis: Zap,
  mysql: Database,
  vercel: Cloud,
  aws: Cloud,
  docker: Box,
  github: GitBranch,
  server: Server,
  git: GitBranch,
  vscode: Code,
  figma: Palette,
  postman: Globe,
  matlab: Cpu,
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(skills) as [keyof typeof skills, typeof skills.frontend][];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--glow-primary)_0%,transparent_70%)] opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, categorySkills], categoryIndex) => {
            const CategoryIcon = categoryIcons[category];
            const gradientClass = categoryColors[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                    <CategoryIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold capitalize">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => {
                    const SkillIcon = skillIcons[skill.icon] || Code;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <SkillIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
