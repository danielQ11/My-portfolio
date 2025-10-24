import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hablemos
          </h3>
          <p className="text-2xl text-gray-300 mb-8">
            ¿Tienes un proyecto en mente? Me encantaría ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
