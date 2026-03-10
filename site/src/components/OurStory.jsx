import React from 'react';
import './OurStory.css';

const OurStory = () => {
    return (
        <section className="section our-story" id="historia">
            <div className="container story-container">
                <div className="story-image">
                    {/* We can place a nice placeholder or couple photo here */}
                    <div className="image-placeholder animate-fade-in">
                        <span className="image-text">Foto do Casal</span>
                    </div>
                </div>

                <div className="story-content animate-fade-in delay-200">
                    <h3 className="section-subtitle">Nossa História</h3>
                    <h2 className="section-title">Como tudo começou</h2>
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
