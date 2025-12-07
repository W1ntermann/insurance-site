const partners = [
  { name: "ТАС", url: "https://www.insurancerr.space/tas.png" },
  { name: "КНЯЖА", url: "https://www.insurancerr.space/knyaga.png" },
  { name: "УСГ", url: "https://www.insurancerr.space/usg.jpeg" },
  { name: "АРХ", url: "https://www.insurancerr.space/ARX_Ukraine.jpg" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Наші партнери</h2>
        </div>
        
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ми співпрацюємо з провідними страховими компаніями України, щоб запропонувати вам найкращі умови.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={partner.url}
                alt={`${partner.name} - Страхова компанія партнер INSURANCE RR`}
                className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
