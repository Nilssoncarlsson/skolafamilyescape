import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import kapverde from './images/kapverde.jpg'
import paris from './images/paris.jpg'
import stad from './images/stad.jpg'
import venedig from './images/venedig.jpg'

function EventDetails (){
    return(
        <Container className="justify-content-center">
            <Row md={7}>
                <Col md={2}>
                    <Image src={kapverde} alt="kapverde" rounded style={{ height: "300px", width: "300px" }}/>
                </Col>
                <Col md={4}>
                    <Row>
                        <Row>
                        <Col >
                            <Image src={paris} alt="kapverde" rounded style={{ height: "150px", width: "150px" }}/>
                        </Col>
                        <Col>
                            <Image src={stad} alt="kapverde" rounded style={{ height: "150px", width: "150px" }}/>
                        </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <Image src={venedig} alt="kapverde" rounded style={{ height: "150px", width: "150px" }}/>
                            </Col>
                            <Col>
                                <Image src={kapverde} alt="kapverde" rounded style={{ height: "150px", width: "150px" }}/>
                            </Col>
                        </Row>
                    </Row>
                </Col>
               
            </Row>
               
        </Container>
    );
}

export default EventDetails;