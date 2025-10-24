import { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface ExpandingMaskedSectionProps {
  imageSrc: string;
  maskSrc?: string; // máscara opcional
  title?: string;
  text?: string;
  children?: React.ReactNode;
}

export default function ExpandingMaskedSection({
  imageSrc,
  maskSrc,
  title,
  text,
  children,
}: ExpandingMaskedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline optimizada para MaskedSection
      const tl = gsap.timeline();

      // 1. Imagen con máscara optimizada
      if (sectionRef.current) {
        tl.fromTo(sectionRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
        );
      }

      // 2. Contenido optimizado
      if (contentRef.current) {
        tl.fromTo(contentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
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
        ref={sectionRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Contenido */}
      <div ref={contentRef} className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
        {children}
      </div>
    </section>
  );
}
