// Portfolio data for Ashish Upadhyay

export const portfolioInfo = {
  name: 'Ashish Upadhyay',
  title: 'Software Engineer | Full Stack & SaaS Systems',
  tagline: 'Turning Complex Ideas Into Scalable Software Solutions',
  email: 'ashishupadhyay7353@gmail.com',
  location: 'India',
  about: `Computer Science student passionate about building scalable systems and  platforms with strong problem-solving skills. I specialize in creating efficient, user-friendly applications that solve real-world problems.`,
  resumeUrl:  'https://drive.google.com/uc?id=1A057HSJXaoSN9TP-8CCkjpaIsO_e-rle&export=download',
  socialLinks: {
    github: 'https://github.com/ashish-upadhyay2004',
    linkedin: 'https://www.linkedin.com/in/ashish-upadhyay-95901b24b/',
  },
};

export const skills = {
  frontend: [
    { name: 'React', icon: 'react' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Framer Motion', icon: 'framer' },
    { name: 'shadcn/ui', icon: 'shadcn' },
  ],

  backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Python', icon: 'python' },
    { name: 'REST APIs', icon: 'api' },
    { name: 'Supabase Edge Functions', icon: 'supabase' },
  ],

  databases: [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'SQL Server', icon: 'sql' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'Redis', icon: 'redis' },
  ],

  cloud: [
    { name: 'Vercel', icon: 'vercel' },
    { name: 'AWS', icon: 'aws' },
    { name: 'Docker', icon: 'docker' },
    { name: 'GitHub Actions', icon: 'github' },
    { name: 'Netlify', icon: 'netlify' },
  ],

  languages: [
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'C++', icon: 'cpp' },
  ],

  iot: [
    { name: 'Raspberry Pi', icon: 'raspberrypi' },
    { name: 'Sensors', icon: 'sensor' },
    { name: 'IoT Systems', icon: 'iot' },
    { name: 'Colour Science', icon: 'color' },
  ],

  networking: [
    { name: 'CCNA', icon: 'ccna' },
    { name: 'TCP/IP', icon: 'network' },
    { name: 'Routing & Switching', icon: 'router' },
  ],

  tools: [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Docker Desktop', icon: 'docker' },
  ],
};


export const projects = [
  
  {
    id: 'payroll-system',
    title: 'Employee Payroll Management System',
    description: 'A comprehensive payroll management solution with attendance tracking, leave management, automated payroll processing, PDF payslip generation, and an admin dashboard.',
    features: [
      'Attendance Management',
      'Leave Management',
      'Payroll Processing',
      'PDF Payslip Generation',
      'Admin Dashboard',
      'Employee Self-Service Portal',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    liveUrl: 'https://employment-pay-management-system.vercel.app/',
    githubUrl: 'https://github.com/ashish-upadhyay2004/secure-payslip-suite',
  },
  {
    id: 'supportsphere',
    title: 'SupportSphere – SaaS Ticketing Platform',
    description: 'A modern SaaS ticketing platform with SLA timers, automation rules, multilingual support, comprehensive analytics, and a beautiful dark mode interface.',
    features: [
      'SLA Timers',
      'Automation Rules',
      'Multilingual Support',
      'Analytics Dashboard',
      'Dark Mode',
      'Team Collaboration',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    liveUrl: 'https://ticketing-system-saas.vercel.app/',
    githubUrl: 'https://github.com/ashish-upadhyay2004/ticketing-system-saas',
  },
  {
    id: 'shareplate',
    title: 'Share Plate – Food Donation Platform',
    description: 'A platform connecting food donors with those in need, featuring real-time chat, food listings, admin controls, and comprehensive analytics.',
    features: [
      'Real-time Chat',
      'Food Listings',
      'Admin Controls',
      'Analytics Dashboard',
      'Location-based Search',
      'Donation Tracking',
    ],
    tech: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    liveUrl: 'https://shareplate-kappa.vercel.app/',
    githubUrl: 'https://github.com/ashish-upadhyay2004/shareplate',
  },
  {
    id: 'japanese-ats',
    title: 'Japanese ATS Resume Analyzer',
    description: 'An Applicant Tracking System for Japanese programs and technical roles with automated resume parsing and keyword-based scoring.',
    features: [
      'PDF Resume Parsing',
      'Admin Management Dashboard',
      'Application Status Workflow',
      'Automated Email Notifications',
      'CSV Export Functionality',
      'Keyword-based Scoring',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn-ui', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Resend API'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    liveUrl: 'https://japaneseats-resume-analyzer.vercel.app/',
    githubUrl: 'https://github.com/ashish-upadhyay2004/japanese_ats-resume-analyzer',
  },
];

export const experience = [
  {
    id: 'hibara',
    title: 'Software Engineer Intern',
    company: 'Hibara Corporation',
    location: 'Japan',
    period: 'MAY 2025 - JULY 2024',
    description: 'Developed an IoT-based wastewater color detection system using Raspberry Pi, AS7265x sensor, Python, and SQL, achieving 95% accuracy and reducing manual inspection time by 80% through AI-based spectral analysis and automated alerts.',
    type: 'internship',
  },
  {
    id: 'thaagam',
    title: 'Volunteer ',
    company: 'Thaagam Foundation',
    location: 'India',
    period: 'JULY 2023 -AUG 2023',
    description: 'Contributing technical expertise to support non-profit initiatives and community projects.',
    type: 'volunteer',
  },
  {
    id: 'younity',
    title: 'Internship Trainee',
    company: 'Younity',
    location: 'India',
    period: 'SEP 2022 - OCT 2022',
    description: 'Gained practical experience in business operations, documentation, and workflow management while supporting team activities and organizational processes.',
    type: 'internship',
  },
];

export const certifications = [
   {
    id: 'python',
    title: 'Python Programming Certificate',
    issuer: 'CISCO',
    icon: 'code',
    color: 'yellow',
  },
  {
    id: 'ccna',
    title: 'CCNA - Cisco Certified Network Associate',
    issuer: 'Cisco',
    icon: 'network',
    color: 'cyan',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    issuer: 'Cisco',
    icon: 'shield',
    color: 'green',
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    issuer: 'IIT Bombay',
    icon: 'palette',
    color: 'purple',
  },
  {
    id: 'networking',
    title: 'Advanced Networking',
    issuer: 'CISCO',
    icon: 'server',
    color: 'blue',
  },
];

export const githubUsername = 'ashish-upadhyay2004';
