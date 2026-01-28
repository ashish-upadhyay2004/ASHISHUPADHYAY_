import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Shield, Palette, Server, Award, Code } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const iconMap: Record<string, typeof Network> = {
  network: Network,
  shield: Shield,
  palette: Palette,
  server: Server,
  code: Code,
};

const colorMap: Record<string, { bg: string; text: string; glow: string }> = {
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]',
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]',
  },
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    glow: 'group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]',
  },
};

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            const colors = colorMap[cert.color] || colorMap.cyan;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 ${colors.glow}`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${colors.text}`} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
