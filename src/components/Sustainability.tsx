import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Heart, Award, TreePine, Sparkles } from "lucide-react";

const Sustainability = () => {
  const commitments = [
    {
      icon: Recycle,
      title: "100% Recyclable Materials",
      description: "All our plushies are made from carefully selected recyclable fabrics and stuffing materials that don't compromise on softness or durability.",
      stat: "100%"
    },
    {
      icon: TreePine,
      title: "Carbon-Neutral Shipping",
      description: "Every shipment is carbon-neutral through our partnership with eco-friendly logistics providers and tree-planting initiatives.",
      stat: "0g CO₂"
    },
    {
      icon: Award,
      title: "Ethical Manufacturing",
      description: "We work exclusively with certified fair-trade manufacturers who prioritize worker welfare and sustainable production practices.",
      stat: "Fair Trade"
    },
    {
      icon: Heart,
      title: "Give Back Program",
      description: "For every 10 purchases, we donate a plushie to children's charities and support environmental conservation projects.",
      stat: "10% Donated"
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-kawaii-green/10 to-kawaii-blue/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-8 w-8 text-kawaii-green animate-bounce-gentle" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sustainable <span className="bg-gradient-to-r from-kawaii-green to-kawaii-blue bg-clip-text text-transparent">Cuteness</span>
            </h2>
            <Leaf className="h-8 w-8 text-kawaii-blue animate-bounce-gentle" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Kira Kira, we believe that caring for our planet is just as important as creating adorable companions. 
            Every plushie is a step towards a more sustainable and compassionate world.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {commitments.map((commitment, index) => (
            <div 
              key={commitment.title}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-kawaii transition-all duration-300 hover:scale-105 border border-kawaii-green/20 hover:border-kawaii-green/40"
            >
              {/* Icon and Stat */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-kawaii-green/10 group-hover:bg-kawaii-green/20 transition-all duration-300">
                  <commitment.icon className="h-6 w-6 text-kawaii-green group-hover:animate-bounce-gentle" />
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-kawaii-green">{commitment.stat}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-kawaii-green transition-colors">
                {commitment.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 mb-16 shadow-kawaii">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Our <span className="text-kawaii-green">Environmental Impact</span> So Far
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-kawaii-green mb-2 animate-pulse-kawaii">2.5k</div>
              <div className="text-sm text-muted-foreground">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-kawaii-blue mb-2 animate-pulse-kawaii">500+</div>
              <div className="text-sm text-muted-foreground">Plushies Donated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-kawaii-purple mb-2 animate-pulse-kawaii">15t</div>
              <div className="text-sm text-muted-foreground">CO₂ Offset</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-kawaii-pink mb-2 animate-pulse-kawaii">98%</div>
              <div className="text-sm text-muted-foreground">Waste Reduced</div>
            </div>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">Certified By</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            <div className="bg-card rounded-lg p-4 shadow-soft border border-border">
              <div className="text-2xl font-bold text-kawaii-green">🌱</div>
              <div className="text-xs text-muted-foreground mt-1">Eco Certified</div>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-soft border border-border">
              <div className="text-2xl font-bold text-kawaii-blue">♻️</div>
              <div className="text-xs text-muted-foreground mt-1">Recycled Materials</div>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-soft border border-border">
              <div className="text-2xl font-bold text-kawaii-purple">🤝</div>
              <div className="text-xs text-muted-foreground mt-1">Fair Trade</div>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-soft border border-border">
              <div className="text-2xl font-bold text-kawaii-pink">💚</div>
              <div className="text-xs text-muted-foreground mt-1">Carbon Neutral</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-kawaii-green/20 to-kawaii-blue/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Our <span className="text-kawaii-green">Green</span> Mission
            </h3>
            <p className="text-muted-foreground mb-6">
              Every purchase helps us plant more trees, support communities, and create a more sustainable future for all plush toy lovers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="kawaii" size="lg" className="bg-gradient-to-r from-kawaii-green to-kawaii-blue">
                <Leaf className="mr-2 h-5 w-5" />
                Shop Sustainable
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-kawaii-green text-kawaii-green hover:bg-kawaii-green hover:text-white">
                Learn More About Our Mission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;