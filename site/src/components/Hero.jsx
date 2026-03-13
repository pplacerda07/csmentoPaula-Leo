import React from 'react';
import Countdown from './Countdown';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="abertura">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h2 className="hero-pre-title animate-fade-in delay-100">Celebre Conosco</h2>
                <h1 className="hero-title animate-fade-in delay-200">Paula & Leo</h1>
                <p className="hero-date animate-fade-in delay-300">19 de Setembro • 2026 • Fazenda Borges</p>

                <div className="hero-actions animate-fade-in delay-300">
                    <a href="#rsvp" className="btn btn-primary">Confirme sua Presença</a>
                </div>

                <div className="hero-countdown-wrapper animate-fade-in delay-400">
                    <Countdown />
                </div>
            </div>
        </section>
    );
};

export default Hero;
