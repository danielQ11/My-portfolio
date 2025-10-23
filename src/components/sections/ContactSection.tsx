export default function ContactSection() {
  return (
    <section>
      <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700 text-center">
        <h3 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Hablemos</h3>
        <p className="text-2xl text-gray-300 mb-8">¿Tienes un proyecto en mente? Me encantaría ayudarte a hacerlo realidad.</p>
        <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105">
          Iniciar Proyecto
        </button>
      </div>
    </section>
  );
}
