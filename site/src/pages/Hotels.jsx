import React from 'react';
import InfoPage from './InfoPage';

const Hotels = () => {
    const hotelData = [
        {
            name: "Villa Hotel Rio Piracicaba - MG",
            address: "Rua Boanerges Tostes Junior - Samitre, Rio Piracicaba - MG, 35940-000",
            phone: "(31) 97215-2727",
            website: "https://villahotelrp.com.br/"
        },
        {
            name: "Pousada Água Santa",
            address: "BR 123, km 11 - 5 - Rio Piracicaba, MG, 35940-000",
            phone: "(31) 99645-4805",
            website: "https://pousadaaguasanta.com.br/"
        },
        {
            name: "Pousada Solar",
            address: "Av. Dom Joaquim Silvério, 377 - Centro, Rio Piracicaba - MG, 35940-000",
            phone: "(31) 99675-8786"
        },
        {
            name: "Hotel Topázio",
            address: "Av. Dom Joaquim Silvério, 313 - Rio Piracicaba, MG, 35940-000",
            phone: "(31) 99515-4464"
        },
        {
            name: "Hotel Nardy",
            address: "R. 8, Quadra i, N° 477 - Residencial Dr Mario França, Alvinópolis - MG, 35950-000",
            phone: "(31) 98201-6949",
            facebook: "https://www.facebook.com/people/HOTEL-NARDY/100064776576410/#"
        },
        {
            name: "Hotel São Geraldo",
            address: "Av. Padre José Marciano, 499 - Centro, Alvinópolis - MG, 35950-000",
            phone: "(31) 3855-1229",
            instagram: "https://www.instagram.com/hotelsaogeraldo/"
        },
        {
            name: "Monza Comfort Hotel",
            address: "Av. Getúlio Vargas, 2481 - Bau, João Monlevade - MG, 35930-312",
            phone: "(31) 3851-1113"
        },
        {
            name: "Monlevade Palace Hotel",
            address: "Av. Wilson Alvarenga, 364 - Carneirinhos, João Monlevade - MG, 35930-480",
            phone: "(31) 3851-4180"
        },
        {
            name: "Central Palace Hotel",
            address: "Av. Getúlio Vargas, 5503 - Carneirinhos, João Monlevade - MG, 35930-004",
            phone: "(31) 3852-1818"
        }
    ];

    return <InfoPage title="Hotéis e Pousadas" items={hotelData} />;
};

export default Hotels;
