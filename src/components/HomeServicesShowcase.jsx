import Link from "next/link";

const services = [
  {
    title: "Web Development",
    subtitle: "Custom web applications built with modern technologies.",
    color: "#3b82f6",
    pastelBg: "#eff6ff",
    gradient: "linear-gradient(135deg, #60a5fa, #3b82f6)",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    detailUrl: "/services/web-development",
  },
  {
    title: "Mobile Apps",
    subtitle: "Native and cross-platform mobile applications.",
    color: "#10b981",
    pastelBg: "#ecfdf5",
    gradient: "linear-gradient(135deg, #34d399, #10b981)",
    iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    detailUrl: "/services/mobile-apps",
  },
  {
    title: "Digital Marketing",
    subtitle: "SEO, SEM, and social media marketing strategies.",
    color: "#f59e0b",
    pastelBg: "#fffbeb",
    gradient: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
    detailUrl: "/services/digital-marketing",
  },
];

export default function HomeServicesShowcase() {
  return (
    <section
      className="border-t border-neutral-200 bg-[#f3f8fb] py-12 md:py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/services-background.jpg')" }}
    >
      <div className="max-w-7xl mx-auto p-2 md:px-9">
        <header className="border-b border-neutral-200 pb-8 md:pb-10 border-white/20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl lg:text-4xl">
              Our <span className="text-[#f97316]">Services</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white md:text-base">
              Professional web development and digital services tailored to grow your business.
            </p>
            <div className="w-16 h-1 bg-[#f97316] mx-auto mt-4 rounded"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.detailUrl}
              className="showcase-service-card group relative flex h-full flex-col"
            >
              <div
                className="showcase-service-badge absolute left-1/2 -top-8 z-20 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full shadow-md transition-transform duration-300 group-hover:scale-110"
                style={{ background: service.gradient }}
              >
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d={service.iconPath}></path>
                </svg>
              </div>

              <div
                className="relative flex h-full flex-col overflow-hidden rounded-2xl px-6 pb-7 pt-12 text-center shadow-sm transition duration-300 group-hover:shadow-md"
                style={{ backgroundColor: service.pastelBg }}
              >
                <div className="relative z-10 flex flex-1 flex-col mt-4">
                  <h3 className="font-display text-base font-bold leading-snug text-gray-900 md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-500">
                    {service.subtitle}
                  </p>
                  <span className="mt-5 inline-flex items-center justify-center gap-1 text-sm font-semibold text-[#f97316] transition group-hover:gap-2">
                    Learn More
                    <span aria-hidden="true">→</span>
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-0 z-[99] flex items-center justify-center overflow-hidden">
                  <span
                    className="absolute left-1/2 top-1/2 z-[99] h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 border border-gray-800 backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-100"
                    style={{ backgroundColor: `${service.color}66` }}
                    aria-hidden="true"
                  ></span>
                  <span className="relative z-[100] inline-flex items-center justify-center border-2 border-black bg-white/90 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black opacity-0 transition duration-500 delay-150 group-hover:opacity-100">
                    See Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/services" className="text-white px-8 py-2 border border-white hover:bg-white hover:text-black transition-colors rounded">
            All Services
          </Link>
          <Link href="/contact" className="bg-[#f97316] text-white px-8 py-2 rounded hover:bg-[#ea580c] transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

