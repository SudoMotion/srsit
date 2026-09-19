"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    image: "/images/hero-slider/slide1.jpg",
    title_html: "Innovating<br />IT Solutions",
    description: "Empowering businesses with cutting-edge technology.",
    text_position: "left",
  },
  {
    image: "/images/hero-slider/slide2.jpg",
    title_html: "Next-Gen<br />Development",
    description: "Building scalable and robust software products.",
    text_position: "right",
  },
];

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentText, setCurrentText] = useState("Web Development");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative min-h-[28rem] overflow-hidden bg-[#1a1a1a] sm:min-h-[32rem] lg:min-h-[36rem]">
      <div className="absolute inset-0">
        {heroSlides.map((s, index) => (
          <Image
            key={index}
            src={s.image}
            alt="SRS IT"
            fill
            priority={index === 0}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
              index === activeSlide
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
          />
        ))}
      </div>

      <div className="relative z-20 min-h-[28rem] sm:min-h-[32rem] lg:min-h-[36rem]">
        <div
          className={`hero-text-panel absolute inset-y-0 flex flex-col justify-center bg-black/75 px-5 py-10 backdrop-blur-[2px] sm:px-8 md:px-10 md:py-14 transition-all duration-500 w-[90%] md:w-[40%] ${
            slide.text_position === "right" ? "right-0" : "left-0"
          }`}
        >
          <h1 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-white sm:text-base lg:text-lg">
            <span dangerouslySetInnerHTML={{ __html: slide.title_html }}></span>
            <br />
            <span className="text-[#f97316]">
              <span>{currentText}</span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-200 md:text-base">
            {slide.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="tel:1234567890"
              className="bg-[#f97316] text-white px-4 py-2 rounded-md hover:bg-[#ea580c] transition-colors inline-flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 234 567 890
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "w-6 bg-[#f97316]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

