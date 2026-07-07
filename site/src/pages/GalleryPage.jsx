import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import './GalleryPage.css';

const GalleryPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const photosToExclude = [3, 5, 17, 24];
    const weddingPhotos = Array.from({ length: 37 }, (_, i) => ({
        id: i + 1,
        src: `/gallery/wedding-${i + 1}.jpeg`,
        alt: `Momento ${i + 1}`,
    })).filter(photo => !photosToExclude.includes(photo.id));

    const paulaLeoPhotos = [
        { id: 'pl-1', src: '/gallery/paula_leofotos/0E3A0965 (1).JPG', alt: 'Paula & Leo' },
        { id: 'pl-2', src: '/gallery/paula_leofotos/0E3A2961.JPG', alt: 'Paula & Leo' },
        { id: 'pl-3', src: '/gallery/paula_leofotos/0E3A3984.JPG', alt: 'Paula & Leo' },
        { id: 'pl-4', src: '/gallery/paula_leofotos/7F3A1373.JPG', alt: 'Paula & Leo' },
        { id: 'pl-5', src: '/gallery/paula_leofotos/7F3A1714.JPG', alt: 'Paula & Leo' },
        { id: 'pl-6', src: '/gallery/paula_leofotos/7F3A1748.JPG', alt: 'Paula & Leo' },
        { id: 'pl-7', src: '/gallery/paula_leofotos/7F3A1822.JPG', alt: 'Paula & Leo' },
        { id: 'pl-8', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_160.jpg', alt: 'Paula & Leo' },
        { id: 'pl-9', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_163.jpg', alt: 'Paula & Leo' },
        { id: 'pl-10', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_217.jpg', alt: 'Paula & Leo' },
        { id: 'pl-11', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_273.jpg', alt: 'Paula & Leo' },
        { id: 'pl-12', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_283.jpg', alt: 'Paula & Leo' },
        { id: 'pl-13', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_303.jpg', alt: 'Paula & Leo' },
        { id: 'pl-14', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_349.jpg', alt: 'Paula & Leo' },
        { id: 'pl-15', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_363.jpg', alt: 'Paula & Leo' },
        { id: 'pl-16', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_37.jpg', alt: 'Paula & Leo' },
        { id: 'pl-17', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_423.jpg', alt: 'Paula & Leo' },
        { id: 'pl-18', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_435.jpg', alt: 'Paula & Leo' },
        { id: 'pl-19', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_457.jpg', alt: 'Paula & Leo' },
        { id: 'pl-20', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_472 (1).jpg', alt: 'Paula & Leo' },
        { id: 'pl-21', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_487.jpg', alt: 'Paula & Leo' },
        { id: 'pl-22', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_515.jpg', alt: 'Paula & Leo' },
        { id: 'pl-23', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_545.jpg', alt: 'Paula & Leo' },
        { id: 'pl-24', src: '/gallery/paula_leofotos/ParaImprimir_25demaiode2026_66.jpg', alt: 'Paula & Leo' },
    ];

    const photos = [...weddingPhotos, ...paulaLeoPhotos];

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
