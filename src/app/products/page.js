import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Products | SRS IT",
  description: "Product Catalog of SRS IT.",
};

const categories = [
  {
    title: "Face Recognition System",
    description: "Enterprise-grade biometric and face recognition solutions for attendance, access control, and workforce management — backed by genuine...",
    categoriesCount: 2,
    productsCount: 10,
    badgeGradient: "linear-gradient(to right, #3b82f6, #2563eb)",
    pastelBg: "#eff6ff",
    colorHex: "#3b82f6",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", // User Profile
    href: "/products",
  },
  {
    title: "Wifi CCTV Camera",
    description: "Explore categories and genuine products with local warranty and support.",
    categoriesCount: 3,
    productsCount: 15,
    badgeGradient: "linear-gradient(to right, #10b981, #059669)",
    pastelBg: "#ecfdf5",
    colorHex: "#10b981",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z", // Camera
    href: "/products",
  },
  {
    title: "POS Printer",
    description: "Explore categories and genuine products with local warranty and support.",
    categoriesCount: 6,
    productsCount: 30,
    badgeGradient: "linear-gradient(to right, #a855f7, #9333ea)",
    pastelBg: "#faf5ff",
    colorHex: "#a855f7",
    icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z", // Printer
    href: "/products",
  }
];

export default function ProductsPage() {
  return (
    <>
      <header className="detail-page-banner relative w-full shrink-0 overflow-hidden" style={{ height: '160px', minHeight: '160px', maxHeight: '160px' }}>
        <img
          src="/images/service-bg.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 block w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-cyan-800/40 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-center font-display text-lg font-bold uppercase tracking-wide text-white">
            PRODUCT
          </h1>
        </div>
      </header>

      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-9 py-4 flex items-center text-xs font-semibold tracking-wider text-gray-400 uppercase">
          <Link href="/" className="hover:text-brand-orange transition-colors">HOME</Link>
          <span className="mx-2 text-gray-300">›</span>
          <span className="text-gray-900 font-bold">PRODUCTS</span>
        </div>
      </div>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto p-2 md:px-9">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">
              PRODUCT CATALOG
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-wide text-gray-900 mt-2">
              PRODUCT
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 max-w-2xl mx-auto">
              Genuine hardware backed by years of experience, official outlets, and ready stock across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {categories.map((category, idx) => (
              <Link key={idx} href={category.href} className="showcase-service-card group relative mt-8 flex h-full flex-col">
                <div
                  className="showcase-service-badge absolute left-1/2 top-0 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md"
                  style={{ background: category.badgeGradient }}
                >
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={category.icon}></path>
                  </svg>
                </div>

                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl px-6 pb-7 pt-12 text-center shadow-sm transition duration-300 group-hover:shadow-md"
                  style={{ backgroundColor: category.pastelBg }}
                >
                  <div className="relative z-10 flex flex-1 flex-col">
                    <h3 className="font-display text-base font-bold leading-snug text-gray-900 md:text-lg">
                      {category.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-xs md:text-sm leading-relaxed text-gray-500">
                      {category.description}
                    </p>

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                        {category.categoriesCount} CATEGORIES
                      </span>
                      <span className="rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                        {category.productsCount} PRODUCTS
                      </span>
                    </div>

                    <span 
                      className="mt-5 inline-flex items-center justify-center gap-1 text-xs font-semibold transition group-hover:gap-2"
                      style={{ color: category.colorHex }}
                    >
                      Browse Categories <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="pointer-events-none absolute inset-0 z-[99] flex items-center justify-center overflow-hidden">
                    <span
                      className="absolute left-1/2 top-1/2 z-[99] h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 border border-gray-800 backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-100"
                      style={{ backgroundColor: `${category.colorHex}66` }}
                      aria-hidden="true"
                    ></span>
                    <span className="relative z-[100] inline-flex items-center justify-center border-2 border-brand-black bg-white/90 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black opacity-0 transition duration-500 delay-150 group-hover:opacity-100">
                      Browse Categories
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-orange py-10 md:py-12">
        <div className="max-w-7xl mx-auto p-2 md:px-9 text-center">
          <Link href="/contact" className="group inline-flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide text-white transition hover:text-brand-black md:text-2xl">
            CLICK HERE & GET STARTED TODAY
            <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

