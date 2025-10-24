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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-white mb-2">Nombre</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={handleInputChange('fullName')}
          className={`w-full p-3 rounded-lg transition-all duration-200 backdrop-blur-sm ${
            errors.fullName
              ? 'bg-red-900/80 text-white border-2 border-red-500'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/15 focus:bg-white/20 focus:border-white/40'
          }`}
          placeholder="Tu nombre completo"
        />
        {errors.fullName && (
          <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label className="block text-white mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          className={`w-full p-3 rounded-lg transition-all duration-200 backdrop-blur-sm ${
            errors.email
              ? 'bg-red-900/80 text-white border-2 border-red-500'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/15 focus:bg-white/20 focus:border-white/40'
          }`}
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-white mb-2">Mensaje</label>
        <textarea
          value={formData.message}
          onChange={handleInputChange('message')}
          rows={5}
          className={`w-full p-3 rounded-lg transition-all duration-200 backdrop-blur-sm resize-none ${
            errors.message
              ? 'bg-red-900/80 text-white border-2 border-red-500'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/15 focus:bg-white/20 focus:border-white/40'
          }`}
          placeholder="Tu mensaje aquí..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full p-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm text-white rounded-lg hover:from-blue-500/90 hover:to-purple-500/90 disabled:from-gray-600/80 disabled:to-gray-700/80 disabled:cursor-not-allowed transition-all duration-200 border border-white/20 hover:border-white/30"
      >
        {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {message && (
        <p className={`text-center mt-4 p-3 rounded-lg backdrop-blur-sm border transition-all duration-200 ${
          message.includes('Error') || message.includes('Error')
            ? 'text-red-400 bg-red-900/30 border-red-500/30'
            : 'text-green-400 bg-green-900/30 border-green-500/30'
        }`}>
          {message}
        </p>
      )}
    </form>
  );
}
