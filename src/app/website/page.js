import PageHeader from "@/components/PageHeader";
import HomeServicesShowcase from "../../components/HomeServicesShowcase";

export const metadata = {
  title: "Services | SRS IT",
  description: "Our comprehensive web and software development services.",
};

export default function WebsiteServicesPage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <PageHeader title="OUR SERVICES" />
      
      <div className="-mt-16">
        <HomeServicesShowcase />
      </div>
    </div>
  );
}

