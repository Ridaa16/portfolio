'use client';

import Link from 'next/link'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'


// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export default function Home() {
  const skills = [
    { name: 'MERN Stack', icon: '💻', link: '/skills/mern'  },
    { name: 'JavaScript', icon: '📜', link: '/skills/javascript' },
    { name: 'React.js', icon: '⚛️', link: '/skills/reactjs' },
    { name: 'Node.js', icon: '🟢', link: '/skills/node' },
    { name: 'MongoDB', icon: '🍃', link: '/skills/mongodb' },
    { name: 'Express.js', icon: '🚂', link: '/skills/express' },
    { name: 'HTML/CSS', icon: '🎨', link: '/skills/html-css' },
    { name: 'Figma/Canva', icon: '✏️', link: '/skills/figma-canva' },
    { name: 'Java', icon: '☕', link: '/skills/java' },
    { name: 'Next.js', icon: '⏭️', link: '/skills/nextjs' },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-5"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm <span className="text-white">RIDA FATIMA</span>
            </h1>
            <motion.h2 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              MERN Stack Developer & UI Designer
            </motion.h2>
            <motion.p 
              className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              I build modern web applications with JavaScript, React, Node.js, and MongoDB. 
              I create beautiful interfaces using Figma and Canva.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link href="/contact" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg group hover:scale-105 transition-transform duration-300">
                <span className="relative">Contact Me</span>
              </Link>
              <Link href="/projects" className="relative inline-flex items-center justify-center px-8 py-3 font-medium text-white border border-pink-500 rounded-lg group hover:bg-pink-500/10 transition-colors duration-300">
                <span className="relative">View Projects</span>
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                {skill.link ? (
                  <Link href={skill.link}>
                    <SkillCard skill={skill} />
                  </Link>
                ) : (
                  <SkillCard skill={skill} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'flight booking website',
                description: 'Full-stack flight booking site with search, booking, and user authentication.',
                tags: ['Next.js', 'Tailwind CSS', 'API Integration'],
                link: 'https://tripbazaar.travel/',
                imageUrl: './images/airplane-bunker.jpg'
              },
              {
                title: 'Portfolio Website',
                description: 'Personal portfolio built with Next.js and Tailwind CSS showcasing projects and skills.',
                tags: ['Next.js', 'Tailwind CSS', 'Figma'],
                link: '#',
                imageUrl: './images/MERN stack.png'
              },
              {
                title: 'Task Management App',
                description: 'CRUD application for task management with drag-and-drop functionality and user accounts.',
                tags: ['React', 'Express', 'MongoDB'],
                link: 'https://task-manager-chi-murex.vercel.app/login',
                imageUrl: './images/task management app.png'
              }
            ].map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Link 
              href="/projects" 
              className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium group text-lg"
            >
              View All Projects
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-white"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to bring your ideas to life?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-10"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's collaborate and create something amazing together.
          </motion.p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg group hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
            >
              Get in Touch
              <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
