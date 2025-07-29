'use client';

import { FaReact, FaCode } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function ReactPage() {
  const concepts = [
    {
      title: "Components",
      description: "Building blocks of your UI like LEGO pieces. Each component manages its own look and behavior.",
      examples: [
        "function Button() { return <button>Click Me</button>; }",
        "const Header = () => <h1>Welcome Back!</h1>"
      ]
    },
    {
      title: "State",
      description: "Memory for your components that can change over time (like a counter).",
      examples: [
        "const [count, setCount] = useState(0);",
        "const [user, setUser] = useState({name: 'Rida'});"
      ]
    },
    {
      title: "Props",
      description: "How components talk to each other (passing data from parent to child).",
      examples: [
        "<WelcomeMessage name='Rida' />",
        "function WelcomeMessage({name}) { return <h1>Hello {name}!</h1> }"
      ]
    },
    {
      title: "Hooks",
      description: "Special functions that let components 'hook into' React features.",
      examples: [
        "useEffect(() => { fetchData() }, []); // Runs once",
        "const theme = useContext(ThemeContext); // Get global value"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <FaReact className="text-pink-500 text-5xl mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              React.js Fundamentals
            </h1>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building interactive UIs with reusable components
          </p>
        </header>

        <div className="space-y-8">
          {concepts.map((concept, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border-l-4 border-pink-500">
              <div className="flex items-start mb-4">
                <FaCode className="text-pink-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-pink-400">{concept.title}</h2>
                  <p className="text-gray-300 mt-1">{concept.description}</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 mt-4">
                <h3 className="text-sm font-mono text-pink-300 mb-2">EXAMPLES:</h3>
                {concept.examples.map((example, i) => (
                  <div key={i} className="font-mono text-sm text-gray-200 mb-2 last:mb-0">
                    <span className="text-pink-400">$ </span>{example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center text-pink-400 hover:text-pink-300 group">
            Back to Skills <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}