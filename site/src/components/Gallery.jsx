import React from 'react';
import './Gallery.css';

const Gallery = () => {
    // Array of placeholder images
    const photos = [
        { id: 1, src: '/gallery/wedding-1.jpeg', alt: 'Moment 1' },
        { id: 2, src: '/gallery/wedding-2.jpeg', alt: 'Moment 2' },
        { id: 3, src: '/gallery/wedding-3.jpeg', alt: 'Moment 3' },
        { id: 4, src: '/gallery/wedding-4.jpeg', alt: 'Moment 4' },
        { id: 5, src: '/gallery/wedding-5.jpeg', alt: 'Moment 5' },
        { id: 6, src: '/gallery/wedding-6.jpeg', alt: 'Moment 6' },
        { id: 7, src: '/gallery/wedding-7.jpeg', alt: 'Moment 7' },
        { id: 8, src: '/gallery/wedding-8.jpeg', alt: 'Moment 8' },
        { id: 9, src: '/gallery/wedding-9.jpeg', alt: 'Moment 9' },
        { id: 10, src: '/gallery/wedding-10.jpeg', alt: 'Moment 10' },
        { id: 11, src: '/gallery/wedding-11.jpeg', alt: 'Moment 11' },
        { id: 12, src: '/gallery/wedding-12.jpeg', alt: 'Moment 12' }
    ];

    return (
        <section className="gallery section" id="galeria">
            <div className="container">
                <div className="section-header text-center animate-fade-in">
                    <h2 className="section-title">Galeria de Fotos</h2>
                    <p className="section-subtitle">Um pouco na nossa história em imagens</p>
                </div>

                <div className="gallery-grid">
                    {photos.map((photo) => (
                        <div key={photo.id} className="gallery-item animate-fade-in">
                            <img src={photo.src} alt={photo.alt} className="gallery-image" />
                            <div className="gallery-overlay">
                                <span className="gallery-icon">+</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <a href="#" className="btn btn-primary" style={{ padding: '0.75rem 2.5rem', fontSize: '1.1rem' }}>Ver Todas as Fotos</a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
