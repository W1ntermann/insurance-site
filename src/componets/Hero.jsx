import React from 'react';

const Hero = ({ scrollToSection }) => {
    return (
        <section className="hero" role="banner" aria-labelledby="hero-title">
            <div className="container hero-content">
                <h1 id="hero-title">Страхування з <span>експертом</span></h1>
                <p>20 років досвіду роботи на ринку. Підберемо оптимальний страховой продукт для вас.</p>
                <button 
                    className="btn" 
                    onClick={() => scrollToSection('contact')}
                    role="button"
                >
                    Отримати консультацію
                </button>
            </div>
        </section>
    );
};

export default Hero;