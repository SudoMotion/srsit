import HomeProducts from "../../components/HomeProducts";

export const metadata = {
  title: "Software & Products | SRS IT",
  description: "Browse our catalog of software solutions and products.",
};

export default function SoftwarePage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <section className="bg-[#1a1a1a] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Our <span className="text-[#f97316]">Software Catalog</span></h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Explore our range of powerful, scalable software products tailored for your business needs.
        </p>
      </section>

      <div className="-mt-16">
        <HomeProducts />
      </div>
    </div>
  );
}

