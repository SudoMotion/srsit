import Link from 'next/link';

export default function HomeFinalCta() {
  return (
    <section className="bg-[#f97316] py-10 md:py-12">
      <div className="max-w-7xl mx-auto p-2 md:px-9 text-center">
        <Link href="/contact" className="group inline-flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide text-white transition hover:text-[#1a1a1a] md:text-2xl">
          Click Here & Get Started Today
          <svg className="h-6 w-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          Ready to transform your business with our cutting-edge IT solutions? Reach out to us now.
        </p>
      </div>
    </section>
  );
}

