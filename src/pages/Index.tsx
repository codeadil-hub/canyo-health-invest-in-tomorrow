import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectComponents from "@/components/ProjectComponents";
import InvestmentSection from "@/components/InvestmentSection";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="vision">
        <ProjectComponents />
      </section>
      <section id="investment">
        <InvestmentSection />
      </section>
      <section id="location">
        <Location />
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
