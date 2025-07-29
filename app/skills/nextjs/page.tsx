'use client';

import { SiNextdotjs } from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function NextPage() {
  const concepts = [
    {
      title: "Page Router",
      description: "Automatic routing based on files in the pages directory.",
      examples: [
        "pages/about.js → example.com/about",
        "pages/blog/[slug].js → example.com/blog/hello"
      ]
    },
    {
      title: "Pre-rendering",
      description: "Better SEO with server-side rendering or static generation.",
      examples: [
        "export async function getStaticProps() { ... }",
        "export async function getServerSideProps() { ... }"
      ]
    },
    {
      title: "API Routes",
      description: "Create backend endpoints directly in your Next.js app.",
      examples: [
        "pages/api/hello.js → example.com/api/hello",
        "export default function handler(req, res) { ... }"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <div className="flex justify-center items-center mb-6">
          <SiNextdotjs className="text-pink-500 text-5xl mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
            Next.js Fundamentals
          </h1>
        </div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          React framework for production-grade applications
        </p>
      </header>

      <div className="space-y-8">
        {concepts.map((concept, index) => (
          <div key={index} className="bg-gray-900 rounded-xl p-6 border-l-4 border-pink-500">
            <div className="flex items-start mb-4">
              <FaGlobe className="text-pink-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-pink-400">{concept.title}</h2>
                <p className="text-gray-300 mt-1">{concept.description}</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4 mt-4">
              <h3 className="text-sm font-mono text-pink-300 mb-2">EXAMPLES:</h3>
              {concept.examples.map((example, i) => (
                <div key={i} className="font-mono text-sm text-gray-200 mb-2 last:mb-0">
                  <span className="text-pink-400">→ </span>{example}
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
  );
}