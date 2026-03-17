import React from 'react';
import { Gift } from 'lucide-react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Registry.css';

const Registry = () => {
    const sectionRef = useRevealOnScroll();

    return (
        <section className="section registry" id="presentes" ref={sectionRef}>
            <div className="container text-center">
                <div className="registry-header reveal reveal-up">
                    <h2 className="section-title">Lista de Presentes</h2>
                    <Gift size={48} className="registry-icon" />
                </div>
                <div className="registry-content reveal reveal-up reveal-delay-2">
                    <p className="registry-text">
                        O maior presente para nós é ter você celebrando esse momento ao nosso lado.
                        Se quiser nos presentear, deixamos abaixo nossa lista de presentes.
                    </p>
                    <div className="registry-actions">
                        <a 
                            href="https://noivos.casar.com/paulaeleonardo-casamento#/presentes" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary"
                        >
                            LISTA PRESENTES
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registry;
