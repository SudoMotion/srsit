export const metadata = {
  title: "Contact Us | SRS IT",
  description: "Get in touch with SRS IT for your next project.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a1a1a] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Contact <span className="text-[#f97316]">Us</span></h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
        </p>
      </section>

      {/* Form & Info Section */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 md:px-9 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-xl font-bold uppercase text-[#1a1a1a] mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#f97316]/10 p-3 rounded-full text-[#f97316]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a]">Office Address</h4>
                  <p className="text-neutral-600 text-sm mt-1">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#f97316]/10 p-3 rounded-full text-[#f97316]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a]">Phone</h4>
                  <p className="text-neutral-600 text-sm mt-1">+880 1234-567890</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#f97316]/10 p-3 rounded-full text-[#f97316]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a]">Email</h4>
                  <p className="text-neutral-600 text-sm mt-1">info@srsit.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-neutral-200">
          <h3 className="text-2xl font-bold uppercase text-[#1a1a1a] mb-6">Send us a message</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent outline-none" placeholder="Your message here..."></textarea>
            </div>
            <button className="w-full bg-[#f97316] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#ea580c] transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

