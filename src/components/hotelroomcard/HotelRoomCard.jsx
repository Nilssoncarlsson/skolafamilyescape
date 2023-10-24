import React from 'react';
import './HotelRoomCard.css';
import { CardBody, Col, Container, Row, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import { CardImage } from 'react-bootstrap-icons';

export const hotelRoomCard = [
    {
        hotelimage: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
        type: "Economy dubbelrum",
        bed: "1 Dubbelsäng eller 2 enkelsängar",
        sqm: "45m2",
        wifi: "Gratis Wi-Fi",
        view: "Utsikt mot innergård",
        bathroom: "Badkar",
        seeall: "Sa alla rummets faciliteter",
        price: "1145",

    },
    {
        hotelimage: 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-jumbo.jpg?quality=75&auto=webp',
        type: "Double Superior King Size Bed Room",
        bed: "1 King Size Bed",
        sqm: "45m2",
        wifi: "Gratis Wi-Fi",
        view: "Havsutsikt",
        bathroom: "Badkar",
        seeall: "Sa alla rummets faciliteter",
        price: "1684",
    },
    {
        hotelimage: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp',
        type: "Double Superior King Size Bed Room",
        bed: "1 King Size Bed",
        sqm: "50m2",
        wifi: "Gratis Wi-Fi",
        view: "Havsutsikt",
        bathroom: "Badkar",
        seeall: "Sa alla rummets faciliteter",
        price: "1789",
    },
]

export default function HotelRooms() {
    return (
        <Container>
            <Row> {
                hotelRoomCard.map((hotelrooms, index) => {
                    return (
                        <Card key={index} className="room-card">
                            <Row>
                                <Col md={4} className="p-0" >
                                    <Card.Img src={hotelrooms.hotelimage} className="img-fluid" variant="top" />
                                </Col>
                                <Col med={6}>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title><h4>{hotelrooms.type}</h4></Card.Title>
                                        <Card.Text>
                                            <ul className="card-list">
                                                <li><i class="bi bi-moon"></i> {hotelrooms.bed}</li>
                                                <li><i class="bi bi-arrows-angle-expand"></i> {hotelrooms.sqm}</li>
                                                <li><i class="bi bi-wifi"></i> {hotelrooms.wifi}</li>
                                                <li><i class="bi bi-binoculars"></i> {hotelrooms.view}</li>
                                                <li><i class="bi bi-droplet"></i> {hotelrooms.bathroom}</li>
                                                <p className="card-see-more">{hotelrooms.seeall}</p>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col md={2}>
                                    <Card.Body>
                                        <p className="room-price">{hotelrooms.price} kr/natt</p>
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
