'use client';

import { FaCode, FaTerminal, FaArrowRight } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import Link from 'next/link';

export default function JavaScriptFundamentals() {
  const concepts = [
    {
      title: "Variables & Data Types",
      description: "JavaScript has three ways to declare variables: var, let, and const. It's a dynamically typed language with primitive types like String, Number, Boolean, null, undefined, and Symbol.",
      examples: [
        "let name = 'Rida';",
        "const age = 25;",
        "var isDeveloper = true;"
      ]
    },
    {
      title: "Functions",
      description: "Functions are reusable blocks of code that can be defined using function declarations, expressions, or arrow syntax.",
      examples: [
        "function greet() { return 'Hello!'; }",
        "const greet = () => 'Hello!';",
        "const add = (a, b) => a + b;"
      ]
    },
    {
      title: "Conditionals",
      description: "Control program flow with if/else statements, ternary operators, and switch statements.",
      examples: [
        "if (age >= 18) { console.log('Adult'); }",
        "const status = age >= 18 ? 'Adult' : 'Minor';",
        "switch(day) { case 'Monday': ... }"
      ]
    },
    {
      title: "Loops",
      description: "Execute code repeatedly with for, while, and do-while loops, or use array methods like forEach, map, etc.",
      examples: [
        "for (let i = 0; i < 5; i++) { ... }",
        "while (condition) { ... }",
        "array.forEach(item => ...)"
      ]
    },
    {
      title: "Arrays",
      description: "Ordered collections that can hold any data type with methods for manipulation like push, pop, map, filter, reduce.",
      examples: [
        "const fruits = ['apple', 'banana'];",
        "fruits.push('orange');",
        "const lengths = fruits.map(f => f.length);"
      ]
    },
    {
      title: "Objects",
      description: "Collections of key-value pairs for storing structured data, with properties and methods.",
      examples: [
        "const person = { name: 'Rida', age: 25 };",
        "person.location = 'Pakistan';",
        "Object.keys(person);"
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <SiJavascript className="text-hot-pink-500 text-5xl mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
                JavaScript Fundamentals
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Core concepts every developer should master. The building blocks of modern web development.
            </p>
          </header>

          {/* Main Content */}
          <main className="space-y-12">
            {concepts.map((concept, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start mb-4">
                    <div className="bg-pink-900/50 p-3 rounded-lg mr-4">
                      <FaCode className="text-pink-400 text-xl" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-pink-400 mb-2">{concept.title}</h2>
                      <p className="text-gray-300">{concept.description}</p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mt-6">
                    <div className="flex items-center text-sm text-pink-300 mb-2">
                      <FaTerminal className="mr-2" />
                      <span>Examples</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                      {concept.examples.map((example, i) => (
                        <div key={i} className="mb-2 last:mb-0 text-gray-300">
                          <span className="text-pink-400">$ </span>
                          <span className="text-gray-200">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>

          {/* Footer */}
          <footer className="mt-20 text-center text-gray-500 border-t border-gray-800 pt-8">
            <p>Master these fundamentals to build powerful JavaScript applications</p>
            <p className="mt-2 text-sm">Next: ES6+ Features →</p>
          </footer>
        </div>
      </div>
      <div className="bg-black text-center">
        <Link href="/" className="inline-flex items-center text-pink-400 hover:text-pink-300 group">
          Back to Skills <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </>
  );
}