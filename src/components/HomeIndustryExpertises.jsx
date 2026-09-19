import React from 'react';
import Image from 'next/image';

const industries = [
  { id: 1, name: 'Healthcare', image: '/images/hero-slider/slide1.jpg' },
  { id: 2, name: 'Finance', image: '/images/hero-slider/slide2.jpg' },
  { id: 3, name: 'E-commerce', image: '/images/hero-slider/slide1.jpg' },
  { id: 4, name: 'Education', image: '/images/hero-slider/slide2.jpg' },
  { id: 5, name: 'Real Estate', image: '/images/hero-slider/slide1.jpg' },
  { id: 6, name: 'Logistics', image: '/images/hero-slider/slide2.jpg' },
];

const cardColors = ['bg-pink-100', 'bg-emerald-100', 'bg-violet-100', 'bg-sky-100', 'bg-orange-100'];

export default function HomeIndustryExpertises() {
  return (
    <section className="bg-[#0a0b1a] py-12 md:py-16">
      <div className="max-w-7xl mx-auto p-2 md:px-9">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Our Industry Expertises
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-neutral-300 md:text-base">
            Our deep understanding of diverse industries empowers us to design customized software solutions. Let our expertise be the catalyst for your next triumph
          </p>
        </div>

        <div className="mt-10 space-y-3 md:mt-12 md:space-y-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 px-6 sm:px-10 md:px-14 lg:px-20">
            {industries.map((industry, index) => {
              const leafClass = index % 2 === 0 ? 'rounded-tl-3xl rounded-br-3xl' : 'rounded-tr-3xl rounded-bl-3xl';
              const colorClass = cardColors[index % cardColors.length];

              return (
                <div key={industry.id} className="group flex flex-col items-center">
                  <div className={`${colorClass} ${leafClass} flex h-24 w-full flex-col items-center justify-center px-2 py-3 transition duration-300 group-hover:scale-105 sm:h-28`}>
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="h-7 w-7 object-cover rounded-full md:h-14 md:w-14"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2 w-full text-center text-[10px] font-medium leading-tight text-neutral-300 transition duration-300 group-hover:rounded group-hover:bg-sky-600 group-hover:px-1 group-hover:py-0.5 group-hover:text-white sm:text-sm">
                    {industry.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

