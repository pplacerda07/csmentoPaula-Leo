import React from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './OurStory.css';

const OurStory = () => {
    const sectionRef = useRevealOnScroll();

    return (
        <section className="section our-story" id="historia" ref={sectionRef}>
            <div className="container story-container">
                <div className="story-image reveal reveal-left">
                    <img 
                        src="/foto_comotudocomecou.jpeg" 
                        alt="Como tudo começou - Paula e Leonardo" 
                        className="story-img"
                    />
                </div>

                <div className="story-content reveal reveal-right reveal-delay-2">
                    <h3 className="section-subtitle">Nossa História</h3>
                    <h2 className="section-title">Como tudo começou</h2>
                    <hr className="section-divider" style={{ marginLeft: 0 }} />
                    <p>
                        Dois caminhos que se cruzaram e, a partir daquele momento, decidiram caminhar juntos para sempre.
                        Nossa história é feita de momentos inesquecíveis, risadas compartilhadas e um amor que cresce a cada dia.
                    </p>
                    <p>
                        Estamos muito felizes em compartilhar esse novo capítulo de nossas vidas com as pessoas que mais amamos.
                        Obrigado por fazerem parte da nossa jornada.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
