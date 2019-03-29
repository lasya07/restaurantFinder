import React from "react";

import Details from "./restoDetails/index";

import Login from "./login/login";
import MenuFinal from "./restoDetails/menuFinal"
import Signup from "./login/signup";
import Home from "./Home/index"
import ModalLogin from "./ModalLogin/index"
import ModalRegister from "./ModalRegister/index"
import PhotoFinal from "./restoDetails/photoFinal";
import ReviewFinal from "./restoDetails/ReviewFinal";
import loggedin from "./loggedUser/index"
import Horizontal from "./restoDetails/slider"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import SearchDetails from "./searchDetails";
import GetL from "./searchDetails/getL";
import MapView from "./maps/MapV"
import AddRestaurants from "./restoDetails/addRestaurants";
import Addfilters from "./restoDetails/addfilters";
import RouteDir from "./maps/RoutingMachine"


class App extends React.Component {

       
    render() {
        return (
        //     <Router>
        //     <Switch>
        //         <Route exact path ="/home" component ={Home}/>
        //         <Route path ="/login" component ={Login}/>
        //         <Route path ="/Signup" component ={Signup}/>
        //         <Route path="/Search" component = {SearchDetails}/>
              
        //         <Route path ="/Menu" component ={MenuFinal}/>
            
        //         <Route path="/Photo" component={Horizantal}/>
        //         <Route path="/Review" component={ReviewFinal}/>
        //         <Route path="/Details" component={Details}/>
        //         <Route exact path="/loggedin" component={loggedin}/>
        //         <Route exact path="/Register" component={ModalRegister} />
                
        //         <Redirect to ="/home"/>
        //     </Switch>
        // </Router> 
          // <RouteDir/>
        //<Horizontal/>
        //<MapView/>
        <Addfilters/>
        );
    }
} 

export default App;
