'use client'
import { auth } from '@/lib/firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push('/admin/login')
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/admin/dashboard/projects"
          className="bg-dark border border-pink-500/20 p-6 rounded-xl hover:border-pink-500/40 transition"
        >
          <h2 className="text-xl font-bold text-pink-400 mb-2">Projects</h2>
          <p className="text-gray-400">Manage portfolio projects</p>
        </Link>

        <Link
          href="/admin/dashboard/skills"
          className="bg-dark border border-pink-500/20 p-6 rounded-xl hover:border-pink-500/40 transition"
        >
          <h2 className="text-xl font-bold text-pink-400 mb-2">Skills</h2>
          <p className="text-gray-400">Manage skills section</p>
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 text-pink-400 hover:text-pink-300 flex items-center gap-2"
      >
        <span>Logout</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  )
}