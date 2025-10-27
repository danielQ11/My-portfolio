"use client";

import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1020] via-[#11172a] to-[#1a2236]">
      {/* Fondo animado multimillonario */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-10 top-24 w-44 h-44 rounded-full bg-cyan-400/10 blur-2xl animate-float-slow" />
        <div className="absolute right-20 top-48 w-56 h-56 rounded-full bg-purple-400/10 blur-2xl animate-float-medium" />
        <div className="absolute left-1/3 bottom-32 w-32 h-32 rounded-full bg-blue-400/10 blur-2xl animate-float-fast" />
        <div className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-400/10 animate-line-move" />
        <div className="absolute left-1/4 bottom-12 w-2/3 h-1 bg-gradient-to-r from-blue-400/10 via-transparent to-cyan-400/10 animate-line-move2" />
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 via-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob" />
      </div>
      {/* Overlay glass para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020]/80 via-black/60 to-[#1a2236]/80 z-10" />
      {/* Hero & Form */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4 py-24">
        {/* Hero visual */}
        <div className="max-w-2xl w-full mx-auto text-center mb-14">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-7 bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_8px_40px_rgba(0,255,255,0.18)] animate-gradient-x">
            ¡Hablemos de tu proyecto!
          </h1>
          <div className="mx-auto w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-lg mb-6 animate-pulse" />
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-[0_2px_16px_rgba(0,255,255,0.10)]">
            ¿Listo para crear algo extraordinario? Completa el formulario y te responderé lo antes posible. Trabajo con empresas, startups y visionarios.
          </p>
        </div>
        {/* Formulario centrado */}
        <div className="w-full flex justify-center mb-16">
          <div className="w-full max-w-[16rem]">
            <div className="relative rounded-3xl shadow-2xl border border-cyan-400/10 bg-gradient-to-br from-white/10 via-cyan-400/10 to-purple-400/10 backdrop-blur-xl px-2 py-8 md:px-3 md:py-10">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-blue-400/10 opacity-70 transition-all duration-700 blur-2xl" />
              <div className="pointer-events-none absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl opacity-40" />
              <ContactForm />
            </div>
          </div>
        </div>
        {/* Cards horizontales de detalles premium */}
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="flex-1 min-w-[260px] bg-gradient-to-br from-white/10 via-cyan-400/10 to-purple-400/10 rounded-2xl p-8 shadow-xl border border-cyan-400/10 backdrop-blur-xl flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2 text-cyan-200 flex items-center gap-2"><span>📞</span> Contacto Directo</h2>
            <p className="text-lg text-gray-200 mb-2">daniel@ejemplo.com</p>
            <p className="text-lg text-gray-200 mb-2">+57 123 456 7890</p>
            <div className="flex gap-4 justify-center mt-4">
              <a href="https://wa.me/573001234567" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-200 text-2xl transition-all"><span>💬</span></a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-200 text-2xl transition-all"><span>🔗</span></a>
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-200 text-2xl transition-all"><span>💻</span></a>
              <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener" className="text-cyan-400 hover:text-cyan-200 text-2xl transition-all"><span>🐦</span></a>
            </div>
          </div>
          <div className="flex-1 min-w-[260px] bg-gradient-to-br from-purple-400/10 via-cyan-400/10 to-blue-400/10 rounded-2xl p-8 shadow-xl border border-cyan-400/10 backdrop-blur-xl flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-purple-200 mb-3">Frase Inspiradora</h3>
            <p className="text-lg text-gray-200 italic">“La creatividad es la inteligencia divirtiéndose.”</p>
          </div>
          <div className="flex-1 min-w-[260px] bg-gradient-to-br from-cyan-400/10 via-white/10 to-purple-400/10 rounded-2xl p-8 shadow-xl border border-cyan-400/10 backdrop-blur-xl flex flex-col items-center justify-center">
            <h4 className="text-lg font-bold text-cyan-200">¿Prefieres agendar una llamada?</h4>
            <a href="https://calendly.com/tuusuario/30min" target="_blank" rel="noopener" className="mt-2 inline-block text-cyan-300 hover:text-cyan-100 font-semibold underline underline-offset-4 transition-all">Reserva una videollamada</a>
          </div>
        </div>
      </div>
    </div>
  );
}
