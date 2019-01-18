import React from "react";
import Header from "./home/header";
import Cards from "./home/cards";
import {CardDeck} from "reactstrap";
import {CardColumns} from "reactstrap";

class App extends React.Component {
       
    render() {
        return (
            
                <CardColumns>
                <Cards/>
                {/* <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/><Cards/>
                <Cards/> */}
                </CardColumns>
                // <div>
                // <Cards/>
                // <Cards/>
                // </div>

        );
    }
} 

export default App;
