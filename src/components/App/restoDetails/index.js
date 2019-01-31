import React from "react";
import Photo from "./photos";
import Menu from "./Menu";
import Review from "./reviews";
import Rating from "./rating";
import Bread from "./breadCrumbs"
import Header from "./../home/header"
import Search from "./../home/search"
import NaviBar from "./NaviBar";

class Details extends React.Component {
       
    render() {
        return (
            <div>
                
                <Header/>
                <div style={{position:'relative'}}>
                <Bread/>
                <Search/> 
                <br></br>
                <label>Near Me</label>
                </div>
                <div><NaviBar/></div><br/>
                <Review/>
            </div>
                
            
        );
    }
} 

export default Details;
