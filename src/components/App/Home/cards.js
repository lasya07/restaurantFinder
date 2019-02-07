import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import {withRouter} from 'react-router-dom';


class Cards extends React.Component {
      
        constructor(props){
          super(props);
          this.onButtonChange =this.onButtonChange.bind(this)
         
        }
        onButtonChange() {
          let path=`Details`;
          this.props.history.push(path);
        }
       render() {
        return(
            
            <Card>
              <CardImg top width="100%" alt="Card image cap"/>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button onClick={this.onButtonChange}>Button</Button> 
              </CardBody>
            </Card>
            
            )
    }
}

export default withRouter(Cards);