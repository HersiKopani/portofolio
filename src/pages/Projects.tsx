import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Extract unique tags for filter
  const allTags = projectsData.reduce((tags: string[], project) => {
    project.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
    return tags;
  }, []);
  
  // Sort tags alphabetically
  const sortedTags = allTags.sort();
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
  
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="My Projects"
            subtitle="Explore my work across various technologies and domains"
          />
          
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              className={`category-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            
            {sortedTags.map((tag, index) => (
              <button
                key={index}
                className={`category-pill ${filter === tag ? 'active' : ''}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
              <button
                className="mt-4 text-primary hover:text-primary-light"
                onClick={() => setFilter('all')}
              >
                Show all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;