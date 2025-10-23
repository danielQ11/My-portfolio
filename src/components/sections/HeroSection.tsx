import { useRef } from "react";

interface HeroSectionProps {
  firstImageRef?: React.RefObject<HTMLImageElement | null>;
  firstTextRef?: React.RefObject<HTMLDivElement | null>;
}

export default function HeroSection({ firstImageRef, firstTextRef }: HeroSectionProps) {
  return (
    <section className="mb-32">
      <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-3xl p-16 border border-gray-800">
        <div className="flex items-center gap-16">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Profile photo circle */}
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-black p-1 -translate-y-2">
                <img
                  ref={firstImageRef!}
                  src="/Logos/Mi_foto.jpg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-lg">⭐</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-1000">
                <span className="text-white text-sm">💻</span>
              </div>
            </div>
          </div>
          <div className="flex-1 text-white">
            <div ref={firstTextRef!}>
              <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Portfolio</h2>
              <p className="text-3xl leading-relaxed text-gray-300 mb-8">Desarrollador Full Stack & Diseñador UI/UX especializado en crear experiencias digitales excepcionales.</p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all">
                  Ver Proyectos
                </button>
                <button className="px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-xl font-semibold hover:border-white hover:text-white transition-all">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
