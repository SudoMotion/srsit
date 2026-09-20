import React from 'react';
import Link from 'next/link';
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Digital Marketing Services | SRS IT",
  description: "Connect with customers at scale through Bulk SMS, Email Marketing, and WhatsApp Campaigns.",
};

const services = [
  {
    title: "SEO (Search Engine Optimization)",
    desc: "Improve your website's search visibility, attract qualified organic traffic, and drive sustainable business growth with SRS IT's data-driven SEO solutions. Our comprehensive approach includes...",
    link: "/marketing",
    bg: "bg-[#fff0e6]",
    iconBg: "bg-[#d97706]",
    textColor: "text-[#d97706]",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  },
  {
    title: "Bulk SMS",
    desc: "SRS IT provides fast, secure, and affordable Bulk SMS Services in Bangladesh, helping businesses instantly connect with customers through Promotional SMS, Transactional SMS, OTP SMS, API SMS Integration,...",
    link: "/marketing",
    bg: "bg-[#e6fcf0]",
    iconBg: "bg-[#10b981]",
    textColor: "text-[#10b981]",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  },
  {
    title: "Email Marketing",
    desc: "SRS IT provides professional Email Marketing Services in Bangladesh to help businesses connect with customers, generate qualified leads, increase conversions, and drive sustainable growth. Our...",
    link: "/marketing",
    bg: "bg-[#fcecf3]",
    iconBg: "bg-[#ec4899]",
    textColor: "text-[#ec4899]",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  }
];

export default function MarketingPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <PageHeader 
        title="DIGITAL MARKETING SERVICES" 
        description="Connect with customers at scale through Bulk SMS, Email Marketing, and WhatsApp Campaigns. SRS IT delivers targeted communication solutions designed to increase engagement and accelerate business growth."
      />

      <section className="py-20 max-w-7xl mx-auto px-4 md:px-9">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, idx) => (
            <div key={idx} className={`${service.bg} p-8 rounded-xl relative pt-12 text-center group transition-transform hover:-translate-y-1 shadow-sm`}>
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 ${service.iconBg} text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 mt-2 font-display uppercase">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
              
              <Link href={service.link} className={`inline-flex items-center text-sm font-bold ${service.textColor} hover:opacity-80 transition-opacity`}>
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-primary">
            Get A Quote
          </Link>
        </div>
      </section>
      
      <section className="bg-brand-orange py-10 md:py-12">
        <div className="max-w-7xl mx-auto p-2 md:px-9 text-center">
          <Link href="/contact" className="group inline-flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide text-white transition hover:text-brand-black md:text-2xl">
            CLICK HERE &amp; GET STARTED TODAY
            <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
