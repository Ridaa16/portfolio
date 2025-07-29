'use client'

import { useState } from 'react'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)
    const link = document.createElement('a')
    link.href = '/documents/myresume.pdf'
    link.download = 'rida_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Glowing border container */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition duration-500"></div>
          
          {/* Main card */}
          <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group-hover:border-pink-500/30 transition-colors duration-300">
            {/* Header with gradient accent */}
            <div className="p-6 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800">
              <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-fuchsia-400">
                My Resume
              </h1>
              <p className="text-center text-gray-400 mt-2">
                Professional Experience & Skills Overview
              </p>
            </div>
            
            {/* Resume Image Preview */}
            <div className="p-6">
              {imgError ? (
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center">
                  <p className="text-pink-400 mb-3 font-medium">Resume preview not available</p>
                  <p className="text-gray-400">
                    Please download the PDF version below to view my resume
                  </p>
                </div>
              ) : (
                <div className="relative w-full border-2 border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-pink-500/50">
                  <Image
                    src="/images/resume.png" 
                    alt="Resume Preview"
                    width={800}
                    height={1131}
                    className="w-full h-auto"
                    priority
                    onError={() => setImgError(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={handleDownload}
                      className="bg-pink-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-pink-700 transition-colors"
                    >
                      <FiDownload />
                      Quick Download
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Download Section */}
            <div className="p-6 bg-gray-800/50 border-t border-gray-800">
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-400 mb-6 text-center max-w-lg">
                  Click the button below to download the full PDF version of my resume with all details
                </p>
                <button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className={`relative overflow-hidden px-8 py-4 rounded-xl flex items-center gap-3 ${
                    isLoading ? 'cursor-not-allowed' : 'group'
                  }`}
                >
                  {/* Animated gradient background */}
                  <span className={`absolute inset-0 bg-gradient-to-r ${isLoading ? 'from-pink-700 to-fuchsia-700' : 'from-pink-600 to-fuchsia-600 group-hover:from-pink-500 group-hover:to-fuchsia-500'} rounded-xl transition-all duration-300`}></span>
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    <FiDownload className="text-lg" />
                    {isLoading ? 'Downloading...' : 'Download Full Resume'}
                  </span>
                </button>
                
                {/* Additional options */}
                <div className="mt-6 flex gap-4">
                  <a 
                    href="/documents/myresume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 flex items-center gap-1 transition-colors"
                  >
                    <FiExternalLink size={14} />
                    Open in new tab
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            For best results, open with Adobe Acrobat Reader
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  )
}