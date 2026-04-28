import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ChevronDown, 
  Download, 
  ExternalLink, 
  Code2, 
  MonitorPlay, 
  Layers,
  Terminal,
  Database,
  Smartphone,
  Server,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience & Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { category: 'Frontend', icon: <MonitorPlay className="w-5 h-5" />, items: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design', 'Tailwind CSS'] },
    { category: 'Backend', icon: <Server className="w-5 h-5" />, items: ['Node.js', 'Python', 'Flask', 'RESTful APIs', 'JWT Auth'] },
    { category: 'Database', icon: <Database className="w-5 h-5" />, items: ['PostgreSQL', 'SQL', 'Redis', 'SQLAlchemy'] },
    { category: 'Tools & Methods', icon: <Terminal className="w-5 h-5" />, items: ['Git & GitHub', 'Agile/Scrum', 'Systems Analysis', 'Project Management', 'Business Process Modeling'] },
  ];

  const experiences = [
    {
      type: 'work',
      role: 'Founder & Operations Lead',
      company: 'AUTO-CONCIERGE',
      location: 'Nairobi, Kenya',
      period: '2024 - Present',
      description: 'Founded a specialized concierge service managing end-to-end automotive errands and logistics for private clients. Coordinated time-sensitive schedules, maintained detailed service logs for accountability, and negotiated with third-party service providers to ensure top service quality.',
    },
    {
      type: 'edu',
      role: 'Certificate in Software Engineering',
      company: 'Moringa School',
      location: 'Nairobi, Kenya',
      period: '2024 - 2025',
      description: 'Intensive full-stack web development program focusing on JavaScript, React, Node.js, and RESTful APIs. Built and deployed full-stack applications in Agile cross-functional teams under tight deadlines.',
    },
    {
      type: 'edu',
      role: 'Diploma in Business Information Technology',
      company: 'Strathmore University',
      location: 'Nairobi, Kenya',
      period: '2023 - 2025',
      description: 'Focused on Systems Analysis & Design, Database Management (SQL), Business Process Modeling & Optimization, and IT Project Management. Designed and documented business-driven IT solutions to align technology with operational needs.',
    }
  ];

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'Architected a multi-layer system featuring a React 18 frontend, Python Flask API, and PostgreSQL data layer with Redis caching for high-concurrency (1,000+ users). Developed a role-aware AI Chat Manager using GPT-3.5-turbo, implemented strict RBAC and JWT authentication for HIPAA-ready data protection, and engineered a 3-second polling system for instant emergency communication.',
      image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGFzaGJvYXJkJTIwdWl8ZW58MXx8fHwxNzc3MzU5NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React 18', 'Python Flask', 'PostgreSQL', 'Redis', 'GPT-3.5-turbo', 'JWT'],
      link: '#'
    },
    {
      title: 'Visitor Management System',
      description: 'Built a full-stack system to log and manage visitor entries and exits with a searchable backend database for security audits. Replaced manual paper logs with a streamlined UI/UX, effectively improving check-in speed by 75% for gated communities.',
      image: 'https://images.unsplash.com/photo-1750056393288-fd4a4a77cae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBjaGVjayUyMGluJTIwYXBwJTIwdWl8ZW58MXx8fHwxNzc3MzU5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Frontend', 'Backend', 'Database Design', 'UI/UX'],
      link: '#'
    },
    {
      title: 'NaiSmart – SACCO Management System',
      description: 'Developed a comprehensive transport management platform utilizing Flask and SQLAlchemy. Designed complex database schemas (ERD/DFD) to handle fleet logistics and administrative workflows efficiently.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVldCUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmQlMjB1aXxlbnwxfHx8fDE3NzczNTk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Flask', 'SQLAlchemy', 'System Design'],
      link: '#'
    },
    {
      title: 'The Suburban Escape – Airbnb System',
      description: 'Built a custom inventory and booking app for a 5-bedroom luxury property to fully automate amenities tracking, check-in schedules, and check-out logs, ensuring smooth day-to-day hospitality operations.',
      image: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBpbnRlcmlvciUyMGhvbWV8ZW58MXx8fHwxNzc3MzU5NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Full-Stack', 'Inventory Management', 'Automation'],
      link: '#'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ndegwas03@gmail.com');
    toast.success('Email address copied to clipboard!');
  };
  
  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+254 717540110');
    toast.success('Phone number copied to clipboard!');
  };

  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            SN.
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${activeSection === item.id ? 'text-emerald-400' : 'text-slate-400'}`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="https://github.com" target="_blank" rel="noreferrer"
            className="md:hidden text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 z-10">
              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-emerald-400 font-mono mb-4"
              >
                Hi, my name is
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
              >
                Samuel Ndegwa.
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight"
              >
                I build systems that bridge ops & tech.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
              >
                I am a proactive problem-solver blending operational leadership with technical expertise. I thrive in fast-paced, high-responsibility environments, building scalable, user-focused systems that deliver measurable impact.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2">
                  Check out my work
                </button>
                <button className="px-8 py-4 border border-slate-700 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-semibold rounded-lg transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" /> Download CV
                </button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
              className="hidden md:flex md:w-2/5 justify-end relative"
            >
              <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 opacity-20 blur-3xl absolute -z-10 animate-pulse"></div>
              <div className="w-72 h-72 border-2 border-emerald-500/30 rounded-2xl rotate-6 absolute top-0 -z-10 transition-transform hover:rotate-12 duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhZnJpY2FuJTIwbWFsZSUyMGRldmVsb3BlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NzM1OTQwOXww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Samuel Ndegwa Profile" 
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500 relative z-10 border border-slate-800"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-slate-500 hover:text-emerald-400"
            onClick={() => scrollTo('about')}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-200 flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-xl">01.</span> About Me
            </h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed text-lg">
            <div>
              <p className="mb-6">
                Hello! My name is Samuel, an Operations Lead and Full-Stack Developer based in Nairobi, Kenya. I am passionate about creating efficient, scalable systems that solve real-world problems. 
              </p>
              <p className="mb-6">
                Having managed logistics and operations for diverse businesses, I discovered the immense power of automating workflows and using technology to improve efficiency. I transitioned into software engineering to build the exact systems my businesses and others desperately need—bridging the critical gap between raw operational needs and database-driven digital solutions.
              </p>
              <p>
                When I am not coding or managing logistics, you can find me on the basketball court or at your nearest nature walk trail or involved in environmental initiatives.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-all"></div>
              <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" /> My Approach
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0"></div>
                  <span><strong className="text-slate-300">Operational Alignment:</strong> Designing IT solutions that are deeply rooted in real business process modeling and operational needs.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5 shrink-0"></div>
                  <span><strong className="text-slate-300">Scalable Architecture:</strong> Architecting database-backed systems utilizing PostgreSQL, Redis, and React for high concurrency.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0"></div>
                  <span><strong className="text-slate-300">Leadership:</strong> Driving high-trust, fast-paced projects with tight deadlines through proactive communication and Agile principles.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-200 flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-xl">02.</span> Technical Skills
            </h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-emerald-900/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 text-sm bg-slate-950 border border-slate-800 rounded-full text-slate-400 hover:text-emerald-400 hover:border-emerald-900 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-200 flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-xl">03.</span> Experience & Education
            </h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-emerald-400" /> Professional Experience
              </h3>
              <div className="relative border-l border-slate-800 ml-3 md:ml-0">
                {experiences.filter(e => e.type === 'work').map((exp, idx) => (
                  <div key={idx} className="mb-12 ml-8 relative group">
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-950 bg-emerald-500 group-hover:scale-125 transition-transform"></div>
                    <h4 className="text-xl font-bold text-slate-200">
                      {exp.role} 
                    </h4>
                    <p className="text-emerald-400 text-lg font-medium">{exp.company}</p>
                    <p className="font-mono text-sm text-slate-500 mt-1 mb-3">{exp.period} | {exp.location}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-emerald-400" /> Education
              </h3>
              <div className="relative border-l border-slate-800 ml-3 md:ml-0">
                {experiences.filter(e => e.type === 'edu').map((exp, idx) => (
                  <div key={idx} className="mb-12 ml-8 relative group">
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-slate-950 bg-teal-500 group-hover:scale-125 transition-transform"></div>
                    <h4 className="text-xl font-bold text-slate-200">
                      {exp.role} 
                    </h4>
                    <p className="text-teal-400 text-lg font-medium">{exp.company}</p>
                    <p className="font-mono text-sm text-slate-500 mt-1 mb-3">{exp.period} | {exp.location}</p>
                    <p className="text-slate-400 leading-relaxed text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-200 flex items-center gap-2">
              <span className="text-emerald-400 font-mono text-xl">04.</span> Technical Projects
            </h2>
            <div className="h-px bg-slate-800 flex-1 max-w-sm"></div>
          </div>

          <div className="space-y-24">
            {projects.map((project, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="w-full md:w-3/5 relative group cursor-pointer">
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 rounded-xl z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[350px] object-cover rounded-xl border border-slate-800 shadow-xl group-hover:shadow-2xl group-hover:shadow-emerald-900/30 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-2/5 z-20 ${idx % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <p className="text-emerald-400 font-mono text-sm mb-2">Featured Architecture</p>
                  <h3 className="text-2xl font-bold text-slate-200 mb-6 hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <div className={`bg-slate-900 p-6 rounded-xl border border-slate-800 text-slate-400 mb-6 shadow-xl ${idx % 2 !== 0 ? 'md:-mr-12' : 'md:-ml-12'}`}>
                    {project.description}
                  </div>
                  <ul className={`flex flex-wrap gap-4 font-mono text-sm text-slate-500 mb-6 ${idx % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                    {project.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-4 ${idx % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <p className="text-emerald-400 font-mono mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-6 tracking-tight">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I am always eager to discuss how we can leverage technology to solve operational bottlenecks. Whether you want to talk about system architecture, potential roles, or just say hello—my inbox is open!
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button onClick={handleCopyEmail} className="px-8 py-4 bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center gap-3 w-full sm:w-auto justify-center">
              <Mail className="w-5 h-5" /> ndegwas03@gmail.com
            </button>
            <button onClick={handleCopyPhone} className="px-8 py-4 bg-transparent border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center gap-3 w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5" /> +254 717540110
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center bg-slate-950 border-t border-white/5">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors transform hover:-translate-y-1"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors transform hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
        </div>
        <p className="text-slate-500 font-mono text-sm hover:text-emerald-400 transition-colors cursor-pointer">
          Designed & Built by Samuel Ndegwa
        </p>
      </footer>
      
      {/* Side Socials (Desktop) */}
      <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-6 z-50 after:content-[''] after:w-px after:h-24 after:bg-slate-700">
        <a href="#" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"><Linkedin className="w-5 h-5" /></a>
      </div>

      {/* Side Email (Desktop) */}
      <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center gap-6 z-50 after:content-[''] after:w-px after:h-24 after:bg-slate-700">
        <button 
          onClick={handleCopyEmail}
          className="font-mono text-sm text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all"
          style={{ writingMode: 'vertical-rl' }}
        >
          ndegwas03@gmail.com
        </button>
      </div>

      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
