'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiFigma, SiCanva } from 'react-icons/si';
import { FaPalette, FaArrowRight, FaTimes, FaArrowLeft, FaArrowRight as FaArrowRightSolid } from 'react-icons/fa';

type Concept = {
  title: string;
  description: string;
  examples: string[];
  embeds?: string[];
  images?: string[];
};

export default function DesignPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<number | null>(null);

  const concepts: Concept[] = [
    {
      title: "Figma Basics",
      description: "Professional design tool for creating interfaces and prototypes.",
      examples: [
        "Frames: Containers for your designs",
        "Components: Reusable design elements",
        "Auto Layout: Responsive design elements"
      ],
      embeds: [
        "https://embed.figma.com/design/XVg1bBi2luQ4yRUv24szwI/Untitled?node-id=0-1&embed-host=share",
        "https://embed.figma.com/design/9k6vHxHX7KMOPOQLo4TqzP/Untitled?node-id=0-1&embed-host=share",
        "https://embed.figma.com/design/49UBOlTIHbmw28mDMVc6mW/Untitled?node-id=0-1&embed-host=share"
      ]
    },
    {
      title: "Canva Basics",
      description: "User-friendly tool for quick graphics and social media content.",
      examples: [
        "Templates: Pre-made designs",
        "Drag & Drop: Easy element placement",
        "Brand Kit: Save colors/fonts"
      ],
      images: [
        "/images/home.png",
        "/images/LARANa.png",
        "/images/White Modern Travel Poster.png",
        "/images/social.png",
        "/images/pizza.png",
        "/images/MERN stack.png",
        "/images/designl.png",
        "/images/resume.png",
        "/images/og.png",
        "/images/work.png",
      ]
    },
    {
      title: "Design Principles",
      description: "Key concepts for effective visual communication.",
      examples: [
        "Contrast: Make elements stand out",
        "Alignment: Create visual connections",
        "Whitespace: Give content room to breathe"
      ]
    }
  ];

  const openLightbox = (galleryIndex: number, imageIndex: number) => {
    setCurrentGallery(galleryIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentGallery === null) return;
    
    const gallery = concepts[currentGallery].images;
    if (!gallery) return;

    if (direction === 'prev') {
      setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : gallery.length - 1));
    } else {
      setCurrentImageIndex(prev => (prev < gallery.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12 md:mb-16">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
          <div className="flex items-center">
            <SiFigma className="text-pink-500 text-4xl sm:text-5xl mr-3" />
            <SiCanva className="text-pink-500 text-4xl sm:text-5xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent sm:ml-3">
            Design Fundamentals
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-2">
          Creating beautiful visual experiences
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
        {concepts.slice(0, 2).map((concept, index) => (
          <section 
            key={index} 
            className="bg-gray-900 rounded-xl p-5 sm:p-6 border-l-4 border-pink-500"
          >
            <div className="flex items-start mb-3 sm:mb-4">
              <FaPalette className="text-pink-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-pink-400">{concept.title}</h2>
                <p className="text-sm sm:text-base text-gray-300 mt-1">{concept.description}</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
              <h3 className="text-xs sm:text-sm font-mono text-pink-300 mb-1 sm:mb-2">KEY FEATURES:</h3>
              {concept.examples.map((example, i) => (
                <div key={i} className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2 last:mb-0">
                  <span className="text-pink-400">• </span>{example}
                </div>
              ))}
            </div>

            {concept.embeds ? (
              <div className="mt-4 sm:mt-6">
                <h3 className="text-xs sm:text-sm font-mono text-pink-300 mb-2 sm:mb-3">FIGMA EMBEDS:</h3>
                <div className="space-y-3 sm:space-y-4">
                  {concept.embeds.map((embed, embedIndex) => (
                    <div 
                      key={embedIndex}
                      className="overflow-hidden rounded-lg"
                    >
                      <iframe 
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        className="w-full aspect-video"
                        src={embed}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : concept.images ? (
              <div className="mt-4 sm:mt-6">
                <h3 className="text-xs sm:text-sm font-mono text-pink-300 mb-2 sm:mb-3">GALLERY:</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {concept.images.map((img: string, imgIndex: number) => (
                    <div 
                      key={imgIndex}
                      className="cursor-pointer aspect-video bg-gray-700 rounded-lg overflow-hidden hover:opacity-80 transition-opacity relative"
                      onClick={() => openLightbox(index, imgIndex)}
                    >
                      <img
                        src={img}
                        alt={`${concept.title} example ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      {/* Design Principles Section */}
      <div className="bg-gray-900 rounded-xl p-5 sm:p-6 border-l-4 border-pink-500 mb-12">
        <div className="flex items-start mb-3 sm:mb-4">
          <FaPalette className="text-pink-400 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-pink-400">{concepts[2].title}</h2>
            <p className="text-sm sm:text-base text-gray-300 mt-1">{concepts[2].description}</p>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
          <h3 className="text-xs sm:text-sm font-mono text-pink-300 mb-1 sm:mb-2">KEY PRINCIPLES:</h3>
          {concepts[2].examples.map((example, i) => (
            <div key={i} className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2 last:mb-0">
              <span className="text-pink-400">• </span>{example}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentGallery !== null && concepts[currentGallery].images && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl hover:text-pink-500 transition-colors"
          >
            <FaTimes />
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-6 text-white text-2xl hover:text-pink-500 transition-colors z-10"
          >
            <FaArrowLeft />
          </button>
          
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <img
              src={concepts[currentGallery].images[currentImageIndex]}
              alt={`${concepts[currentGallery].title} example ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-6 text-white text-2xl hover:text-pink-500 transition-colors"
          >
            <FaArrowRightSolid />
          </button>
          
          <div className="absolute bottom-6 text-white text-sm">
            {currentImageIndex + 1} / {concepts[currentGallery].images.length}
          </div>
        </div>
      )}

      <div className="mt-12 sm:mt-16 text-center">
        <Link href="/" className="inline-flex items-center text-sm sm:text-base text-pink-400 hover:text-pink-300 group transition-colors">
          Back to Skills <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}