export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300">
            About Me
          </h1>
          
          <div className="bg-gray-900 rounded-2xl border-2 border-pink-500/30 p-8 mb-10 transition-all duration-300 hover:border-pink-500/60 hover:shadow-[0_0_25px_rgba(255,105,180,0.15)]">
            <h2 className="text-3xl font-bold mb-6 text-pink-400 flex items-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
              Who I Am
            </h2>
            
            <p className="text-lg mb-4 leading-relaxed">
              I'm a <span className="text-pink-400 font-medium">passionate MERN stack developer</span> specializing in building high-performance web applications. With extensive experience in <span className="text-pink-400">JavaScript ecosystems</span>, I craft efficient solutions using React, Node.js, Express, and MongoDB that scale effortlessly.
            </p>
            
            <p className="text-lg leading-relaxed">
              My expertise in <span className="text-pink-400">UI/UX design</span> with Figma and Canva allows me to create visually striking interfaces that deliver exceptional user experiences with pixel-perfect precision.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl border-2 border-pink-500/30 p-8 transition-all duration-300 hover:border-pink-500/60 hover:shadow-[0_0_25px_rgba(255,105,180,0.15)]">
            <h2 className="text-3xl font-bold mb-6 text-pink-400 flex items-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
              My Journey
            </h2>
            
            <p className="text-lg mb-4 leading-relaxed">
              My development journey began with mastering core web technologies (<span className="text-pink-400">HTML5, CSS3, JavaScript</span>), evolving into full-stack proficiency with the <span className="text-pink-400">MERN stack</span>. I've expanded my knowledge to include <span className="text-pink-400">Java fundamentals</span>, providing a versatile perspective across multiple programming paradigms.
            </p>
            
            <p className="text-lg leading-relaxed">
              Beyond coding, I'm passionate about <span className="text-pink-400">interface design</span>, exploring emerging technologies, and contributing to <span className="text-pink-400">open-source communities</span> that advance web development practices.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-1 w-24 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}