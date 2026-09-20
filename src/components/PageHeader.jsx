import React from 'react';

export default function PageHeader({ 
  title, 
  highlightText, 
  description, 
  backgroundImage = '/images/background-banner.png' 
}) {
  return (
    <>
      <section className="relative flex items-center justify-center py-10 text-center text-white min-h-[200px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-9 w-full">
          <h1 className="text-center font-display text-lg font-bold uppercase tracking-wide text-white">
            {title} {highlightText && <span className="text-[#f97316]">{highlightText}</span>}
          </h1>
        </div>
      </section>

      {description && (
        <section className="bg-white py-12 border-b">
          <div className="max-w-5xl mx-auto px-4 md:px-9">
            <p className="text-neutral-600 leading-relaxed">
              {description}
            </p>
            <div className="w-16 h-1 bg-[#f97316] mx-auto mt-8 rounded"></div>
          </div>
        </section>
      )}
    </>
  );
}
