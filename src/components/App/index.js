import React from "react";
import Header from "./home/header";
import Cards from "./home/cards";
import Search from "./Home/search"
import {CardDeck} from "reactstrap";
import {CardColumns} from "reactstrap";

class App extends React.Component {
       
    render() {
        return (
            
            <div>
                <Header/>
                <div style={{position:'absolute',left:'200px'}}>
                <hr></hr>
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

export default App;
