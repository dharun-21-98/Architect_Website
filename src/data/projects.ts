import { Project } from "@/components/ProjectCard";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import p6 from "@/assets/project6.jpg";
export const projects: Project[] = [
  {
    id: "1",
    title: "Maison Aurelia",
    slug: "maison-aurelia",
    category: "Commercial" as const,
    image: p1,
    description:
      "A timeless identity for a boutique perfumery blending heritage with modern elegance.",
  },
  {
    id: "2",
    title: "Sage & Co.",
    slug: "sage-and-co",
    category: "Residential" as const,
    image: p2,
    description:
      "Sustainable packaging system with tactile materials and refined color accents.",
  },
  {
    id: "3",
    title: "Gilded Press",
    slug: "gilded-press",
    category: "Commercial" as const,
    image: p3,
    description:
      "Editorial branding featuring bespoke typography and subtle gilding details.",
  },
  {
    id: "4",
    title: "Olive Lane",
    slug: "olive-lane",
    category: "Villa" as const,
    image: p4,
    description:
      "Artisanal food packaging with elegant labels and considered information design.",
  },
  {
    id: "5",
    title: "Studio Verdant",
    slug: "studio-verdant",
    category: "Residential" as const,
    image: p5,
    description:
      "A calm digital experience featuring editorial layouts and refined motion.",
  },
  {
    id: "6",
    title: "Linea Cards",
    slug: "linea-cards",
    category: "Commercial" as const,
    image: p6,
    description:
      "Tactile stationery system with foil accents and precise grid structures.",
  },
];