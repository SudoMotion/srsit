import React from 'react';

export default function PageHeader({ 
  title, 
  highlightText, 
  description, 
  backgroundImage = '/images/builder-grid.png' 
}) {
  return (
    <section className="relative bg-[#1a1a1a] py-20 text-center text-white">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-9">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          {title} {highlightText && <span className="text-[#f97316]">{highlightText}</span>}
        </h1>
        {description && (
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="w-16 h-1 bg-[#f97316] mx-auto mt-6 rounded"></div>
      </div>
    </section>
  );
}

