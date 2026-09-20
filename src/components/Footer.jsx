import React from 'react';
import Link from 'next/link';
import FooterSocialLink from './FooterSocialLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offices = [
    { label: '', address: 'House: 44, Road: 14, Block: G, Niketon, Gulshan-1, Dhaka-1212' }
  ];
  
  const hotline = '+8801711223344';
  const supportPhone = '+8801911223344';
  const email = 'info@srsit.com';

  const footerServices = [
    { title: 'Web Development', navUrl: '/website', isNavActive: false },
    { title: 'Digital Marketing', navUrl: '/marketing', isNavActive: false },
    { title: 'Software Development', navUrl: '/software', isNavActive: false },
    { title: 'UI/UX Design', navUrl: '/website', isNavActive: false },
  ];

  const paymentMethods = [
    { content: 'Bank Transfer, bKash, Nagad, Rocket, Credit/Debit Card' }
  ];

  const businessHours = [
    { days: 'Saturday - Thursday', hours: '10:00 AM - 07:00 PM', is_closed: false },
    { days: 'Friday', hours: 'Closed', is_closed: true }
  ];

  const socialMedia = [
    { platform: 'facebook', url: 'https://facebook.com/srsit' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/srsit' },
    { platform: 'youtube', url: 'https://youtube.com/c/srsit' }
  ];

  return (
    <div className="bg-brand-black">
      <footer className="relative overflow-hidden py-8 text-neutral-300 md:py-12">
        <div className="builder-grid absolute inset-0 opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-orange"></div>
        <div className="max-w-8xl relative mx-auto p-2 md:px-9">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            
            {/* Company Info */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Address</h3>
              {offices.map((office, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-xs text-neutral-300 md:text-sm">
                    {office.address}
                  </p>
                </div>
              ))}
              
              {hotline && (
                <div className="flex items-start space-x-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <p className="text-xs text-neutral-300 md:text-sm">Hotline: {hotline}</p>
                </div>
              )}
              
              {supportPhone && (
                <div className="flex items-start space-x-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <p className="text-xs text-neutral-300 md:text-sm">Support: {supportPhone}</p>
                </div>
              )}
              
              {email && (
                <div className="flex items-start space-x-2">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <p className="text-xs text-neutral-300 md:text-sm">Email: {email}</p>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="space-y-2.5">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link href="/" className="text-neutral-300 hover:text-brand-orange text-xs transition-all duration-200 md:text-sm">Home</Link></li>
                <li><Link href="/about" className="text-neutral-300 hover:text-brand-orange text-xs transition-all duration-200 md:text-sm">About Us</Link></li>
                <li><Link href="/website" className="text-neutral-300 hover:text-brand-orange text-xs transition-all duration-200 md:text-sm">All Services</Link></li>
                <li><Link href="/careers" className="text-neutral-300 hover:text-brand-orange text-xs transition-all duration-200 md:text-sm">Careers</Link></li>
                <li><Link href="/contact" className="text-neutral-300 hover:text-brand-orange text-xs transition-all duration-200 md:text-sm">Contact</Link></li>
                <li><Link href="/sitemap" className="text-neutral-300 hover:text-brand-orange text-xs transition-all duration-200 md:text-sm">Sitemap</Link></li>
              </ul>
            </div>

            {/* Footer Services */}
            {footerServices.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Our Services</h3>
                <ul className="space-y-1.5">
                  {footerServices.map((service, idx) => (
                    <li key={idx}>
                      <Link href={service.navUrl} className={`${service.isNavActive ? 'border-l-2 border-brand-orange pl-2 font-semibold text-brand-orange' : 'text-neutral-300 hover:text-brand-orange'} text-xs transition-all duration-200 md:text-sm`}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info */}
            <div className="space-y-2.5">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Payment Method</h3>
              <div className="space-y-2">
                {paymentMethods.map((payment, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2 3a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                    </svg>
                    <p className="text-xs text-neutral-300 md:text-sm" dangerouslySetInnerHTML={{ __html: payment.content.replace(/\\n/g, '<br />') }}></p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="space-y-3.5">
              {/* Business Hours */}
              <div>
                <div className="flex items-center space-x-2 mb-2.5">
                  <div className="flex h-7 w-7 items-center justify-center bg-brand-orange">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide text-white">Business Hours</h4>
                </div>
                <div className="space-y-1 text-xs md:text-sm leading-tight">
                  {businessHours.map((hours, idx) => (
                    <div key={idx} className="flex flex-col gap-x-2 text-neutral-300">
                      <span className="text-xs md:text-sm">{hours.days}:</span>
                      {hours.is_closed ? (
                        <span className="text-red-400">{hours.hours || 'Closed'}</span>
                      ) : (
                        <span className="text-brand-orange">{hours.hours}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {socialMedia.map((social, idx) => (
                  social.url && (
                    <FooterSocialLink key={idx} platform={social.platform} url={social.url} />
                  )
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <img src="/images/SSLCommerz.png" alt="SSLCommerz" className="h-10 w-auto md:h-12" width="240" height="48" loading="lazy" decoding="async" />
          </div>
          
          {/* Bottom Footer */}
          <div className="mt-6 border-t border-white/10 pt-6 md:mt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-xs text-neutral-400 md:text-sm">
                © {currentYear} SRS IT. All rights reserved.
              </p>
              <div className="flex space-x-5">
                <Link href="#" className="text-xs text-neutral-400 transition-colors duration-200 hover:text-brand-orange md:text-sm">Privacy Policy</Link>
                <Link href="#" className="text-xs text-neutral-400 transition-colors duration-200 hover:text-brand-orange md:text-sm">Terms of Service</Link>
                <Link href="/sitemap" className="text-xs text-neutral-400 transition-colors duration-200 hover:text-brand-orange md:text-sm">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
