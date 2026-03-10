import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './EventDetails.css';

const EventDetails = () => {
    return (
        <section className="section event-details" id="evento">
            <div className="container">
                <h2 className="section-title text-center">O Evento</h2>

                <div className="event-cards">
                    <div className="event-card animate-fade-in delay-100">
                        <div className="card-icon">
                            <Calendar size={32} />
                        </div>
                        <h3>A Cerimônia</h3>
                        <p className="card-detail">Sábado, 15 de Novembro de 2026</p>
                        <p className="card-desc">16:00 - Chegada dos convidados</p>
                        <p className="card-desc">16:30 - Início da cerimônia</p>
                    </div>

                    <div className="event-card animate-fade-in delay-200">
                        <div className="card-icon">
                            <MapPin size={32} />
                        </div>
                        <h3>O Local</h3>
                        <p className="card-detail">Fazenda Borges</p>
                        <p className="card-desc">Uma fazenda histórica com muito verde, onde a natureza e a sofisticação se encontram.</p>
                        <a href="https://fazendaborges.com.br/" target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-4">Ver site do local</a>
                    </div>

                    <div className="event-card animate-fade-in delay-300">
                        <div className="card-icon">
                            <Clock size={32} />
                        </div>
                        <h3>A Festa</h3>
                        <p className="card-detail">Após a cerimônia</p>
                        <p className="card-desc">A recepção acontecerá no mesmo local. Prepare-se para muita comida boa, drinks e festa até o amanhecer!</p>
                    </div>
                </div>

                <div className="dress-code" id="local">
                    <h3>Dress Code: Passeio Completo</h3>
                    <p>
                        Sugerimos trajes elegantes e confortáveis. O local possui áreas com grama e pedras,
                        então recomendamos atenção especial na escolha dos calçados (evitar saltos agulha finos).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
