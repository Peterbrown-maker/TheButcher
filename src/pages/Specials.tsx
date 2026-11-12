import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SectionPill } from "@/components/SectionPill";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CalendarDays, Clock } from "lucide-react";
import { MENU, OPENING_HOURS, PHOTOS, SPECIALS, formatPrice } from "@/data/butcher";

const platters = MENU.find((s) => s.id === "platters")!;

const Specials = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero pill="Events &amp; Specials" title="What's On" image={PHOTOS.dj} imageAlt="A DJ playing at The Butcher">
          Monate Sundays, live DJs and platter deals. Here's what's happening at The Butcher.
        </PageHero>

        {/* Posters */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SPECIALS.map((special, i) => (
                <StaggerItem key={special.src}>
                  <button
                    onClick={() => setOpen(i)}
                    className="block w-full overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-shadow group"
                    aria-label={`View ${special.alt}`}
                  >
                    <img
                      src={special.src}
                      alt={special.alt}
                      loading="lazy"
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-center text-sm italic text-muted-foreground mt-8">
              Events and specials change regularly. Call us or ask your waitron what's on.
            </p>
          </div>
        </section>

        <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
          <DialogContent className="max-w-2xl p-2 bg-black border-white/10">
            <DialogTitle className="sr-only">{open !== null ? SPECIALS[open].alt : "Special"}</DialogTitle>
            {open !== null && (
              <img src={SPECIALS[open].src} alt={SPECIALS[open].alt} className="w-full max-h-[85vh] object-contain rounded" />
            )}
          </DialogContent>
        </Dialog>

        {/* Monate Sunday + Braai Platters */}
        <section className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8 max-w-6xl">
            <ScrollReveal>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card h-full">
                <img src={PHOTOS.danceFloor} alt="People dancing at a Monate Sunday" loading="lazy" className="w-full aspect-[16/9] object-cover object-top" />
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary mb-2">
                    <CalendarDays size={14} /> Sundays · 12:00 – 18:00
                  </div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">Monate Sunday</h2>
                  <p className="text-muted-foreground mb-2">
                    Live DJs all afternoon. Buy a wrap combo and a cocktail for R200 and get a complimentary round of hubbly.
                  </p>
                  <p className="font-heading font-semibold text-xl text-primary mb-6">R200</p>
                  <Button variant="hero" asChild>
                    <Link to="/menu#burgers-wraps">See the Wraps</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-card h-full">
                <img src={platters.image} alt={platters.name} loading="lazy" className="w-full aspect-[16/9] object-cover" />
                <div className="p-8">
                  <div className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Made for Sharing</div>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-3">{platters.name}</h2>
                  <p className="text-muted-foreground mb-6">
                    Bring the crew. Short ribs, wings, wors, chops and steak with pap, chakalaka and chips, from{" "}
                    {formatPrice(platters.groups[0].items[0].price)} for two.
                  </p>
                  <Button variant="heroOutline" asChild>
                    <Link to="/menu#platters">See All Platters</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Hours */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <SectionPill>
                  <Clock size={14} /> Opening Hours
                </SectionPill>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-4">Open Late on Weekends</h2>
              </div>
              <div className="space-y-3">
                {OPENING_HOURS.map((row) => (
                  <div key={row.days} className="flex justify-between items-center gap-4 bg-card p-4 rounded-lg shadow-card">
                    <span className="font-medium text-foreground">{row.days}</span>
                    <span className="text-primary font-semibold whitespace-nowrap">{row.hours}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">Come Through</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Fresh meat on the fire, cold drinks and good music. See you at Block FF.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-12" asChild>
                <Link to="/contact">Find Us</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Specials;
