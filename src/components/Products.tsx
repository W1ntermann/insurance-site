import { Car, Globe, Shield, Umbrella, Plane, Users } from "lucide-react";

const products = [
  {
    icon: Car,
    title: "Автострахування (ОСЦПВ)",
    description: "Обов'язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів.",
  },
  {
    icon: Globe,
    title: "Зелена картка",
    description: "Міжнародний поліс страхування цивільно-правової відповідальності власників транспортних засобів.",
  },
  {
    icon: Shield,
    title: "КАСКО",
    description: "Добровільне комплексне страхування автомобіля від пошкодження, крадіжки та інших ризиків.",
  },
  {
    icon: Umbrella,
    title: "Міні КАСКО",
    description: "Спрощена та доступна версія автомобільного страхування від конкретних ризиків.",
  },
  {
    icon: Plane,
    title: "Туристичне страхування",
    description: "Надійний захист для подорожей за кордон, що покриває медичні витрати та інші непередбачені обставини.",
  },
  {
    icon: Users,
    title: "Страхування іноземців",
    description: "Обов'язкове страхування для отримання візи для іноземних громадян, які відвідують Україну.",
  },
];

const Products = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Наші страхові продукти</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
