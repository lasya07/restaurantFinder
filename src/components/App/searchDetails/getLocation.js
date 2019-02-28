import React from 'react';
import {geolocated} from 'react-geolocated';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class GetLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          latCords: '',
          longCords: ''
        };
      }

    componentDidMount() {

        if(this.props.isGeolocationAvailable){
            if(!this.props.isGeolocationEnabled){
                latCords = this.props.coords.latitude,
                longCords = this.props.coords.longitude
            }
            else {
                latCords = 0,
                longCords = 0
            }
        }
        else{
                latCords = 0,
                longCords = 0
        }

        console.log(this.props.coords.latitude)
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://localhost:9000/searchL?latitude="+latCords+"&longitude=78"; 
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
    return (
    <Card width="100%" >
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
  }
}
 
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(GetLocation);

