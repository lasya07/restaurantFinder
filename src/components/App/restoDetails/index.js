import React from "react";
import Photo from "./photos";
import Menu from "./Menu";
import Review from "./reviews";
import Rating from "./rating";
import Bread from "./breadCrumbs"
import Header from "../Home/header"
import Header1 from "./../loggedUser/header"
import Search from "./../Home/search"
import NaviBar from "./NaviBar";
import { Card, CardImg,CardBody,CardTitle, CardSubtitle, CardText } from "react-bootstrap";


let id;
let id1;
var body;
class Details extends React.Component {

    constructor(props){
        super(props);
         id =(this.props.location.state.id)
       console.log(id)
        this.state = {
          data : [],
          id1:this.props.location.state.id
        }
        //this.setState({id1 : id})
    
    }
   
    componentDidMount() {
        const url = "http://localhost:9000/restaurants?id="+id;
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
        console.log(this.state.data)
        return (
           

            <div>

                
                    <div>
                     {  
                     (localStorage.getItem("AccessToken")?(<Header1/>):(<Header/>))      
                    }
                    <div style={{position:'relative'}}>
                    <Bread />
                    <Search id={this.state.id1}/> 
                     <br></br>
                     </div>
                    <div><NaviBar id={this.state.id1}/></div><br/>
                   
                     <br></br>
                     <Menu id={this.state.id1}/>
                     <br>
                     </br>
                     <Photo id={this.state.id1}/>
                     <br></br>
                     <Rating id={this.state.id1}/>

                    </div>
              
            </div>
                
            
        );
    }
} 

export default Details;
