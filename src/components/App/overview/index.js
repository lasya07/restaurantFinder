import React, { Component } from 'react';
import { Card, CardDeck, Badge,Popover, Overlay, ButtonToolbar, Button, CardGroup, Container,Row,Col } from 'react-bootstrap';

class DisplayCards extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = ({ target }) => {
            this.setState(s => ({ target, show: !s.show }));
          };
      
          this.state = {
            show: false,
          };
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Card > 
                        <Card.Header>Phone Number</Card.Header>
                        <Card.Body>
                            <Card.Text>8897422266</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card >
                        <Card.Header>Opening Hours</Card.Header>
                        <Card.Body>
                            <Card.Text> Mon: 6.00- 10:00 </Card.Text>
                        </Card.Body>
                            {/* <ButtonToolbar>
                                <Button onClick={this.handleClick}>see more</Button>

                                <Overlay
                                show={this.state.show}
                                target={this.state.target}
                                placement="bottom"
                                container={this}
                                containerPadding={20}
                                >
                                <Popover id="popover-contained" title="Popover bottom">
                                    <strong>Holy guacamole!</strong> More information
                                </Popover>
                                </Overlay>
                            </ButtonToolbar> */}
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                        <Card.Header>Cuisines</Card.Header>
                        <div>
                            <Badge pill variant="primary">
                                Chinese
                            </Badge>
                            <Badge pill variant="secondary">
                                North Indian
                            </Badge>               
                            <Badge pill variant="info">
                                Asian 
                            </Badge>
                            <Badge pill variant="light">
                                Continentinal
                            </Badge>
                            <Badge pill variant="dark">
                                South Indian
                            </Badge>
                        </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                         
                    </Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
            
        )
    }

}

export default DisplayCards;