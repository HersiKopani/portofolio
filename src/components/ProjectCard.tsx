import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;

}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card card h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title} 
          className={`project-image w-full h-full object-cover rounded-lg ${isHovered ? 'scale-105' : ''}`}
        />
        <div className={`project-overlay rounded-lg ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-4 mb-4">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          <Link to={`/projects/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 bg-background rounded-full text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link 
        to={`/projects/${id}`} 
        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-light group"
      >
        View Project
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ProjectCard;