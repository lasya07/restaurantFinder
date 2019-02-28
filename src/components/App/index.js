import React from "react";

import Details from "./restoDetails/index";
import Login from "./login/login";
import MenuFinal from "./restoDetails/menuFinal"
import Signup from "./login/signup";
import Home from "./Home/index"
import Overview from "./restoDetails/index"
import PhotoFinal from "./restoDetails/photoFinal";
import ReviewFinal from "./restoDetails/ReviewFinal";
<<<<<<< HEAD
import HomeLogin from "./login/HomeLogin"
import DisplayCards from "./overview/index"
=======
import loggedin from "./loggedUser/index"
import Example from "./ModalLogin";

>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import SearchDetails from "./searchDetails";






class App extends React.Component {

       
    render() {
        return (
<<<<<<< HEAD
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
=======
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
        <Example/>
        
        );
>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
    }
} 

export default App;
