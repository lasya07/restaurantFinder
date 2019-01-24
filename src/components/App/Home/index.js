import React from "react";
import Header from "./header";
import Cards from "./cards";
import Search from "./search"
import {CardDeck} from "reactstrap";
import {CardColumns} from "reactstrap";

class Home extends React.Component {
       
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

export default Home;
