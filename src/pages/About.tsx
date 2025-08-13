import Seo from "@/components/Seo";
import aboutImg from "@/assets/project3.jpg";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Seo
        title="About — Lavanya & Shankar Architects"
        description="Lavanya & Shankar is an architectural firm based in Chennai has been in the business from 1999. It is headed by a husband and wife team, S.Shankaranarayanan (Shankar) and Lavanya. The firm started as a boutique firm has grown into a full-fledged one. ."
        canonical="/about"
      />
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-12 py-12 items-center">
        <img src={aboutImg} alt="Studio aesthetic" className="w-full rounded-lg shadow-[var(--shadow-elegant)]" />
        <div>
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lavanya & Shankar Architects is a boutique studio focused on timeless identity, tactile packaging, and calm digital experiences.
          </p>
          <p className="mt-3 text-muted-foreground">
            An enthusiastic architect duo, Lavanya & Shankar bring together a warmth which blends seamlessly into their design philosophy. Armed with years of expertise in the field of architecture and interiors ,their ideology always brings in a single point contact solution for the clients – be it design consultation, project management or execution. Interpreting local material and concepts with a contemporary design sensibility, the attention to detail constantly enhances user brief & aspiration.
          </p>
        </div>
      </section>

      <section className="container py-8">
        <h2 className="text-2xl font-semibold">Awards</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="rounded border bg-card p-4">Awwwards – Site of the Day</div>
          <div className="rounded border bg-card p-4">FWA – Site of the Day</div>
          <div className="rounded border bg-card p-4">D&AD – Graphite Pencil</div>
          <div className="rounded border bg-card p-4">ADC – Gold Cube</div>
        </div>
      </section>
    </main>
  );
}
