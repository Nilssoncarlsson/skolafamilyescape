import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import event from './images/event1.png'
import paris from './images/paris.jpg'
import stad from './images/stad.jpg'
import venedig from './images/venedig.jpg'
import kapverde from './images/kapverde.jpg'

function EventDetails (){
    return(
        
        <Container>
            <Row xl={2} className="justify-content-center align-items-center">
                <Col>
                    <Image src={event} alt="yoga" rounded style={{ height: "420px", width: "auto", margin:"7px" }}/>
                </Col>
                <Col>
                    <Row >
                        <Row xl={2}>
                        <Col>
                            <Image src={paris} alt="kapverde" rounded style={{ height: "200px", width: "200px", margin:"10px 15px" }}/>
                        </Col>
                        <Col>
                            <Image src={stad} alt="kapverde" rounded style={{ height: "200px", width: "200px", margin:"10px 15px" }}/>
                        </Col>
                        <Col>
                                <Image src={venedig} alt="kapverde" rounded style={{ height: "200px", width: "200px", margin:"10px 15px"  }}/>
                            </Col>
                            <Col>
                                <Image src={kapverde} alt="kapverde" rounded style={{ height: "200px", width: "200px", margin:"10px 15px"  }}/>
                            </Col>
                        </Row>
                        
                        <Row>
                            
                        </Row>
                    </Row>
                </Col>
               
            </Row>
               
        </Container>
    );
}

export default EventDetails;