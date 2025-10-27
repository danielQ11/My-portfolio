"use client";

import { useState, useMemo, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import ProjectCard from '@/components/ProjectCard';
import { projects, Project } from '@/lib/projects';
import Link from 'next/link';

type FilterType = 'all' | 'web' | 'mobile' | 'desktop' | 'ai' | 'design';

export default function ProjectsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-card').forEach((card: any, i) => {
        gsap.fromTo(card, {
          opacity: 0,
          y: 60,
          scale: 0.97,
          filter: 'blur(8px)',
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.06,
        });
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 py-20 relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Burbujas animadas */}
        <div className="absolute left-10 top-24 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl animate-float-slow" />
        <div className="absolute right-20 top-48 w-44 h-44 rounded-full bg-purple-400/10 blur-2xl animate-float-medium" />
        <div className="absolute left-1/3 bottom-32 w-24 h-24 rounded-full bg-blue-400/10 blur-2xl animate-float-fast" />
        {/* Líneas animadas */}
        <div className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-400/10 animate-line-move" />
        <div className="absolute left-1/4 bottom-12 w-2/3 h-1 bg-gradient-to-r from-blue-400/10 via-transparent to-cyan-400/10 animate-line-move2" />
        {/* Blob animado */}
        <div className="absolute right-10 bottom-10 w-72 h-72 bg-gradient-to-br from-purple-400/10 via-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-blob" />
      </div>
      <div className="container mx-auto px-8">
        {/* Header épico */}
        <div className="relative text-center mb-20">
          <h1 className="text-8xl font-extrabold mb-6 bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_8px_40px_rgba(0,255,255,0.25)] animate-gradient-x">
            PROYECTOS
          </h1>
          <div className="mx-auto w-40 h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-lg mb-6 animate-pulse" />
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-[0_2px_16px_rgba(0,255,255,0.10)]">
            Explora mi portafolio de clase mundial: innovación, tecnología y diseño a nivel empresa. Cada proyecto es una experiencia visual y funcional.
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

        {/* Projects Grid épica */}
        <div className="mb-24">
          {filteredProjects.length > 0 ? (
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="project-card relative group rounded-3xl shadow-2xl border-2 border-cyan-900/10 hover:border-cyan-400/30 bg-gradient-to-br from-black/80 via-gray-900/80 to-blue-950/80 overflow-hidden transition-all duration-500">
                  <ProjectCard project={project} index={index} />
                  {/* Glow effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
                  {/* Glass reflection */}
                  <div className="pointer-events-none absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-3xl opacity-40" />
                </div>
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
              href="https://github.com/danielQ11"
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
