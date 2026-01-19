import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Thank you! We'll contact you shortly.");
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-light text-emerald-rich text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Partner With <span className="text-emerald-rich">Canyo Health</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Interested in learning more about this investment opportunity? 
              Our team is ready to provide detailed information, arrange site 
              visits, and discuss partnership options.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "invest@canyohealth.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Office", value: "Kochi, Kerala, India" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-pale rounded-xl">
                    <item.icon className="w-5 h-5 text-emerald-rich" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-medium border border-border"
            >
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Request Investment Details
              </h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 00000 00000"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Organization (Optional)
                  </label>
                  <Input
                    type="text"
                    placeholder="Company or institution"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Investment Interest
                  </label>
                  <select
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>Select investment range</option>
                    <option>₹25 Lakhs - ₹1 Crore</option>
                    <option>₹1 Crore - ₹5 Crore</option>
                    <option>₹5 Crore - ₹25 Crore</option>
                    <option>₹25 Crore+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your investment goals..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="premium"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Request Sent
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
