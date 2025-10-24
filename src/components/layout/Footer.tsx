"use client";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-black border-t border-slate-800/50">
      {/* Background con textura sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.08),transparent_50%)]"></div>

      {/* Elementos 3D flotantes de lujo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orbes 3D con glassmorphism */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 backdrop-blur-sm border border-white/10 rotate-12 animate-pulse float-3d"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/10 via-indigo-400/10 to-purple-400/10 backdrop-blur-sm border border-white/10 -rotate-12 animate-pulse float-3d" style={{ animationDelay: '1s' }}></div>

        {/* Líneas 3D geométricas */}
        <div className="absolute top-1/4 right-1/4 w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent -rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Partículas minimalistas */}
        <div className="absolute top-16 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 left-1/6 w-1 h-1 bg-purple-400/50 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        {/* Header minimalista pero elegante */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Logo 3D con efectos de profundidad */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-30 scale-110"></div>
              <img
                src="/Logos/Mi_foto.jpg"
                alt="Logo"
                className="relative w-16 h-16 rounded-full border-2 border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:rotate-3 float-3d"
              />
              {/* Anillo 3D rotativo */}
              <div className="absolute inset-0 rounded-full border border-gradient-to-r from-cyan-400/50 to-purple-400/50 animate-spin" style={{ animationDuration: '8s' }}></div>
            </div>
          </div>

          <h2 className="text-4xl font-light mt-6 mb-3 tracking-wide text-white/90">
            Portfolio
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
          <p className="text-lg text-slate-400 mt-4 font-light tracking-wide">
            Full Stack Developer & UI/UX Designer
          </p>
        </div>

        {/* Grid minimalista con efectos 3D */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Información profesional */}
          <div className="group text-center md:text-left">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-cyan-500/10 glass-card">
                <div className="text-2xl mb-3">💼</div>
                <h3 className="text-white/90 font-medium mb-2">Professional</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Desarrollador especializado en crear experiencias digitales
                  excepcionales con tecnología de vanguardia y diseño elegante.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack minimalista */}
          <div className="group text-center">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-purple-500/10 glass-card">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="text-white/90 font-medium mb-3">Tech Stack</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-slate-300">React • Next.js</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span className="text-slate-300">TypeScript • Node.js</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span className="text-slate-300">Tailwind • MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto elegante */}
          <div className="group text-center md:text-right">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-pink-500/10 glass-card">
                <div className="text-2xl mb-3">📧</div>
                <h3 className="text-white/90 font-medium mb-2">Contacto</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Proyectos innovadores que marcan la diferencia.
                  <span className="text-white/60 block mt-1">Disponible para nuevas oportunidades.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria 3D */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-white/10 to-transparent depth-line"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 pulse-glow">
              <span className="text-white/60 text-sm font-light">2025</span>
            </div>
          </div>
        </div>

        {/* Footer bottom ultra minimalista */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright elegante */}
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm font-light">
                © {new Date().getFullYear()} Portfolio. Todos los derechos reservados.
              </p>
              <p className="text-slate-600 text-xs mt-1 font-light">
                Hecho con precisión y atención al detalle.
              </p>
            </div>

            {/* Status indicators 3D */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-full status-indicator">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-xs font-light">Online</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-full status-indicator">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-slate-300 text-xs font-light">Available</span>
              </div>
            </div>
          </div>

          {/* Línea final ultra sutil */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex justify-center">
              <div className="flex items-center gap-8 text-xs text-slate-600 font-light">
                <span>Optimized for performance</span>
                <div className="w-px h-3 bg-white/10"></div>
                <span>Built with Next.js</span>
                <div className="w-px h-3 bg-white/10"></div>
                <span>Professional grade</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay 3D para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20 pointer-events-none"></div>    </footer>
  );
};
