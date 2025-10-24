import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ProjectCard from "../ProjectCard";
import { getFeaturedProjects } from "../../lib/projects";
import Link from "next/link";

interface ProjectsSectionProps {
  secondImageRef?: React.RefObject<HTMLImageElement | null>;
}

export default function ProjectsSection({ secondImageRef }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline simple para ProjectsSection
      const tl = gsap.timeline();

      // 1. Título principal simple
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }

      // 2. Párrafo descriptivo simple
      if (sectionRef.current?.querySelector('.text-2xl')) {
        const description = sectionRef.current.querySelector('.text-2xl');
        tl.fromTo(description,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );
      }

      // 3. Grid de proyectos simple
      if (projectsGridRef.current) {
        tl.fromTo(projectsGridRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.3"
        );
      }

      // 4. Tarjetas de proyectos individuales simples
      const projectCards = projectsGridRef.current?.querySelectorAll('.project-card');
      projectCards?.forEach((card, index) => {
        tl.fromTo(card,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          `-=${0.6 + index * 0.1}`
        );

        // Hover effects simples
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      });

      // 5. Botones simples
      const buttons = sectionRef.current?.querySelectorAll('.flex.gap-4 a');
      buttons?.forEach((button, index) => {
        tl.fromTo(button,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          `-=${0.4 + index * 0.1}`
        );

        // Hover effects simples
        const handleButtonMouseEnter = () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleButtonMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        button.addEventListener('mouseenter', handleButtonMouseEnter);
        button.addEventListener('mouseleave', handleButtonMouseLeave);
      });

      // 6. Elementos de fondo simples
      const backgroundElements = sectionRef.current?.querySelectorAll('.absolute.bg-cyan-400\\/20, .absolute.bg-purple-400\\/15, .absolute.bg-blue-400\\/20, .absolute.bg-indigo-400\\/15');
      backgroundElements?.forEach((element, index) => {
        tl.fromTo(element,
          { opacity: 0, scale: 0 },
          { opacity: 0.6, scale: 1, duration: 1, ease: "power2.out" },
          `-=${0.8 + index * 0.1}`
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-32 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/15 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-indigo-400/15 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <h3 ref={titleRef} className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent relative">
          Proyectos Destacados
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 rounded-full"></div>
        </h3>
        <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
          Una selección de mis mejores trabajos, desde aplicaciones web hasta soluciones de IA
        </p>
      </div>

      <div ref={projectsGridRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {featuredProjects.map((project, index) => (
          <div key={project.id} className="project-card">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      <div className="text-center mt-16 relative z-10">
        <p className="text-gray-400 mb-8 text-lg">
          ¿Quieres ver más proyectos o tienes una idea en mente?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/Projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10">Ver Todos los Proyectos</span>
          </Link>
          <Link
            href="/Contact"
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative z-10">Hablemos de tu Proyecto</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
