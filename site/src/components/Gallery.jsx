import React from 'react';
import './Gallery.css';

const Gallery = () => {
    // Array of placeholder images
    const photos = [
        { id: 1, src: '/images/gallery-1.jpg', alt: 'Moment 1' },
        { id: 2, src: '/images/gallery-2.jpg', alt: 'Moment 2' },
        { id: 3, src: '/images/gallery-3.jpg', alt: 'Moment 3' },
        { id: 4, src: '/images/gallery-4.jpg', alt: 'Moment 4' },
        { id: 5, src: '/images/gallery-5.jpg', alt: 'Moment 5' },
        { id: 6, src: '/images/gallery-6.jpg', alt: 'Moment 6' },
        { id: 7, src: '/images/gallery-7.jpg', alt: 'Moment 7' },
        { id: 8, src: '/images/gallery-8.jpg', alt: 'Moment 8' },
        { id: 9, src: '/images/gallery-9.jpg', alt: 'Moment 9' },
        { id: 10, src: '/images/gallery-10.jpg', alt: 'Moment 10' }
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
            </div>
        </section>
    );
};

export default Gallery;
