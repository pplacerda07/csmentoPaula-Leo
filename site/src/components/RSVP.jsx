import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: 'yes',
        guests: '0',
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
        alert(`Obrigado, ${formData.name}! Sua confirmação foi recebida.`);
        setFormData({ name: '', email: '', attending: 'yes', guests: '0', message: '' });
    };

    return (
        <section className="section rsvp" id="rsvp">
            <div className="container rsvp-container">
                <div className="rsvp-header">
                    <h2 className="section-title">Confirme sua Presença</h2>
                    <p>Por favor, nos informe até 15 de Outubro de 2026 se poderá celebrar conosco.</p>
                </div>

                <form className="rsvp-form animate-fade-in delay-100" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ex: João da Silva"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Ex: joao@email.com"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group half">
                            <label htmlFor="attending">Você irá ao evento?</label>
                            <select
                                id="attending"
                                name="attending"
                                value={formData.attending}
                                onChange={handleChange}
                            >
                                <option value="yes">Sim, estarei lá!</option>
                                <option value="no">Não poderei comparecer</option>
                            </select>
                        </div>

                        <div className="form-group half">
                            <label htmlFor="guests">Acompanhantes</label>
                            <select
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                disabled={formData.attending === 'no'}
                            >
                                <option value="0">0 (Irei sozinho)</option>
                                <option value="1">1 Acompanhante</option>
                                <option value="2">2 Acompanhantes</option>
                                <option value="3">3 Acompanhantes</option>
                                <option value="4">4 Acompanhantes</option>
                            </select>
                        </div>
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
                        Enviar Confirmação
                    </button>
                </form>
            </div>
        </section>
    );
};

export default RSVP;
