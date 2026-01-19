import { motion } from "framer-motion";
import { MapPin, Train, Plane, Car } from "lucide-react";

const Location = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-light text-emerald-rich text-sm font-medium mb-4">
              Strategic Location
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Cherpulassery, <span className="text-emerald-rich">Palakkad</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Strategically positioned at the gateway of Kerala, our campus enjoys 
              excellent connectivity while serving a vast underserved population 
              with limited access to quality healthcare.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Train, text: "2 km from Cherpulassery Railway Station" },
                { icon: Plane, text: "65 km from Calicut International Airport" },
                { icon: Car, text: "On NH-966, connecting Palakkad-Malappuram" },
                { icon: MapPin, text: "Serves 2M+ population catchment" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="p-2.5 bg-gold-pale rounded-lg">
                    <item.icon className="w-5 h-5 text-gold-rich" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-emerald-pale rounded-xl">
              <h4 className="font-serif font-semibold text-foreground mb-2">
                Why This Location?
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The Palakkad region lacks comprehensive healthcare infrastructure 
                despite growing population and economic activity. Canyo Health will 
                be the first integrated health township in Kerala, filling a 
                critical gap in the healthcare landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-large">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31294.69!2d76.28!3d10.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d3f03c4f7c3d%3A0x1!2sCherpulassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative overlay */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-warm/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-light rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
