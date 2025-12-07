import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);

    useEffect(() => {
        // Функція для ініціалізації карти
        const initMap = () => {
            if (!mapRef.current || mapInstance.current) return;

            // Динамичний імпорт Leaflet
            import('leaflet').then((L) => {
                const officeLocation = [46.428838, 30.712592];
                
                // Ініціалізація карти
                mapInstance.current = L.map(mapRef.current, {
                    center: officeLocation,
                    zoom: 17,
                    scrollWheelZoom: false,
                    attributionControl: false
                });

                // Додаємо тайли
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(mapInstance.current);

                // Додаємо маркер
                const icon = L.icon({
                    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    shadowSize: [41, 41]
                });

                L.marker(officeLocation, { icon })
                    .addTo(mapInstance.current)
                    .bindPopup('<b>INSURANCE RR</b><br>вул. Космонавтів, 17, Одеса')
                    .openPopup();

                // Оновлюємо розмір карти після завантаження
                setTimeout(() => {
                    mapInstance.current.invalidateSize();
                }, 100);
            }).catch(error => {
                console.error('Помилка завантаження Leaflet:', error);
            });
        };

        // Ініціалізуємо карту
        initMap();

        // Очищення при розмонтуванні компонента
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    // Додатковий ефект для перерахунку розміру карти при зміні розміру вікна
    useEffect(() => {
        const handleResize = () => {
            if (mapInstance.current) {
                setTimeout(() => {
                    mapInstance.current.invalidateSize();
                }, 150);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const copyPhoneNumber = (phone) => {
        navigator.clipboard.writeText(phone)
            .then(() => {
                console.log('Номер скопійовано:', phone);
                // Можна додати сповіщення для користувача
            })
            .catch(err => {
                console.error('Помилка копіювання:', err);
                // Fallback для старих браузерів
                const textArea = document.createElement('textarea');
                textArea.value = phone;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            });
    };

    return (
        <section id="contact" className="contact" role="region" aria-labelledby="contact-title">
            <div className="container">
                <div className="section-title">
                    <h2 id="contact-title">Контакти</h2>
                </div>
                
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Наша адреса</h3>
                        <p>
                            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            м. Одеса, вул. Космонавтів, 17 (офіс страхування з фасада)
                        </p>
                        
                        <div className="contact-methods">
                            <h3>Телефони</h3>
                            <div className="phone-copy-container">
                                <div className="phone-copy-item">
                                    <span className="phone-number">
                                        <i className="fas fa-phone" aria-hidden="true"></i>
                                        +38 (097) 483-78-88
                                    </span>
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyPhoneNumber('+380974837888')}
                                        aria-label="Копіювати номер телефону +38 (097) 483-78-88"
                                    >
                                        <i className="far fa-copy" aria-hidden="true"></i>
                                        Копіювати
                                    </button>
                                </div>
                                
                                <div className="phone-copy-item">
                                    <span className="phone-number">
                                        <i className="fas fa-phone" aria-hidden="true"></i>
                                        +38 (099) 196-58-88
                                    </span>
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyPhoneNumber('+380991965888')}
                                        aria-label="Копіювати номер телефону +38 (099) 196-58-88"
                                    >
                                        <i className="far fa-copy" aria-hidden="true"></i>
                                        Копіювати
                                    </button>
                                </div>
                            </div>
                            
                            <h3>Месенджери</h3>
                            <div className="messenger-links">
                                <a 
                                    href="viber://chat?number=+380974837888"
                                    aria-label="Написати у Viber"
                                    className="messenger-link"
                                >
                                    <i className="fab fa-viber" aria-hidden="true"></i>
                                    Viber
                                </a>
                                <a 
                                    href="https://wa.me/380974837888"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Написати у WhatsApp"
                                    className="messenger-link"
                                >
                                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                                    WhatsApp
                                </a>
                                <a 
                                    href="https://t.me/insurancerr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Написати у Telegram"
                                    className="messenger-link"
                                >
                                    <i className="fab fa-telegram" aria-hidden="true"></i>
                                    Telegram
                                </a>
                            </div>
                        </div>
                        
                        <a 
                            href="https://invite.viber.com/?g2=AQBEUtIBpF3fy092FJdOqnlFDUvTNEwXy2VUxUCbGBF06To87HD13rvW3Kr8GeOP"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="community-btn"
                            aria-label="Приєднатися до спільноти у Viber"
                        >
                            <i className="fab fa-viber" aria-hidden="true"></i>
                            Стати частиною спільноти
                        </a>
                    </div>
                    
                    <div className="map-container">
                        <div 
                            ref={mapRef}
                            id="map" 
                            style={{ 
                                width: '100%', 
                                height: '300px', 
                                borderRadius: '10px',
                                backgroundColor: '#f0f0f0' // Фон на час завантаження
                            }}
                            aria-label="Карта розташування офісу INSURANCE RR за адресою вул. Космонавтів, 17, Одеса"
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#666',
                                fontSize: '14px'
                            }}>
                                Завантаження карти...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;