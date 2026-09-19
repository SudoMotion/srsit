"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "web", name: "Web Design" },
  { id: "app", name: "Mobile App" },
];

const portfolios = [
  {
    id: 1,
    categoryId: "web",
    categoryName: "Web Design",
    projectName: "E-Commerce Platform",
    image: "/images/hero-slider/slide1.jpg",
    url: "#",
  },
  {
    id: 2,
    categoryId: "app",
    categoryName: "Mobile App",
    projectName: "Fitness Tracking App",
    image: "/images/hero-slider/slide2.jpg",
    url: "#",
  },
  {
    id: 3,
    categoryId: "web",
    categoryName: "Web Design",
    projectName: "Corporate Website",
    image: "/images/hero-slider/slide1.jpg",
    url: "#",
  },
];

export default function HomePortfolios() {
  const [active, setActive] = useState("all");

  const filteredPortfolios = portfolios.filter(
    (item) => active === "all" || item.categoryId === active
  );

  return (
    <section id="home-portfolio" className="border-t border-neutral-200 bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto p-2 md:px-9">
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-3xl">
            Our Portfolio
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#4a5568] md:text-base">
            Take a look at some of our recent works and success stories.
          </p>
          <div className="w-16 h-1 bg-[#f97316] mx-auto mt-4 rounded"></div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={`rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition duration-200 ${
              active === "all" ? "bg-[#f97316] text-white" : "bg-neutral-100 text-[#4a5568] hover:bg-neutral-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              className={`rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition duration-200 ${
                active === category.id ? "bg-[#f97316] text-white" : "bg-neutral-100 text-[#4a5568] hover:bg-neutral-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolios.map((portfolio, index) => (
            <article
              key={portfolio.id}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 transition-all duration-300"
              style={{ animationDelay: `${(index % 6) * 40}ms` }}
            >
              <Link href={portfolio.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 h-[200px]">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.projectName}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-[#1a1a1a] transition-colors group-hover:text-[#f97316]">
                    {portfolio.projectName}
                  </h3>
                  <p className="mt-0.5 text-xs text-[#4a5568]">{portfolio.categoryName}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

