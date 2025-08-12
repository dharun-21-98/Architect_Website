import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast({ title: "Message sent", description: "We will get back to you shortly." });
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <main className="pt-20">
      <Seo
        title="Contact — BrandKit Harmony"
        description="Get in touch to start your next branding project."
        canonical="/contact"
      />
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
        <div>
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">
            Tell us about your project and goals.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Input required placeholder="Your name" aria-label="Name" />
            <Input required type="email" placeholder="Email" aria-label="Email" />
            <Input placeholder="Company" aria-label="Company" />
            <Textarea required placeholder="Project details" rows={5} aria-label="Project details" />
            <Button type="submit" variant="hero">Send Message</Button>
          </form>
        </div>
        <div className="rounded-lg overflow-hidden shadow-[var(--shadow-elegant)]">
          <iframe
            title="Studio Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.489%2C51.28%2C0.236%2C51.686&layer=mapnik"
            className="w-full h-[350px]"
          />
          <div className="p-4 bg-card">
            <p className="text-sm text-muted-foreground">Email: hello@brandkit-harmony.com</p>
            <p className="text-sm text-muted-foreground">Instagram: @brandkit.harmony</p>
          </div>
        </div>
      </section>
    </main>
  );
}
