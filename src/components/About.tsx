const About = () => {
  return (
    <section id="about" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Про нашу компанію</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Ми працюємо на ринку страхування понад{" "}
            <strong className="text-primary font-semibold">20 років</strong>. 
            Наша головна мета — надавати клієнтам експертні консультації та підбирати 
            індивідуальні страхові рішення, які ідеально відповідають їхнім потребам та бюджету.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Ми беремо на себе супровід та врегулювання навіть найскладніших ситуацій, 
            забезпечуючи нашим клієнтам спокій та впевненість у завтрашньому дні.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
