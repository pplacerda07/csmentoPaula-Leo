import React from 'react';
import { Link } from 'react-router-dom';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import './Gallery.css';

const Gallery = () => {
    const sectionRef = useRevealOnScroll();

    const photos = [
        { id: 1, src: '/gallery/wedding-1.jpeg', alt: 'Momento 1' },
        { id: 'pl-1', src: '/gallery/paula_leofotos/0E3A0965 (1).JPG', alt: 'Paula & Leo' },
        { id: 2, src: '/gallery/wedding-2.jpeg', alt: 'Momento 2' },
        { id: 'pl-2', src: '/gallery/paula_leofotos/7F3A1373.JPG', alt: 'Paula & Leo' },
        { id: 4, src: '/gallery/wedding-4.jpeg', alt: 'Momento 4' },
        { id: 'pl-3', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_160.jpg', alt: 'Paula & Leo' },
        { id: 6, src: '/gallery/wedding-6.jpeg', alt: 'Momento 6' },
        { id: 'pl-4', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_303.jpg', alt: 'Paula & Leo' },
        { id: 8, src: '/gallery/wedding-8.jpeg', alt: 'Momento 8' },
        { id: 'pl-5', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_363.jpg', alt: 'Paula & Leo' },
        { id: 10, src: '/gallery/wedding-10.jpeg', alt: 'Momento 10' },
        { id: 'pl-6', src: '/gallery/paula_leofotos/7F3A1748.JPG', alt: 'Paula & Leo' },
        { id: 11, src: '/gallery/wedding-11.jpeg', alt: 'Momento 11' },
        { id: 'pl-7', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_435.jpg', alt: 'Paula & Leo' },
        { id: 12, src: '/gallery/wedding-12.jpeg', alt: 'Momento 12' },
        { id: 'pl-8', src: '/gallery/paula_leofotos/0E3A2961.JPG', alt: 'Paula & Leo' },
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
