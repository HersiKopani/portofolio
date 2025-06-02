import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import statsData from '../data/statsData';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background-dark to-background-dark z-0 opacity-70"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className={`${isVisible ? 'animate-slideInRight' : 'opacity-0'} transition-all duration-1000`}>
              <p className="text-primary mb-3 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
               Hersi K.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                Transforming ideas into high scalable software ✨
              </p>
              <p className="text-gray-400 mb-8 max-w-xl">
              I'm a Senior Java Software Engineer with 6+ years of experience building scalable, cloud-native applications and distributed systems. 
              Specializing in microservices architecture, API development, and performance optimization using Java 17/21, Spring Boot, AWS, and Azure. 
              I lead development teams, drive DevOps automation, and am passionate about delivering enterprise-grade solutions while mentoring the next generation of engineers.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  href="/../HersiKopani_SeniorJavaEng.pdf"
                  variant="primary"
                  icon={<Download size={18} />}
                >
                  Download CV
                </Button>
                <Button
                  to="/projects"
                  variant="outline"
                  icon={<ArrowRight size={18} />}
                >
                  View Projects
                </Button>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/HersiKopani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background-light hover:bg-primary/20 text-gray-300 hover:text-primary rounded-full transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hersi-kopani/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background-light hover:bg-primary/20 text-gray-300 hover:text-primary rounded-full transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:hersi.kopani@gmail.com" 
                  className="p-2 bg-background-light hover:bg-primary/20 text-gray-300 hover:text-primary rounded-full transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className={`relative ${isVisible ? 'animate-fadeIn' : 'opacity-0'} transition-all duration-1000 delay-300 flex justify-center`}>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-glow">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="../assets/profile-palestine.png" 
                    alt="Hersi K." 
                    className="w-full h-full object-cover object-[center_10%]"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-background-dark/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsData.map((stat, index) => (
              <div 
                key={index}
                className={`${isVisible ? 'animate-slideUp' : 'opacity-0'} transition-all duration-700`}
                style={{ animationDelay: `${300 + index * 200}ms` }}
              >
                <StatCard 
                  count={stat.count}
                  title={stat.title}
                  description={stat.description}
                  icon={stat.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About & Projects Preview Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* About Preview */}
            <div className="card hover:shadow-glow">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
              </h2>
              
              <p className="text-gray-300 mb-6">
              I'm a Senior Java Software Engineer and Tech Leader with a passion for solving complex problems through elegant code. 
              Beyond building scalable enterprise systems, 
              I'm equally invested in growing people - whether mentoring my team of 4 engineers at Walgreens Boot Alliance or teaching the next generation of developers at Beder College University.
              </p>
              <p className="text-gray-400 mb-8">
              When I'm not architecting microservices or optimizing performance, 
              you'll find me exploring new destinations around the world or diving deep into a good book. 
              Both hobbies fuel my curiosity and bring fresh perspectives to my approach to software engineering.
              </p>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light group"
              >
                Learn more about me
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Projects Preview */}
            <div className="card hover:shadow-glow">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 relative inline-block">
                My Projects
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
              </h2>
              
              <p className="text-gray-300 mb-6">
              From supporting tax regulations across 60+ countries to automating complex business workflows, my projects solve real-world challenges at enterprise scale. 
              I specialize in transforming ambitious ideas into production-ready systems that perform reliably under pressure.
              </p>
              
              <p className="text-gray-400 mb-8">
              Each solution in my portfolio demonstrates a different aspect of modern software engineering - 
              whether it's event-driven architecture with Apache Kafka, seamless CRM integrations, or high-performance APIs that serve millions of requests.
              </p>
              
              <Link 
                to="/projects" 
                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light group"
              >
                View my project portfolio
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-background to-background-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button
            to="/contact"
            variant="primary"
            size="lg"
            className="mx-auto"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;