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
    "id": "volvo-factory-management",
    "title": "Volvo Truck Factory Management System",
    "description": "A backend system to manage global truck manufacturing workflows, ensuring compliance, optimization, and high scalability.",
    "detailedDescription": "The system supported custom taxation modules for 60+ countries and optimized backend APIs for performance. Implemented user rate-limiting and system health monitoring features. Enhanced factory software reliability and ensured compliance with international audit regulations.",
    "image": "../../volvo1.png",
    "tags": ["Java", "Spring Boot", "REST API", "JAX-RS", "SQL Server", "AWS"],
    "demoUrl": "",
    "githubUrl": "",
    "features": [
      "Multi-country taxation module",
      "System performance enhancements",
      "User call rate-limiting",
      "Compliance reporting integration",
      "Factory process analytics"
    ],
    "problemStatement": "Volvo needed a unified backend for truck manufacturing operations across multiple countries with unique tax regulations.",
    "solution": "Built a modular, scalable system with optimized APIs and compliance-ready features tailored to international standards.",
    "techStack": [
      {
        "category": "Backend",
        "items": ["Java", "Spring Boot","MicroService", "Redis"]
      },
      {
        "category": "Database",
        "items": ["PostgreSql", "Redis"]
      },
      {
        "category": "Cloud & Ops",
        "items": ["Azure","CI/CD", "DataDog", "Grafana"]
      }
    ],
    "challenges": [
      {
        "title": "Taxation Customization",
        "description": "Designing a flexible taxation engine for 60+ countries with unique regulatory requirements."
      }
    ],
    "lessons": [
      "Early modular design prevents later rework",
      "Rate limiting is essential for performance under load"
    ],
    "futureImprovements": [
      "Real-time factory dashboard",
      "Predictive maintenance integration"
    ],
    "screenshots": ["../../volvo1.png", "../../volvo2.png", "../../volvo3.png"]
  },
  {
    "id": "walgreens-store-system",
    "title": "Walgreens Pharmacy Store System",
    "description": "A scalable cloud-native system for managing retail pharmacy operations and real-time store analytics.",
    "detailedDescription": "Led a team to deliver a suite of microservices for Walgreens, including real-time data streaming, inventory management, and secure API integrations. Enabled robust analytics through Kafka and ensured test-driven development practices.",
    "image": "../../volvo1.png",
    "tags": ["Java", "Spring Boot", "Kafka", "JUnit", "Mockito", "Azure"],
    "demoUrl": "",
    "githubUrl": "",
    "features": [
      "Real-time data streaming via Kafka",
      "Microservices for pharmacy operations",
      "Secure REST APIs",
      "Agile development pipeline",
      "Comprehensive testing and CI/CD"
    ],
    "problemStatement": "Walgreens needed a modernized pharmacy system capable of handling high volume data and improving store operations.",
    "solution": "Delivered robust microservices and real-time capabilities using Java, Kafka, and cloud-native infrastructure.",
    "techStack": [
      {
        "category": "Backend",
        "items": ["Java", "Spring Boot", "JAX-RS"]
      },
      {
        "category": "Streaming",
        "items": ["Apache Kafka"]
      },
      {
        "category": "Cloud",
        "items": ["Azure"]
      }
    ],
    "challenges": [
      {
        "title": "System Scalability",
        "description": "Architecting microservices that scale under high data throughput while maintaining consistency."
      }
    ],
    "lessons": [
      "Team mentoring improves overall output quality",
      "Real-time architecture enhances customer experience"
    ],
    "futureImprovements": [
      "Predictive inventory analytics",
      "Integration with wearable health devices"
    ],
    "screenshots": ["../../volvo1.png", "../../volvo2.png", "../../volvo3.png"]
  },  
  {
    "id": "invoice-validation-system",
    "title": "Invoice Validation System",
    "description": "Automated invoice validation with electronic signature integration and CRM synchronization.",
    "detailedDescription": "Developed an invoice validation system with encrypted electronic signatures, CRM sync via webhooks, and failure recovery using service bus. Optimized manual processes and improved data integrity between systems.",
    "image": "../../volvo1.png",
    "tags": ["Node.js", "CRM", "Webhooks", "MongoDB", "Service Bus"],
    "demoUrl": "",
    "githubUrl": "",
    "features": [
      "Automated electronic signature validation",
      "CRM system integration",
      "Service bus for failure handling",
      "Encrypted data storage",
      "Manual task elimination"
    ],
    "problemStatement": "Manual invoice validation was time-consuming, error-prone, and lacked digital security.",
    "solution": "Built a secure, automated platform with CRM sync and failure recovery to streamline and safeguard invoice handling.",
    "techStack": [
      {
        "category": "Backend",
        "items": ["Node.js", "Express"]
      },
      {
        "category": "Database",
        "items": ["MongoDB"]
      },
      {
        "category": "Integration",
        "items": ["Dynamics CRM", "Service Bus"]
      }
    ],
    "challenges": [
      {
        "title": "Encrypted Signature Processing",
        "description": "Handling secure digital signatures without introducing latency or storage issues."
      }
    ],
    "lessons": [
      "Event-driven architecture enhances system resilience",
      "Data sync requires precise schema alignment"
    ],
    "futureImprovements": [
      "AI fraud detection module",
      "Invoice audit trail visualization"
    ],
    "screenshots": ["../../volvo1.png", "../../volvo2.png", "../../volvo3.png"]
  },  
  {
    "id": "service-pay-system",
    "title": "Service Pay - Bank System",
    "description": "A robust backend platform for managing bank payments and service fees with high reliability.",
    "detailedDescription": "Created RESTful APIs for payment management using Spring Boot. Developed dashboards, data models, and optimized SQL queries. Integrated service logs and metrics using Grafana and Datadog for system observability.",
    "image": "../../volvo1.png",
    "tags": ["Java", "Spring Boot", "MySQL", "Grafana", "Datadog"],
    "demoUrl": "",
    "githubUrl": "",
    "features": [
      "Bank transaction logging",
      "Secure payment endpoints",
      "Performance-optimized database queries",
      "Dashboard analytics",
      "Monitoring with Grafana & Datadog"
    ],
    "problemStatement": "Banks needed a reliable and efficient system for managing service payments with full observability.",
    "solution": "Delivered a secure and monitored backend that tracks transactions and provides insightful analytics.",
    "techStack": [
      {
        "category": "Backend",
        "items": ["Java", "Spring Boot"]
      },
      {
        "category": "Database",
        "items": ["MySQL"]
      },
      {
        "category": "Monitoring",
        "items": ["Grafana", "Datadog"]
      }
    ],
    "challenges": [
      {
        "title": "Query Optimization",
        "description": "Reducing latency in transaction-heavy operations with optimized SQL queries and indexes."
      }
    ],
    "lessons": [
      "Early monitoring setup simplifies debugging",
      "Clean APIs are critical for secure bank integrations"
    ],
    "futureImprovements": [
      "Blockchain-based ledger",
      "AI-based fraud detection"
    ],
    "screenshots": ["../../volvo1.png", "../../volvo2.png", "../../volvo3.png"]
  },
  {
    "id": "gym-dashboard-system",
    "title": "Gym Dashboard System",
    "description": "Interactive dashboard for managing gym memberships, class schedules, and trainer bookings.",
    "detailedDescription": "Built a modern React-based dashboard to track gym activities, automate membership renewals, and integrate with trainers' calendars. Includes user profiles, payment logs, and real-time booking status.",
    "image": "../../volvo1.png",
    "tags": ["React", "Node.js", "MongoDB", "JWT", "Material UI"],
    "demoUrl": "",
    "githubUrl": "",
    "features": [
      "Member profile and subscription tracking",
      "Class and trainer schedule management",
      "Real-time booking system",
      "Secure login with JWT",
      "Responsive UI design"
    ],
    "problemStatement": "Gyms lacked a centralized system to manage operations and provide a seamless user experience.",
    "solution": "Developed an intuitive dashboard that streamlined gym operations and improved member engagement.",
    "techStack": [
      {
        "category": "Frontend",
        "items": ["React", "Material UI"]
      },
      {
        "category": "Backend",
        "items": ["Node.js", "Express", "JWT"]
      },
      {
        "category": "Database",
        "items": ["MongoDB"]
      }
    ],
    "challenges": [
      {
        "title": "Real-Time Bookings",
        "description": "Ensuring consistent booking status across users without race conditions."
      }
    ],
    "lessons": [
      "Modular frontend components enable reusability",
      "Real-time UX enhances customer satisfaction"
    ],
    "futureImprovements": [
      "Mobile app integration",
      "Fitness progress tracking module"
    ],
    "screenshots": ["../../volvo1.png", "../../volvo2.png", "../../volvo3.png"]
  },  
  {
    "id": "e-tourism-albania",
    "title": "E-Tourism Platform for Albania",
    "description": "A central platform for tour agencies across Albania, featuring tour listings, booking, and multilingual support.",
    "detailedDescription": "Designed an inclusive tourism portal integrating listings from multiple tour agencies. Supported filtering by region, pricing, and activity type. Built admin panel for agency onboarding and tour management.",
    "image": "../../volvo1.png",
    "tags": ["React", "Node.js", "PostgreSQL", "i18n", "AWS"],
    "demoUrl": "",
    "githubUrl": "",
    "features": [
      "Unified agency and tour listing",
      "Real-time booking and reviews",
      "Admin management dashboard",
      "Multi-language support",
      "Interactive map integration"
    ],
    "problemStatement": "Tourism in Albania lacked a unified digital platform to promote regional offerings and streamline bookings.",
    "solution": "Developed an all-in-one e-tourism platform connecting agencies and tourists with scalable infrastructure.",
    "techStack": [
      {
        "category": "Frontend",
        "items": ["React", "i18n"]
      },
      {
        "category": "Backend",
        "items": ["Node.js", "Express"]
      },
      {
        "category": "Database",
        "items": ["PostgreSQL"]
      },
      {
        "category": "Cloud",
        "items": ["AWS"]
      }
    ],
    "challenges": [
      {
        "title": "Agency Integration",
        "description": "Creating a scalable structure for onboarding multiple agencies with individual needs."
      }
    ],
    "lessons": [
      "Localization is critical for tourism platforms",
      "Data consistency must be maintained across high-write systems"
    ],
    "futureImprovements": [
      "AI-based travel planner",
      "Mobile app with offline support"
    ],
    "screenshots": ["../../volvo1.png", "../../volvo2.png", "../../volvo3.png"]
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