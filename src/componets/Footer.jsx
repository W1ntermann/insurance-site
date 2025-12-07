import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer role="contentinfo">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>INSURANCE RR</h3>
                        <p>Надійний партнер у світі страхування. Працюємо для вас понад 20 років.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Наші послуги</h3>
                        <a href="#services">Автострахування</a>
                        <a href="#services">Зелена картка</a>
                        <a href="#services">Туристичне страхування</a>
                        <a href="#services">Страхування іноземців</a>
                    </div>
                    <div className="footer-column">
                        <h3>Контакти</h3>
                        <p>м. Одеса, вул. Космонавтів, 17</p>
                        <p>+38 (097) 483-78-88</p>
                        <p>+38 (099) 196-58-88</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2024–{currentYear} INSURANCE RR. Всі права захищені.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;