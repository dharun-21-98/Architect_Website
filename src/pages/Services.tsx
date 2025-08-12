import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Package, Layout, PenTool, Layers, Globe } from "lucide-react";

const items = [
  { icon: Palette, title: "Identity", desc: "Logos, typography, and visual systems." },
  { icon: Package, title: "Packaging", desc: "Materials, structures, and product presence." },
  { icon: Layout, title: "Web Design", desc: "Editorial layouts with refined motion." },
  { icon: PenTool, title: "Art Direction", desc: "Photography and content curation." },
  { icon: Layers, title: "Brand Guidelines", desc: "Cohesion across every touchpoint." },
  { icon: Globe, title: "Digital Branding", desc: "From product to marketing ecosystems." },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Seo
        title="Services — BrandKit Harmony"
        description="Identity, packaging, web design, and art direction for premium brands."
        canonical="/services"
      />
      <section className="container py-12">
        <h1 className="text-4xl font-semibold">Services</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Tailored capabilities that bring clarity and elegance to your brand.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover-scale">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon />
                </div>
                <CardTitle className="mt-2">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
