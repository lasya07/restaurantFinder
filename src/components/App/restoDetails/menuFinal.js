import React from "react";
import Photo from "./photos";
import Menu from "./Menu";
import Review from "./reviews";
import Rating from "./rating";
import Bread from "./breadCrumbs"
import Header from "./../home/header"
import Search from "./../home/search"
import NaviBar from "./NaviBar";

class MenuFinal extends React.Component {
       
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
                <Menu/>
                
            </div>
                
            
        );
    }
} 

export default MenuFinal;
