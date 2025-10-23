export default function ServicesSection() {
  return (
    <section className="mb-32">
      <h3 className="text-5xl font-bold text-center text-white mb-16">Servicios</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Desarrollo Web</h4>
              <p className="text-gray-400">Aplicaciones web modernas con React, Next.js y Node.js</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Diseño UI/UX</h4>
              <p className="text-gray-400">Interfaces intuitivas y experiencias de usuario excepcionales</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-700">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-gray-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Backend & APIs</h4>
              <p className="text-gray-400">Sistemas escalables y APIs RESTful robustas</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-black rounded-xl flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Apps Móviles</h4>
              <p className="text-gray-400">Aplicaciones nativas y cross-platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
