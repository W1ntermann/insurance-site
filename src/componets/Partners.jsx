import React from 'react';

const Partners = () => {
    const partners = [
        { name: 'ТАС', logo: '/tas.png', alt: 'ТАС - Страхова компанія партнер INSURANCE RR' },
        { name: 'КНЯЖА', logo: '/knyaga.png', alt: 'КНЯЖА - Страхова компанія партнер INSURANCE RR' },
        { name: 'УСГ', logo: '/usg.jpeg', alt: 'УСГ - Українська страхова група партнер INSURANCE RR' },
        { name: 'АРХ', logo: '/ARX_Ukraine.jpg', alt: 'АРХ - Страхова компанія партнер INSURANCE RR' }
    ];

    return (
        <section id="partners" className="partners" role="region" aria-labelledby="partners-title">
            <div className="container">
                <div className="section-title">
                    <h2 id="partners-title">Наші партнери</h2>
                </div>
                <p>Ми співпрацюємо з провідними страховими компаніями України, щоб запропонувати вам найкращі умови.</p>
                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div className="partner-item" key={index}>
                            <img 
                                src={partner.logo} 
                                alt={partner.alt} 
                                loading="lazy"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 100 60"><rect width="100" height="60" fill="#f0f0f0"/><text x="50" y="30" font-family="Arial" font-size="14" fill="#999" text-anchor="middle" dominant-baseline="middle">' + partner.name + '</text></svg>';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;