import SplineViewer from "../SplineViewer";

interface ProjectsSectionProps {
  secondImageRef?: React.RefObject<HTMLImageElement | null>;
}

export default function ProjectsSection({ secondImageRef }: ProjectsSectionProps) {
  return (
    <section className="mb-32">
      <div className="text-center mb-16">
        <h3 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">Proyectos Destacados</h3>
        <p className="text-2xl text-gray-300">Una selección de mis mejores trabajos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-600 group hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">🌟</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">E-commerce Platform</h4>
              <p className="text-gray-400">React + Node.js + PostgreSQL</p>
            </div>
          </div>
          <div className="w-full h-[300px] bg-black rounded-lg overflow-hidden">
            <SplineViewer
              url="https://prod.spline.design/dfS9lWZ3IYehQvFS/scene.splinecode"
              loading="lazy"
              loadingAnimType="spinner"
              autoplay="true"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-purple-600 group hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-gray-500 rounded-lg flex items-center justify-center">
              <span className="text-xl">🎯</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white">Dashboard Analytics</h4>
              <p className="text-gray-400">Vue.js + Python + D3.js</p>
            </div>
          </div>
          <img
            ref={secondImageRef!}
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Dashboard"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
