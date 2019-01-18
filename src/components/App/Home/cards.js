import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  


class Cards extends React.Component {
       render() {
        return(
            
            <Card>
              <CardImg top width="100%" alt="Card image cap"/>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button> 
              </CardBody>
            </Card>
            
            )
    }
}

export default Cards;