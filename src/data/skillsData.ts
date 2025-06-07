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
    percentage: 20,
    category: 'frontend'
  },
  {
    name: 'Angular',
    percentage: 30,
    category: 'frontend'
  },
  {
    name: 'Redux',
    percentage: 30,
    category: 'frontend'
  },
  {
    name: 'Jest',
    percentage: 30,
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
    name: 'GIT',
    percentage: 80,
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
    percentage: 70,
    category: 'tools'
  },
   {
    name: 'DataDod',
    percentage: 70,
    category: 'tools'
  },
  {
    name: 'Grafana',
    percentage: 60,
    category: 'tools'
  },
  // cloud
  {
    name: 'Cloud Platforms AWS & Azure',
    percentage: 85,
    category: 'cloud'
  },
  {
    name: 'EC2, Lambda',
    percentage: 85,
    category: 'cloud'
  },
  {
    name: 'S3 & Azure Blob',
    percentage: 85,
    category: 'cloud'
  },
  {
    name: 'VPC, Load Balancers, Route53',
    percentage: 85,
    category: 'cloud'
  },
  {
    name: 'CloudWatch',
    percentage: 85,
    category: 'cloud'
  },
    {
    name: 'Terraform',
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
  {
    name: 'JavaScript / TypeScript',
    percentage: 20,
    category: 'languages'
  },
   {
    name: 'Kotlin',
    percentage: 50,
    category: 'languages'
  },
  {
    name: 'SQL',
    percentage: 85,
    category: 'languages'
  },
  {
    name: 'NOSQL',
    percentage: 50,
    category: 'languages'
  },
  // Automation
  {
    name: 'DevOps Automation',
    percentage: 70,
    category: 'automation'
  },
  {
    name: 'CI/CD Pipelines',
    percentage: 70,
    category: 'automation'
  },
  {
    name: 'Infrastructure as Code (IaC)',
    percentage: 60,
    category: 'automation'
  },
  {
    name: 'Monitoring & Logging',
    percentage: 60,
    category: 'automation'
  }
  
];

export default skillsData;

export const getSkillsByCategory = (category: 'frontend' | 'backend' | 'tools' | 'languages' | 'cloud' | 'automation'): Skill[] => {
  return skillsData.filter(skill => skill.category === category);
};