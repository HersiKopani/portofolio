interface Skill {
  name: string;
  percentage: number;
  category: 'backend' | 'frontend' | 'tools' | 'languages' | 'cloud'| 'automation' | 'languages';
}

const skillsData: Skill[] = [
  // Frontend
  {
    name: 'HTML/CSS',
    percentage: 95,
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    percentage: 70,
    category: 'frontend'
  },
  {
    name: 'React',
    percentage: 50,
    category: 'frontend'
  },
  
  // Backend
  {
    name: 'Spring MVC / Boot',
    percentage: 90,
    category: 'backend'
  },
  {
    name: 'Nodejs',
    percentage: 60,
    category: 'backend'
  },
  {
    name: 'Mysql',
    percentage: 85,
    category: 'backend'
  },
  {
    name: 'MongoDB',
    percentage: 70,
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    percentage: 70,
    category: 'backend'
  },
  {
    name: 'REST API',
    percentage: 100,
    category: 'backend'
  },
  {
    name: 'GraphQL',
    percentage: 70,
    category: 'backend'
  },
  
  // Tools & Platforms
  {
    name: 'Git',
    percentage: 88,
    category: 'tools'
  },
  {
    name: 'Webpack',
    percentage: 75,
    category: 'tools'
  },
  {
    name: 'Docker',
    percentage: 65,
    category: 'tools'
  },
  {
    name: 'CI/CD',
    percentage: 72,
    category: 'tools'
  },
  // cloud
  {
    name: 'AWS',
    percentage: 80,
    category: 'cloud'
  },
  {
    name: 'Azure',
    percentage: 60,
    category: 'cloud'
  },
  
  // Languages
  {
    name: 'Java',
    percentage: 90,
    category: 'languages'
  },
  {
    name: 'Python',
    percentage: 60,
    category: 'languages'
  },
];

export default skillsData;

export const getSkillsByCategory = (category: 'frontend' | 'backend' | 'tools' | 'languages' | 'cloud' | 'automation'): Skill[] => {
  return skillsData.filter(skill => skill.category === category);
};