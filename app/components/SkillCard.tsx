interface Skill {
  name: string
  icon: string
}

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="bg-gray-800 p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-pink-500/40 transition-all duration-300 group hover:-translate-y-1 flex items-center space-x-3 sm:space-x-4">
      {/* Icon - responsive sizing */}
      <span className="text-2xl sm:text-3xl text-pink-500 group-hover:text-pink-400 transition-colors">
        {skill.icon}
      </span>
      
      {/* Skill name - responsive text sizing */}
      <span className="font-medium text-gray-300 group-hover:text-white text-sm sm:text-base">
        {skill.name}
      </span>
      
      {/* Arrow icon - only shows on hover and larger screens */}
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default SkillCard