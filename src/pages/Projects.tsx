import Seo from "@/components/Seo";
import ProjectGrid from "@/components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Seo
        title="Projects — BrandKit Harmony"
        description="Explore branding, packaging, and digital projects crafted with elegance."
        canonical="/projects"
      />
      <section className="container py-12">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          A selection of recent work across identity, packaging, and digital.
        </p>
      </section>
      <ProjectGrid />
    </main>
  );
}
