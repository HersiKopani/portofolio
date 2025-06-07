import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: typeof Briefcase | typeof GraduationCap | typeof Award | typeof Code;
}

const timelineData: TimelineItem[] = [
  {
    year: '2024 - Present',
    title: 'Assistant Lecturer @ Beder College',
    description: 'Delivered lectures on Cloud Computing, Software Engineering & Advanced Web Development.',
    icon: Briefcase
  },
  {
    year: '2022 - Present',
    title: 'Tech Leader | Java Software Engineer @ Walgreens Boots Alliance',
    description: 'Led and mentored a team of 4 engineers in developing scalable, cloud-native microservices with Spring Boot',
    icon: Briefcase
  },
  {
    year: '2021-2023',
    title: 'Java Software Engineer @ Volvo Group',
    description: 'Delivered a modular tax computation system supporting 60+ countries, ensuring compliance and audit readiness',
    icon: Briefcase
  },
  {
    year: '2020-2021',
    title: 'Software Engineer @ MoreOne Technology',
    description: 'Automated electronic signature functionality for invoices on encrypted files using Node.js library, eliminating manual tasks previously performed by team',
    icon: Briefcase
  }, 
  {
    year: '2018-2020',
    title: 'Software Engineer @ Division5',
    description: 'Developed RESTful services using JAX-RS on Spring Boot projects, improving legacy system functionalities.',
    icon: Briefcase
  },
  {
    year: '2017-2019',
    title: 'Master of Science Degree Program',
    description: 'Information Security',
    icon: GraduationCap
  },
  {
    year: '2014-2017',
    title: 'Bachelor\'s Degree Program',
    description: 'Business Informatics',
    icon: GraduationCap
  }
];

export default timelineData;