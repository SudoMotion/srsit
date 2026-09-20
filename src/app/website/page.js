import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Website Development | SRS IT",
  description: "Website development services in Bangladesh.",
};

const services = [
  {
    title: "Domain Registration",
    subtitle: "SRS IT provides reliable and professional domain registration services for businesses, organizations, and individuals. We offer a wide range of domain extensions, including .COM, .NET, .ORG, .BD, and mo...",
    badgeGradient: "linear-gradient(to right, #ea580c, #c2410c)",
    pastelBg: "#fff7ed",
    colorHex: "#ea580c",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    href: "/website",
  },
  {
    title: "Hosting Solutions",
    subtitle: "SRS IT provides reliable, high-performance web hosting solutions tailored to meet the needs of businesses, eCommerce websites, blogs, corporate platforms, and growing online applications. Our...",
    badgeGradient: "linear-gradient(to right, #db2777, #be185d)",
    pastelBg: "#fdf2f8",
    colorHex: "#db2777",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
    href: "/website",
  },
  {
    title: "Website Development (Laravel/React/Next.js)",
    subtitle: "SRS IT delivers custom website development solutions tailored to the unique needs of businesses, startups, enterprises, and online brands. We design and develop high-performance, responsive, user-...",
    badgeGradient: "linear-gradient(to right, #7c3aed, #6d28d9)",
    pastelBg: "#f5f3ff",
    colorHex: "#7c3aed",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    href: "/website",
  },
  {
    title: "Website Development (WordPress)",
    subtitle: "SRS IT offers professional WordPress development services in Bangladesh. We build custom, responsive, secure, and SEO-friendly WordPress websites with custom themes, plugins, eCommerce solutions, spe...",
    badgeGradient: "linear-gradient(to right, #475569, #334155)",
    pastelBg: "#f8fafc",
    colorHex: "#475569",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    href: "/website",
  },
  {
    title: "eCommerce Website Development",
    subtitle: "SRS IT delivers enterprise-grade eCommerce Website Development Services in Bangladesh, helping businesses build powerful, secure, scalable, and high-performing digital commerce platforms. We develop...",
    badgeGradient: "linear-gradient(to right, #9333ea, #7e22ce)",
    pastelBg: "#faf5ff",
    colorHex: "#9333ea",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    href: "/website",
  },
  {
    title: "Multi Vendor eCommerce Website Development",
    subtitle: "SRS IT delivers scalable and feature-rich multi-vendor eCommerce marketplace solutions designed for startups, growing businesses, and enterprises in Bangladesh. Our platforms provide a seamless digita...",
    badgeGradient: "linear-gradient(to right, #e11d48, #be123c)",
    pastelBg: "#fff1f2",
    colorHex: "#e11d48",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    href: "/website",
  },
  {
    title: "Mobile App Development",
    subtitle: "SRS IT provides end-to-end mobile app development solutions tailored to the unique needs of startups, businesses, and enterprises. From strategy and intuitive UI/UX design to robust development for iOS...",
    badgeGradient: "linear-gradient(to right, #db2777, #be185d)",
    pastelBg: "#fdf2f8",
    colorHex: "#db2777",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    href: "/website",
  },
];

export default function WebsitePage() {
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
            WEBSITE DEVELOPMENT IN BANGLADESH
          </h1>
        </div>
      </header>

      <div className="border-b border-neutral-200 bg-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto p-2 md:px-9">
          <div className="w-full text-center">
            <p className="text-sm leading-relaxed text-brand-steel md:text-base mt-3 text-center">
              SRS IT provides professional website development services in Bangladesh, delivering fast, responsive, secure, and SEO-friendly websites for businesses, startups, and enterprises. From corporate websites and eCommerce platforms to custom web applications, we create modern, scalable, and user-friendly websites designed to strengthen your online presence, attract customers, and drive business growth.
            </p>
            <div className="section-divider mt-8"></div>
          </div>
        </div>
      </div>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto p-2 md:px-9">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Link key={idx} href={service.href} className="showcase-service-card group relative mt-8 flex h-full flex-col">
                <div
                  className="showcase-service-badge absolute left-1/2 top-0 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md"
                  style={{ background: service.badgeGradient }}
                >
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={service.icon}></path>
                  </svg>
                </div>

                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl px-6 pb-7 pt-12 text-center shadow-sm transition duration-300 group-hover:shadow-md"
                  style={{ backgroundColor: service.pastelBg }}
                >
                  <div className="relative z-10 flex flex-1 flex-col">
                    <h3 className="font-display text-base font-bold leading-snug text-gray-900 md:text-lg">
                      {service.title}
                    </h3>

                    <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-gray-500">
                      {service.subtitle}
                    </p>

                    <span className="mt-5 inline-flex items-center justify-center gap-1 text-xs font-semibold text-brand-orange transition group-hover:gap-2">
                      Learn More <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="pointer-events-none absolute inset-0 z-[99] flex items-center justify-center overflow-hidden">
                    <span
                      className="absolute left-1/2 top-1/2 z-[99] h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 border border-gray-800 backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-100"
                      style={{ backgroundColor: `${service.colorHex}66` }}
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

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
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
