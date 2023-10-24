import React from 'react';
import './EventCard.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const EventTrip = [
    {
        image: 'https://www.wedotravel.se/upload/images/sutr/foretag/nya_mindre/marbella_golf_privatjet/eventresor_hotelclaudemarbell_11_terrass.jpg',
        heading: "Bootcamp, Marbella",
        description: "Upptäck kroppens underverk och äventyret i Marbella med hela familjen",
        price: "Res en vecka fr. 15.999",
    },
    {
        image: 'https://www.firstclasstravel.se/upload/images/0-fct/huvubilder-450x800/botswana/gepard/gepard.jpg',
        heading: "Safari, Sydafrika",
        description: "Ge er ut på en spännande safari i Sydafrika och upptäck de storslagna vilda djuren ",
        price: "Res 1 veack fr. 15.995",
    },
    {
        image: 'https://www.wedotravel.se/upload/images/sutr/golfresor/irland/carton_house/golf_cartonhouse_fasad.jpg',
        heading: "Historisk resa, Rom",
        description: "Res tillbaka i tiden till antika Rom och upplev historiens vingslag",
        price: "Res en vecka fr. 7.996",
    },
    {
        image: 'https://cdn.vagabond.se/app/uploads/2022/03/1054560-1536x1024.jpg',
        heading: "Äventyrsresa, Costa Rica",
        description: "Upptäck djungelns underverk och äventyret i Costa Rica",
        price: "Res 1 vecka fr. 12.995",
    }
]


// En återanvändbar rubrikkomponent
function CustomHeading({ text }) {
    return <h2>{text}</h2>;
  }

export default function EventCard() {
    return (
        <Container>
             <CustomHeading text="Eventresor" />
            <Row> {
                EventTrip.map((destination, index) => {
                    return (
                        <Card key={index} className="event-card" >
                            <Row>
                                <Col md={6} className="p-0">
                                    <Card.Img src={destination.image} className="img-fluid" variant="top"  />
                                </Col>
                                <Col md={4}>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="event-destination" >{destination.heading}</Card.Title>
                                        <Card.Text className="event-description" >
                                            <p>{destination.description}</p>
                                            <p>{destination.price}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col md={2}>
                                    <Card.Body>
                                         <div><i class="bi bi-chevron-right" className="read-more" ></i></div>
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
