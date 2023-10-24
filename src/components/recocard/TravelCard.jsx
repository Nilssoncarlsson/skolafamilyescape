import React from 'react';
import './TravelCard.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, CardImgOverlay } from 'react-bootstrap'
//import * as Icon from 'bootstrap-icons.css';
/* import Button from 'react-bootstrap/Button'; */


//Lista över destinationer som en array med attribut. Går att utöka med ratings osv. 
export const Destinations = [
  {
    imageUrl: "https://files.reseguiden.se/files/63/rg_32594063_c1200,800.jpg",
    title: "Soller, Mallorca",
    hotel: "Hotel Costa Azul",
    rating: "4,3",
    reviews: "634",
    price: "1000",
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gZokKXrRaiAqp7zpBh8bIvniRQXj3vQyuw&usqp=CAU",
    title: "Phuket, Thailand",
    hotel: "Banyan Tree Phuket",
    rating: "3,9",
    reviews: "149",
    price: "2000",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/98/b2/1d/98b21de054336411f04ab81ee96521a3.jpg",
    title: "Rhodos, Grekland",
    hotel: "Helea Family Beach Resort",
    rating: "4,2",
    reviews: "99",
    price: "3000",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/89/fa/80/89fa80ff616b67db8b0a2854c1864239.jpg",
    title: "Split, Kroatien",
    hotel: "Amphora Hotel",
    rating: "4,2",
    reviews: "201",
    price: "4000",
  },

]

// En återanvändbar rubrikkomponent
function CustomHeading({ text }) {
  return <h2>{text}</h2>;
}

//funktion som går igenom varje object i arrayen ovan. Kör metoden map. Retunerar mapfunktionen som generarar HTML kod.
//Kör map-metoden på Destinations etunerar HTML-koden under. 

export default function TravelCard() {
  return (
    <Container className="recommended-container">{/* En Bootstrap Container för att innehålla innehållet */}
      <CustomHeading text="Rekommenderat för dig" />
      <Row xs={1} md={2} lg={4} className="g-4">{
        Destinations.map((destination, index) => { // Loopa igenom destinationerna
          return (
            <Col className="d-flex"> {/* En Bootstrap Col-komponent för att innehålla varje destination */}
              <Card key={index} className="flex-fill"> 
                <Card.Img src={destination.imageUrl} variant="top" /> {/* Visa destinationsbild överst på kortet */}
                <CardImgOverlay><i class="bi bi-heart" style={{ color: 'red' }}></i></CardImgOverlay> {/* Visa ett hjärta som en overlay */}
                <Card.Body className="d-flex flex-column"> {/* En Card.Body-komponent för textinnehållet */}
                  <h3 className="card-title"> {destination.title}</h3> {/* Visa destinationens namn som en titel */}
                  <p className="card-subtitle mb-2 text-muted">{destination.hotel}</p> {/* Visa hotellnamn som en undertitel */}
                  <p className="card-text"> <i class="bi bi-star-fill" style={{ color: 'grey'}}></i> {destination.rating}</p> {/* Visa betyg med en stjärna-ikon */}
                  <p className="reviews">{destination.reviews} omdömen</p> {/* Visa antalet recensioner */}
                  <p className="card-price">{destination.price} kr/natt</p> {/* Visa pris per natt */}
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row></Container>
  )
}
