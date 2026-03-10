import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="abertura">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h2 className="hero-pre-title animate-fade-in">Celebre Conosco</h2>
                <h1 className="hero-title animate-fade-in delay-100">Paula & Leo</h1>
                <p className="hero-date animate-fade-in delay-200">Em Breve • Fazenda Borges</p>

                <div className="hero-actions animate-fade-in delay-300">
                    <a href="#rsvp" className="btn btn-primary">Confirme sua Presença</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
