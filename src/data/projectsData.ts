import { Github, Globe, Code, Database, Server, BarChart } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  problemStatement: string;
  solution: string;
  techStack: {
    category: string;
    items: string[];
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
  lessons: string[];
  futureImprovements: string[];
  screenshots: string[];
}

const projectsData: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with shopping cart, user authentication, and payment integration.',
    detailedDescription: 'This e-commerce platform offers a comprehensive online shopping experience with features like product browsing, filtering, user accounts, shopping cart functionality, and secure checkout with multiple payment options. The admin dashboard allows for complete inventory management, order processing, and analytics.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demoUrl: 'https://ecommerce-demo.ekizulfar.com',
    githubUrl: 'https://github.com/HersiKopani/ecommerce-platform',
    features: [
      'User authentication and profile management',
      'Product catalog with search and filter functionality',
      'Shopping cart and wishlist management',
      'Secure checkout with Stripe payment integration',
      'Order tracking and history',
      'Admin dashboard for inventory and order management',
      'Responsive design for all devices'
    ],
    problemStatement: 'Small businesses often struggle to establish an online presence with a limited budget. Existing e-commerce solutions can be expensive, complex to set up, or lack customization options.',
    solution: 'I developed a cost-effective, user-friendly e-commerce platform that can be quickly customized and deployed for small businesses. The solution provides essential e-commerce functionality while being easy to manage without technical expertise.',
    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'Redux', 'SCSS', 'Framer Motion', 'Material UI']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'JWT Authentication']
      },
      {
        category: 'Payment Processing',
        items: ['Stripe API', 'PayPal Integration']
      },
      {
        category: 'Deployment',
        items: ['Docker', 'AWS', 'CI/CD Pipeline']
      }
    ],
    challenges: [
      {
        title: 'Shopping Cart Persistence',
        description: 'Implementing a cart system that persisted across sessions for both logged-in and guest users required a dual approach using localStorage and database storage.'
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Integrating multiple payment gateways while ensuring security compliance and handling transaction edge cases was complex and required extensive testing.'
      },
      {
        title: 'Performance Optimization',
        description: 'The product catalog needed to load quickly even with hundreds of items. This was achieved through pagination, lazy loading, and efficient database queries.'
      }
    ],
    lessons: [
      'Using a state management library early in development prevents complexity later',
      'Modular architecture is essential for maintainable e-commerce platforms',
      'Comprehensive testing is critical for payment processing systems',
      'User feedback should be incorporated throughout the development process'
    ],
    futureImprovements: [
      'Implement an AI-powered recommendation engine',
      'Add multi-language support',
      'Develop a mobile app version',
      'Integrate with additional payment gateways',
      'Add advanced analytics dashboard'
    ],
    screenshots: [
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, notifications, and team workspaces.',
    detailedDescription: 'This task management application enables teams to collaborate efficiently through shared workspaces, task assignments, progress tracking, and real-time notifications. It features Kanban boards, calendar views, and detailed reporting to help teams stay organized and productive.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSockets', 'Chart.js'],
    demoUrl: 'https://taskmanager-demo.ekizulfar.com',
    githubUrl: 'https://github.com/HersiKopani/task-management-app',
    features: [
      'Team workspaces with role-based permissions',
      'Kanban boards with drag-and-drop functionality',
      'Task creation with attachments, due dates, and priority levels',
      'Real-time notifications and updates',
      'Calendar and timeline views',
      'Time tracking and reporting',
      'Integration with Google Calendar and Slack'
    ],
    problemStatement: 'Remote teams often struggle with task coordination, progress visibility, and effective collaboration across time zones, leading to miscommunication and missed deadlines.',
    solution: 'I created a real-time task management platform that provides multiple project views, automated notifications, and comprehensive team collaboration features to keep everyone aligned regardless of location.',
    techStack: [
      {
        category: 'Frontend',
        items: ['Vue.js 3', 'Vuex', 'Tailwind CSS', 'Composition API']
      },
      {
        category: 'Backend',
        items: ['Firebase', 'Cloud Functions', 'Cloud Firestore']
      },
      {
        category: 'Real-time Features',
        items: ['Firebase Realtime Database', 'WebSockets']
      },
      {
        category: 'Integrations',
        items: ['Slack API', 'Google Calendar API', 'Zapier']
      }
    ],
    challenges: [
      {
        title: 'Real-time Data Synchronization',
        description: 'Ensuring all users see the same data in real-time while maintaining performance required careful implementation of data listeners and efficient state management.'
      },
      {
        title: 'Complex Permission System',
        description: 'Building a flexible role-based permission system that worked across workspaces, projects, and individual tasks required a sophisticated access control model.'
      },
      {
        title: 'Offline Functionality',
        description: 'Implementing offline capabilities with data synchronization once connectivity is restored was challenging but essential for a seamless user experience.'
      }
    ],
    lessons: [
      'Real-time applications require thorough planning for state management',
      'Carefully designing the database schema is crucial for scalable applications',
      'User testing revealed the importance of intuitive UX for productivity tools',
      'Firebase security rules require extensive testing to ensure proper data protection'
    ],
    futureImprovements: [
      'Implement AI-assisted task prioritization',
      'Add custom workflow automation tools',
      'Develop advanced reporting and analytics',
      'Create a mobile application with push notifications',
      'Add time tracking with automatic reporting'
    ],
    screenshots: [
      'https://images.pexels.com/photos/6956665/pexels-photo-6956665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6956662/pexels-photo-6956662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6956904/pexels-photo-6956904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker Application',
    description: 'A comprehensive fitness tracking application with workout plans, progress tracking, and nutrition monitoring.',
    detailedDescription: 'This fitness application helps users achieve their health goals by tracking workouts, nutrition, and overall progress. It includes customizable workout plans, exercise demonstrations, calorie counting, and visual progress charts to keep users motivated and informed about their fitness journey.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'TypeScript', 'Redux', 'Node.js', 'MongoDB'],
    demoUrl: 'https://fitness-demo.ekizulfar.com',
    githubUrl: 'https://github.com/HersiKopani/fitness-tracker',
    features: [
      'Personalized workout plan creation',
      'Exercise library with video demonstrations',
      'Nutrition tracking and meal planning',
      'Progress tracking with visual charts',
      'Workout reminders and notifications',
      'Community challenges and achievements',
      'Integration with wearable devices'
    ],
    problemStatement: 'Many people struggle to maintain fitness routines and track their progress effectively, leading to decreased motivation and abandoned fitness goals.',
    solution: 'I developed a comprehensive fitness tracking platform that combines workout planning, progress visualization, and community features to help users stay motivated and track their fitness journey with minimal effort.',
    techStack: [
      {
        category: 'Mobile App',
        items: ['React Native', 'TypeScript', 'Redux', 'React Navigation']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'GraphQL']
      },
      {
        category: 'Data Visualization',
        items: ['Victory Charts', 'D3.js', 'SVG Animations']
      },
      {
        category: 'Device Integration',
        items: ['HealthKit (iOS)', 'Google Fit (Android)', 'Bluetooth LE']
      }
    ],
    challenges: [
      {
        title: 'Cross-platform Consistency',
        description: 'Ensuring the app worked consistently across iOS and Android while maintaining native feel required careful component design and platform-specific optimizations.'
      },
      {
        title: 'Wearable Device Integration',
        description: 'Integrating with various fitness wearables and health platforms required implementing multiple APIs and handling diverse data formats.'
      },
      {
        title: 'Offline Workout Tracking',
        description: 'Enabling users to track workouts without internet connection and syncing data later required a robust local storage and conflict resolution system.'
      }
    ],
    lessons: [
      'User engagement increases significantly with visual progress tracking',
      'Platform-specific code should be isolated early in development',
      'Fitness apps require careful consideration of privacy concerns',
      'Community features greatly enhance user retention'
    ],
    futureImprovements: [
      'Implement AI coaching with form correction',
      'Add social sharing and competition features',
      'Develop personalized nutrition recommendations',
      'Expand wearable device compatibility',
      'Create video-based virtual workout sessions'
    ],
    screenshots: [
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7991663/pexels-photo-7991663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'smart-home-dashboard',
    title: 'Smart Home Dashboard',
    description: 'An IoT dashboard for monitoring and controlling smart home devices with automation capabilities.',
    detailedDescription: 'This smart home dashboard provides a central interface for monitoring and controlling all connected devices in a home. It features real-time device status updates, automation rules, energy usage analytics, and security monitoring. The system integrates with popular smart home ecosystems and offers both web and mobile interfaces.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MQTT', 'WebSockets', 'Chart.js', 'Docker'],
    demoUrl: 'https://smarthome-demo.ekizulfar.com',
    githubUrl: 'https://github.com/HersiKopani/smart-home-dashboard',
    features: [
      'Unified control of smart devices from multiple ecosystems',
      'Real-time monitoring with interactive floor plan view',
      'Automation rule creation with visual editor',
      'Energy usage analytics and optimization suggestions',
      'Security camera integration and alert system',
      'Voice control capabilities',
      'Historical data logging and trend analysis'
    ],
    problemStatement: 'Smart home devices often use different protocols and apps, creating a fragmented user experience that limits the potential of home automation.',
    solution: 'I built a unified dashboard that integrates multiple smart home ecosystems into a single interface, enabling cross-platform automation and providing valuable insights through data aggregation and analysis.',
    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'Redux', 'Three.js', 'Material-UI', 'Chart.js']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Redis']
      },
      {
        category: 'IoT Communication',
        items: ['MQTT', 'WebSockets', 'Zigbee', 'Z-Wave', 'REST APIs']
      },
      {
        category: 'Deployment',
        items: ['Docker', 'Raspberry Pi', 'AWS IoT']
      }
    ],
    challenges: [
      {
        title: 'Protocol Integration',
        description: 'Integrating various IoT protocols (Zigbee, Z-Wave, WiFi) required building adapters and protocol translators to provide a consistent interface.'
      },
      {
        title: 'Real-time Performance',
        description: 'Ensuring the dashboard remained responsive while handling real-time updates from dozens of devices required efficient data processing and UI optimizations.'
      },
      {
        title: 'Automation Engine',
        description: 'Building a flexible automation engine that could handle complex conditions across different device types and protocols was architecturally challenging.'
      }
    ],
    lessons: [
      'IoT systems benefit greatly from standardized internal protocols',
      'Local processing reduces latency and improves reliability for critical functions',
      'User interfaces for automation should balance power with simplicity',
      'Thorough error handling is essential for systems controlling physical devices'
    ],
    futureImprovements: [
      'Implement AI-based anomaly detection for device behavior',
      'Add predictive maintenance notifications',
      'Develop geofencing capabilities for location-based automation',
      'Create more advanced energy optimization algorithms',
      'Add natural language processing for automation creation'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3885036/pexels-photo-3885036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7054393/pexels-photo-7054393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'learning-management-system',
    title: 'Learning Management System',
    description: 'A comprehensive LMS with course creation, student progress tracking, and interactive learning features.',
    detailedDescription: 'This Learning Management System provides educational institutions and corporate training departments with a complete platform for creating, delivering, and tracking online courses. It includes features for content creation, student enrollment, progress tracking, assessments, and certification. The system emphasizes engagement through interactive content and social learning components.',
    image: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
    demoUrl: 'https://lms-demo.ekizulfar.com',
    githubUrl: 'https://github.com/HersiKopani/learning-management-system',
    features: [
      'Course creation with multimedia content support',
      'Student enrollment and progress tracking',
      'Interactive quizzes and assessments',
      'Live virtual classrooms with video conferencing',
      'Discussion forums and collaborative projects',
      'Certification generation and verification',
      'Analytics dashboard for instructors and administrators'
    ],
    problemStatement: 'Educational institutions and corporate training programs struggle with delivering engaging online learning experiences that maintain student motivation and effectively track learning outcomes.',
    solution: 'I developed a comprehensive LMS that combines interactive content delivery, social learning features, and detailed analytics to create engaging learning experiences with measurable outcomes.',
    techStack: [
      {
        category: 'Frontend',
        items: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'NgRx']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'PostgreSQL', 'TypeORM']
      },
      {
        category: 'Real-time Features',
        items: ['WebSockets', 'WebRTC', 'Socket.io']
      },
      {
        category: 'Content Delivery',
        items: ['AWS S3', 'CloudFront', 'FFmpeg', 'Video.js']
      }
    ],
    challenges: [
      {
        title: 'Video Streaming Optimization',
        description: 'Implementing adaptive bitrate streaming for video content across diverse network conditions required complex media handling and CDN integration.'
      },
      {
        title: 'Assessment Engine',
        description: 'Creating a flexible assessment system that supported various question types, automated grading, and plagiarism detection required sophisticated data models.'
      },
      {
        title: 'Learning Analytics',
        description: 'Developing meaningful learning analytics that could provide actionable insights required collecting and processing large amounts of interaction data.'
      }
    ],
    lessons: [
      'Video content delivery requires careful optimization for different devices and networks',
      'Social learning features significantly increase engagement and completion rates',
      'Learning paths should be adaptable based on student performance',
      'Access control and content permissions require sophisticated role-based systems'
    ],
    futureImprovements: [
      'Implement AI-based learning path personalization',
      'Add gamification elements to increase engagement',
      'Develop advanced plagiarism detection for assignments',
      'Create mobile app with offline learning capabilities',
      'Add integration with popular virtual reality platforms'
    ],
    screenshots: [
      'https://images.pexels.com/photos/5905625/pexels-photo-5905625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5905558/pexels-photo-5905558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5905555/pexels-photo-5905555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 'finance-tracker',
    title: 'Personal Finance Tracker',
    description: 'A comprehensive financial management application with expense tracking, budgeting, and investment monitoring.',
    detailedDescription: 'This personal finance application helps users take control of their financial life by tracking expenses, managing budgets, setting financial goals, and monitoring investments. It features automatic categorization of transactions, visual reports, and predictive analysis to help users make informed financial decisions.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'D3.js', 'Plaid API'],
    demoUrl: 'https://finance-demo.ekizulfar.com',
    githubUrl: 'https://github.com/HersiKopani/finance-tracker',
    features: [
      'Bank account and credit card synchronization',
      'Automatic transaction categorization',
      'Budget creation and tracking',
      'Financial goal setting and monitoring',
      'Investment portfolio tracking',
      'Expense analytics and reports',
      'Bill payment reminders and recurring transaction tracking'
    ],
    problemStatement: 'Many people struggle with maintaining financial awareness and making informed decisions due to fragmented financial data across multiple accounts and institutions.',
    solution: 'I created a unified financial dashboard that aggregates data from multiple sources, automatically categorizes transactions, and provides actionable insights to help users improve their financial health.',
    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'Redux', 'Styled Components', 'D3.js', 'Recharts']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'MongoDB', 'Mongoose']
      },
      {
        category: 'Financial Data',
        items: ['Plaid API', 'Alphavantage API', 'CoinGecko API']
      },
      {
        category: 'Security',
        items: ['JWT', 'OAuth 2.0', 'Data Encryption', 'Secure Storage']
      }
    ],
    challenges: [
      {
        title: 'Financial Data Integration',
        description: 'Integrating with multiple financial institutions through APIs while handling authentication and data synchronization securely required careful API design.'
      },
      {
        title: 'Transaction Categorization',
        description: 'Building an accurate automatic categorization system for financial transactions required implementing machine learning algorithms and user feedback mechanisms.'
      },
      {
        title: 'Data Visualization',
        description: 'Creating intuitive visualizations of complex financial data that provide actionable insights required thoughtful UX design and performance optimization.'
      }
    ],
    lessons: [
      'Financial data requires exceptional security measures throughout the application',
      'Machine learning models improve significantly with user feedback for categorization',
      'Performance optimization is crucial when dealing with large transaction datasets',
      'Customizable dashboards are essential for diverse financial situations'
    ],
    futureImprovements: [
      'Implement AI-powered financial advice and insights',
      'Add scenario planning for major financial decisions',
      'Develop tax optimization suggestions',
      'Create debt repayment optimization tools',
      'Add comprehensive retirement planning features'
    ],
    screenshots: [
      'https://images.pexels.com/photos/6694530/pexels-photo-6694530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6694477/pexels-photo-6694477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6694503/pexels-photo-6694503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
];

export default projectsData;

// Helper functions for projects
export const getProject = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getProjects = (): Project[] => {
  return projectsData;
};