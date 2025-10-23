"use client";
import { ReactNode } from "react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExpandingMaskedSectionProps {
  imageSrc: string;
  maskSrc?: string; // máscara opcional
  title?: string;
  text?: string;
children?: ReactNode; 
}

export default function ExpandingMaskedSection({
  imageSrc,
  maskSrc,
  title,
  text,
}: ExpandingMaskedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

    // Animación de expansión de la imagen
    gsap.fromTo(
      imageRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1.5,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    // Animación de aparición del contenido
    gsap.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        WebkitMaskImage: maskSrc ? `url(${maskSrc})` : undefined,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "850px 850px",
        WebkitMaskPosition: "center",
        maskImage: maskSrc ? `url(${maskSrc})` : undefined,
        maskRepeat: "no-repeat",
        maskSize: "650px 650px",

        maskPosition: "center",
      }}
    >
      {/* Imagen que se expande */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Contenido */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
      >
        <h2 className="text-5xl text-white font-bold mb-4">{title}</h2>
        <p className="text-xl text-white max-w-2xl">{text}</p>
      </div>
    </section>
  );
}
