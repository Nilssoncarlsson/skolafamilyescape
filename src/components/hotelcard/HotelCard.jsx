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

export default function HotelCard() {
  return (
    <Container>
      <Row> {
        hotelCard.map((hotelcard, index) => {
          return (
            <Card key={index} className="hotel-card" >
              <Row>
                <Col md={4} className="p-0" >
                  <Card.Img src={hotelcard.hotelimage} className="img-fluid" variant="top" />
                </Col>
                <Col med={6}>
                  <Card.Body className="d-flex flex-column" >
                    <Card.Title><h4>{hotelcard.hotelname}</h4></Card.Title>
                    <Card.Text className="card-text">
                      <p><i class="bi bi-geo-alt-fill"></i>{hotelcard.city}</p>
                      <p>{hotelcard.facilities}</p>
                      <p><i class="bi bi-star-fill" style={{ color: 'yellow' }}></i>{hotelcard.stars}</p>
                      <p>{hotelcard.rating} omdömen</p>
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={2}>
                  <Card.Body>
                    <p className="room-price">{hotelcard.price} kr/natt</p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          )
        }
        )
      }
      </Row>
    </Container >
  )
} 