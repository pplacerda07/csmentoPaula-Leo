import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contatos">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2>Paula & Leonardo</h2>
                    <p>Com amor, celebramos juntos.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Navegação</h4>
                        <ul>
                            <li><a href="#historia">Nossa História</a></li>
                            <li><a href="#evento">O Evento</a></li>
                            <li><a href="#presentes">Lista de Presentes</a></li>
                            <li><a href="https://noivos.casar.com/paulaeleonardo-casamento#/rsvp" target="_blank" rel="noopener noreferrer">RSVP</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Dúvidas?</h4>
                        <ul>
                            <li><strong>Cerimonial:</strong> Cida Dornelas</li>
                            <li><a href="tel:31988767174">(31) 98876-7174</a></li>
                            <li><a href="https://wa.me/5531988767174" target="_blank" rel="noopener noreferrer">WhatsApp Cerimonial</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Paula & Leonardo. Todos os direitos reservados. Feito com amor.</p>
            </div>
        </footer>
    );
};

export default Footer;
