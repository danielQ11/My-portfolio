import { Suspense, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SplineViewer from "./SplineViewer";

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
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const techRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current, {
        opacity: 0,
        y: 70,
        scale: 0.97,
        filter: "blur(10px)",
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out"
      });
      if (badgeRef.current) {
        gsap.fromTo(badgeRef.current, { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)", delay: 0.2 });
      }
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, { textShadow: "none" }, { textShadow: "0 0 32px #22d3ee, 0 0 16px #a78bfa", duration: 1.2, repeat: -1, yoyo: true, ease: "power2.inOut", delay: 0.3 });
      }
      techRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(el, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4, delay: 0.4 + i * 0.05, ease: "power2.out" });
        }
      });
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="relative bg-gradient-to-br from-[#181f2f]/85 via-[#232946]/85 to-[#1a2236]/95 rounded-3xl p-8 border border-cyan-900/30 shadow-2xl group overflow-hidden transition-all duration-400 hover:scale-[1.035] hover:shadow-cyan-500/30">
      {/* Overlay glass y brillos */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-blue-400/10 opacity-70 group-hover:opacity-90 transition-all duration-700 blur-2xl" />
      {/* Badge animado */}
      <div ref={badgeRef} className={`absolute top-6 right-6 flex items-center gap-2 px-5 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-lg border border-white/10 ring-2 ring-cyan-400/10 animate-bounce-slow ${project.category === 'web' ? 'bg-cyan-500/20 text-cyan-200' : project.category === 'mobile' ? 'bg-purple-500/20 text-purple-200' : project.category === 'desktop' ? 'bg-blue-500/20 text-blue-200' : project.category === 'ai' ? 'bg-green-500/20 text-green-200' : 'bg-gray-500/20 text-gray-300'}`}>
        {project.category === 'web' && <span className="text-2xl">🌐</span>}
        {project.category === 'mobile' && <span className="text-2xl">📱</span>}
        {project.category === 'desktop' && <span className="text-2xl">💻</span>}
        {project.category === 'ai' && <span className="text-2xl">🤖</span>}
        {!["web","mobile","desktop","ai"].includes(project.category) && <span className="text-2xl">🌟</span>}
        <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
      </div>
      <div className="w-full h-[240px] md:h-[270px] xl:h-[300px] bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl overflow-hidden mb-7 border-2 border-cyan-400/10 group-hover:border-cyan-400/30 shadow-lg relative">
        {project.splineUrl ? (
          <SplineViewer
            url={project.splineUrl}
            className="w-full h-full rounded-2xl"
          />
        ) : project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 rounded-2xl"
            quality={85}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="text-6xl text-gray-600">🚧</span>
          </div>
        )}
        {/* Parallax glass reflection */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl opacity-50 group-hover:opacity-80 transition-all" />
      </div>
      {/* Título con animación de resplandor */}
      <h4 ref={titleRef} className="text-3xl font-black text-white mb-2 drop-shadow-lg group-hover:text-cyan-300 transition-colors duration-300 animate-glow-title">
        {project.title}
      </h4>
      {/* Chips de tecnologías animados */}
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.split(',').map((tech, i) => (
          <span
            key={tech.trim()}
            ref={el => { techRefs.current[i] = el; }}
            className="px-3 py-1 rounded-full bg-white/10 text-xs text-cyan-200 font-semibold backdrop-blur-sm border border-cyan-400/10 shadow-sm hover:scale-105 hover:bg-cyan-400/20 transition-transform duration-200 cursor-default">
            {tech.trim()}
          </span>
        ))}
      </div>
      {/* Descripción con fade y truncado elegante */}
      <p className="text-gray-300 mb-7 leading-relaxed line-clamp-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        {project.description}
      </p>
      {/* Botones de acción glass y microinteracción */}
      <div className="flex gap-4 mt-2">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-700/90 transition-colors text-center shadow-md border border-white/10 hover:border-cyan-400/40 backdrop-blur-md hover:scale-105 active:scale-95 duration-200"
          >
            <Github size={20} className="inline-block mb-0.5" />
            GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-blue-600 transition-all text-center shadow-md border border-cyan-400/30 hover:border-cyan-400/70 backdrop-blur-md hover:scale-105 active:scale-95 duration-200"
          >
            <ArrowUpRight size={20} className="inline-block mb-0.5" />
            Ver Demo
          </Link>
        )}
      </div>
      {/* Footer glass y sombra */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl shadow-inner pointer-events-none" />
    </div>
  );
}
