import HomeServicesShowcase from "../../components/HomeServicesShowcase";

export const metadata = {
  title: "Services | SRS IT",
  description: "Our comprehensive web and software development services.",
};

export default function WebsiteServicesPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <section className="bg-[#1a1a1a] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Our <span className="text-[#f97316]">Services</span></h1>
        <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
          We provide end-to-end digital solutions to help your business thrive in the modern world.
        </p>
      </section>
      
      <div className="-mt-16">
        <HomeServicesShowcase />
      </div>
    </div>
  );
}

