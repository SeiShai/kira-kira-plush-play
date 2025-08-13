import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import cartoonCategory from "@/assets/cartoon-category.jpg";
import animeCategory from "@/assets/anime-category.jpg";
import filmCategory from "@/assets/film-category.jpg";

const Categories = () => {
  const categories = [
    {
      name: "Cartoon Plush",
      description: "Adorable fantasy creatures from otherworldly adventures",
      image: cartoonCategory,
      subcategories: ["Outerworld Plushies", "Fantasy Plushies", "Underwater Plushies"],
      gradient: "from-kawaii-blue to-kawaii-purple",
      textColor: "text-kawaii-blue"
    },
    {
      name: "Anime Plush", 
      description: "Epic heroes and magical friends from your favorite stories",
      image: animeCategory,
      subcategories: ["Shonen Heroes", "Magical Girls & Friends", "Mystics & Legends"],
      gradient: "from-kawaii-pink to-kawaii-yellow",
      textColor: "text-kawaii-pink"
    },
    {
      name: "Live Action Film Plush",
      description: "Mysterious characters from thrilling cinematic adventures",
      image: filmCategory,
      subcategories: ["Mystery & Supernatural", "Historical Drama", "Teen Adventure"],
      gradient: "from-kawaii-purple to-kawaii-green",
      textColor: "text-kawaii-purple"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-kawaii-yellow animate-sparkle" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-kawaii bg-clip-text text-transparent">
              Explore Collections
            </h2>
            <Sparkles className="h-8 w-8 text-kawaii-pink animate-sparkle" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into magical worlds filled with adorable companions waiting to become part of your story
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-kawaii hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Category Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className={`text-2xl font-bold ${category.textColor} mb-3 group-hover:animate-bounce-gentle`}>
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Subcategories */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-foreground/70 mb-2">Featured Collections:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub) => (
                      <span 
                        key={sub}
                        className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="kawaii" 
                  className="w-full group/btn"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>

              {/* Floating Sparkles */}
              <div className="absolute top-4 right-4 text-xl animate-sparkle opacity-70">
                {index === 0 ? "✨" : index === 1 ? "🌟" : "💫"}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="sparkle" size="lg">
            <Sparkles className="mr-2 h-5 w-5" />
            View All Collections
            <Sparkles className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;