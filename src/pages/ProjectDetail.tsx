import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Code, Database, Server, BarChart } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { getProject, getProjects } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  const project = getProject(id || '');
  const relatedProjects = getProjects()
    .filter(p => p.id !== id && p.tags.some(tag => project?.tags.includes(tag)))
    .slice(0, 3);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
      return;
    }
    
    // Simulate loading for smooth transitions
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [project, navigate]);
  
  if (loading || !project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  const getTechIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Code size={20} className="text-primary" />;
      case 'backend':
        return <Server size={20} className="text-primary" />;
      case 'database':
      case 'data':
        return <Database size={20} className="text-primary" />;
      default:
        return <BarChart size={20} className="text-primary" />;
    }
  };
  
  return (
    <div className="min-h-screen pt-24">
      {/* Project Header */}
      <section className="py-12 bg-background-dark/70">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              
              <p className="text-gray-300 text-lg mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-background rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    variant="primary"
                    icon={<ExternalLink size={18} />}
                  >
                    Live Demo
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    icon={<Github size={18} />}
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-300 mb-6">
                  {project.detailedDescription}
                </p>
                
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="list-disc list-inside text-gray-300 mb-6">
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-2">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="card">
                  <h3 className="text-xl font-bold mb-4">Problem Statement</h3>
                  <p className="text-gray-300">
                    {project.problemStatement}
                  </p>
                </div>
                
                <div className="card">
                  <h3 className="text-xl font-bold mb-4">Solution</h3>
                  <p className="text-gray-300">
                    {project.solution}
                  </p>
                </div>
              </div>
              
              <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-4">Challenges & Lessons</h2>
                
                <h3 className="text-xl font-bold mb-3">Key Challenges</h3>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {challenge.title}
                    </h4>
                    <p className="text-gray-300 ml-4">
                      {challenge.description}
                    </p>
                  </div>
                ))}
                
                <h3 className="text-xl font-bold mt-6 mb-3">Lessons Learned</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="mb-2">{lesson}</li>
                  ))}
                </ul>
              </div>
              
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
                <ul className="list-disc list-inside text-gray-300">
                  {project.futureImprovements.map((improvement, index) => (
                    <li key={index} className="mb-2">{improvement}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="card mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
                
                {project.techStack.map((tech, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      {getTechIcon(tech.category)}
                      <h4 className="font-semibold">{tech.category}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 ml-8">
                      {tech.items.map((item, itemIndex) => (
                        <span 
                          key={itemIndex} 
                          className="px-2 py-1 bg-background-light text-xs rounded-md text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Screenshots */}
      <section className="py-16 bg-background-dark/50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Project Screenshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-300">
                <img 
                  src={screenshot} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <SectionHeading 
              title="Related Projects"
              subtitle="Explore more of my work similar to this project"
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard 
                  key={index}
                  id={relatedProject.id}
                  title={relatedProject.title}
                  description={relatedProject.description}
                  image={relatedProject.image}
                  tags={relatedProject.tags}
                  demoUrl={relatedProject.demoUrl}
                  githubUrl={relatedProject.githubUrl}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetail;