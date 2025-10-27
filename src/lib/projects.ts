export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  imageUrl?: string;
  splineUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'design';
  featured: boolean;
}



export const projects: Project[] = [
  {
    id: 1,
    title: "Prometio calculator with testing",
    description: "Platform to calculate the average of a school with all the necessary validations, done with next and with testing with jest.",
    technologies: "Next + Node.js + Jest + Gsap",
    imageUrl: "/Projects_img/calculator.png",
    githubUrl: "https://github.com/danielQ11/chapter",
    liveUrl: "https://tu-calculator.vercel.app",
    category: "web",
    featured: true
  },
  {
    id: 2,
    title: "Digital library",
    description: "A digital library with a mongo db database, with all its crud and user and admin view, and also a registration form with validation and database.",
    technologies: "Next + Typescript + MongoDB + Node.js",
    imageUrl: "/Projects_img/simulacrum.png",
    githubUrl: "https://github.com/danielQ11/simulacrum",
    liveUrl: "https://dashboard-demo.vercel.app",
    category: "web",
    featured: true
  },
  {
    id: 3,
    title: "TechNova page",
    description: "Real e-commerce simulation page with login form and mongoDB database management with moongose for typing products brought from the database on a technology store.",
    technologies: "Next + Typescript + MongoDB + Node.js",
    imageUrl: "/Projects_img/technova.png",
    githubUrl: "https://github.com/danielQ11/Typescript_test",
    category: "web",
    featured: false
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Interactive control panel for viewing business data with dynamic graphs, advanced filters and exporting reports in multiple formats.",
    technologies: "Next + Typescript + MongoDB + Node.js + D3.js",
    splineUrl: "",
    githubUrl: "https://github.com/danielQ11/Dashboard",
    liveUrl: "https://ai-chat-demo.vercel.app",
    category: "web",
    featured: true
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website with 3D animations, interactive sections and responsive design. Includes integrated blog and contact form.",
    technologies: "Next.js + TypeScript + TailwindCSS + GSAP",
    imageUrl: "/Projects_img/porto.png",
    githubUrl: "https://github.com/danielQ11/My-portfolio",
    liveUrl: "https://tu-portfolio.vercel.app",
    category: "web",
    featured: false
  },
  {
    id: 6,
    title: "Cards travels",
    description: "A page with letters about tourist attractions with great components with their texts and images referred to.",
    technologies: "Next + Typescript + Node.js",
    imageUrl: "/Projects_img/cards.png",
    githubUrl: "https://github.com/danielQ11/import.exports",
    category: "web",
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
export const getProjectById = (id: number) => projects.find(project => project.id === id);
