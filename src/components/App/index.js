import React from "react";

import Details from "./restoDetails/index";
import Login from "./login/login";
import MenuFinal from "./restoDetails/menuFinal"
import Signup from "./login/signup";
import Home from "./Home/index"
import Overview from "./restoDetails/index"
import PhotoFinal from "./restoDetails/photoFinal";
import ReviewFinal from "./restoDetails/ReviewFinal";
import HomeLogin from "./login/HomeLogin"
import DisplayCards from "./overview/index"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'





class App extends React.Component {

       
    render() {
        return (
            <Router>
            <Switch>
                <Route exact path ="/home" component ={Home}/>
                <Route path ="/login" component ={Login}/>
                <Route path ="/Signup" component ={Signup}/>
                <Route path ="/Details" component ={Details}/>
                <Route path ="/Menu" component ={MenuFinal}/>
                <Route path="/Overview" component={Overview}/>
                <Route path="/Photo" component={PhotoFinal}/>
                <Route path="/Review" component={ReviewFinal}/>
                <Route path="/overview" component ={DisplayCards}/>
                <Redirect to ="/home"/>
            </Switch>
        </Router> 
        //<DisplayCards/>
            
         );
    }
} 

export default App;
