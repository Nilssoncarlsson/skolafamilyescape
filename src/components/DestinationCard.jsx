import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export const DestinationCard = () => {

    const DestinationArray=[
        {
            image:"https://files.reseguiden.se/files/63/rg_32594063_c1200,800.jpg",
            heading:"Kap Verde",
            subheading: "Från 1550 kr",
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gZokKXrRaiAqp7zpBh8bIvniRQXj3vQyuw&usqp=CAU",
            heading:"Paris",
            subheading: "Från 1550 kr",

        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gZokKXrRaiAqp7zpBh8bIvniRQXj3vQyuw&usqp=CAU",
            heading:"Sicilien",
            subheading: "Från 1550 kr",

        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gZokKXrRaiAqp7zpBh8bIvniRQXj3vQyuw&usqp=CAU",
            heading:"Tokyo",
            subheading: "Från 1550 kr",

        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbSruOR9HDL26tzW-vwYTNi9NB4Uf1ZHhcQ&usqp=CAU",
            heading:"Venedig",
            subheading: "Från 1550 kr",

        }
    ]
    return (
        
        <Container>
            <h2>Populära destinationer</h2>
            <Row className="image-row justify-content-md-center">
              {DestinationArray.map((dest, index) => (
                <Col md={2} key={index}>
                  <Image src={dest.image} style={{ height: "100px", width: "100px" }} roundedCircle /><br/>
                  <h3>{dest.heading}</h3>
                  <p>{dest.subheading}</p>
                </Col>
              ))}
            </Row>
        </Container>
    )
}


