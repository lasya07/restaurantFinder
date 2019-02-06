import React from "react";
import Photo from "./photos";
import Bread from "./breadCrumbs"
import Header from "./../home/header"
import Search from "./../home/search"
import NaviBar from "./NaviBar";
import Rating from "./rating";
import Review from "./reviews";
import { Button } from "react-bootstrap";

class ReviewFinal extends React.Component {
       
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
                <Rating/>
                <br/>
                <Review/>
                <Button> Submit</Button>
            </div>
                
            
        );
    }
} 

export default ReviewFinal;
