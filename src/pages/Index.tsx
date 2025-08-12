import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <main>
      <Seo
        title="BrandKit Harmony — Premium Branding Studio"
        description="A creative studio crafting elegant identities, packaging, and digital experiences."
        canonical="/"
      />
      <Hero />
      <ProjectGrid />
    </main>
  );
};

export default Index;
