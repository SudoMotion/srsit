export const metadata = {
  title: "About Us | SRS IT",
  description: "Learn more about SRS IT and our team.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] py-20 text-center text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/builder-grid.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-9">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">About <span className="text-[#f97316]">Us</span></h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Discover our journey, our mission, and the passionate team behind SRS IT. We build digital solutions that matter.
          </p>
          <div className="w-16 h-1 bg-[#f97316] mx-auto mt-6 rounded"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-9 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-[#1a1a1a]">Who We Are</h2>
          <p className="text-neutral-600 leading-relaxed">
            SRS IT is a leading software development company based in Bangladesh. With over a decade of experience, we specialize in delivering cutting-edge web design, custom software development, and AI integration services to businesses worldwide.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Our mission is to empower organizations through innovative technology solutions that drive growth, efficiency, and success in the digital age.
          </p>
          <ul className="space-y-3 mt-6">
            {['10+ Years of Experience', '100+ Successful Projects', 'Dedicated Expert Team', '24/7 Client Support'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[#1a1a1a] font-medium">
                <svg className="h-5 w-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[#f97316]/20 z-10 mix-blend-overlay"></div>
          <img src="/images/hero-slider/slide1.jpg" alt="About SRS IT" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
}

