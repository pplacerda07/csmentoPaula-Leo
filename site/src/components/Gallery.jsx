import React from 'react';
import { Link } from 'react-router-dom';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Gallery.css';

const Gallery = () => {
    const sectionRef = useRevealOnScroll();

    const photos = [
        { id: 1, src: '/gallery/wedding-1.jpeg', alt: 'Momento 1' },
        { id: 2, src: '/gallery/wedding-2.jpeg', alt: 'Momento 2' },
        { id: 3, src: '/gallery/wedding-3.jpeg', alt: 'Momento 3' },
        { id: 4, src: '/gallery/wedding-4.jpeg', alt: 'Momento 4' },
        { id: 5, src: '/gallery/wedding-5.jpeg', alt: 'Momento 5' },
        { id: 6, src: '/gallery/wedding-6.jpeg', alt: 'Momento 6' },
        { id: 7, src: '/gallery/wedding-7.jpeg', alt: 'Momento 7' },
        { id: 8, src: '/gallery/wedding-8.jpeg', alt: 'Momento 8' },
        { id: 9, src: '/gallery/wedding-9.jpeg', alt: 'Momento 9' },
        { id: 10, src: '/gallery/wedding-10.jpeg', alt: 'Momento 10' },
    ];

    return (
        <section className="gallery-carousel-section section" id="galeria" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center reveal reveal-up">
                    <h2 className="section-title">Galeria de Fotos</h2>
                    <hr className="section-divider" />
                    <p className="section-subtitle">Um pouco da nossa história em imagens</p>
                </div>
            </div>

            <div className="carousel-wrapper reveal reveal-scale reveal-delay-2">
                <div className="carousel-track">
                    {[...photos, ...photos].map((photo, index) => (
                        <div key={`${photo.id}-${index}`} className="carousel-slide">
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                className="carousel-image"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="carousel-cta reveal reveal-up reveal-delay-3">
                <Link to="/galeria" className="btn btn-primary">
                    Ver Todas as Fotos
                </Link>
            </div>
        </section>
    );
};

export default Gallery;
