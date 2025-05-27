import { useState } from 'react';
import { Download, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SkillBar from '../components/SkillBar';
import TimelineItem from '../components/TimelineItem';
import skillsData, { getSkillsByCategory } from '../data/skillsData';
import timelineData from '../data/timelineData';
import { Cloud, Brain } from 'lucide-react'
const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'frontend' | 'backend' | 'tools' | 'languages'>('backend');
  
  const skillCategories = [
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'automation', label: 'Automation' },
    { id: 'tools', label: 'Tools' },
    { id: 'languages', label: 'Languages' }
  ];
  
  const filteredSkills = getSkillsByCategory(activeSkillCategory);
  
  return (
    <div className="min-h-screen pt-24">
      {/* About Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="About Me"
            subtitle="Get to know more about me and my background"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="relative mb-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/../../personal-palestine-map.png"  
                    alt="Hersi K." 
                    className="w-80%] h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl -z-10"></div>
              </div>
              
              <div className="text-center mt-8">
                <Button
                  href="/resume.pdf"
                  variant="primary"
                  icon={<Download size={18} />}
                  className="w-full md:w-auto"
                >
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4">
                Senior Software Engineer with AI And Cloud Expertise
              </h3>
              
              <p className="text-gray-300 mb-4">
                Hello! I'm Hersi Kopnai, senior Java Software Engineer with 6+ years of experience building scalable, cloud-native applications and distributed systems. 
                Currently serving as Tech Leader at Walgreens Boot Alliance, where I lead a team of engineers in developing microservices with Spring Boot.</p>
              <p className="text-gray-400 mb-6">
              I specialize in backend development using Java 17/21, Spring Boot, and cloud platforms like AWS and Azure. My expertise spans from designing RESTful APIs and implementing real-time data streaming with Apache Kafka to establishing robust CI/CD pipelines and DevOps automation.</p>
              <p className="text-gray-400 mb-6">
              I hold an M.Sc. in Information Security and am AWS Certified Cloud Practitioner, currently pursuing Terraform and Agent AI certifications. My passion extends beyond coding to exploring system design patterns, AI architecture, and the latest in distributed systems..</p>
              <p className="text-gray-400 mb-8">
              When I'm not architecting solutions, you'll find me traveling to discover new cultures, diving into technical books, or exploring the fascinating world of AI system design. I believe in continuous learning and delivering enterprise-grade solutions through clean, maintainable code.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-background-light/60 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">6+</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="bg-background-light/60 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">10+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-background-light/60 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">2+</p>
                  <p className="text-sm text-gray-400">Certifications</p>
                </div>
                <div className="bg-background-light/60 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">10+</p>
                  <p className="text-sm text-gray-400">Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-background-dark/50">
        <div className="container-custom">
          <SectionHeading 
            title="My Skills"
            subtitle="Technical skills I've acquired through education and projects"
          />
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {skillCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeSkillCategory === category.id 
                      ? 'bg-primary text-white' 
                      : 'bg-background-light text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveSkillCategory(category.id as any)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience & Education Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="My Journey"
            subtitle="Educational background and professional experience"
          />
          
          <div className="max-w-3xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                icon={<item.icon size={20} />}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Interests Section */}
      <section className="py-16 bg-background-dark/50">
        <div className="container-custom">
          <SectionHeading 
            title="Personal Interests"
            subtitle="Beyond coding, a few things I'm passionate about"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card hover:shadow-glow">
              <div className="mb-4 p-3 bg-primary/20 rounded-lg w-fit">
                <Code size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Open Source</h3>
              <p className="text-gray-400">
                I enjoy contributing to open-source projects, collaborating with developers worldwide, and giving back to the community that has taught me so much.
              </p>
            </div>
            
            <div className="card hover:shadow-glow">
              <div className="mb-4 p-3 bg-primary/20 rounded-lg w-fit">
                <Brain size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI and ML Programming</h3>
              <p className="text-gray-400">
              Exploring AI and machine learning challenges helps me deepen my understanding of intelligent systems, optimize algorithmic thinking, and discover innovative approaches to complex data problems.
              </p>
            </div>
            
            <div className="card hover:shadow-glow">
              <div className="mb-4 p-3 bg-primary/20 rounded-lg w-fit">
                <Cloud size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud and Automation</h3>
              <p className="text-gray-400">
              Working with cloud technologies and automation pipelines helps me streamline deployment processes, optimize infrastructure costs, and build resilient systems that scale effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;