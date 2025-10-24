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
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel de administración. Incluye gestión de inventario en tiempo real y analíticas de ventas.",
    technologies: "React + Node.js + PostgreSQL + Stripe",
    splineUrl: "https://prod.spline.design/dfS9lWZ3IYehQvFS/scene.splinecode",
    githubUrl: "https://github.com/tu-usuario/ecommerce-platform",
    liveUrl: "https://tu-ecommerce.vercel.app",
    category: "web",
    featured: true
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Panel de control interactivo para visualización de datos empresariales con gráficos dinámicos, filtros avanzados y exportación de reportes en múltiples formatos.",
    technologies: "Vue.js + Python + D3.js + FastAPI",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/tu-usuario/analytics-dashboard",
    liveUrl: "https://dashboard-demo.vercel.app",
    category: "web",
    featured: true
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Aplicación móvil para banca digital con funciones de transferencias, pagos QR, historial de transacciones y notificaciones push seguras.",
    technologies: "React Native + Firebase + Node.js + MongoDB",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/tu-usuario/mobile-banking",
    category: "mobile",
    featured: false
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description: "Asistente de chat inteligente con procesamiento de lenguaje natural, respuestas contextuales y integración con múltiples APIs de servicios.",
    technologies: "Python + OpenAI + FastAPI + React",
    splineUrl: "https://prod.spline.design/ai-chat-bot-demo/scene.splinecode",
    githubUrl: "https://github.com/tu-usuario/ai-chat-assistant",
    liveUrl: "https://ai-chat-demo.vercel.app",
    category: "ai",
    featured: true
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Sitio web portfolio personal con animaciones 3D, secciones interactivas y diseño responsivo. Incluye blog integrado y formulario de contacto.",
    technologies: "Next.js + TypeScript + TailwindCSS + Framer Motion",
    imageUrl: "/Logos/portfolio-screenshot.png",
    githubUrl: "https://github.com/tu-usuario/portfolio-website",
    liveUrl: "https://tu-portfolio.vercel.app",
    category: "web",
    featured: false
  },
  {
    id: 6,
    title: "Desktop Task Manager",
    description: "Aplicación de escritorio para gestión de tareas con sincronización en la nube, recordatorios inteligentes y modo offline completo.",
    technologies: "Electron + React + SQLite + Node.js",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    githubUrl: "https://github.com/tu-usuario/task-manager",
    category: "desktop",
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(project => project.featured);
export const getProjectsByCategory = (category: string) => projects.filter(project => project.category === category);
export const getProjectById = (id: number) => projects.find(project => project.id === id);
