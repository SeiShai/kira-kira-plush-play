import { Heart, Mail, Instagram, Twitter, Facebook, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    shop: [
      { name: "All Collections", href: "#" },
      { name: "Cartoon Plush", href: "#" },
      { name: "Anime Plush", href: "#" },
      { name: "Film Plush", href: "#" },
      { name: "Gacha Boxes", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "Contact Us", href: "#" }
    ],
    company: [
      { name: "About Kira Kira", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-kawaii py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay in the <span className="animate-sparkle">✨</span> Loop!
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Get the latest news about new plushie drops, exclusive gacha boxes, and special sustainability initiatives!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-foreground bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Join 10,000+ collectors who never miss a kawaii moment!
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ✨ Kira Kira
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Where comfort meets creativity! Discover sustainable, adorable plushies through our magical gacha experience.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-kawaii-pink">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-kawaii-blue">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-kawaii-purple">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-kawaii-pink transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-kawaii-blue transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-kawaii-green transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-kawaii-purple transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-kawaii-green">🌱</span>
              <span>100% Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-kawaii-blue">♻️</span>
              <span>Recyclable Materials</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-kawaii-purple">🤝</span>
              <span>Fair Trade Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-kawaii-pink">💚</span>
              <span>Carbon Neutral Shipping</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Kira Kira. Made with <Heart className="inline h-4 w-4 text-kawaii-pink mx-1" /> for plushie lovers everywhere.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Powered by sustainable magic</span>
            <Sparkles className="h-4 w-4 text-kawaii-yellow animate-sparkle" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;