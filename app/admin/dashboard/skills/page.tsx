'use client'
import { useState, useEffect } from 'react'
import SkillCard from '@/app/components/SkillCard'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function SkillsAdmin() {
  const [skills, setSkills] = useState<any[]>([])
  const [newSkill, setNewSkill] = useState({
    name: '',
    icon: '💻', // Default icon
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Fetch skills from Firestore
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'skills'))
        const skillsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setSkills(skillsData)
      } catch (err) {
        setError('Failed to load skills')
      } finally {
        setLoading(false)
      }
    }
    fetchSkills()
  }, [])

  const handleAddSkill = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newSkill.name.trim()) {
      setError('Skill name is required')
      return
    }

    try {
      const docRef = await addDoc(collection(db, 'skills'), {
        name: newSkill.name.trim(),
        icon: newSkill.icon || '💻'
      })
      
      setSkills([...skills, {
        id: docRef.id,
        ...newSkill
      }])
      
      // Reset form
      setNewSkill({ name: '', icon: '💻' })
      setError('')
    } catch (err) {
      setError('Failed to add skill')
    }
  }

  const handleDeleteSkill = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'skills', id))
      setSkills(skills.filter(skill => skill.id !== id))
    } catch (err) {
      setError('Failed to delete skill')
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
        Manage Skills
      </h1>

      {/* Add Skill Form */}
      <form onSubmit={handleAddSkill} className="mb-8 bg-dark p-6 rounded-xl border border-pink-500/20">
        <h2 className="text-xl font-bold text-pink-400 mb-4">Add New Skill</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-pink-400 mb-2">Skill Name</label>
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
              className="w-full bg-darker border border-pink-500/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="e.g. React, Node.js"
              required
            />
          </div>
          
          <div>
            <label className="block text-pink-400 mb-2">Icon (Emoji)</label>
            <input
              type="text"
              value={newSkill.icon}
              onChange={(e) => setNewSkill({...newSkill, icon: e.target.value})}
              className="w-full bg-darker border border-pink-500/30 rounded-lg p-3 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="💻"
              maxLength={2}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition"
        >
          Add Skill
        </button>
      </form>

      {/* Skills Grid */}
      <div>
        <h2 className="text-xl font-bold text-pink-400 mb-6">Current Skills ({skills.length})</h2>
        
        {loading ? (
          <div className="text-gray-400">Loading skills...</div>
        ) : skills.length === 0 ? (
          <div className="text-gray-400 p-4 border border-pink-500/20 rounded-lg">
            No skills added yet
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="relative group">
                <SkillCard skill={skill} />
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Delete skill"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}