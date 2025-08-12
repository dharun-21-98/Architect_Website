import { useParams, Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="container py-32 text-center">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Button asChild className="mt-6"><Link to="/projects">Back to Projects</Link></Button>
      </main>
    );
  }

  const related = projects.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <main className="pt-16">
      <Seo
        title={`${project.title} — BrandKit Harmony`}
        description={`${project.title} — ${project.description}`}
        canonical={`/projects/${project.slug}`}
      />
      <section className="relative">
        <img src={project.image} alt={`${project.title} banner`} className="h-[40vh] w-full object-cover" />
        <div className="container py-8">
          <h1 className="text-4xl font-semibold">{project.title}</h1>
          <p className="mt-2 text-muted-foreground">{project.category}</p>
        </div>
      </section>

      <section className="container grid grid-cols-1 lg:grid-cols-3 gap-10 py-8">
        <div className="lg:col-span-2 space-y-4">
          <img src={project.image} alt={`${project.title} main`} className="w-full rounded-lg" />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">View Larger</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <img src={project.image} alt={`${project.title} large view`} className="w-full rounded" />
            </DialogContent>
          </Dialog>
        </div>
        <aside>
          <h2 className="text-xl font-semibold">About this project</h2>
          <p className="mt-3 text-muted-foreground">{project.description}</p>
          <div className="mt-6">
            <h3 className="font-medium">Services</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground list-disc list-inside">
              <li>Art Direction</li>
              <li>Identity Design</li>
              <li>Packaging</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold">Related Projects</h2>
        <ScrollArea className="mt-6 whitespace-nowrap">
          <div className="flex gap-6 pb-4">
            {related.map((p) => (
              <div key={p.id} className="w-72 shrink-0">
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>
    </main>
  );
}
