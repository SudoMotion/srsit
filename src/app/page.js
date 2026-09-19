import HomeHero from "../components/HomeHero";
import HomeQuickIcons from "../components/HomeQuickIcons";
import HomeServicesShowcase from "../components/HomeServicesShowcase";
import HomeServicesFeatured from "../components/HomeServicesFeatured";
import HomeProducts from "../components/HomeProducts";
import HomePortfolios from "../components/HomePortfolios";
import TechnologySlider from "../components/TechnologySlider";
import HomeIndustryExpertises from "../components/HomeIndustryExpertises";
import HomeClientsGrid from "../components/HomeClientsGrid";
import AiServices from "../components/AiServices";
import HomeFinalCta from "../components/HomeFinalCta";

export const metadata = {
  title: "SRS IT - Software Development Company",
  description: "Best Web Design and Development Company in Bangladesh",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <HomeQuickIcons />
      <HomeServicesShowcase />
      <HomeServicesFeatured />
      <HomeProducts />
      <HomePortfolios />
      <TechnologySlider />
      <HomeIndustryExpertises />
      <HomeClientsGrid />
      <AiServices />
      <HomeFinalCta />
    </main>
  );
}
