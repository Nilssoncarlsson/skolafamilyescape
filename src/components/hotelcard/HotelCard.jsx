import React from 'react';
import './HotelCard.css';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export const hotelCard = [
    {
        hotelimage: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
        hotelname: "Hotel Costa Azul",
        city: "Calle Sollér",
        facilities: "Frukost , fritt wi-fi",
        stars: "4,3",
        rating: '1,203',
        price: "1145",
    },
    {
        hotelimage: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-jumbo.jpg?quality=75&auto=webp',
        hotelname: "Tacande Portals Hotel",
        city: "Calle Sollér",
        facilities: "Frukost , Fritt wi-fi, Gym",
        stars: "4,4",
        rating: '898',
        price: "1199",
    },
]

// Skapa en array med hotellrumskort, varje objekt representerar ett rum
export const hotelRoomCards = [
    {
      hotelimage: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-jumbo.jpg?quality=75&auto=webp', // Källan till rummets bild
      type: "Economy dubbelrum", // Typ av rum
      bed: "1 Dubbelsäng eller 2 enkelsängar", // Sängtyp
      sqm: "45m2", // Rumets storlek
      wifi: "Gratis Wi-Fi", // Wi-Fi-erbjudande
      view: "Utsikt mot innergård", // Utsiktsinformation
      bathroom: "Badkar", // Badrumsinformation
      seeall: "Se alla rummets faciliteter", // Länk för att visa alla faciliteter
      price: "1145", // Pris per natt
    },
    // Ytterligare hotellrum med liknande information
  ];
  
  export default function HotelRoom() {
    return (
      <Container> {/* En Bootstrap Container för att innehålla innehållet */}
        <Row> {/* En Bootstrap Row för att rada upp hotellrumskorten */}
          {
            hotelRoomCards.map((hotelroom, index) => { // Loopa igenom hotellrumskorten
              return (
                <Card key={index} className="room-card"> {/* Ett Bootstrap Card-komponent för varje hotellrum */}
                  <Row> {/* En Bootstrap Row inuti varje Card för layout */}
                    <Col md={4} className="p-0" > {/* En Bootstrap Col-komponent för att rymma bilden */}
                      <Card.Img src={hotelroom.hotelimage} className="img-fluid" variant="top" /> {/* Visa rummets bild */}
                    </Col>
                    <Col med={6}> {/* En Bootstrap Col-komponent för textinnehåll */}
                      <Card.Body className="d-flex flex-column"> {/* Ett Card.Body-komponent för att innehålla texten */}
                        <Card.Title><h4>{hotelroom.type}</h4></Card.Title> {/* Visa rumstypen som en titel */}
                        <Card.Text>
                          <ul className="card-list"> {/* En osorterad lista för ruminformation */}
                            <li><i class="bi bi-moon"></i> {hotelroom.bed}</li> {/* Visa sänginformation med en ikon */}
                            <li><i class="bi bi-arrows-angle-expand"></i> {hotelroom.sqm}</li> {/* Visa storleksinformation med en ikon */}
                            <li><i class="bi bi-wifi"></i> {hotelroom.wifi}</li> {/* Visa Wi-Fi-information med en ikon */}
                            <li><i class="bi bi-binoculars"></i> {hotelroom.view}</li> {/* Visa utsiktsinformation med en ikon */}
                            <li><i class="bi bi-droplet"></i> {hotelroom.bathroom}</li> {/* Visa badrumsinformation med en ikon */}
                            <p className="card-see-more">{hotelroom.seeall}</p> {/* Visa länk för att visa alla faciliteter */}
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                    <Col md={2}> {/* En Bootstrap Col-komponent för att visa pris */}
                      <Card.Body>
                        <p className="room-price">{hotelroom.price} kr/natt</p> {/* Visa rummets pris per natt */}
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              );
            })
          }
        </Row>
      </Container>
    );
  }