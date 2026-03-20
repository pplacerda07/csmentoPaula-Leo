import React from 'react';
import InfoPage from './InfoPage';

const Beauty = () => {
    const beautyData = [
        {
            name: "Jessica Braga",
            address: "Atendimento na região",
            phone: "(31) 99497-6645",
            instagram: "https://www.instagram.com/jessicabraga_beautystudio_jm?igsh=MW80ajhkYjFhMjF1ZA=="
        },
        {
            name: "Isa Morais Beauty",
            address: "Atendimento na região",
            phone: "(31) 98609-8592",
            instagram: "https://www.instagram.com/isamoraisbeauty?igsh=MW45OGNnbXpiaHc2bA=="
        },
        {
            name: "Rayane",
            address: "Atendimento na região",
            phone: "(31) 97306-3081"
        },
        {
            name: "Aniele Bessa MakeUp",
            address: "Atendimento na região",
            phone: "(31) 99940-4949"
        }
    ];

    return <InfoPage title="Cabelo e Maquiagem" items={beautyData} />;
};

export default Beauty;
