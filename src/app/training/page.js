import Link from "next/link";

export const metadata = {
  title: "Training | SRS IT",
  description: "IT Training programs and courses coming soon.",
};

export default function TrainingPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-3xl w-full bg-white p-10 md:p-16 rounded-2xl shadow-xl text-center border border-neutral-100">
        <div className="w-20 h-20 bg-[#f97316]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-wide text-[#1a1a1a] mb-4">
          Coming <span className="text-[#f97316]">Soon</span>
        </h1>
        <p className="text-neutral-500 md:text-lg mb-8 max-w-xl mx-auto">
          We are working hard to bring you industry-leading IT training programs. Stay tuned for expert-led courses on modern technologies.
        </p>
        <Link href="/" className="inline-block bg-[#1a1a1a] text-white font-bold uppercase tracking-wide px-8 py-3 rounded-lg hover:bg-[#f97316] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

