import React, { useState } from 'react';

const Header = ({ searchQuery, setSearchQuery, scrollToSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'Про нас', section: 'about' },
        { label: 'Послуги', section: 'services' },
        { label: 'Партнери', section: 'partners' },
        { label: 'Контакти', section: 'contact' }
    ];

    return (
        <header role="banner">
            <div className="container header-container">
                <div className="logo">
                    <span className="logo-img">
                        <img src="/logo-r-r-r.png" alt="INSURANCE RR GROUP Logo" width="38" height="38" />
                    </span>
                    <span className="logo-text">INSURANCE RR </span>
                </div>

                <button 
                    className={`burger ${menuOpen ? 'active' : ''}`} 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Пошук послуг..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        aria-label="Пошук по сайту"
                    />
                    <i className="fas fa-search search-icon" aria-hidden="true"></i>
                </div>

                <nav role="navigation" aria-label="Основна навігація">
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.section}>
                                <a 
                                    href={`#${item.section}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.section);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;