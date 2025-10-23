export default function AboutSection() {
  return (
    <section className="mb-32">
      <div className="bg-gradient-to-br from-black to-gray-900 bg-opacity-50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Sobre Mí</h3>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              Apasionado por crear soluciones digitales que marquen la diferencia. Con más de 3 años de experiencia en desarrollo web y diseño de interfaces, me especializo en transformar ideas complejas en experiencias simples e intuitivas.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-cyan-500 bg-opacity-20 text-cyan-400 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-purple-500 bg-opacity-20 text-purple-400 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-indigo-500 bg-opacity-20 text-indigo-400 rounded-full text-sm">Figma</span>
            </div>
          </div>
          <div>
            <img
              src="/Logos/Mi_foto.jpg"
              alt="Profile"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
