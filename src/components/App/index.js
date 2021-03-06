import React from "react";


import Login from "./login/login";
import MenuFinal from "./restoDetails/menuFinal"
import Signup from "./login/signup";
import Home from "./Home/index"
import ModalLogin from "./ModalLogin/index"
import ModalRegister from "./ModalRegister/index"
import PhotoFinal from "./restoDetails/photoFinal";
import ReviewFinal from "./restoDetails/ReviewFinal";
import loggedin from "./loggedUser/index"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import SearchDetails from "./searchDetails";
import Details from "./restoDetails/index";
import addRestaurants from "./profilePage/addRestaurants";
import ProfilePage from "./profilePage";
import addRestaurant1 from "./profilePage/addrestaurant1";





class App extends React.Component {
       
    render() {
        return (
            <Router>
            <Switch>
                <Route exact path ="/home" component ={Home}/>
                <Route path ="/login" component ={Login}/>
                <Route path ="/Signup" component ={Signup}/>
                <Route path="/Search" component = {SearchDetails}/>
              
                <Route path ="/Menu" component ={MenuFinal}/>
            
                <Route path="/Photo" component={PhotoFinal}/>
                <Route path="/Review" component={ReviewFinal}/>
                <Route path="/Details" component={Details}/>
                <Route exact path="/loggedin" component={loggedin}/>
                <Route exact path="/Register" component={ModalRegister} />
                <Route exact path="/addRestaurant" component={addRestaurants} />
                <Route exact path="/addRestaurant1" component={addRestaurant1} />
                <Route exact path="/ProfilePage" component={ProfilePage}/>
                <Redirect to ="/home"/>
            </Switch>
        </Router> 
      
      
        
        );
    }
} 

export default App;
