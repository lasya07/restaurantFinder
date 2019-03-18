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


let id;
var body;
class Details extends React.Component {

    constructor(props){
        super(props);
         id =(this.props.location.state.id)
       console.log(id)
        this.state = {
          data : []
        }
    
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
                <Description/>
                <br></br>
                <Menu/>
                <Photo/>
                <Rating/>
                <Review/>
            </div>
                
            
        );
    }
} 

export default Details;
