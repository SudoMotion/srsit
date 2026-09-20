import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Our Software | SRS IT",
  description: "Explore Our Software Solutions in Bangladesh.",
};

const products = [
  {
    title: "Garments ERP Software",
    subtitle: "Comprehensive Garments ERP Software designed to manage your entire apparel manufacturing process from order to shipment.",
    badgeGradient: "linear-gradient(to right, #3b82f6, #2563eb)",
    pastelBg: "#eff6ff",
    colorHex: "#3b82f6",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", // Box (3D)
    href: "/software",
  },
  {
    title: "Inventory Management Software",
    subtitle: "SRS IT Inventory Management Software. Efficient inventory management is the backbone of every successful business. SRS IT Inventory Management Software is an...",
    badgeGradient: "linear-gradient(to right, #10b981, #059669)",
    pastelBg: "#ecfdf5",
    colorHex: "#10b981",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", // Clipboard
    href: "/software",
  },
  {
    title: "CRM Software",
    subtitle: "Professional CRM Software for Modern Businesses. Build stronger customer relationships, accelerate sales, and deliver exceptional customer experiences with SR...",
    badgeGradient: "linear-gradient(to right, #14b8a6, #0d9488)",
    pastelBg: "#f0fdfa",
    colorHex: "#14b8a6",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", // Users
    href: "/software",
  },
  {
    title: "Real Estate ERP Software",
    subtitle: "Why Choose Our Real Estate ERP? Empower your real estate business with a comprehensive ERP solution built to simplify operations, improve productivity, and s...",
    badgeGradient: "linear-gradient(to right, #8b5cf6, #7c3aed)",
    pastelBg: "#f5f3ff",
    colorHex: "#8b5cf6",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", // Home
    href: "/software",
  },
  {
    title: "Accounting Software",
    subtitle: "Accounting Software in Bangladesh (Top). Streamline Your Financial Operations with SRS IT Accounting Software. SRS IT Accounting Software is a comprehensive...",
    badgeGradient: "linear-gradient(to right, #ef4444, #dc2626)",
    pastelBg: "#fef2f2",
    colorHex: "#ef4444",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", // Calculator
    href: "/software",
  },
  {
    title: "POS Software",
    subtitle: "Comprehensive POS Software Solutions for Modern Businesses in Bangladesh. Fast-paced digital economy, businesses require more than just a billing system for their...",
    badgeGradient: "linear-gradient(to right, #6366f1, #4f46e5)",
    pastelBg: "#eef2ff",
    colorHex: "#6366f1",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", // Cart
    href: "/software",
  },
  {
    title: "MLM Software",
    subtitle: "MLM Software Powerful MLM Software to Manage and Grow Your Network Marketing Business. SRS IT is a premium MLM Software is a comprehensive and scalable network...",
    badgeGradient: "linear-gradient(to right, #ec4899, #db2777)",
    pastelBg: "#fdf2f8",
    colorHex: "#ec4899",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", // Chart up
    href: "/software",
  },
  {
    title: "Hospital Management Software",
    subtitle: "Modern, Integrated Healthcare Management System. Streamline your healthcare operations with a comprehensive Hospital Management System (HMS) designed for clin...",
    badgeGradient: "linear-gradient(to right, #64748b, #475569)",
    pastelBg: "#f8fafc",
    colorHex: "#64748b",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", // Building
    href: "/software",
  },
  {
    title: "HR Software & (Pay Ops Attendance)",
    subtitle: "Complete HR Management Software for Modern Businesses. Transform your human resource operations with SRS IT's HR Management Software, a comprehensive solu...",
    badgeGradient: "linear-gradient(to right, #0ea5e9, #0284c7)",
    pastelBg: "#f0f9ff",
    colorHex: "#0ea5e9",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", // Users 2
    href: "/software",
  },
  {
    title: "Smart Prescription Software",
    subtitle: "e-Prescription Management Software. Modernize Prescription Management with SRS IT. SRS IT e-prescription Management software is a modern digital sol...",
    badgeGradient: "linear-gradient(to right, #eab308, #ca8a04)",
    pastelBg: "#fefce8",
    colorHex: "#eab308",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", // Document text
    href: "/software",
  },
  {
    title: "Rent Management Software",
    subtitle: "Rent Management Software (Smart, Automated &amp; Powerful Rental Management Solution). SRS IT Rent Management Software is a complete digital solution designe...",
    badgeGradient: "linear-gradient(to right, #f43f5e, #e11d48)",
    pastelBg: "#fff1f2",
    colorHex: "#f43f5e",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z", // Bank/House
    href: "/software",
  },
  {
    title: "Courier Management Software",
    subtitle: "SRS IT Employee Courier Management Software is a powerful, scalable solution designed to streamline courier and delivery operations from order booking to final d...",
    badgeGradient: "linear-gradient(to right, #d946ef, #c026d3)",
    pastelBg: "#fdf4ff",
    colorHex: "#d946ef",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4", // Arrows
    href: "/software",
  },
  {
    title: "Accessories Management Software",
    subtitle: "Accessories Management Software. SRS IT Accessories Management Software is a comprehensive inventory and business management solution designed to simplify the...",
    badgeGradient: "linear-gradient(to right, #4f46e5, #4338ca)",
    pastelBg: "#eef2ff",
    colorHex: "#4f46e5",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", // Box
    href: "/software",
  },
];

export default function SoftwarePage() {
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
            OUR SOFTWARE
          </h1>
        </div>
      </header>

      <div className="border-b border-neutral-200 bg-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto p-2 md:px-9">
          <div className="w-full text-center">
            <p className="text-sm leading-relaxed text-brand-steel md:text-base mt-3 text-center">
              Explore Our Software Solutions. Discover a comprehensive range of professional software solutions designed to streamline business operations, enhance efficiency, and drive sustainable growth. From ERP and business management systems to CRM, inventory management, HRMS, and custom software solutions, we deliver reliable, scalable, and industry-focused technology tailored to meet your unique business needs.
            </p>
            <div className="section-divider mt-8"></div>
          </div>
        </div>
      </div>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto p-2 md:px-9">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {products.map((product, idx) => (
              <Link key={idx} href={product.href} className="showcase-service-card group relative mt-8 flex h-full flex-col">
                <div
                  className="showcase-service-badge absolute left-1/2 top-0 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md"
                  style={{ background: product.badgeGradient }}
                >
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={product.icon}></path>
                  </svg>
                </div>

                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl px-6 pb-7 pt-12 text-center shadow-sm transition duration-300 group-hover:shadow-md"
                  style={{ backgroundColor: product.pastelBg }}
                >
                  <div className="relative z-10 flex flex-1 flex-col">
                    <h3 className="font-display text-base font-bold leading-snug text-gray-900 md:text-lg">
                      {product.title}
                    </h3>

                    <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-gray-500">
                      {product.subtitle}
                    </p>

                    <span className="mt-5 inline-flex items-center justify-center gap-1 text-xs font-semibold text-brand-orange transition group-hover:gap-2">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="pointer-events-none absolute inset-0 z-[99] flex items-center justify-center overflow-hidden">
                    <span
                      className="absolute left-1/2 top-1/2 z-[99] h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 border border-gray-800 backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-100"
                      style={{ backgroundColor: `${product.colorHex}66` }}
                      aria-hidden="true"
                    ></span>
                    <span className="relative z-[100] inline-flex items-center justify-center border-2 border-brand-black bg-white/90 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black opacity-0 transition duration-500 delay-150 group-hover:opacity-100">
                      See Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-gray-900">NEED A CUSTOM SOLUTION?</h3>
              <p className="mt-2 text-sm text-gray-500">We develop custom software solutions tailored to your specific business needs.</p>
            </div>
            <div className="flex shrink-0 gap-4">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                GET CUSTOM QUOTE
              </Link>
              <Link href="tel:+8801712800947" className="btn-outline whitespace-nowrap">
                CALL NOW
              </Link>
            </div>
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
