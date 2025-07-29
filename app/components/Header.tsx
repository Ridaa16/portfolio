'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black shadow-sm sticky top-0 z-50 h-20 border-b border-pink-500/20">
      <div className="container mx-auto h-full px-4 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-[180px] h-[60px] md:w-[100px] md:h-[120px]">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 180px, 200px"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-300 hover:text-white transition font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition font-medium">
            About
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition font-medium">
            Projects
          </Link>
          <Link href="/resume" className="text-gray-300 hover:text-white transition font-medium">
            Resume
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition font-medium">
            Contact
          </Link>
          
          {/* Admin Login Link - Desktop */}
          <Link 
            href="/admin/login" 
            className="ml-4 px-4 py-2 bg-pink-500/10 text-pink-400 rounded-lg border border-pink-500/20 hover:bg-pink-500/20 transition-colors"
          >
            Admin
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-white" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black py-4 px-6 shadow-lg border-t border-pink-500/20">
          <nav className="flex flex-col space-y-5">
            <Link href="/" className="text-gray-300 hover:text-white transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition font-medium py-2" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/resume" className="text-gray-300 hover:text-white transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Resume
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            
            {/* Admin Login Link - Mobile */}
            <Link 
              href="/admin/login" 
              className="mt-4 px-4 py-2 bg-pink-500/10 text-pink-400 rounded-lg border border-pink-500/20 hover:bg-pink-500/20 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header