
import React from "react";
import Header from "./header";
import Final from "./final"
import Cards from "./cards";
import Search from "./search"
import {CardDeck} from "reactstrap";
import {CardColumns} from "reactstrap";
import Login from "../login/login.js";
import Signup from "../login/signup";
import Details from "../restoDetails/index"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'



class Home extends React.Component {
       
    render() {
        return (
            
            
            <Router>
                <Switch>
   

                    <Route exact path ="/home" component ={Final}/>
                    <Route exact path ="/login" component ={Login}/>
                    <Route exact path ="/Signup" component ={Signup}/>
                    <Route path ="/Details" component ={Details}/>
                    <Redirect to ="/home"/>
                </Switch>
                    
            </Router> 


        );
    }
} 

export default Home;


