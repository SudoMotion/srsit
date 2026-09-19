import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#1a1a1a]">
      <footer className="relative overflow-hidden py-8 text-neutral-300 md:py-12">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/builder-grid.png')]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f97316]"></div>
        
        <div className="max-w-7xl relative mx-auto p-2 md:px-9">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
            
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Address</h3>
              <div className="flex items-start space-x-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs text-neutral-300 md:text-sm">Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-xs text-neutral-300 md:text-sm">Hotline: +880 1234-567890</p>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-xs text-neutral-300 md:text-sm">Email: info@srsit.com</p>
              </div>
            </div>

            <div className="space-y-2.5 lg:col-span-1">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link href="/" className="text-neutral-300 hover:text-[#f97316] text-xs transition-all duration-200 md:text-sm">Home</Link></li>
                <li><Link href="/about" className="text-neutral-300 hover:text-[#f97316] text-xs transition-all duration-200 md:text-sm">About Us</Link></li>
                <li><Link href="/website" className="text-neutral-300 hover:text-[#f97316] text-xs transition-all duration-200 md:text-sm">All Services</Link></li>
                <li><Link href="/contact" className="text-neutral-300 hover:text-[#f97316] text-xs transition-all duration-200 md:text-sm">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-3 lg:col-span-1">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Our Services</h3>
              <ul className="space-y-1.5">
                <li><Link href="#" className="text-neutral-300 hover:text-[#f97316] text-xs transition-all duration-200 md:text-sm">Web Development</Link></li>
                <li><Link href="#" className="text-neutral-300 hover:text-[#f97316] text-xs transition-all duration-200 md:text-sm">App Development</Link></li>
                <li><Link href="#" className="text-neutral-300 hover:text-[#f97316] text-xs transition-all duration-200 md:text-sm">Digital Marketing</Link></li>
              </ul>
            </div>

            <div className="space-y-2.5 lg:col-span-1">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Payment Method</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2 3a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-neutral-300 md:text-sm">Bank Transfer, Mobile Banking, Cash</p>
                </div>
              </div>
            </div>

            <div className="space-y-3.5 lg:col-span-1">
              <div>
                <div className="flex items-center space-x-2 mb-2.5">
                  <div className="flex h-7 w-7 items-center justify-center bg-[#f97316]">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  </div>
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide text-white">Business Hours</h4>
                </div>
                <div className="space-y-1 text-xs md:text-sm leading-tight text-neutral-300">
                  <div className="flex flex-col gap-x-2">
                    <span>Sat-Thu:</span>
                    <span className="text-[#f97316]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex flex-col gap-x-2">
                    <span>Friday:</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-6 border-t border-white/10 pt-6 md:mt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-xs text-neutral-400 md:text-sm">
                © {new Date().getFullYear()} SRS IT. All rights reserved.
              </p>
              <div className="flex space-x-5">
                <Link href="#" className="text-xs text-neutral-400 transition-colors duration-200 hover:text-[#f97316] md:text-sm">Privacy Policy</Link>
                <Link href="#" className="text-xs text-neutral-400 transition-colors duration-200 hover:text-[#f97316] md:text-sm">Terms of Service</Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

