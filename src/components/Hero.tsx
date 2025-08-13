import { Button } from "@/components/ui/button";
import { Sparkles, Gift, Heart } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 text-kawaii-yellow text-2xl animate-sparkle">✨</div>
        <div className="absolute top-40 right-32 text-kawaii-pink text-xl animate-float">💖</div>
        <div className="absolute bottom-32 left-32 text-kawaii-blue text-lg animate-bounce-gentle">⭐</div>
        <div className="absolute top-60 left-1/2 text-kawaii-purple text-xl animate-sparkle">🌟</div>
        <div className="absolute bottom-20 right-20 text-kawaii-green text-lg animate-float">✨</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-black mb-4">
              <span className="bg-gradient-kawaii bg-clip-text text-transparent animate-pulse-kawaii">
                Kira Kira
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground">
              <Sparkles className="h-6 w-6 text-kawaii-yellow animate-sparkle" />
              <span className="font-medium">Where Comfort Meets Creativity</span>
              <Sparkles className="h-6 w-6 text-kawaii-pink animate-sparkle" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover a magical world of adorable plush toys with a twist! 
            Experience the thrill of <span className="text-primary font-semibold">Gacha mechanics</span> 
            while supporting <span className="text-kawaii-green font-semibold">sustainable practices</span>.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Gift className="h-5 w-5 text-kawaii-purple" />
              <span className="font-medium">Gacha Surprise</span>
            </div>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Heart className="h-5 w-5 text-kawaii-pink" />
              <span className="font-medium">Eco-Friendly Materials</span>
            </div>
            <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Sparkles className="h-5 w-5 text-kawaii-yellow" />
              <span className="font-medium">Collectible Characters</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              Start Your Collection
              <Sparkles className="ml-2 h-5 w-5 group-hover:animate-sparkle" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Try Gacha Box
              <Gift className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">45+</div>
              <div className="text-sm text-muted-foreground">Unique Plushies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-kawaii-pink mb-1">3</div>
              <div className="text-sm text-muted-foreground">Main Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-kawaii-blue mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Eco Materials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;