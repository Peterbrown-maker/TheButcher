import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { VisitButtons } from "@/components/VisitButtons";
import { BRAND, PHOTOS } from "@/data/butcher";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Warm flame glow, echoing the fire in the logo */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[460px] h-[460px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-pill px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              Meat &amp; Shisanyama · Block FF
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-[60px] leading-tight text-foreground"
            >
              Fresh meat. Open flames. <span className="italic text-primary">Monate vibes.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              {BRAND.fullName} is a meat &amp; shisanyama spot at {BRAND.address.street}, Soshanguve. Pick your meat,
              we put it on the fire. Braai platters, kasi classics, cold drinks and live DJs every weekend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button size="lg" className="h-12 bg-foreground text-white hover:bg-foreground/85" asChild>
                <Link to="/menu">Order Now</Link>
              </Button>
              <VisitButtons />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {[
                { value: "Fire", label: "Grilled to order" },
                { value: "Meat", label: "& Shisanyama" },
                { value: "Live", label: "DJs on weekends" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-heading font-bold text-2xl md:text-3xl text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: food photo with the logo as a badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[520px]"
            >
              <div className="absolute -inset-3 rounded-[1.75rem] border-2 border-primary/25 rotate-2" aria-hidden="true" />
              <img
                src={PHOTOS.mixedGrill}
                alt="A mixed grill platter from The Butcher"
                className="relative w-full rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]"
              />
              <img
                src={BRAND.logo}
                alt=""
                className="absolute -bottom-8 -left-4 md:-left-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white border-4 border-white shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
