import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Contact from "./componets/Contact";
import Partners from "./componets/Partners";
import Services from "./componets/Services";
import About from "./componets/About";
import Hero from "./componets/Hero";
import SEO from "./componets/SEO";

const App = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    // Пошукові дані
    const searchData = [
        { title: 'Автострахування (ОСЦПВ)', content: 'Обов\'язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів.', section: 'services' },
        { title: 'Зелена картка', content: 'Міжнародний поліс страхування цивільно-правової відповідальності власників транспортних засобів.', section: 'services' },
        { title: 'КАСКО', content: 'Добровільне комплексне страхування автомобіля від пошкодження, крадіжки та інших ризиків.', section: 'services' },
        { title: 'Міні КАСКО', content: 'Спрощена та доступна версія автомобільного страхування від конкретних ризиків.', section: 'services' },
        { title: 'Туристичне страхування', content: 'Надійний захист для подорожей за кордон, що покриває медичні витрати та інші непередбачені обставини.', section: 'services' },
        { title: 'Страхування іноземців', content: 'Обов\'язкове страхування для отримання візи для іноземних громадян, які відвідують Україну.', section: 'services' },
        { title: 'Про компанію', content: 'Ми працюємо на ринку страхування понад 20 років. Наша головна мета — надавати клієнтам експертні консультації.', section: 'about' },
        { title: 'Контакти', content: 'м. Одеса, вул. Космонавтів, 17. Телефони: +38 (097) 483-78-88, +38 (099) 196-58-88', section: 'contact' },
        { title: 'Партнери', content: 'Ми співпрацюємо з провідними страховими компаніями України: ТАС, КНЯЖА, УСГ, АРХ.', section: 'partners' }
    ];

    useEffect(() => {
        if (searchQuery.length >= 2) {
            const results = searchData.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.content.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
            setShowSearch(true);
        } else {
            setShowSearch(false);
        }
    }, [searchQuery]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setShowSearch(false);
            setSearchQuery('');
        }
    };

    const highlightText = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    };

    return (
        <HelmetProvider>
            <SEO />
            
            {/* Пошуковий оверлей */}
            {showSearch && (
                <div className="search-overlay" onClick={() => setShowSearch(false)}>
                    <div className="search-results-container" onClick={(e) => e.stopPropagation()}>
                        <div className="search-results">
                            {searchResults.length === 0 ? (
                                <div className="search-no-results">
                                    Нічого не знайдено для "{searchQuery}"
                                </div>
                            ) : (
                                searchResults.map((item, index) => (
                                    <div
                                        key={index}
                                        className="search-result-item"
                                        onClick={() => scrollToSection(item.section)}
                                    >
                                        <h4 dangerouslySetInnerHTML={{ __html: highlightText(item.title, searchQuery) }} />
                                        <p dangerouslySetInnerHTML={{ __html: highlightText(item.content, searchQuery) }} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Header 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                scrollToSection={scrollToSection}
            />
            <main>
                <Hero scrollToSection={scrollToSection} />
                <About />
                <Services />
                <Partners />
                <Contact />
            </main>
            <Footer />
        </HelmetProvider>
    );
};

export default App;