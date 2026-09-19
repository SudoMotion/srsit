"use client";
import React from 'react';

const technologies = [
  { name: "React", logo: "/images/hero-slider/slide1.jpg" },
  { name: "Laravel", logo: "/images/hero-slider/slide2.jpg" },
  { name: "Next.js", logo: "/images/hero-slider/slide1.jpg" },
  { name: "Vue.js", logo: "/images/hero-slider/slide2.jpg" },
  { name: "Node.js", logo: "/images/hero-slider/slide1.jpg" },
];

export default function TechnologySlider() {
  const sliderLogos = [...technologies, ...technologies, ...technologies];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto p-2 md:px-9">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
            Technologies
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Technology Stack</h2>
          <div className="h-1 w-16 bg-orange-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We use modern technologies to build scalable and robust applications.</p>
        </div>

        <div className="relative">
          <div className="relative h-32 overflow-hidden flex">
            <div className="flex w-max animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
              {sliderLogos.map((tech, index) => (
                <div key={index} className="inline-flex flex-col items-center justify-center mx-6 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-sm p-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <img src={tech.logo} alt={tech.name} className="h-10 w-10 md:h-12 md:w-12 object-contain" loading="lazy" />
                  </div>
                  <span className="mt-2 text-xs md:text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </section>
  );
}

