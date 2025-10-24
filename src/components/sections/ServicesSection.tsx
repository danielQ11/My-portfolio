import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline simple para ServicesSection
      const tl = gsap.timeline();

      // 1. Título simple
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }

      // 2. Tarjetas de servicios simples
      servicesRef.current.forEach((service, index) => {
        if (service) {
          tl.fromTo(service,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            `-=${0.6 + index * 0.1}`
          );

          // Hover effects simples
          const handleMouseEnter = () => {
            gsap.to(service, {
              scale: 1.05,
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(service, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          service.addEventListener('mouseenter', handleMouseEnter);
          service.addEventListener('mouseleave', handleMouseLeave);
        }
      });

      // 3. Elementos de fondo simples
      const floatingElements = sectionRef.current?.querySelectorAll('.absolute.top-4, .absolute.bottom-4, .absolute.top-6, .absolute.bottom-6, .absolute.top-8, .absolute.bottom-8, .absolute.top-10, .absolute.bottom-10');
      floatingElements?.forEach((element, index) => {
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
    <section ref={sectionRef} className="mb-32">
      <h3 ref={titleRef} className="text-5xl font-bold text-center text-white mb-16 relative">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Servicios
        </span>
        {/* Animated underline */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          ref={el => servicesRef.current[0] = el}
          className="bg-gradient-to-br from-gray-900 to-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Animated background glow */}
          <div className="service-glow absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="service-icon w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center relative hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">💻</span>
              {/* Animated ring around icon */}
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-300/50 animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
            <div>
              <h4 className="service-title text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Desarrollo Web</h4>
              <p className="text-gray-400">Aplicaciones web modernas con React, Next.js y Node.js</p>
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div
          ref={el => servicesRef.current[1] = el}
          className="bg-gradient-to-br from-purple-900 to-indigo-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Animated background glow */}
          <div className="service-glow absolute inset-0 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-6 right-6 w-3 h-3 bg-purple-300 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="service-icon w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center relative hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎨</span>
              {/* Animated ring around icon */}
              <div className="absolute inset-0 rounded-xl border-2 border-purple-300/50 animate-pulse"></div>
            </div>
            <div>
              <h4 className="service-title text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Diseño UI/UX</h4>
              <p className="text-gray-400">Interfaces intuitivas y experiencias de usuario excepcionales</p>
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div
          ref={el => servicesRef.current[2] = el}
          className="bg-gradient-to-br from-indigo-900 to-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-700 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Animated background glow */}
          <div className="service-glow absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-8 right-8 w-2.5 h-2.5 bg-indigo-300 rounded-full opacity-55 animate-spin" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-8 left-8 w-1 h-1 bg-gray-300 rounded-full opacity-45 animate-ping" style={{ animationDelay: '1.5s' }}></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="service-icon w-16 h-16 bg-gradient-to-r from-indigo-500 to-gray-500 rounded-xl flex items-center justify-center relative hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🚀</span>
              {/* Animated ring around icon */}
              <div className="absolute inset-0 rounded-xl border-2 border-indigo-300/50 animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
            <div>
              <h4 className="service-title text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">Backend & APIs</h4>
              <p className="text-gray-400">Sistemas escalables y APIs RESTful robustas</p>
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-indigo-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div
          ref={el => servicesRef.current[3] = el}
          className="bg-gradient-to-br from-gray-900 to-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 relative overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          {/* Animated background glow */}
          <div className="service-glow absolute inset-0 bg-gradient-to-br from-gray-400/10 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Floating particles */}
          <div className="absolute top-10 right-10 w-2 h-2 bg-gray-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-10 left-10 w-1.5 h-1.5 bg-black rounded-full opacity-30 animate-ping" style={{ animationDelay: '3s' }}></div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="service-icon w-16 h-16 bg-gradient-to-r from-gray-500 to-black rounded-xl flex items-center justify-center relative hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">📱</span>
              {/* Animated ring around icon */}
              <div className="absolute inset-0 rounded-xl border-2 border-gray-300/50 animate-spin" style={{ animationDuration: '4s' }}></div>
            </div>
            <div>
              <h4 className="service-title text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">Apps Móviles</h4>
              <p className="text-gray-400">Aplicaciones nativas y cross-platform</p>
            </div>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-gray-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
}
