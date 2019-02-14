import React from "react";
<<<<<<< HEAD
import Hello from "./incrementer/index";
import Incrementer from "./incrementer/index";
import Table from "./table/index";
import View from "./view/index";
import Form from "./form/index"
import 'bootstrap/dist/css/bootstrap.css';
=======


import Details from "./restoDetails/index";
import Login from "./login/login";
import MenuFinal from "./restoDetails/menuFinal"
import Signup from "./login/signup";
import Home from "./Home/index"
import Overview from "./restoDetails/index"
import PhotoFinal from "./restoDetails/photoFinal";
import ReviewFinal from "./restoDetails/ReviewFinal";
>>>>>>> 240cfacbc958f5ad9719b61f313d9fc49ce2a9ad

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Login from "./login/login";
import signup from "./login/signup";



class App extends React.Component {
<<<<<<< HEAD
    
    // constructor(props) {
    //     super(props)
    //     this.createRecord = this.createRecord.bind(this)
    // }
    // state = {
    //     tableValues: []                          
    // }
    // fetchList() {
    //     let self = this;
    //     const request = new Request('/heroes',{method: 'GET', headers: {"content-type": "application/json"}});                                    
    //     fetch(request)
    //     .then(res => res.json())
    //     .then(function(data){
    //         self.setState({'tableValues': data});
    //     });
    // }

    // componentDidMount() {
    //     this.fetchList()
    // }

    // createRecord(name, alias, team) {
    //     const self = this;
    //     var body = {
    //         name: name,
    //         alias: alias,
    //         team: team
    //     };
    //     console.log(name, alias,team)
    //     var request = new Request('/heroes',{
    //     method: 'POST', 
    //     body: JSON.stringify(body),
    //     headers:{
    //         'content-type': 'application/json'
    //     }
    // });
    //     fetch(request)
    //     .then(function(){
    //         self.fetchList();
    //     });
    // }

   
    render() {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path = "/List" render = {(props) => {
                        return <Table 
                                    values = {this.state.tableValues} 
                                    headers = {tableHeaders} 
                                    history = {props.history} />                                  
                    }}/>

                    <Route exact path = "/View/:id" component = {View}/>

                    <Route exact path = "/Create" render = { (props) => {
                        
                        return <Form 
                        formSubmitCallback = {this.createRecord}
                        history = {props.history}/>
                    }}/> */}
                    <Route exact path = "/Login" component = {Login}/>

                    <Route exact path = "/signup" component = {signup}/>

                    <Redirect to = "/Login" />
                </Switch>                                                                   
            </Router>

=======
       
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
                <Redirect to ="/home"/>
            </Switch>
        </Router> 
        
>>>>>>> 240cfacbc958f5ad9719b61f313d9fc49ce2a9ad
        );
    }
} 

export default App;
