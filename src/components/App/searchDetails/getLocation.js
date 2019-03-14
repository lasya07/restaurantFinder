import React from 'react';
import {geolocated} from 'react-geolocated';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class GetLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          latitude: '',
          longitude: '',
          
        };
        this.getCards = this.getCards.bind(this)
      }

 componentDidMount() {

   // Get the current position of the user
   if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){

        latitude = position.coords.latitude,
        longitude = position.coords.longitude
        console.log(latitude)

    });
    }
    else{
        console.log("error")
    }




    //   (position) => {
    //       this.setState(
    //     //   (prevState) => ({
    //           latitude= position.coords.latitude, 
    //           longitude= position.coords.longitude
              
    //         //   }), () => { this.getCards(); }
    //       );
    //       console.log(latitude)
    //   },
    //       (error) => this.setState({ latitude: 0,longitude:0 }),
    //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    //   )
        
   
}
    
  
   getCards() {
      console.log(url)
      let url = "http://localhost:9000/searchL?latitude=" + this.state.latitude + "&longitude=" + this.state.longitude ;
      let headers = new Headers();
      
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Access-Control-Allow-Origin', url);
      headers.append('Access-Control-Allow-Credentials', 'true');

      headers.append('GET', 'POST');
      console.log(url)


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
       console.log(contents); 
      
 }
  
      
  render() {
    return (
       <h1>done</h1>
    //   <div>{this.state.data.map((RestaurantDetails,index) =>{
    //     return(
    //     <Card width="100%" key = {index}>
    //       <CardImg top width="100%" alt="Card image cap"/>
    //       <CardBody> 
    //            <div key={index}>
    //               <CardTitle>{RestaurantDetails.name}</CardTitle>
    //               <CardSubtitle>{RestaurantDetails.phNo}</CardSubtitle>
    //               <CardText>{RestaurantDetails.address}</CardText>
    //               <Button onClick={this.onButtonChange}>Button</Button> 
    //             </div>
              
    //       </CardBody>
    //     </Card>
    //     )
    //      })}
    //     </div>
    )
  }
}
 

export default GetLocation;

