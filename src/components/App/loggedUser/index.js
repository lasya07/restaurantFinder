import React from "react";
import Header from "./header";
import Cards from "./../Home/cards";
import Search from "./../Home/search"
import SearchImage from "./../Home/searchImage"

import {CardColumns} from "reactstrap";

import Filter from "./../Home/filter"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
 

class Loggedin extends React.Component {

   
       
    render() {
        return (
            <div >
            <div style ={{position:'relative',width:'100%'}}>
            <Header/>
            </div>
                <hr></hr>
                <div class="ml-auto" >
                <SearchImage/>
                </div>
                <br></br>
                <div style={{marginTop:'-200px'}}>
                <Search/> </div>
                <br></br>
                
                <div class="ml-auto" style={{position:'absolute',left:'250px',marginTop:'200px'}}>
                
                <label>Near Me</label>

                <CardColumns >
                    <Cards/> 
                </CardColumns>
                </div>
            </div>
        );
    }
} 

export default Loggedin;