import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  firstImageRef?: React.RefObject<HTMLImageElement | null>;
  firstTextRef?: React.RefObject<HTMLDivElement | null>;
}

export default function HeroSection({ firstImageRef, firstTextRef }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline optimizada para HeroSection
      const tl = gsap.timeline();

      // 1. Contenedor principal optimizado
      if (heroRef.current) {
        tl.fromTo(heroRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
        );
      }

      // 2. Imagen de perfil optimizada
      if (firstImageRef?.current) {
        tl.fromTo(firstImageRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }

      // 3. Texto del hero optimizado
      if (firstTextRef?.current) {
        const title = firstTextRef.current.querySelector('.hero-title');
        const description = firstTextRef.current.querySelector('.hero-description');

        if (title) {
          tl.fromTo(title,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.4"
          );
        }

        if (description) {
          tl.fromTo(description,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "-=0.2"
          );
        }
      }

      // 4. Elementos flotantes optimizados
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          tl.fromTo(element,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" },
            `-=${0.4 + index * 0.1}`
          );
        }
      });

      // 5. Botones optimizados
      const buttons = heroRef.current?.querySelectorAll('.hero-buttons a');
      buttons?.forEach((button, index) => {
        tl.fromTo(button,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          `-=${0.3 + index * 0.1}`
        );

        // Hover effects optimizados
        const handleMouseEnter = () => {
          gsap.to(button, {
            scale: 1.03,
            duration: 0.2,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
      });

    }, heroRef);

    return () => ctx.revert();
  }, [firstImageRef, firstTextRef]);

  return (
    <section ref={heroRef} className="mb-32">
      <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full animate-bounce"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Profile photo circle */}
              <div className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-black p-1 relative">
                <img
                  ref={firstImageRef!}
                  src="/Logos/Mi_foto.jpg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                />

                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
                <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-pulse"></div>
              </div>

              {/* Floating elements with GSAP animations */}
              <div
                ref={el => floatingElementsRef.current[0] = el}
                className="absolute -top-4 -right-4 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-base lg:text-lg">⭐</span>
              </div>
              <div
                ref={el => floatingElementsRef.current[1] = el}
                className="absolute -bottom-4 -left-4 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-sm">💻</span>
              </div>
              <div
                ref={el => floatingElementsRef.current[2] = el}
                className="absolute top-1/2 -right-8 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-indigo-500 to-gray-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs">🚀</span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-white text-center lg:text-left">
            <div ref={firstTextRef!}>
              <h2 className="hero-title text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                <span>Port</span><span>folio</span>
              </h2>
              <p className="hero-description text-xl lg:text-2xl xl:text-3xl leading-relaxed text-gray-300 mb-6 lg:mb-8">
                Desarrollador Full Stack & Diseñador UI/UX especializado en crear experiencias digitales excepcionales.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/Projects"
                  className="px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Ver Proyectos</span>
                </Link>
                <Link
                  href="/Contact"
                  className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-gray-400 text-gray-300 rounded-xl font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gray-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative z-10">Contactar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
