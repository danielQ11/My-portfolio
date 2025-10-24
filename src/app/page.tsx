'use client';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import HeroVideo from "../components/HeroVideo";
import ExpandingMaskedSection from "@/components/ui/MaskedSection";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";

export default function Home() {
  const firstImageRef = useRef<HTMLImageElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundPatternRef = useRef<HTMLDivElement>(null);
  const mainSectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline optimizada para página principal
      const masterTl = gsap.timeline();

      // 1. Elementos decorativos flotantes optimizados
      const floatingElements = mainSectionsRef.current?.querySelectorAll('.absolute.bg-cyan-400\\/30, .absolute.bg-purple-400\\/20, .absolute.bg-blue-400\\/25, .absolute.bg-indigo-400\\/20');
      floatingElements?.forEach((element, index) => {
        masterTl.fromTo(element,
          { opacity: 0, scale: 0.8 },
          { opacity: 0.6, scale: 1, duration: 0.6, ease: "power2.out" },
          index * 0.1
        );
      });

      // 2. Sistema de animaciones por secciones optimizado
      const sections = mainSectionsRef.current?.querySelectorAll('section');
      if (sections) {
        sections.forEach((section, index) => {
          const sectionTl = gsap.timeline();

          sectionTl.fromTo(section,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );

          masterTl.add(sectionTl, index * 0.3);
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-hidden">
      <HeroVideo />

      <ExpandingMaskedSection
        imageSrc="/images/Fondaco.jpg"
        maskSrc="/images/demon.svg"
      />

      <div ref={mainSectionsRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900">
        <div className="absolute inset-0">
          <div ref={backgroundPatternRef} className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rounded-full opacity-0"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full opacity-0" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-400/25 rounded-full opacity-0" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-indigo-400/20 rounded-full opacity-0" style={{ animationDelay: '0.5s', animationDuration: '2s' }}></div>

        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="hero-section-class">
              <HeroSection firstImageRef={firstImageRef} firstTextRef={firstTextRef} />
            </div>
            <div className="stats-section-class">
              <StatsSection />
            </div>
            <div className="services-section-class">
              <ServicesSection />
            </div>
            <div className="projects-section-class">
              <ProjectsSection secondImageRef={secondImageRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
