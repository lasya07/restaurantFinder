import React from "react";
import Header from "./header";
import Cards from "./cards";
import Search from "./search"
import SearchImage from "./searchImage"
import {CardDeck} from "reactstrap";
import {CardColumns} from "reactstrap";
import Login from "../login/login.js";
import Filter from "./filter"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'


class Home extends React.Component {
       
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
                <div>
                <Search/> </div>
                <br></br>
                
                <div class="ml-auto" style={{position:'absolute',left:'250px',marginTop:'200px'}}>
                
                <label>Near Me</label>
                <CardColumns>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </CardColumns>
                </div>
            </div>
        );
    }
} 

export default Home;