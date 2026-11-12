import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SectionPill } from "@/components/SectionPill";
import { motion } from "framer-motion";
import { Beef, Flame, Music, Soup } from "lucide-react";
import { BRAND, GALLERY, PHOTOS } from "@/data/butcher";

const values = [
  { icon: Beef, name: "Fresh Meat", role: "Steak, lamb chops, short ribs, wors and chicken, cut fresh" },
  { icon: Flame, name: "Shisanyama", role: "Flame grilled to order with pap, chakalaka and chips" },
  { icon: Soup, name: "Kasi Classics", role: "Mogodu, skop, oxtail and beef stew" },
  { icon: Music, name: "Monate Vibes", role: "Live DJs, cold drinks, cocktails and backup power" },
];

const week = [
  { time: "Every day", event: "Shisanyama plates, braai platters, burgers, wraps and kasi classics straight from the fire" },
  { time: "Fridays", event: "After-work braai, cold drinks and the weekend warm-up. Open until 02:00" },
  { time: "Saturdays", event: "Big platters for the crew, DJs on the decks and the doors open until 02:00" },
  { time: "Sundays", event: "Monate Sunday: live DJs, plus the wrap combo and cocktail deal for R200 from 12:00 to 18:00" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          pill="Meat &amp; Shisanyama"
          title="Monate Corner"
          image={PHOTOS.entrance}
          imageAlt="The Butcher Monate Corner sign lit up at night"
        >
          {BRAND.fullName} is a meat &amp; shisanyama spot at {BRAND.address.street}, Soshanguve. Fresh cuts, open
          flames, cold drinks and good music.
        </PageHero>

        {/* Story + promise */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <ScrollReveal>
                <img src={PHOTOS.danceFloor} alt="People dancing at The Butcher" className="w-full max-w-sm mx-auto rounded-2xl shadow-card-hover" />
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <SectionPill>Our Promise</SectionPill>
                <blockquote className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mt-6 leading-snug">
                  "Pick your meat. <span className="italic text-primary">We'll handle the fire.</span>"
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Everything is grilled to order, so give the fire a little time. If you're in a hurry or have any allergies,
                  let your waitron know and we'll do our best to help.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionPill>Meat &amp; Shisanyama</SectionPill>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-4">What We're Known For</h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {values.map((value) => (
                <StaggerItem key={value.name}>
                  <div className="text-center group">
                    <div className="w-32 h-32 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:shadow-card-hover transition-shadow duration-300">
                      <value.icon className="text-primary-foreground" size={40} />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground">{value.name}</h4>
                    <p className="text-sm text-muted-foreground">{value.role}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* A week at The Butcher */}
        <section className="py-24 bg-white border-t border-border relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">A Week at {BRAND.name}</h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-0 relative">
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary/30" />

              {week.map((moment, i) => (
                <motion.div
                  key={moment.time}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-start gap-6 py-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-button z-10 mt-1" />
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                    <span className="font-heading font-bold text-primary text-lg">{moment.time}</span>
                    <p className="text-muted-foreground mt-1">{moment.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <SectionPill>Gallery</SectionPill>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-4">Hungry Yet?</h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {GALLERY.map((photo) => (
                <StaggerItem key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full aspect-[3/4] object-cover rounded-lg shadow-card" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
