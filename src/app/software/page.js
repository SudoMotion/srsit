import PageHeader from "@/components/PageHeader";
import HomeProducts from "../../components/HomeProducts";

export const metadata = {
  title: "Software & Products | SRS IT",
  description: "Browse our catalog of software solutions and products.",
};

export default function SoftwarePage() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <PageHeader title="OUR SOFTWARE CATALOG" />

      <div className="-mt-16">
        <HomeProducts />
      </div>
    </div>
  );
}

