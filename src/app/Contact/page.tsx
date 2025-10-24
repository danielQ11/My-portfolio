"use client";

import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
              Contacto
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-md">
              ¿Tienes un proyecto en mente? Me encantaría ayudarte a hacerlo realidad.
              Envía tu mensaje y conversemos.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              {/* Form container with backdrop */}
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
