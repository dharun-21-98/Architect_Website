import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "Commercial" | "Residential" | "Villa";
  image: string;
  description?: string;
}

interface Props {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: Props) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-card shadow-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <img
        src={project.image}
        alt={`${project.title} project cover`}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="inline-flex items-center gap-2 rounded bg-background/80 px-3 py-1 text-sm">
          <span className="font-medium">{project.title}</span>
          <span className="text-muted-foreground">• {project.category}</span>
        </div>
      </div>
    </Link>
  );
}
