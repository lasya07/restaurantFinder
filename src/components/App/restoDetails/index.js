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
       
    render() {
        return (
            <div>
                
                {
                   (localStorage.getItem("AccessToken")?(<Header/>):(<Header1/>))      
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
