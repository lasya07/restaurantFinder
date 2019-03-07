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

class Details extends React.Component {

    constructor(props){
        super(props);
        id=(this.props.location.state.id)
        console.log(id)
        this.state = {
          data : []
        }
      }
    
    componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://localhost:9000/search/id";
        console.log(url) 
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');

        fetch(url, {
            headers: headers,
            method: 'GET',
            body: id
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
                   (localStorage.getItem("AccessToken")?(<Header1/>):(<Header/>))      
                }
                <div style={{position:'relative'}}>
                <Bread/>
                <Search/> 
                <br></br>
                </div>
                <div><NaviBar/></div><br/>

                <Menu/>
                <Photo/>
                <Rating/>
                <Review/>
            </div>
                
            
        );
    }
} 

export default Details;
