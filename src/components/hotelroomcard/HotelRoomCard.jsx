import React from 'react';
import './HotelRoomCard.css';
import { CardBody, Col, Container, Row, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import { CardImage } from 'react-bootstrap-icons';

export const hotelRoomCard = [
    {
        hotelimage: './Images/economyroom.png',
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
        hotelimage: './Images/queenroom.png',
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
        hotelimage: './Images/kingroom.png',
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

/* 
export default function HotelRoom() {
    return (
        <Container fluid class="card-container">
            <Row md={8} > {
                hotelRoomCard.map((hotelroom, index) => {
                    return (
                        <div className="d-flex flex-row" key={index}>
                            <Card class="result-card">
                                <Card.Img src={hotelroom.hotelimage} className="img-fluid" variant="top"  />
                            </Card>
                            <Card.Body className="d-flex flex-column">
                                <div i class="bi bi-heart" style={{ color: 'red' }}></div>
                                <Card.Title><h3>{hotelroom.hotelname}</h3></Card.Title>
                                <Card.Text>
                                    <p><i class="bi bi-geo-alt-fill"></i>{hotelroom.city}</p>
                                    <p>{hotelroom.facilities}</p>
                                    <p>{hotelroom.seeall}</p>
                                    <p>{hotelroom.price} kr/natt</p>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    )
                }
                )
            }
            </Row>
        </Container >
    )
}   */