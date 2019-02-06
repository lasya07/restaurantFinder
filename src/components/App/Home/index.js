import React from "react";
import Header from "./header";
import Cards from "./cards";
import Search from "./search"
import SearchImage from "./searchImage"
import {CardDeck} from "reactstrap";
import {CardColumns} from "reactstrap";
import Login from "../login/login.js";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'


class Final extends React.Component {
       
    render() {
        return (
            
            <div>
                <Header/>
                <div style={{position:'absolute',left:'200px'}}>
                <hr></hr>
                <SearchImage/>
                <Search/> 
                <br></br>
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

export default Final;