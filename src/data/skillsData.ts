interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
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
    percentage: 90,
    category: 'frontend'
  },
  {
    name: 'React',
    percentage: 88,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    percentage: 85,
    category: 'frontend'
  },
  {
    name: 'Next.js',
    percentage: 82,
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    percentage: 90,
    category: 'frontend'
  },
  {
    name: 'Vue.js',
    percentage: 75,
    category: 'frontend'
  },
  
  // Backend
  {
    name: 'Node.js',
    percentage: 80,
    category: 'backend'
  },
  {
    name: 'Express',
    percentage: 82,
    category: 'backend'
  },
  {
    name: 'Firebase',
    percentage: 78,
    category: 'backend'
  },
  {
    name: 'MongoDB',
    percentage: 72,
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    percentage: 68,
    category: 'backend'
  },
  {
    name: 'REST API',
    percentage: 85,
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
    name: 'Vite',
    percentage: 80,
    category: 'tools'
  },
  {
    name: 'CI/CD',
    percentage: 72,
    category: 'tools'
  },
  {
    name: 'AWS',
    percentage: 60,
    category: 'tools'
  },
  {
    name: 'Figma',
    percentage: 78,
    category: 'tools'
  },
  
  // Languages
  {
    name: 'Java',
    percentage: 60,
    category: 'languages'
  },
  {
    name: 'Python',
    percentage: 65,
    category: 'languages'
  },
  {
    name: 'C++',
    percentage: 50,
    category: 'languages'
  }
];

export default skillsData;

export const getSkillsByCategory = (category: 'frontend' | 'backend' | 'tools' | 'languages'): Skill[] => {
  return skillsData.filter(skill => skill.category === category);
};