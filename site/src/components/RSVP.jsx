import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './RSVP.css';

const RSVP = () => {
    const sectionRef = useRevealOnScroll();

    return (
        <section className="section rsvp" id="rsvp" ref={sectionRef}>
            <div className="container rsvp-container">
                <div className="rsvp-header reveal reveal-up">
                    <h2 className="section-title">Confirme sua Presença</h2>
                    <hr className="section-divider" />
                    <p>Ficaremos muito felizes em contar com você nesse dia tão especial.</p>
                </div>

                <div className="rsvp-actions reveal reveal-up reveal-delay-2 text-center">
                    <a 
                        href="https://noivos.casar.com/paulaeleonardo-casamento#/rsvp" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary rsvp-btn"
                    >
                        Confirmar Presença
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RSVP;
