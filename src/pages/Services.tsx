import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Package, Layout, PenTool, Layers, Globe } from "lucide-react";

const items = [
  { icon: Palette, title: "Architectural Design"},
  { icon: Package, title: "Interior Design, Detailing and Deco​r"},
  { icon: Layout, title: "Layout and Masterplan Design​"},
  { icon: PenTool, title: "Bid Documentation​"},
  { icon: Layers, title: "Site Visit In Stages​"},
  { icon: Globe, title: "Cost and Variance Analysis​"},
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Seo
        title="Services — Lavanya & Shankar Architects"
        description="Lavanya & Shankar is an architectural firm based in Chennai has been in the business from 1999. It is headed by a husband and wife team, S.Shankaranarayanan (Shankar) and Lavanya. The firm started as a boutique firm has grown into a full-fledged one."
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
