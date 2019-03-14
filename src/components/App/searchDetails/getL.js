import React, { Component } from 'react'

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {CardColumns} from "reactstrap";
let api = "http://localhost:9000/searchL?";

class GetL extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            items: {},
        }

    this.fetchWeather = this.fetchWeather.bind(this)
}

fetchWeather(apiStr) {
     console.log(apiStr)
    
     fetch(apiStr)
      .then(res => res.json())
      .then(

          (result) => {

              console.log(result)
              this.setState({
                  isLoaded: true,
                  items: result.main
              });
              console.log(this.state);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
              this.setState({
                  isLoaded: true,
                  error
              });
          }
      )

 

}

componentWillMount() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            api += `latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;    
            console.log(api)
            this.fetchWeather(api); 
        });
        
        
    }
    else {
        console.log("error")
    }
}

render() {
    return (
    //   <h1>done</h1>
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


export default GetL;
