import { motion } from "framer-motion";
import { Building2, Users, GraduationCap, Home, TreePalm } from "lucide-react";
import hospitalImg from "@/assets/hospital.jpg";
import motherChildImg from "@/assets/mother-child.jpg";
import educationImg from "@/assets/education.jpg";
import retirementImg from "@/assets/retirement.jpg";

const components = [
  {
    icon: Building2,
    title: "Multi-Specialty Hospital",
    beds: "250 Beds",
    description:
      "State-of-the-art facility with oncology center, advanced diagnostics, and 24/7 emergency care serving the Palakkad region.",
    image: hospitalImg,
    features: ["Advanced Oncology", "Emergency Care", "Modern Diagnostics"],
  },
  {
    icon: Users,
    title: "Mother & Child Care",
    beds: "100 Beds",
    description:
      "Dedicated maternity and pediatric care with NICU, labor rooms, and comprehensive women's health services.",
    image: motherChildImg,
    features: ["NICU Facility", "Labor & Delivery", "Pediatric Care"],
  },
  {
    icon: GraduationCap,
    title: "Education Hub",
    beds: "1,100 Students",
    description:
      "Premier nursing college and paramedical training institutes creating skilled healthcare professionals.",
    image: educationImg,
    features: ["Nursing College", "Paramedical Training", "Research Center"],
  },
  {
    icon: Home,
    title: "Retirement Living",
    beds: "Premium Villas",
    description:
      "Luxury senior living with medical support, wellness programs, and a vibrant community lifestyle.",
    image: retirementImg,
    features: ["Medical Support", "Wellness Programs", "Community Living"],
  },
];

const ProjectComponents = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-light text-emerald-rich text-sm font-medium mb-4">
            The Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            An Integrated <span className="text-emerald-rich">Health Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Four interconnected pillars designed to serve healthcare, education, 
            and community needs under one visionary campus.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {components.map((component, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={component.image}
                  alt={component.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gold-warm rounded-xl">
                      <component.icon className="w-5 h-5 text-emerald-deep" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-primary-foreground">
                        {component.title}
                      </h3>
                      <span className="text-gold-light text-sm font-medium">
                        {component.beds}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {component.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {component.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-emerald-pale text-emerald-rich text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Infrastructure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 bg-emerald-pale rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <TreePalm className="w-6 h-6 text-emerald-rich" />
            <h3 className="text-xl font-serif font-semibold text-foreground">
              Supporting Infrastructure
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["Food Court & Cafeteria", "Residential Apartments", "Sports Complex", "Convention Center"].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-warm" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectComponents;
