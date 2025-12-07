import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "name": "INSURANCE RR",
        "description": "Страхова компанія в Одесі. Автострахування, Зелена картка, КАСКО, туристичне страхування.",
        "url": "https://www.insurancerr.space/",
        "logo": "https://www.insurancerr.space/logo-r-r-r.png",
        "telephone": ["+380974837888", "+380991965888"],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "вул. Космонавтів, 17",
            "addressLocality": "Одеса",
            "addressCountry": "UA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 46.428838,
            "longitude": 30.712592
        },
        "openingHours": "Mo-Fr 09:00-18:00,Sa 10:00-15:00",
        "serviceArea": { "@type": "City", "name": "Одеса" }
    };

    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Які види страхування надає INSURANCE RR?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ми надаємо повний спектр страхових послуг: автострахування (ОСЦПВ), Зелена картка, КАСКО, Міні КАСКО, туристичне страхування та страхування іноземців для візи."
                }
            },
            {
                "@type": "Question",
                "name": "Де знаходиться офіс INSURANCE RR?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Наш офіс розташований в Одесі на вулиці Космонавтів, 17 (офіс страхування з фасада). Працюємо понеділок-п'ятниця 09:00-18:00, субота 10:00-15:00."
                }
            }
        ]
    };

    return (
        <Helmet>
            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqData)}
            </script>
            
            {/* Business Meta */}
            <meta name="business:contact_data:street_address" content="вул. Космонавтів, 17" />
            <meta name="business:contact_data:locality" content="Одеса" />
            <meta name="business:contact_data:country_name" content="Україна" />
            <meta name="business:contact_data:phone_number" content="+380974837888" />
            <meta name="geo.region" content="UA-OD" />
            <meta name="geo.placename" content="Одеса" />
            <meta name="geo.position" content="46.428838;30.712592" />
            <meta name="ICBM" content="46.428838, 30.712592" />
        </Helmet>
    );
};

export default SEO;