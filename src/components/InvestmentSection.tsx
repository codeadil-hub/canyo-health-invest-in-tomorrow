import { motion } from "framer-motion";
import { TrendingUp, Shield, Leaf, MapPin, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: TrendingUp,
    title: "High Growth Region",
    description:
      "Palakkad is one of Kerala's fastest-growing districts with excellent road and rail connectivity to major cities.",
  },
  {
    icon: Shield,
    title: "Proven Team",
    description:
      "Led by experienced healthcare professionals and real estate developers with a track record of successful projects.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Design",
    description:
      "Sustainable architecture with green building certifications, solar power, and rainwater harvesting systems.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description:
      "Located in Cherpulassery, serving 2M+ population catchment with no comparable healthcare facility nearby.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Creating 2,000+ direct jobs and training the next generation of healthcare professionals for Kerala.",
  },
  {
    icon: Building,
    title: "Phased Development",
    description:
      "Multi-phase rollout minimizes risk while maximizing returns as each component becomes operational.",
  },
];

const InvestmentSection = () => {
  return (
    <section className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-warm/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-warm/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-warm/20 text-gold-light text-sm font-medium mb-4">
            Investment Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Why Invest in <span className="text-gradient-gold">Canyo Health</span>
          </h2>
          <p className="text-emerald-light/80 max-w-2xl mx-auto text-lg">
            A rare opportunity to be part of Kerala's healthcare transformation 
            with strong fundamentals and significant social impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-emerald-rich/50 border border-gold-warm/20 hover:border-gold-warm/40 transition-all duration-300"
            >
              <div className="p-3 bg-gold-warm/20 rounded-xl w-fit mb-4 group-hover:bg-gold-warm/30 transition-colors">
                <item.icon className="w-6 h-6 text-gold-warm" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-emerald-light/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Investment metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 shadow-large"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Join Us as a Strategic Partner
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're seeking visionary investors who share our commitment to 
                transforming healthcare in Kerala. Multiple investment tiers 
                available with attractive returns and meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" size="lg">
                  Schedule a Meeting
                </Button>
                <Button variant="premiumOutline" size="lg">
                  Get Investment Deck
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "Phase 1", label: "Currently Fundraising" },
                { value: "2026", label: "Construction Start" },
                { value: "2029", label: "Hospital Operations" },
                { value: "18%+", label: "Projected IRR" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-emerald-pale text-center"
                >
                  <div className="text-xl md:text-2xl font-serif font-bold text-emerald-rich">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
