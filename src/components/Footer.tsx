import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-deep text-emerald-light/80 py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gold-warm flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-emerald-deep">C</span>
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-primary-foreground">
                  Canyo
                </span>
                <span className="font-serif font-bold text-xl text-gold-warm">
                  {" "}Health
                </span>
              </div>
            </div>
            <p className="text-emerald-light/60 max-w-md leading-relaxed mb-6">
              Kerala's first integrated healthcare township, bringing world-class 
              medical facilities, education, and community living to Palakkad.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm hover:text-gold-warm transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About Project", "Investment", "Location", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gold-warm transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-primary-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gold-warm" />
                invest@canyohealth.com
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gold-warm" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gold-warm mt-0.5" />
                <span>Cherpulassery, Palakkad<br />Kerala, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-rich/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-emerald-light/50">
            © 2025 Canyo Health. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-emerald-light/50">
            <a href="#" className="hover:text-gold-warm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold-warm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
