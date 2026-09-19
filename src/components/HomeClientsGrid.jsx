"use client";
import React from 'react';

const clients = [
  { name: "Client A", logo: "/images/hero-slider/slide1.jpg" },
  { name: "Client B", logo: "/images/hero-slider/slide2.jpg" },
  { name: "Client C", logo: "/images/hero-slider/slide1.jpg" },
  { name: "Client D", logo: "/images/hero-slider/slide2.jpg" },
  { name: "Client E", logo: "/images/hero-slider/slide1.jpg" },
];

export default function HomeClientsGrid() {
  const sliderLogos = [...clients, ...clients, ...clients];

  return (
    <section className="overflow-hidden bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto p-2 md:px-9">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-600">
            <svg className="mr-1.5 h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
            Our Partners
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">Our Trusted Clients</h2>
          <div className="mx-auto h-1 w-16 bg-orange-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">Leading organizations across Bangladesh and beyond</p>
        </div>

        <div className="relative">
          <div className="relative h-32 overflow-hidden flex">
            <div className="flex w-max animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
              {sliderLogos.map((client, index) => (
                <div key={index} className="group mx-6 inline-flex flex-col items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-3 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg md:h-20 md:w-20">
                    <img src={client.logo} alt={client.name} className="h-10 w-10 object-contain md:h-12 md:w-12 rounded-full" loading="lazy" />
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-700 md:text-sm">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent"></div>
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

