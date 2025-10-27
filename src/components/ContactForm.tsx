"use client";

import { useState } from 'react';
import { validateContactForm, ContactFormData } from '../lib/validations/contact';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    // Clear general message when user starts typing
    if (message) {
      setMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors and messages
    setErrors({});
    setMessage('');

    // Validate form
    const validationError = await validateContactForm(formData);

    if (validationError) {
      setMessage(validationError);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('¡Mensaje enviado correctamente!');
        setFormData({ fullName: '', email: '', message: '' });
        setErrors({});
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setMessage('Error al conectar con el servidor');
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 px-1 relative">
      {/* Fondo animado sutil */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-2 w-24 h-24 rounded-full bg-cyan-400/20 blur-xl animate-float-slow" />
        <div className="absolute right-1/4 bottom-0 w-16 h-16 rounded-full bg-purple-400/20 blur-lg animate-float-medium" />
      </div>
      {/* Nombre */}
      <div className="relative z-10">
        <label className="block mb-1 text-cyan-300 text-xs font-semibold flex items-center gap-1">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path stroke="#22d3ee" strokeWidth="2" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.3 0-8 1.7-8 5v2h16v-2c0-3.3-4.7-5-8-5Z"/></svg>
          Nombre
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={handleInputChange('fullName')}
          className={`peer w-full py-2 px-3 mt-5 bg-white/20 text-white text-base rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-cyan-400/10 backdrop-blur placeholder-transparent ${
            errors.fullName
              ? 'border-red-500 focus:ring-red-400/60 bg-red-900/30 animate-shake'
              : formData.fullName
                ? 'border-green-400 focus:ring-green-400/60'
                : 'border-cyan-400/10'
          }`}
          placeholder="Nombre Completo"
        />
        {errors.fullName && (
          <p className="flex items-center gap-1 text-red-400 text-xs mt-1 ml-1 animate-shake"><svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="2"/><path stroke="#f87171" strokeWidth="2" d="M12 8v4m0 4h.01"/></svg>{errors.fullName}</p>
        )}
        {!errors.fullName && formData.fullName && (
          <p className="flex items-center gap-1 text-green-400 text-xs mt-1 ml-1 animate-bounce-in"><svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4ade80" strokeWidth="2"/><path stroke="#4ade80" strokeWidth="2" d="M8 12l2 2 4-4"/></svg>¡Perfecto!</p>
        )}
      </div>

      {/* Email */}
      <div className="relative z-10">
        <label className="block mb-1 text-cyan-300 text-xs font-semibold flex items-center gap-1">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#22d3ee" strokeWidth="2"/><path stroke="#22d3ee" strokeWidth="2" d="m3 7 9 6 9-6"/></svg>
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          className={`peer w-full py-2 px-3 mt-5 bg-white/20 text-white text-base rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-cyan-400/10 backdrop-blur placeholder-transparent ${
            errors.email
              ? 'border-red-500 focus:ring-red-400/60 bg-red-900/30 animate-shake'
              : formData.email
                ? 'border-green-400 focus:ring-green-400/60'
                : 'border-cyan-400/10'
          }`}
          placeholder="Email"
        />
        {errors.email && (
          <p className="flex items-center gap-1 text-red-400 text-xs mt-1 ml-1 animate-shake"><svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="2"/><path stroke="#f87171" strokeWidth="2" d="M12 8v4m0 4h.01"/></svg>{errors.email}</p>
        )}
        {!errors.email && formData.email && (
          <p className="flex items-center gap-1 text-green-400 text-xs mt-1 ml-1 animate-bounce-in"><svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4ade80" strokeWidth="2"/><path stroke="#4ade80" strokeWidth="2" d="M8 12l2 2 4-4"/></svg>Email válido</p>
        )}
      </div>

      {/* Mensaje */}
      <div className="relative z-10">
        <label className="block mb-1 text-cyan-300 text-xs font-semibold flex items-center gap-1">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#22d3ee" strokeWidth="2"/><path stroke="#22d3ee" strokeWidth="2" d="M8 12h8M8 16h5"/></svg>
          Mensaje
        </label>
        <textarea
          value={formData.message}
          onChange={handleInputChange('message')}
          rows={4}
          className={`peer w-full py-2 px-3 mt-5 bg-white/20 text-white text-base rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:bg-cyan-400/10 backdrop-blur resize-none placeholder-transparent ${
            errors.message
              ? 'border-red-500 focus:ring-red-400/60 bg-red-900/30 animate-shake'
              : formData.message
                ? 'border-green-400 focus:ring-green-400/60'
                : 'border-cyan-400/10'
          }`}
          placeholder="Mensaje"
        />
        {errors.message && (
          <p className="flex items-center gap-1 text-red-400 text-xs mt-1 ml-1 animate-shake"><svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="2"/><path stroke="#f87171" strokeWidth="2" d="M12 8v4m0 4h.01"/></svg>{errors.message}</p>
        )}
        {!errors.message && formData.message && (
          <p className="flex items-center gap-1 text-green-400 text-xs mt-1 ml-1 animate-bounce-in"><svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4ade80" strokeWidth="2"/><path stroke="#4ade80" strokeWidth="2" d="M8 12l2 2 4-4"/></svg>¡Mensaje listo!</p>
        )}
      </div>

      {/* Botón premium */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 text-base font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:from-cyan-500 hover:to-purple-600 hover:scale-[1.03] active:scale-95 transition-all duration-300 border border-cyan-400/20 hover:border-cyan-400/40 focus:ring-4 focus:ring-cyan-400/30 backdrop-blur-md flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
            Enviando...
          </span>
        ) : (
          <>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#fff" strokeWidth="2" d="m4 19 16-7-16-7v5l10 2-10 2v5Z"/></svg>
            Enviar
          </>
        )}
      </button>

      {/* Mensaje de feedback */}
      {message && (
        <div className={`text-center mt-6 p-4 rounded-2xl border-2 font-bold shadow-lg backdrop-blur-xl text-lg transition-all duration-300 ${
          message.includes('Error') || message.includes('error')
            ? 'text-red-400 bg-red-900/30 border-red-500/30 animate-shake'
            : 'text-green-400 bg-green-900/30 border-green-500/30 animate-bounce-in'
        }`}>
          {message}
        </div>
      )}
    </form>
  );
}
