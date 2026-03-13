import React, { useState } from 'react';
import Countdown from './Countdown';
import './RSVP.css';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert(`Obrigado, ${formData.name}! Sua mensagem foi enviada com carinho.`);
        setFormData({ name: '', message: '' });
    };

    return (
        <section className="section rsvp" id="rsvp">
            <div className="container rsvp-container">
                <div className="rsvp-header">
                    <Countdown />
                    <h2 className="section-title">Envie uma mensagem para os noivos</h2>
                    <p>Queremos muito ler as palavras de carinho de cada um de vocês.</p>
                </div>

                <form className="rsvp-form animate-fade-in delay-100" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Seu Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Como você gostaria de ser identificado?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Deixe uma mensagem para os noivos (Opcional)</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Escreva algo especial..."
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RSVP;
