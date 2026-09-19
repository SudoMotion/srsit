import Image from "next/image";
import Link from "next/link";

const quickViewItems = [
  { label: "Completed Projects", value: "100+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Team Members", value: "20+" },
];

export default function HomeQuickIcons() {
  return (
    <section className="relative border-y border-neutral-200 bg-white bg-cover bg-center py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 z-[40] bg-[#ffffff7a]" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto p-2 md:px-9 z-[51]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              src="/images/dotted-world-map.webp"
              alt="World Map"
              width={800}
              height={450}
              className="w-full object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="font-bold text-lg">Find your domain</h3>
              <div className="flex mt-2">
                <input type="text" placeholder="Search domain..." className="border rounded-l-md px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#f97316]" />
                <button className="bg-[#f97316] text-white px-4 py-2 rounded-r-md hover:bg-[#ea580c] transition-colors">Search</button>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f97316]">
                About us
              </p>
              <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-[#1a1a1a] lg:text-2xl">
                Best Web Design and Development Company in Bangladesh
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5568] md:text-base text-left">
                We provide the best digital solutions to help your business grow. Our team is dedicated to creating high-quality software and websites.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {quickViewItems.map((stat, idx) => (
                <div key={idx} className="border border-neutral-200 p-4 text-center rounded-lg hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-[#f97316]">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-[#4a5568] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-1 text-center lg:text-left">
              <Link
                href="/contact"
                className="inline-block bg-[#f97316] text-white px-6 py-3 rounded-md hover:bg-[#ea580c] transition-colors font-medium"
              >
                Start your project →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

