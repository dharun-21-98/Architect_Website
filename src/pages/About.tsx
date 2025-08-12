import Seo from "@/components/Seo";
import aboutImg from "@/assets/project3.jpg";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Seo
        title="About — Lavanya & Shankar Architects"
        description="We are a creative studio crafting elegant brand systems for premium products."
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
            Our approach balances strategic clarity with crafted details, ensuring each touchpoint feels intentional and premium.
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
