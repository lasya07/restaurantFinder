import React from "react";


import Header from "./../Home/header"
import LoggedHeader from "./../loggedUser/header"
import Search from "./../Home/search"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {CardColumns} from "reactstrap";

let name;
class SearchDetails extends React.Component {

    constructor(props){
        super(props);
        name=(this.props.location.state.name)
        console.log(name)
        this.state = {
          data : []
        }
      }
    
    componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://localhost:9000/restaurants/search?name="+name;
        console.log(url) 
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
            <div>
                
                {
                
                ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<LoggedHeader/>))
              }
                <br></br>
                <div style={{position:'relative'}}>
                
                <Search/> 
                <br></br>
                <label>Search Results:</label>
                <br></br>
                <div>{this.state.data.map((RestaurantDetails,index) =>{
                    let url="http://localhost:9000/images?id="+RestaurantDetails.urls[0];
                return(
                    <CardColumns >
                        <Card >
                        <CardImg top width="100%" src={url} alt="Card image cap"/>
                        <CardBody> 
                            <div key={index}>
                                <CardTitle>{RestaurantDetails.name}</CardTitle>
                                <CardSubtitle>{RestaurantDetails.phNo}</CardSubtitle>
                                <CardText>{RestaurantDetails.address}</CardText>
                                <Button onClick={this.onButtonChange}>Button</Button> 
                                </div>
                            
                        </CardBody>
                        </Card>
                        </CardColumns>
                    )
                })}
                </div>
                <br></br>
                </div>
                
            </div>
                
            
        );
    }
} 

export default SearchDetails;
