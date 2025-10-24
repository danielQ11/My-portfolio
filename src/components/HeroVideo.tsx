"use client";

import Image from "next/image";
import HeroButton from "./ui/HeroButton";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const profilePhotoRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline optimizada para HeroVideo
      const tl = gsap.timeline();

      // 1. Título optimizado
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }

      // 2. Subtítulo optimizado
      if (subtitleRef.current) {
        tl.fromTo(subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      // 3. Foto de perfil optimizada
      if (profilePhotoRef.current) {
        tl.fromTo(profilePhotoRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
      }

      // 4. Elementos flotantes optimizados (menos complejos)
      floatingElementsRef.current.forEach((element, index) => {
        if (element) {
          tl.fromTo(element,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
            `-=${0.3 + index * 0.1}`
          );
        }
      });

      // 5. Botones optimizados
      if (buttonsRef.current) {
        tl.fromTo(buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
      }

      // 6. Links sociales optimizados
      if (socialLinksRef.current) {
        tl.fromTo(socialLinksRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.1"
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/a.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* Animated overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Contenido principal */}
      <div className="relative z-20 flex h-full px-8 lg:px-16">
        {/* Texto y botón */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <div className="space-y-6">
            <h1 ref={titleRef} className="hero-title text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span>Full Stack Developer</span>
              <br />
              <span className="text-white"> & UI/UX Designer</span>
            </h1>
            <p ref={subtitleRef} className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              Creo experiencias digitales excepcionales combinando código elegante con diseño intuitivo.
              <span className="text-cyan-400 font-semibold"> React • Node.js • TypeScript • Figma</span>
            </p>

            {/* Botones */}
            <div ref={buttonsRef} className="hero-buttons flex gap-4 mt-8">
              <HeroButton text="Ver Proyectos" />
            </div>

            {/* Social Links */}
            <div ref={socialLinksRef} className="flex gap-4 lg:gap-6 mt-8">
              <a href="https://github.com" className="social-link w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <span className="text-lg lg:text-xl relative z-10">📧</span>
              </a>
              <a href="https://linkedin.com" className="social-link w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <span className="text-lg lg:text-xl relative z-10">💼</span>
              </a>
              <a href="https://github.com" className="social-link w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <span className="text-lg lg:text-xl relative z-10">🐙</span>
              </a>
            </div>
          </div>
        </div>

        {/* Panel lateral derecho - Foto circular */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div className="relative">
            {/* Profile photo circle - Main element */}
            <div ref={profilePhotoRef} className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl bg-gradient-to-br from-gray-800 to-black p-1 relative">
              <Image
                src="/Logos/Mi_foto.jpg"
                alt="Profile Photo"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                priority
                quality={85}
              />

              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border border-purple-400/20 animate-pulse"></div>
            </div>

            {/* Floating elements with GSAP animations */}
            <div
              ref={(el) => { floatingElementsRef.current[0] = el; }}
              className="absolute -top-4 -right-4 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white text-sm lg:text-base">⭐</span>
            </div>
            <div
              ref={(el) => { floatingElementsRef.current[1] = el; }}
              className="absolute -bottom-4 -left-4 w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white text-xs">🚀</span>
            </div>
            <div
              ref={(el) => { floatingElementsRef.current[2] = el; }}
              className="absolute top-1/2 -right-6 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-indigo-500 to-gray-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white text-xs">💻</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom SVG decoration */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Image
          src="/images/bottom.png"
          alt="Decoración bottom"
          width={1920}
          height={200}
          className="w-full h-auto"
          quality={85}
        />
      </div>
    </div>
  );
}
