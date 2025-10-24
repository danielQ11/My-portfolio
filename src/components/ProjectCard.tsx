import { Suspense } from "react";
import SplineViewer from "./SplineViewer";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  imageUrl?: string;
  splineUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${index % 2 === 0 ? 'from-indigo-900 via-purple-900 to-blue-900 border-indigo-600' : 'from-purple-900 to-gray-900 border-purple-600'}`}>
      <div className="flex items-center gap-6 mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${index % 2 === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-gray-500'}`}>
          <span className="text-xl">
            {project.category === 'web' ? '🌐' :
             project.category === 'mobile' ? '📱' :
             project.category === 'desktop' ? '💻' :
             project.category === 'ai' ? '🤖' : '🌟'}
          </span>,
        </div>
        <div>
          <h4 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h4>
          <p className="text-gray-400">{project.technologies}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Project Image or Spline */}
      <div className="w-full h-[300px] bg-black rounded-lg overflow-hidden mb-6">
        {project.splineUrl ? (
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          }>
            <SplineViewer
              url={project.splineUrl}
              loading="lazy"
              loadingAnimType="spinner"
              autoplay="true"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            quality={85}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="text-6xl text-gray-600">🚧</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center"
          >
            GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all text-center"
          >
            Ver Demo
          </Link>
        )}
      </div>
    </div>
  );
}
