'use client'

import Link from 'next/link'

interface Project {
  id?: string
  title: string
  description: string
  tags: string[]
  link: string
  imageUrl: string
}

interface ProjectCardProps {
  project: Project
  isAdmin?: boolean
  onEdit?: (project: Project) => void
  onDelete?: (id: string) => void
}

const ProjectCard = ({ project, isAdmin = false, onEdit, onDelete }: ProjectCardProps) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-pink-500/30 relative">
      {/* Admin Controls */}
      {isAdmin && (
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <button
            onClick={() => onEdit && project.id && onEdit(project)}
            className="bg-blue-500/90 text-white p-1.5 rounded-full hover:bg-blue-400 transition"
            aria-label="Edit project"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete && project.id && onDelete(project.id)}
            className="bg-red-500/90 text-white p-1.5 rounded-full hover:bg-red-400 transition"
            aria-label="Delete project"
          >
            🗑️
          </button>
        </div>
      )}

      {/* Project Image */}
      {project.imageUrl ? (
        <div className="h-48 relative">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-gray-800 to-black relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      )}

      <div className="p-6">
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-pink-500/10 text-pink-400 text-xs px-3 py-1.5 rounded-full border border-pink-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium group transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard