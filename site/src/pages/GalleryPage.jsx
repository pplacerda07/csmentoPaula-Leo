import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import './GalleryPage.css';

const GalleryPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const photosToExclude = [3, 5, 17, 24];
    const photos = Array.from({ length: 37 }, (_, i) => ({
        id: i + 1,
        src: `/gallery/wedding-${i + 1}.jpeg`,
        alt: `Momento ${i + 1}`,
    })).filter(photo => !photosToExclude.includes(photo.id));

    const openLightbox = (index) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % photos.length);
    };

    const goPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') setSelectedIndex((p) => (p + 1) % photos.length);
            if (e.key === 'ArrowLeft') setSelectedIndex((p) => (p - 1 + photos.length) % photos.length);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selectedIndex, photos.length]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="gallery-page">
            {/* Top bar */}
            <div className="gallery-page-header">
                <Link to="/" className="gallery-back-btn">
                    <ArrowLeft size={20} />
                    <span>Voltar</span>
                </Link>
                <h1 className="gallery-page-title">Galeria de Fotos</h1>
            </div>

            {/* Photo Grid */}
            <div className="gallery-page-grid">
                {photos.map((photo, index) => (
                    <div
                        key={photo.id}
                        className="gallery-page-item"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="gallery-page-image"
                            loading="lazy"
                        />
                        <div className="gallery-page-overlay">
                            <span className="gallery-page-icon">+</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div className="gp-lightbox" onClick={closeLightbox}>
                    <button className="gp-lightbox-close" onClick={closeLightbox}>
                        <X size={32} />
                    </button>

                    <button className="gp-lightbox-nav gp-lightbox-prev" onClick={goPrev}>
                        <ChevronLeft size={40} />
                    </button>

                    <div className="gp-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={photos[selectedIndex].src}
                            alt={photos[selectedIndex].alt}
                        />
                        <span className="gp-lightbox-counter">
                            {selectedIndex + 1} / {photos.length}
                        </span>
                    </div>

                    <button className="gp-lightbox-nav gp-lightbox-next" onClick={goNext}>
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
