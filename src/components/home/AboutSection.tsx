import { Beef, Flame, Music } from "lucide-react";
import { SectionPill } from "@/components/SectionPill";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { BRAND } from "@/data/butcher";

const features = [
  {
    icon: Beef,
    title: "Butcher-Fresh Meat",
    description:
      "Steak, lamb chops, short ribs, wors and chicken, cut fresh and ready for the fire. Choose your meat and how you want it done.",
  },
  {
    icon: Flame,
    title: "Shisanyama Done Right",
    description: "Flame grilled with pap, chakalaka and chips. Big braai platters for the crew, and kasi classics like mogodu and skop.",
  },
  {
    icon: Music,
    title: "Monate Vibes",
    description: "Live DJs, Monate Sundays, cold drinks and cocktails. And a backup generator, so load shedding never stops the party.",
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <SectionPill>Block FF · Soshanguve</SectionPill>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6">
              Welcome to Monate Corner
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Butcher is where meat lovers in Sosha get together. Fresh cuts from the butchery go straight onto the
              fire, the drinks are cold and the music is loud. Come for a plate, stay for the vibe.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary group h-full">
                <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
