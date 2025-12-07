import React from 'react';

const About = () => {
    return (
        <section id="about" className="about" role="region" aria-labelledby="about-title">
            <div className="container">
                <div className="section-title">
                    <h2 id="about-title">Про нашу компанію</h2>
                </div>
                <div className="about-content">
                    <p>Ми працюємо на ринку страхування понад <span className="highlight">20 років</span>. Наша головна мета — надавати клієнтам експертні консультації та підбирати індивідуальні страхові рішення, які ідеально відповідають їхнім потребам та бюджету.</p>
                    <p>Ми беремо на себе супровід та врегулювання навіть найскладніших ситуацій, забезпечуючи нашим клієнтам спокій та впевненість у завтрашньому дні.</p>
                </div>
            </div>
        </section>
    );
};

export default About;