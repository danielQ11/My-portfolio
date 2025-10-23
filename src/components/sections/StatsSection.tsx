export default function StatsSection() {
  return (
    <section className="mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-blue-700 text-center">
          <div className="text-5xl font-bold text-cyan-400 mb-2">50+</div>
          <div className="text-xl text-gray-300">Proyectos Completados</div>
        </div>
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-purple-700 text-center">
          <div className="text-5xl font-bold text-purple-400 mb-2">3+</div>
          <div className="text-xl text-gray-300">Años de Experiencia</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-900 to-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-700 text-center">
          <div className="text-5xl font-bold text-indigo-400 mb-2">20+</div>
          <div className="text-xl text-gray-300">Clientes Satisfechos</div>
        </div>
      </div>
    </section>
  );
}
