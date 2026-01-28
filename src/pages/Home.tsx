import { SEOHead } from '@/components/seo/SEOHead';
import { PortfolioNavbar } from '@/components/portfolio/PortfolioNavbar';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { AboutSection } from '@/components/portfolio/AboutSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { GitHubProjectsSection } from '@/components/portfolio/GitHubProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { CertificationsSection } from '@/components/portfolio/CertificationsSection';
import { GitHubStatsSection } from '@/components/portfolio/GitHubStatsSection';
import { BlogSection } from '@/components/portfolio/BlogSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { PortfolioFooter } from '@/components/portfolio/PortfolioFooter';

/**
 * Premium Glassmorphism Portfolio for Ashish Upadhyay
 * Software Engineer | Full Stack & SaaS Systems
 */
export default function Home() {
  return (
    <>
      <SEOHead 
        title="Ashish Upadhyay | Software Engineer"
        description="Portfolio of Ashish Upadhyay - Software Engineer specializing in Full Stack Development and SaaS Systems. Turning complex ideas into scalable software solutions."
      />
      
      <div className="min-h-screen bg-background">
        <PortfolioNavbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <GitHubProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <GitHubStatsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <PortfolioFooter />
      </div>
    </>
  );
}
