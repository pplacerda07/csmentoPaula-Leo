import React, { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Registry.css';

const Registry = () => {
    const sectionRef = useRevealOnScroll();
    const [copied, setCopied] = useState(false);

    const handleCopyPix = () => {
        navigator.clipboard.writeText('11559839635').then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

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
                        Se quiser nos presentear, deixamos abaixo nossa lista de presentes ou a opção de PIX.
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
                    <div className="pix-info reveal reveal-scale reveal-delay-3">
                        <p className="pix-label">PIX CPF</p>
                        <p className="pix-value">115.598.396.35</p>
                        <p className="pix-name">Leonardo Prandini Bicalho</p>
                        <button className="pix-copy-btn" onClick={handleCopyPix}>
                            {copied ? <Check size={16} /> : <Copy size={16} />}
                            {copied ? 'Copiado!' : 'Copiar PIX'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registry;
