'use client';
import Script from "next/script";
import { useRef, useEffect } from "react";
import HeroVideo from "../components/HeroVideo";
import ExpandingMaskedSection from "@/components/ui/MaskedSection";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  const firstImageRef = useRef<HTMLImageElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.10.82/build/spline-viewer.js"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />

      <HeroVideo />

      <ExpandingMaskedSection
        imageSrc="/images/Fondaco.jpg"
        maskSrc="/images/demon.svg"
      >
        <button className="mt-4 px-6 py-3 bg-black text-black rounded-lg hover:bg-black hover:text-cyan-50">
          Contáctame
        </button>
      </ExpandingMaskedSection>

      {/* Main portfolio sections */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>

        <div className="relative z-10 py-20">
          <div className="container mx-auto px-8">
            <HeroSection
              firstImageRef={firstImageRef}
              firstTextRef={firstTextRef}
            />
            <StatsSection />
            <ServicesSection />
            <ProjectsSection
              secondImageRef={secondImageRef}
            />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}
