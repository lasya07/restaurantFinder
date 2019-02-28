import React from "react"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import {withRouter} from 'react-router-dom';

    let d ;
class Cards extends React.Component {
      
        constructor(props){
          super(props);
          this.onButtonChange =this.onButtonChange.bind(this)
          this.state = {
            data : []
          }
        }
        onButtonChange() {
          let path=`Details`;
          this.props.history.push(path);
        }

        componentDidMount() {
          //const url = "http://10.10.200.12:9000/foods"; 
          const url = "http://localhost:9000/details"; 
          let headers = new Headers();

          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');

          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');

          headers.append('GET', 'POST');

          fetch(url, {
              headers: headers,
              method: 'GET'
          })
          .then(response => response.json())
          .then(contents => {console.log("in fetch: "+ contents);
                              this.setState ({
                              data : contents})
              })
          .catch(() => console.log("Can’t access " + url + " response. "))
        }

        
       render() {
        
        return(
           
          <div>{this.state.data.map((RestaurantDetails,index) =>{
            return(
            <Card width="100%" key = {index}>
              <CardImg top width="100%" alt="Card image cap"/>
              <CardBody> 
                   <div key={index}>
                      <CardTitle>{RestaurantDetails.name}</CardTitle>
                      <CardSubtitle>{RestaurantDetails.phNo}</CardSubtitle>
                      <CardText>{RestaurantDetails.address}</CardText>
                      <Button onClick={this.onButtonChange}>Button</Button> 
                    </div>
                  
              </CardBody>
            </Card>
            )
                  })}
            </div>
            )
    }
}

export default withRouter(Cards);