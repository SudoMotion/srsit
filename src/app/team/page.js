import React from 'react';
import Link from 'next/link';
import FooterSocialLink from '@/components/FooterSocialLink';

// Static Data
const teamLabels = [
  {
    name: "Management",
    teamMembers: [
      { name: "S.M. Jakaria", designation: "CEO & Founder", image: "/images/hero-slider/slide1.jpg", social: [{ platform: 'linkedin', url: '#' }, { platform: 'facebook', url: '#' }] }
    ]
  },
  {
    name: "Developers",
    teamMembers: [
      { name: "Ashiqur Rahman", designation: "Senior Software Engineer", image: "/images/hero-slider/slide2.jpg", social: [{ platform: 'linkedin', url: '#' }] },
      { name: "Ruhul Amin", designation: "Frontend Developer", image: "/images/hero-slider/slide1.jpg", social: [{ platform: 'github', url: '#' }] }
    ]
  }
];

function PageHeader({ title, highlight, description, eyebrow, hideTitle = false }) {
  const parts = highlight && title.includes(highlight)
    ? title.split(highlight)
    : null;
    
  return (
    <header className="border-b border-neutral-200 bg-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto p-2 md:px-9">
        <div className="w-full text-center">
          {eyebrow && (
            <span className="mb-4 inline-block bg-brand-orange/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
              {eyebrow}
            </span>
          )}

          {!hideTitle && (
            <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-brand-black md:text-3xl lg:text-4xl">
              {parts ? (
                <>{parts[0]}<span className="text-brand-orange">{highlight}</span>{parts[1]}</>
              ) : (
                title
              )}
            </h1>
          )}

          {description && (
            <p className={`text-sm leading-relaxed text-brand-steel md:text-base ${!hideTitle ? 'mt-3' : ''} ${description.length < 250 ? 'text-center' : 'text-left'}`}>
              {description}
            </p>
          )}

          <div className="section-divider mt-4"></div>
        </div>
      </div>
    </header>
  );
}

function SectionHeader({ title, eyebrow, minimal = false, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  return (
    <div className="mb-6">
      <div className={alignClass}>
        {eyebrow && (
          minimal ? (
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-orange">{eyebrow}</p>
          ) : (
            <span className="inline-block bg-brand-orange px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">{eyebrow}</span>
          )
        )}
        <h2 className={`${minimal ? 'mt-2' : 'mt-4'} font-display text-2xl font-bold uppercase tracking-wide text-brand-black md:text-3xl lg:text-4xl`}>
          {title}
        </h2>
      </div>
      <div className={`section-divider mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
}

function TeamMemberCard({ member }) {
  return (
    <div className="group relative w-full max-w-[220px] overflow-hidden border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:max-w-[240px]">
      <div className="relative z-10 transition duration-500 group-hover:opacity-40">
        <div className="relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-60"
            loading="lazy"
          />
        </div>
        <div className="border-t border-neutral-100 p-3 text-center">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-black">{member.name}</h3>
          <p className="mt-0.5 text-xs text-brand-steel">{member.designation}</p>
        </div>
      </div>

      {member.social && member.social.length > 0 && (
        <div className="absolute inset-0 z-[99] flex items-center justify-center overflow-hidden">
          <span
            className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-brand-black/95 via-brand-orange/90 to-brand-orange/70 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
            aria-hidden="true"
          ></span>

          <div className="relative z-[100] flex translate-y-8 flex-wrap items-center justify-center gap-2 px-3 opacity-0 transition-all duration-500 delay-100 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            {member.social.map((s, idx) => (
              <FooterSocialLink key={idx} platform={s.platform} url={s.url} rounded={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <header className="detail-page-banner relative w-full shrink-0 overflow-hidden" style={{ height: '160px', minHeight: '160px', maxHeight: '160px' }}>
          <img
              src="/images/hero-slider/slide1.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute inset-0 block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
              <h1 className="text-center font-display text-lg font-bold uppercase tracking-wide text-white">
                  Meet Our Team
              </h1>
          </div>
      </header>

      <PageHeader 
        title="Meet Our Team" 
        highlight="Team" 
        eyebrow="Team"
        description="Passionate professionals delivering exceptional solutions." 
      />

      <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto p-2 md:px-9">
              {teamLabels.map((label, idx) => (
                  <div key={idx} className="mb-10 last:mb-0">
                      <SectionHeader title={label.name} align="center" minimal={true} />
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                          {label.teamMembers.map((member, mIdx) => (
                              <TeamMemberCard key={mIdx} member={member} />
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      <section className="border-t border-neutral-200 bg-brand-concrete py-10 md:py-12">
          <div className="max-w-7xl mx-auto p-2 md:px-9 text-center">
              <h2 className="font-display text-xl font-bold uppercase tracking-wide text-brand-black md:text-2xl">Join Our Team</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-brand-steel">Looking for talented individuals passionate about innovation.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link href="/careers" className="btn-primary">Open Positions</Link>
                  <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
          </div>
      </section>
    </>
  );
}
