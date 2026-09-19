import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "ERP System",
    description: "A comprehensive Enterprise Resource Planning software to manage your business operations.",
    image: "/images/hero-slider/slide1.jpg",
    badge: "Software Solution",
    detailUrl: "/products/erp-system",
  },
  {
    name: "HR Management",
    description: "Streamline your human resources with our complete HR Management System.",
    image: "/images/hero-slider/slide2.jpg",
    badge: "Software Solution",
    detailUrl: "/products/hr-management",
  },
];

export default function HomeProducts() {
  return (
    <section className="border-t border-neutral-200 bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto p-2 md:px-9">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-brand-black md:text-3xl text-[#1a1a1a]">
            Where <span className="text-[#f97316]">IT Solutions</span> are created
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#4a5568]">
            Cutting-edge technology with deep industry knowledge for real business results.
          </p>
          <div className="w-16 h-1 bg-[#f97316] mx-auto mt-4 rounded"></div>
        </div>

        <div className="mt-8 divide-y divide-neutral-200">
          {products.map((product, index) => {
            const reversed = index % 2 !== 0;
            return (
              <div key={index} className="grid items-center gap-8 py-8 md:grid-cols-2 md:gap-12 md:py-10">
                <div className={reversed ? "md:order-2" : ""}>
                  <div className="relative">
                    <div className={`absolute -bottom-3 ${reversed ? "-left-3" : "-right-3"} h-full w-full border-2 border-[#f97316]`}></div>
                    <div className="relative overflow-hidden bg-white shadow-lg h-[300px]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className={reversed ? "md:order-1" : ""}>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f97316]">
                    {product.badge}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-[#1a1a1a] md:text-3xl">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#4a5568] md:text-base text-left">
                    {product.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={product.detailUrl} className="bg-[#f97316] text-white px-6 py-2 rounded hover:bg-[#ea580c] transition-colors">
                      View Demo
                    </Link>
                    <Link href="/contact" className="border border-[#1a1a1a] text-[#1a1a1a] px-6 py-2 rounded hover:bg-[#1a1a1a] hover:text-white transition-colors">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

