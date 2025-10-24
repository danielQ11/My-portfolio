import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline simple para StatsSection
      const tl = gsap.timeline();

      // 1. Sección principal simple
      if (sectionRef.current) {
        tl.fromTo(sectionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }

      // 2. Tarjetas de estadísticas simples
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          tl.fromTo(stat,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            `-=${0.6 + index * 0.1}`
          );

          // Hover effects simples
          const handleMouseEnter = () => {
            gsap.to(stat, {
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(stat, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          stat.addEventListener('mouseenter', handleMouseEnter);
          stat.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // 3. Elementos de fondo simples
      const floatingParticles = sectionRef.current?.querySelectorAll('.absolute.top-4, .absolute.bottom-4, .absolute.top-6, .absolute.bottom-6, .absolute.top-8, .absolute.bottom-8');
      floatingParticles?.forEach((particle, index) => {
        tl.fromTo(particle,
          { opacity: 0, scale: 0 },
          { opacity: 0.6, scale: 1, duration: 1, ease: "power2.out" },
          `-=${0.8 + index * 0.1}`
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          ref={el => statsRef.current[0] = el}
          className="stat-background bg-gradient-to-br from-blue-900 to-purple-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-blue-700 text-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Animated background glow */}
          <div className="stat-glow absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>

          <span
            ref={el => numbersRef.current[0] = el}
            className="stat-number text-5xl font-bold text-cyan-400 mb-2 relative z-10"
          >
            50+
          </span>
          <span className="text-xl text-gray-300 relative z-10">Proyectos Completados</span>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div
          ref={el => statsRef.current[1] = el}
          className="stat-background bg-gradient-to-br from-purple-900 to-indigo-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-purple-700 text-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Animated background glow */}
          <div className="stat-glow absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-6 right-6 w-3 h-3 bg-purple-300 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <span
            ref={el => numbersRef.current[1] = el}
            className="stat-number text-5xl font-bold text-purple-400 mb-2 relative z-10"
          >
            3+
          </span>
          <span className="text-xl text-gray-300 relative z-10">Años de Experiencia</span>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div
          ref={el => statsRef.current[2] = el}
          className="stat-background bg-gradient-to-br from-indigo-900 to-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-700 text-center relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Animated background glow */}
          <div className="stat-glow absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-gray-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-8 right-8 w-2.5 h-2.5 bg-indigo-300 rounded-full opacity-55 animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-8 left-8 w-1 h-1 bg-gray-300 rounded-full opacity-45 animate-ping" style={{ animationDelay: '1.5s' }}></div>

          <span
            ref={el => numbersRef.current[2] = el}
            className="stat-number text-5xl font-bold text-indigo-400 mb-2 relative z-10"
          >
            20+
          </span>
          <span className="text-xl text-gray-300 relative z-10">Clientes Satisfechos</span>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}
