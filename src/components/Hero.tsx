import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContacts = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in-up">
          Страхування з{" "}
          <span className="text-primary">експертом</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          20 років досвіду роботи на ринку. Підберемо оптимальний страховой продукт для вас.
        </p>
        <Button
          size="lg"
          onClick={scrollToContacts}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Отримати консультацію
        </Button>
      </div>
    </section>
  );
};

export default Hero;
