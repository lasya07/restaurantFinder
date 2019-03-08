import React from "react";

import Details from "./restoDetails/index";
import Login from "./login/login";
import MenuFinal from "./restoDetails/menuFinal"
import Signup from "./login/signup";
import Home from "./Home/index"
import Overview from "./restoDetails/index"
import PhotoFinal from "./restoDetails/photoFinal";
import ReviewFinal from "./restoDetails/ReviewFinal";
import loggedin from "./loggedUser/index"
import Example from "./ModalLogin";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import SearchDetails from "./searchDetails";
import GetLocation from "./searchDetails/getLocation";






class App extends React.Component {

       
    render() {
        return (
        //     <Router>
        //     <Switch>
        //         <Route exact path ="/home" component ={Home}/>
        //         <Route path ="/login" component ={Login}/>
        //         <Route path ="/Signup" component ={Signup}/>
        //         <Route path ="/Details" component ={Details}/>
        //         <Route path ="/Menu" component ={MenuFinal}/>
        //         <Route path="/Overview" component={Overview}/>
        //         <Route path="/Photo" component={PhotoFinal}/>
        //         <Route path="/Review" component={ReviewFinal}/>
        //         <Route exact path="/Search" component={SearchDetails}/>
        //         <Route exact path="/loggedin" component={loggedin}/>
        //         <Redirect to ="/home"/>
        //     </Switch>
        // </Router> 
        //<Example/>
        <GetLocation/>
        
        );
    }
} 

export default App;
