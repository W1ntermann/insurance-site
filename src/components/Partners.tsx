import React from 'react';
import tasLogo from '../assets/tas.png';
import knyagaLogo from '../assets/knyaga.png';
import usgLogo from '../assets/usg.jpeg';
import arxLogo from '../assets/ARX_Ukraine.jpg';

const Partners = () => {
  const partners = [
    { 
      name: "ТАС", 
      logo: tasLogo,
      alt: "ТАС - Страхова компанія партнер INSURANCE RR",
      className: "tas-logo"
    },
    { 
      name: "КНЯЖА", 
      logo: knyagaLogo,
      alt: "КНЯЖА - Страхова компанія партнер INSURANCE RR",
      className: "knyaga-logo"
    },
    { 
      name: "УСГ", 
      logo: usgLogo,
      alt: "УСГ - Українська страхова група партнер INSURANCE RR",
      className: "usg-logo"
    },
    { 
      name: "АРХ", 
      logo: arxLogo,
      alt: "АРХ - Страхова компанія партнер INSURANCE RR",
      className: "arx-logo"
    },
  ];

  return (
    <section id="partners" className="partners" role="region" aria-labelledby="partners-title">
      <div className="container">
        <div className="section-title">
          <h2 id="partners-title">Наші партнери</h2>
        </div>
        
        <p className="partners-description">
          Ми співпрацюємо з провідними страховими компаніями України, щоб запропонувати вам найкращі умови.
        </p>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-item"
              title={partner.name}
            >
              <div className="logo-container">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  loading="lazy"
                  className={`partner-logo ${partner.className}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;