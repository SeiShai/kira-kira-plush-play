import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import GachaMechanics from "@/components/GachaMechanics";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <GachaMechanics />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
