import React from 'react';
import './EventCard.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const EventTrip = [
    {
        image: './Images/bootcamp.png',
        heading: "Bootcamp, Marbella",
        description: "Upptäck kroppens underverk och äventyret i Marbella med hela familjen",
        price: "Res en vecka fr. 15.999",
    },
    {
        image: './Images/safari.png',
        heading: "Safari, Sydafrika",
        description: "Ge er ut på en spännande safari i Sydafrika och upptäck de storslagna vilda djuren ",
        price: "Res 1 veack fr. 15.995",
    },
    {
        image: './Images/rom.png',
        heading: "Historisk resa, Rom",
        description: "Res tillbaka i tiden till antika Rom och upplev historiens vingslag",
        price: "Res en vecka fr. 7.996",
    },
    {
        image: './Images/costarica.png',
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

/* <Card key={index}>
        <div class="card-container">
        <div class="col d-flex"> */ /* Med Col ist för Row tar bilden upp mer plats */ 

/*  <div class="col-sm-6 flex-column">

     <Card.Img src={destination.image} alt="your-image-description" /* variant="left" */ /* class="img-fluid" />
</div>
<div class="col-sm-6 flex-column">
<h3>{destination.heading}</h3>
<p>{destination.description}</p>
<p>{destination.price}</p>
</div>

</div>
</div>
</Card> */
/* <Card>
    <div class="card flex-row"><img class="card-img-left example-card-img-responsive" src="/postboot/assets/img/thumbnail.jpg" />
        <div class="card-body">
            <h4 class="card-title h5 h4-sm">Left image</h4>
            <p class="card-text">Example text</p>
        </div>
    </div>
</Card> */
// img-fluid is a Bootstrap class used to make an image responsive. It ensures that the image scales properly and 
//fits within its container without overflowing or getting distorted. When you apply the img-fluid class to an image, 
//it will automatically adjust its size based on the width of its parent container.
/* 


/* export default function EventCard() {
    return (
        <Container className="event-container justify-content-evenly" fluid>
            <h1>Eventresor</h1>
            <CardGroup>{

                /* EventTrip.map((destination, index *//* ) => {
return (
 
<Card className="card d-flex flex-column">
<Card.Img src={'https://picsum.photos/300/300'} class="img-fluid" /> 
<Card.Body className="d-flex flex-column justify-content-end align-items-center">
<Card.Title>Card title</Card.Title>
<Card.Text>
This is a wider card with supporting text below as a natural lead-in
to additional content. This content is a little bit longer.
</Card.Text>
<Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
 
)
})} </CardGroup></Container>
)
}  */


/* 
<div>
    {<Row className="g-5 justify-content evenly">
        <Col className="lg-6">
            <Card>
                <Row className="g-0">
                    <Col className="col-6 md-5">
                        <img src={destination.image} alt="" className="card-img image-fluid rounded-start" />
                    </Col>
                    <Col className="col-6 md-7">
                        <p>test</p>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
</div>}
 */
/* 
<Row key={index} className='justify-content-evenly mb-1 mx-2'>
<Card className="event-card mx-0">
    <Row className="g-0 mx-0">
        <Col className="col-6 flex-row mx-0">
            
            <img src={destination.image} className="card-img img-fluid event-image " alt=""/>
            
        </Col>
        <Col className="col-6">
        <Card.Body className="d-flex flex-column">
            <h3>{destination.heading}</h3>
            {<p>{destination.description}</p>
            <p>{destination.price}</p> }
            <Button>Läs mer</Button>
        </Card.Body>
        </Col>
    </Row>
</Card>
</Row>
 */