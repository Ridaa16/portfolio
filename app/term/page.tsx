import { NextPage } from 'next';
import Head from 'next/head';

const TermsOfUse: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <Head>
        <title>Terms of Use | Your Portfolio</title>
      </Head>

      {/* Glowing header */}
      <header className="bg-black py-12 px-6 border-b border-[#ff028d]/30">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff66b3] to-[#ff028d] mb-4 animate-pulse">
            Terms of Use
          </h1>
          <p className="text-lg text-[#ff66b3]">Effective Date: {new Date().toLocaleDateString()}</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-gray-900 rounded-xl shadow-2xl shadow-[#ff028d]/10 p-8 border border-[#ff028d]/20 hover:border-[#ff028d]/50 transition-all">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#ff028d] mb-4 border-b border-[#ff028d]/30 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>By accessing this portfolio website, you agree to comply with these terms. The content is protected by copyright laws.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#ff028d] mb-4 border-b border-[#ff028d]/30 pb-2">
              2. Intellectual Property
            </h2>
            <p>All content on this site, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-[#ff66b3]">
              <li>Design elements</li>
              <li>Code samples</li>
              <li>Project case studies</li>
              <li>Written content</li>
            </ul>
            <p className="mt-4">are my intellectual property unless otherwise noted.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#ff028d] mb-4 border-b border-[#ff028d]/30 pb-2">
              3. Limitations
            </h2>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-[#ff66b3]">
              <li>Republish material without permission</li>
              <li>Sell or rent site content</li>
              <li>Use this site in any way that impacts user access</li>
              <li>Use this site contrary to applicable laws</li>
            </ul>
          </section>

          <section className="text-center mt-16">
            <h3 className="text-xl font-semibold text-[#ff028d] mb-4">Need Clarification?</h3>
            <a 
              href="mailto:ridaaabdi@gmail.com" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#ff028d] to-[#ff66b3] text-black font-bold rounded-full hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-[#ff028d]/30"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </main>

      <footer className="py-8 text-center text-[#ff66b3] border-t border-[#ff028d]/20">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TermsOfUse;