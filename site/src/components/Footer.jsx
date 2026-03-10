import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contatos">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2>Paula & Leo</h2>
                    <p>Com amor, celebramos juntos.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="#historia">Nossa História</a></li>
                            <li><a href="#evento">O Evento</a></li>
                            <li><a href="#presentes">Lista de Presentes</a></li>
                            <li><a href="#rsvp">RSVP</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Dúvidas?</h4>
                        <ul>
                            <li><a href="mailto:contato@paulaeleo.com">contato@paulaeleo.com</a></li>
                            <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Paula & Leo. Todos os direitos reservados. Feito com amor.</p>
            </div>
        </footer>
    );
};

export default Footer;
