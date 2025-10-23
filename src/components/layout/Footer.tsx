export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img
                src="/Logos/Mi_foto.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-full border-2 border-cyan-500"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desarrollador Full Stack & UI/UX Designer especializado en crear experiencias digitales excepcionales.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Inicio</a>
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Proyectos</a>
              <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Servicios</a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contacto</a>
            </div>
          </div>

          {/* Social links */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Conectemos</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://github.com" className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110">
                <span className="text-lg">📧</span>
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-gray-800 hover:bg-purple-500 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110">
                <span className="text-lg">💼</span>
              </a>
              <a href="https://github.com" className="w-10 h-10 bg-gray-800 hover:bg-indigo-500 rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110">
                <span className="text-lg">🐙</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Portfolio. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Hecho con ❤️ y React</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
