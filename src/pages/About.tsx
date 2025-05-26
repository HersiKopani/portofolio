import { useState } from 'react';
import { Download, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SkillBar from '../components/SkillBar';
import TimelineItem from '../components/TimelineItem';
import skillsData, { getSkillsByCategory } from '../data/skillsData';
import timelineData from '../data/timelineData';

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'frontend' | 'backend' | 'tools' | 'languages'>('frontend');
  
  const skillCategories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
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
                    src="/../../profile.png"  
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
                Computer and Telecommunications Engineering Student
              </h3>
              
              <p className="text-gray-300 mb-4">
                Hello! I'm Hersi K., a Computer and Telecommunications Engineering student with a passion for frontend development and creative problem-solving.
              </p>
              
              <p className="text-gray-400 mb-6">
                My journey in technology started when I built my first website at 16. Since then, I've been fascinated by the intersection of technology and user experience, exploring how digital interfaces can create meaningful connections and solve real-world problems.
              </p>
              
              <p className="text-gray-400 mb-6">
                Currently, I'm focused on expanding my skills in modern web technologies like React, TypeScript, and responsive design. I enjoy the challenge of transforming complex requirements into intuitive interfaces that provide exceptional user experiences.
              </p>
              
              <p className="text-gray-400 mb-8">
                When I'm not coding, you'll find me exploring photography, reading about emerging tech trends, or contributing to open-source projects. I believe in continuous learning and staying curious about new technologies and approaches.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-background-light/60 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">3+</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="bg-background-light/60 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">12+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-background-light/60 p-4 rounded-lg text-center">
                  <p className="text-primary font-bold text-lg">7+</p>
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
                <Award size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Programming</h3>
              <p className="text-gray-400">
                Participating in coding competitions helps me sharpen my problem-solving skills, think efficiently, and learn new algorithms and data structures.
              </p>
            </div>
            
            <div className="card hover:shadow-glow">
              <div className="mb-4 p-3 bg-primary/20 rounded-lg w-fit">
                <Briefcase size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-400">
                I'm fascinated by the principles of good design and user experience. I enjoy studying interfaces and thinking about how to make digital products more intuitive and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;