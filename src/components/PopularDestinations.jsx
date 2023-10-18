import React from "react";

const destinations = [
    { name: 'Tokyo', price: 'Från 1550 kr', imageUrl: 'path/to/tokyo.jpg' },
    { name: 'Kap Verde', price: 'Från 1320 kr', imageUrl: 'path/to/kapverde.jpg' },
    // ... add other destinations
];

function PopularDestinations() {
    return (
        <div className="popular-destinations">
            <h2>Populära destinationer</h2>
            <div className="destinations-list">
                {destinations.map((destination, index) => (
                    <div key={index} className="destination-card">
                        <img src={destination.imageUrl} alt={destination.name} />
                        <h3>{destination.name}</h3>
                        <p>{destination.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularDestinations;