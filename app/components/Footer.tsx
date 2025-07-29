import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Brand & Socials */}
          <div className="max-w-md">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              RIDA FATIMA
            </h3>
            <p className="text-gray-400 mt-3 text-lg">MERN Stack Developer</p>
            <p className="text-gray-500 mt-4">
              Creating seamless web experiences with modern technologies and clean code.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <Link 
                href="https://github.com/Ridaa16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/rida-fatima94/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
              
              
              <Link 
                href="mailto:ridaabdi@gmail.com" 
                className="bg-gray-900 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </Link>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-pink-500 font-semibold mb-5 text-lg">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:underline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:underline">About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:underline">Projects</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-pink-500 font-semibold mb-5 text-lg">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/resume" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:underline">Resume</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:underline">Contact</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="mailto:ridaabdi@gmail.com" 
                    className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group"
                  >
                    <span className="group-hover:underline">Email</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h4 className="text-pink-500 font-semibold mb-5 text-lg">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:underline">Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/term" className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2 group">
                    <span className="group-hover:underline">Terms</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Rida Fatima. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Crafted with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer