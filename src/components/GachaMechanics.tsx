import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Star, Heart, Shuffle } from "lucide-react";
import { useState } from "react";

const GachaMechanics = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleGachaSpin = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 2000);
  };

  const features = [
    {
      icon: Gift,
      title: "Mystery Boxes",
      description: "Each purchase is a delightful surprise! Choose your category and let fate decide your new companion.",
      color: "text-kawaii-pink"
    },
    {
      icon: Star,
      title: "Rarity System", 
      description: "Discover Common, Rare, Epic, and Legendary plushies. The rarer, the more magical!",
      color: "text-kawaii-yellow"
    },
    {
      icon: Heart,
      title: "Collection Progress",
      description: "Track your collection, complete sets, and unlock special rewards as you grow your plush family.",
      color: "text-kawaii-purple"
    },
    {
      icon: Shuffle,
      title: "Trading System",
      description: "Connect with fellow collectors and trade duplicates to complete your dream collection.",
      color: "text-kawaii-blue"
    }
  ];

  return (
    <section id="gacha" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="h-8 w-8 text-kawaii-pink animate-bounce-gentle" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-sparkle bg-clip-text text-transparent">
              Gacha Magic
            </h2>
            <Gift className="h-8 w-8 text-kawaii-blue animate-bounce-gentle" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform shopping into an adventure! Every purchase brings the excitement of discovery and the joy of surprise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Gacha Demo */}
          <div className="relative">
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-kawaii">
              <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
                Try Our Gacha Experience!
              </h3>
              
              {/* Gacha Capsule */}
              <div className="relative mx-auto w-64 h-64 mb-8">
                <div className={`w-full h-full rounded-full bg-gradient-sparkle shadow-glow flex items-center justify-center text-6xl transform transition-transform duration-1000 ${isSpinning ? 'animate-spin scale-110' : 'animate-pulse-kawaii'}`}>
                  {isSpinning ? "🎲" : "🎁"}
                </div>
                
                {/* Floating Sparkles around capsule */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-8 left-8 text-2xl text-kawaii-yellow animate-sparkle">✨</div>
                  <div className="absolute top-12 right-8 text-xl text-kawaii-pink animate-float">💖</div>
                  <div className="absolute bottom-12 left-12 text-lg text-kawaii-blue animate-bounce-gentle">⭐</div>
                  <div className="absolute bottom-8 right-12 text-xl text-kawaii-purple animate-sparkle">🌟</div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleGachaSpin}
                  disabled={isSpinning}
                  className="group w-full max-w-xs"
                >
                  {isSpinning ? (
                    <>
                      <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                      Revealing Magic...
                    </>
                  ) : (
                    <>
                      <Gift className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                      Spin the Gacha!
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  {isSpinning ? "🎉 Something amazing is coming!" : "Click to experience the magic of surprise!"}
                </p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group flex items-start gap-4 bg-card/40 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-kawaii transition-all duration-300 hover:scale-105"
              >
                <div className={`p-3 rounded-full bg-background shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color} group-hover:animate-bounce-gentle`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto shadow-kawaii">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-kawaii bg-clip-text text-transparent">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of collectors who have discovered the joy of surprise shopping with sustainable, adorable companions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="sparkle" size="lg">
                <Gift className="mr-2 h-5 w-5" />
                Get Your First Gacha Box
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More About Collecting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GachaMechanics;