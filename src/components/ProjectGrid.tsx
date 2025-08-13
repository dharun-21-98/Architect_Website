import ProjectCard, { Project } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";

const categories = ["All", "Commercial", "Residential", "Villa"] as const;

type Category = typeof categories[number];

export default function ProjectGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered: Project[] = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="container py-16">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <div className="hidden md:flex gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={active === cat ? "default" : "outline"}
              onClick={() => setActive(cat)}
              className="hover-scale"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-6 md:hidden flex gap-2 overflow-auto">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={active === cat ? "default" : "outline"}
            onClick={() => setActive(cat)}
            className="shrink-0"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
