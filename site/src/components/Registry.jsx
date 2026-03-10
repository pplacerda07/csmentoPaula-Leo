import React from 'react';
import { Gift } from 'lucide-react';
import './Registry.css';

const Registry = () => {
    return (
        <section className="section registry" id="presentes">
            <div className="container text-center">
                <div className="registry-header animate-fade-in">
                    <h2 className="section-title">Lista de Presentes</h2>
                    <Gift size={48} className="registry-icon" />
                </div>
                <div className="registry-content animate-fade-in delay-200">
                    <p className="registry-text">
                        Sua presença é o nosso maior presente!
                        Mas, se desejar nos presentear para a nossa nova vida ou nos ajudar com a lua de mel,
                        preparamos algumas opções com muito carinho.
                    </p>
                    <div className="registry-actions">
                        <a href="#" className="btn btn-primary btn-lg">Acessar Lista Virtual</a>
                        <a href="#" className="btn btn-outline btn-lg">Cotizar Lua de Mel</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registry;
