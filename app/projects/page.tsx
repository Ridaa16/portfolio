import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: 'Flight booking website',
    description: 'Full-stack flight booking site with search, booking.',
    tags: ['Next.js', 'Tailwind CSS', 'API Integration'],
    link: 'https://tripbazaar.travel/',
    imageUrl: './images/airplane-bunker.jpg'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js and Tailwind CSS showcasing my projects and skills.',
    tags: ['Next.js', 'Tailwind CSS'],
    link: '#',
    imageUrl: './images/MERN stack.png'
  },
  {
    title: 'Task Management App',
    description: 'CRUD application for managing tasks with drag-and-drop functionality and user accounts.',
    tags: ['React', 'Express', 'MongoDB'],
    link: 'https://task-manager-chi-murex.vercel.app/login',
    imageUrl: './images/task management app.png'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with data visualization.',
    tags: ['React', 'Chart.js', 'Node.js'],
    link: 'https://social-media-dashboard-tan-eta.vercel.app/',
    imageUrl: './images/social.png'
  },
  {
    title: 'Pizza Recipe App',
    description: 'A web application pizza recipes.',
    tags: ['react js', 'API Integration'],
    link: 'https://pizza-wheat-kappa.vercel.app/',
    imageUrl: './images/pizza.png'
  },
  {
    title: 'UI Design System',
    description: 'Custom design system created in Figma with reusable components and style guides.',
    tags: ['Figma', 'UI Design'],
    link: './skills/figma-canva',
    imageUrl: './images/designl.png'
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-16">
        {/* Animated header with gradient text */}
        <h1 className="text-5xl font-bold mb-12 text-center relative group">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-500">
            My Projects
          </span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-pink-500 group-hover:w-32 transition-all duration-300"></span>
        </h1>
        
        {/* Grid with animated cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-xl border border-gray-800 hover:border-pink-500/30 bg-gradient-to-br from-gray-900 to-gray-800 h-full">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                
                <ProjectCard project={project} />
                
                {/* Hot pink accent at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-fuchsia-500"></div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  )
}