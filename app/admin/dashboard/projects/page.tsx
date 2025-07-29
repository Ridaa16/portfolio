'use client'
import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '@/lib/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import ProjectCard from '@/app/components/ProjectCard'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link: string
  imageUrl: string
}

interface NewProject {
  title: string
  description: string
  tags: string
  link: string
  image: File | null
}

export const dynamic = 'force-dynamic'

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([])
  const [newProject, setNewProject] = useState<NewProject>({
    title: '',
    description: '',
    tags: '',
    link: '#',
    image: null,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const querySnapshot = await getDocs(collection(db, 'projects'))
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title || '',
        description: doc.data().description || '',
        tags: doc.data().tags || [],
        link: doc.data().link || '#',
        imageUrl: doc.data().imageUrl || '',
      }))
      setProjects(projectsData)
    } catch (err) {
      setError('Failed to fetch projects')
      console.error('Error fetching projects:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newProject.image) {
      setError('Please select an image')
      return
    }

    try {
      setLoading(true)
      setError(null)

      // Upload image to storage
      const storageRef = ref(storage, `projects/${Date.now()}_${newProject.image.name}`)
      await uploadBytes(storageRef, newProject.image)
      const imageUrl = await getDownloadURL(storageRef)

      // Add project to Firestore
      await addDoc(collection(db, 'projects'), {
        title: newProject.title,
        description: newProject.description,
        tags: newProject.tags.split(',').map(tag => tag.trim()),
        link: newProject.link,
        imageUrl,
        createdAt: new Date().toISOString(),
      })

      // Reset form and refresh projects
      setNewProject({
        title: '',
        description: '',
        tags: '',
        link: '#',
        image: null,
      })
      await fetchProjects()
    } catch (err) {
      setError('Failed to add project')
      console.error('Error adding project:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    
    try {
      setLoading(true)
      await deleteDoc(doc(db, 'projects', id))
      await fetchProjects()
    } catch (err) {
      setError('Failed to delete project')
      console.error('Error deleting project:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
        Manage Projects
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleAddProject} className="mb-8 bg-dark p-6 rounded-xl border border-pink-500/20">
        <h2 className="text-xl font-bold text-pink-400 mb-4">Add New Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-pink-400 mb-2">Title</label>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              className="w-full bg-darker border border-pink-500/30 rounded-lg p-3 text-white"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-pink-400 mb-2">Tags (comma separated)</label>
            <input
              type="text"
              value={newProject.tags}
              onChange={(e) => setNewProject({ ...newProject, tags: e.target.value })}
              className="w-full bg-darker border border-pink-500/30 rounded-lg p-3 text-white"
              placeholder="React, Node.js, MongoDB"
              required
              disabled={loading}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-pink-400 mb-2">Description</label>
            <textarea
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              className="w-full bg-darker border border-pink-500/30 rounded-lg p-3 text-white"
              rows={3}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-pink-400 mb-2">Project Image</label>
            <input
              type="file"
              onChange={(e) => setNewProject({ ...newProject, image: e.target.files?.[0] || null })}
              className="w-full bg-darker border border-pink-500/30 rounded-lg p-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-pink-500/20 file:text-pink-400 hover:file:bg-pink-500/30"
              accept="image/*"
              required
              disabled={loading}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-6 rounded-lg font-bold hover:opacity-90 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Project'}
        </button>
      </form>

      {loading && projects.length === 0 ? (
        <div className="text-center py-8 text-pink-400">Loading projects...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <ProjectCard project={project} />
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                disabled={loading}
                aria-label="Delete project"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}