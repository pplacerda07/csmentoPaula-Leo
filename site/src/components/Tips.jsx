import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Scissors } from 'lucide-react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Tips.css';

const Tips = () => {
    const sectionRef = useRevealOnScroll();

    return (
        <section className="section tips" id="dicas" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title text-center reveal reveal-up">Dicas para Convidados</h2>
                <hr className="section-divider reveal reveal-up reveal-delay-1" />
                
                <div className="tips-grid">
                    <div className="tip-card reveal reveal-up reveal-delay-1">
                        <Hotel size={40} className="tip-icon" />
                        <h3>Hospedagem</h3>
                        <p>Preparamos uma lista de hotéis e pousadas na região para o seu conforto.</p>
                        <Link to="/hoteis" className="btn btn-outline">Ver Hotéis</Link>
                    </div>

                    <div className="tip-card reveal reveal-up reveal-delay-2">
                        <Scissors size={40} className="tip-icon" />
                        <h3>Beleza</h3>
                        <p>Sugestões de profissionais de cabelo e maquiagem na cidade e região.</p>
                        <Link to="/beleza" className="btn btn-outline">Ver Indicações</Link>
                    </div>
                </div>

                <div className="special-tip reveal reveal-scale reveal-delay-3">
                    <div className="special-tip-content">
                        <span className="train-emoji">🚂</span>
                        <p>
                            <strong>Dica especial:</strong> O Trem de Passageiros da Vale passa pela região do casamento e pode ser um passeio lindo pelo interior de Minas. Uma forma diferente e especial de incluir na viagem para o nosso grande dia. 🚂
                        </p>
                        <div className="special-tip-actions">
                            <a href="https://vale.com/pt/trem-de-passageiros" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Saiba mais e veja horários
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tips;
