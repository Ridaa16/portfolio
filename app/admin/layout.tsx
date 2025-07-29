'use client'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) router.push('/admin/login')
    })
    return () => unsubscribe()
  }, [router])

  return (
    <div className="min-h-screen bg-darker text-white">
      <div className="container mx-auto p-4">{children}</div>
    </div>
  )
}