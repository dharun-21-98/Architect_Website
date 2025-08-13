import Seo from "@/components/Seo";
import ProjectGrid from "@/components/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Seo
        title="Projects — Lavanya & Shankar Architects"
        description="Lavanya & Shankar is an architectural firm based in Chennai has been in the business from 1999. It is headed by a husband and wife team, S.Shankaranarayanan (Shankar) and Lavanya. The firm started as a boutique firm has grown into a full-fledged one."
        canonical="/projects"
      />
      <section className="container py-12">
        <h1 className="text-4xl font-semibold">Projects</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          We are a one stop solution for all activities starting from the concept to completion, including interiors. We continuously produce the best aesthetically designed buildings, using our skills in latest technology and developments.
        </p>
      </section>
      <ProjectGrid />
    </main>
  );
}
