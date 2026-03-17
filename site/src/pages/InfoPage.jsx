import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Globe, Instagram, Facebook } from 'lucide-react';
import './InfoPage.css';

const InfoPage = ({ title, items }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="info-page">
            <header className="info-page-header">
                <Link to="/" className="back-btn">
                    <ArrowLeft size={20} />
                    <span>Voltar</span>
                </Link>
                <h1>{title}</h1>
            </header>

            <main className="container">
                <div className="info-grid">
                    {items.map((item, index) => (
                        <div key={index} className="info-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="info-card-content">
                                <h3>{item.name}</h3>
                                {item.address && (
                                    <div className="info-detail">
                                        <MapPin size={16} />
                                        <span>{item.address}</span>
                                    </div>
                                )}
                                {item.phone && (
                                    <div className="info-detail">
                                        <Phone size={16} />
                                        <a href={`tel:${item.phone.replace(/\D/g, '')}`}>{item.phone}</a>
                                    </div>
                                )}
                                <div className="info-card-actions">
                                    {item.website && (
                                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                            <Globe size={16} /> Ver Site
                                        </a>
                                    )}
                                    {item.instagram && (
                                        <a href={item.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                            <Instagram size={16} /> Instagram
                                        </a>
                                    )}
                                    {item.facebook && (
                                        <a href={item.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                            <Facebook size={16} /> Facebook
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default InfoPage;
