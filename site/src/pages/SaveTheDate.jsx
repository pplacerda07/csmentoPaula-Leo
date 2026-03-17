import React, { useState } from 'react';
import Countdown from '../components/Countdown';
import './SaveTheDate.css';

const SaveTheDate = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        attending: 'yes'
    });

    // aqui vai um comentárioooooo pra teste do projeot 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado, ${formData.name}! Salve a data, a confirmação foi recebida!`);
        setFormData({ name: '', email: '', phone: '', attending: 'yes' });
    };

    return (
        <div className="save-the-date-page">
            <div className="hero-overlay"></div>
            <div className="std-content animate-fade-in">
                <h2 className="hero-pre-title">Save The Date</h2>
                <h1 className="hero-title">Paula & Leonardo</h1>
                <Countdown />
                <p className="hero-date">19 de Setembro de 2026 • Fazenda Borges</p>

                <div className="std-form-container delay-200 animate-fade-in">
                    <p className="std-subtitle">Reserve esta data especial e confirme sua presença!</p>
                    <form className="std-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Nome Completo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Telefone / WhatsApp"
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="attending"
                                value={formData.attending}
                                onChange={handleChange}
                            >
                                <option value="yes">Sim, guardarei a data!</option>
                                <option value="no">Infelizmente, não poderei.</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SaveTheDate;
