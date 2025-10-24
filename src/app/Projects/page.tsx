"use client";

import { useState, useMemo } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects, Project } from '@/lib/projects';
import Link from 'next/link';

type FilterType = 'all' | 'web' | 'mobile' | 'desktop' | 'ai' | 'design';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  const categories = [
    { value: 'all', label: 'Todos', count: projects.length },
    { value: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { value: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { value: 'desktop', label: 'Desktop', count: projects.filter(p => p.category === 'desktop').length },
    { value: 'ai', label: 'IA', count: projects.filter(p => p.category === 'ai').length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Mis Proyectos
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Explora todos mis trabajos, desde aplicaciones web hasta soluciones de inteligencia artificial
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-8">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-black/40 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedFilter(category.value as FilterType)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedFilter === category.value
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-black/40 text-gray-300 border border-gray-600 hover:border-cyan-400 hover:text-cyan-400'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mb-16">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                No se encontraron proyectos
              </h3>
              <p className="text-gray-500 mb-8">
                Intenta cambiar los filtros o términos de búsqueda
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Mostrar Todos
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-400">Proyectos Totales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-gray-400">En Producción</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {projects.filter(p => p.githubUrl).length}
              </div>
              <div className="text-gray-400">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">
                {categories.filter(c => c.value !== 'all').length}
              </div>
              <div className="text-gray-400">Categorías</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              🚀 Empecemos un Proyecto
            </Link>
            <Link
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-400 text-gray-300 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              💻 Ver GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
