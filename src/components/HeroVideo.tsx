"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroButton from "./ui/HeroButton";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideo() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (
      !heroRef.current ||
      !heroTitleRef.current ||
      !buttonRef.current ||
      !rightImageRef.current ||
      !bottomRef.current
    )
      return;

    // Título parallax
    gsap.to(heroTitleRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(videoRef.current, {
  y: 200,
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

    // Texto parallax
    gsap.to(heroTextRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Botón parallax
    gsap.to(buttonRef.current, {
      y: 80,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Panel lateral parallax
    gsap.to(rightImageRef.current, {
      y: 400,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Bottom element parallax
    gsap.to(bottomRef.current, {
      y: 400,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        ref={videoRef}
        src="/videos/a.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10 pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-20 flex h-full px-16">
        {/* Texto y botón */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-6">
            <h1
              ref={heroTitleRef}
              className="text-7xl font-bold text-white max-w-2xl leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <br />
              <span className="text-white"> & UI/UX Designer</span>
            </h1>
            <p ref={heroTextRef} className="text-2xl text-gray-200 max-w-xl leading-relaxed">
              Creo experiencias digitales excepcionales combinando código elegante con diseño intuitivo.
              <span className="text-cyan-400 font-semibold"> React • Node.js • TypeScript • Figma</span>
            </p>

            {/* Botones */}
            <div className="flex gap-4 mt-8">
              <HeroButton text="Ver Proyectos" ref={buttonRef} />
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50">
                Descargar CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a href="https://github.com" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110">
                <span className="text-xl">📧</span>
              </a>
              <a href="https://linkedin.com" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110">
                <span className="text-xl">💼</span>
              </a>
              <a href="https://github.com" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110">
                <span className="text-xl">🐙</span>
              </a>
            </div>
          </div>
        </div>

        {/* Panel lateral derecho - Foto circular */}
        <div
          ref={rightImageRef}
          className="flex-1 flex items-center justify-end"
        >
          <div className="relative">
            {/* Profile photo circle - Main element */}
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl bg-gradient-to-br from-gray-800 to-black p-1 -translate-y-2">
              <img
                src="/Logos/Mi_foto.jpg"
                alt="Profile Photo"
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-lg">⭐</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-1000">
              <span className="text-white text-sm">🚀</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom SVG decoration */}
      <div ref={bottomRef} className="absolute bottom-0 left-0 w-full z-20">
        <img
          src="/images/bottom.png"
          alt="Decoración bottom"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
