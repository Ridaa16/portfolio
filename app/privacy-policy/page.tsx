import { NextPage } from 'next';
import Head from 'next/head';

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <Head>
        <title>My Privacy Promise | Rida's Portfolio</title>
        <meta name="description" content="How I handle your information in my creative space" />
      </Head>

      {/* Personal header */}
      <header className="relative py-24 px-6 overflow-hidden border-b border-[#ff028d]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#ff028d]/10 to-black z-0" />
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff66b3] to-[#ff028d] mb-4">
            My Straightforward Privacy Promise
          </h1>
          <p className="text-xl text-[#ff66b3]">
            I'm Rida, a MERN Stack Developer. Just like my creative work, I believe in keeping things transparent and simple.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Personal introduction */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-[#ff028d]/20">
          <h2 className="text-2xl font-bold text-[#ff66b3] mb-4">Hey there!</h2>
          <p className="mb-4">
            I created this portfolio to share my work and connect with awesome people like you. I'm not interested in collecting your data - I'd rather focus on creating great web applications.
          </p>
          <p>
            That said, here's the complete picture of what happens when you interact with my site:
          </p>
        </div>

        {/* Simple data collection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#ff028d] mb-6 text-center">What I Collect (Not Much)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl border border-[#ff028d]/20">
              <h3 className="text-xl font-semibold text-[#ff66b3] mb-3">When You Contact Me</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#ff028d] mr-2">•</span>
                  <span>Just your email and message - so I can reply!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff028d] mr-2">•</span>
                  <span>Nothing else unless you choose to share more</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-[#ff028d]/20">
              <h3 className="text-xl font-semibold text-[#ff66b3] mb-3">Automatic Stuff</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#ff028d] mr-2">•</span>
                  <span>Basic visitor counts (no personal details)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff028d] mr-2">•</span>
                  <span>What pages get viewed (so I know what work resonates)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plain English promises */}
        <div className="bg-gray-900 rounded-xl p-8 mb-12 border border-[#ff66b3]/20">
          <h2 className="text-2xl font-bold text-[#ff028d] mb-6 text-center">My Simple Promises to You</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-[#ff028d] mr-4 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#ff66b3]">No Sneaky Stuff</h3>
                <p>I don't use tracking cookies, hidden pixels, or any of those questionable tracking methods.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#ff028d] mr-4 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#ff66b3]">Your Info Stays Safe</h3>
                <p>I use standard security practices to protect any information you share with me.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#ff028d] mr-4 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#ff66b3]">No Spam, Ever</h3>
                <p>If you email me, I'll only reply to that conversation. You won't end up on any mailing list.</p>
              </div>
            </div>
          </div>
        </div>

        
        {/* Final note */}
        <div className="text-center text-sm text-gray-400">
          <p>This policy is as simple as I could make it. Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">Rida Fatima • MERN Stack Developer</p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;