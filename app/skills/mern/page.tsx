'use client';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function MernStackPage() {
  const mernStack = {
    overview: "The MERN stack is my primary expertise, combining MongoDB, Express.js, React, and Node.js to build full-stack JavaScript applications. I've built several production-ready applications using this technology stack.",
    technologies: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400 text-4xl" />,
        description: "NoSQL database for flexible, scalable data storage",
        projects: ["E-commerce backend", "User management systems", "Content management"],
        proficiency: 80
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300 text-4xl" />,
        description: "Backend framework for building robust APIs and web servers",
        projects: ["RESTful APIs", "Authentication systems", "Middleware development"],
        proficiency: 70
      },
      {
        name: "React",
        icon: <FaReact className="text-blue-400 text-4xl" />,
        description: "Frontend library for building interactive user interfaces",
        projects: ["Single Page Applications", "Admin dashboards", "Real-time interfaces"],
        proficiency: 90
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
        description: "JavaScript runtime for server-side development",
        projects: ["Web servers", "Microservices", "Data processing"],
        proficiency: 70
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white text-4xl" />,
        description: "React framework for server-side rendering and static sites",
        projects: ["SEO-friendly websites", "Hybrid applications", "This portfolio"],
        proficiency: 80
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-300 text-4xl" />,
        description: "Utility-first CSS framework for rapid UI development",
        projects: ["Responsive layouts", "Design systems", "Component libraries"],
        proficiency: 85
      }
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "Full-featured online store with product catalog, cart, and payment processing",
        technologies: ["MongoDB", "Express", "React", "Node.js"]
      },
      {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and team features",
        technologies: ["MongoDB", "Express", "React", "Node.js"]
      },
      {
        title: "Content Management System",
        description: "Admin dashboard for managing website content with user roles",
        technologies: ["MongoDB", "Express", "React", "Node.js"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-pink-500 mb-4 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">MERN Stack Expertise</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {mernStack.overview}
          </p>
        </motion.div>

        {/* Core Technologies Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-pink-400 mb-6">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mernStack.technologies.map((tech, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-pink-500/20 transition-all duration-300 border border-gray-800 hover:border-pink-500/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {tech.icon}
                    <h3 className="text-xl font-semibold text-pink-400">{tech.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Proficiency</span>
                      <span>{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-pink-700 h-2.5 rounded-full" 
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-pink-300 mb-2">Projects using {tech.name}:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {tech.projects.map((project, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Showcase Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-pink-400 mb-6">MERN Stack Projects</h2>
          <div className="space-y-6">
            {mernStack.projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-pink-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-800 text-pink-300 text-xs px-3 py-1 rounded-full hover:bg-pink-500 hover:text-black transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Section with Glow Effect */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl border border-pink-500/20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-pink-300 mb-4">Why Choose MERN?</h2>
            <p className="text-gray-300 mb-4">
              The MERN stack offers a full JavaScript solution for web development, from database to frontend. My expertise in this stack allows me to:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">⚡</span>
                Build scalable applications with a single programming language
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">⚡</span>
                Create responsive UIs with React and efficient backends with Node
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">⚡</span>
                Develop full-stack solutions with seamless data flow
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}