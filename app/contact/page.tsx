'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      })
    })

    const result = await response.json()
    if (result.result === 'success') {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <div className="min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-200"></div>
        <div className="absolute top-0 left-0 w-full h-full animate-gradient-1">
          <div className="absolute top-10 left-20 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-20 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
              Get In Touch
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-pink-500 group-hover:w-32 transition-all duration-300"></span>
          </h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-black-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
          
          <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 group-hover:border-pink-500/30 transition-colors duration-300 p-8">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-6 px-6 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-500 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-500 transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white placeholder-gray-500 transition-all"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-900/50 text-red-300 rounded-lg">
                    Something went wrong. Please try again or contact me directly via email.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative overflow-hidden w-full px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white font-medium hover:from-pink-500 hover:to-fuchsia-500 transition-all duration-300 group ${isSubmitting ? 'opacity-70' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Alternative contact methods */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">Or reach out directly through these channels:</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:ridaaabdi@gmail.com" 
              className="text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors group"
            >
              <span className="group-hover:underline">Email</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/rida-fatima94/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors group"
            >
              <span className="group-hover:underline">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://github.com/Ridaa16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 flex items-center gap-1 transition-colors group"
            >
              <span className="group-hover:underline">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-1 {
          background: linear-gradient(-45deg, #010000ff, #00000089, #51012969);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}