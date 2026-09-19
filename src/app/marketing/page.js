export const metadata = {
  title: "Digital Marketing | SRS IT",
  description: "Boost your online presence with our digital marketing services.",
};

export default function MarketingPage() {
  const services = [
    { title: "Search Engine Optimization (SEO)", desc: "Improve your search rankings and drive organic traffic." },
    { title: "Social Media Marketing", desc: "Engage your audience across social platforms." },
    { title: "Pay-Per-Click (PPC)", desc: "Targeted ad campaigns for immediate results." },
    { title: "Content Marketing", desc: "Valuable content that converts visitors into customers." },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#1a1a1a] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Digital <span className="text-[#f97316]">Marketing</span></h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Data-driven strategies to maximize your ROI and grow your brand online.
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 md:px-9">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border border-neutral-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center text-[#f97316] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
              <p className="text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

