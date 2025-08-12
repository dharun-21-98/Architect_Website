import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";

const Index = () => {
  return (
    <main>
      <Seo
        title="Lavanya & Shankar Architects"
        description="Lavanya & Shankar is an architectural firm based in Chennai has been in the business from 1999. It is headed by a husband and wife team, S.Shankaranarayanan (Shankar) and Lavanya. The firm started as a boutique firm has grown into a full-fledged one."
        canonical="/"
      />
      <Hero />
      <ProjectGrid />
    </main>
  );
};

export default Index;
