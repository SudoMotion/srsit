import Image from "next/image";

export const metadata = {
  title: "Our Team | SRS IT",
  description: "Meet the experts behind SRS IT.",
};

export default function TeamPage() {
  const team = [
    { name: "John Doe", role: "CEO & Founder", image: "/images/hero-slider/slide1.jpg" },
    { name: "Jane Smith", role: "CTO", image: "/images/hero-slider/slide2.jpg" },
    { name: "Mike Johnson", role: "Lead Developer", image: "/images/hero-slider/slide1.jpg" },
    { name: "Sarah Williams", role: "UI/UX Designer", image: "/images/hero-slider/slide2.jpg" },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <section className="bg-[#1a1a1a] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Our <span className="text-[#f97316]">Team</span></h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Meet the passionate professionals dedicated to your success.
        </p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 md:px-9">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="relative h-64 w-full">
                <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-[#1a1a1a]">{member.name}</h3>
                <p className="text-[#f97316] font-medium text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

