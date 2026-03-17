import React from 'react';
import InfoPage from './InfoPage';

const Beauty = () => {
    const beautyData = [
        {
            name: "Sugestão de Salão 1",
            address: "Centro, Rio Piracicaba - MG",
            phone: "(31) 0000-0000"
        },
        {
            name: "Sugestão de Maquiadora 1",
            address: "Atendimento na região",
            phone: "(31) 0000-0000"
        }
    ];

    return <InfoPage title="Cabelo e Maquiagem" items={beautyData} />;
};

export default Beauty;
