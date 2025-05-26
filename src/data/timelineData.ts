import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: typeof Briefcase | typeof GraduationCap | typeof Award | typeof Code;
}

const timelineData: TimelineItem[] = [
  {
    year: '2023',
    title: 'Internship at TechInnovate',
    description: 'Worked as a frontend developer intern, contributing to the development of a healthcare management system using React and TypeScript.',
    icon: Briefcase
  },
  {
    year: '2022',
    title: 'Web Development Certification',
    description: 'Earned a comprehensive web development certification, focusing on modern JavaScript frameworks and responsive design techniques.',
    icon: Award
  },
  {
    year: '2021',
    title: 'Bachelor\'s Degree Program',
    description: 'Started Computer and Telecommunications Engineering program at Bandung Institute of Technology (ITB).',
    icon: GraduationCap
  },
  {
    year: '2020',
    title: 'First Freelance Project',
    description: 'Completed first freelance web development project, building an e-commerce website for a local business using HTML, CSS, and JavaScript.',
    icon: Code
  },
  {
    year: '2019',
    title: 'Programming Competition',
    description: 'Won second place in a regional coding competition, demonstrating proficiency in algorithmic problem-solving and efficient programming.',
    icon: Award
  }
];

export default timelineData;