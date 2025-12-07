import React from 'react';

const Services = () => {
    const services = [
        {
            icon: 'fa-car',
            title: 'Автострахування (ОСЦПВ)',
            description: 'Обов\'язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів.'
        },
        {
            icon: 'fa-passport',
            title: 'Зелена картка',
            description: 'Міжнародний поліс страхування цивільно-правової відповідальності власників транспортних засобів.'
        },
        {
            icon: 'fa-car-crash',
            title: 'КАСКО',
            description: 'Добровільне комплексне страхування автомобіля від пошкодження, крадіжки та інших ризиків.'
        },
        {
            icon: 'fa-shield-alt',
            title: 'Міні КАСКО',
            description: 'Спрощена та доступна версія автомобільного страхування від конкретних ризиків.'
        },
        {
            icon: 'fa-plane',
            title: 'Туристичне страхування',
            description: 'Надійний захист для подорожей за кордон, що покриває медичні витрати та інші непередбачені обставини.'
        },
        {
            icon: 'fa-globe-europe',
            title: 'Страхування іноземців',
            description: 'Обов\'язкове страхування для отримання візи для іноземних громадян, які відвідують Україну.'
        }
    ];

    return (
        <section id="services" className="services" role="region" aria-labelledby="services-title">
            <div className="container">
                <div className="section-title">
                    <h2 id="services-title">Наші страхові продукти</h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index} itemScope itemType="https://schema.org/Service">
                            <div className="service-icon">
                                <i className={`fas ${service.icon}`} aria-hidden="true"></i>
                            </div>
                            <h3 itemProp="name">{service.title}</h3>
                            <p itemProp="description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;