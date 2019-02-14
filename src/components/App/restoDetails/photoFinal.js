import React from "react";
import Photo from "./photos";
import Bread from "./breadCrumbs"
import Header from "./../home/header"
import Search from "./../Home/search";
import NaviBar from "./NaviBar";

class PhotoFinal extends React.Component {
       
    render() {
        return (
            <div>
                
                <Header/>
                <div style={{position:'relative'}}>
                <Bread/>
                <Search/> 
                <br></br>
                </div>
                <div><NaviBar/></div><br/>
                <label>photos</label>
                <Photo/>
                
            </div>
                
            
        );
    }
} 

export default PhotoFinal;
