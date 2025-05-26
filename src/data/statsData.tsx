import { Code, Award, Clock } from 'lucide-react';

export interface Stat {
  count: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const statsData: Stat[] = [
  {
    count: 12,
    title: 'Projects',
    description: 'Innovative microservice application crafted',
    icon: <Code size={24} />
  },
  {
    count: 2,
    title: 'Certificates',
    description: 'Professional skills validated',
    icon: <Award size={24} />
  },
  {
    count: 6 ,
    title: ' + Years',
    description: 'Continuous learning journey',
    icon: <Clock size={24} />
  }
];

export default statsData;