import React from "react"
import logo from "../image/Search.jpg"
import { Container, Row, Col } from 'reactstrap';


class Search extends React.Component{

    render() {
        const style = {
            height : 150,
            width : '100%'
       };

            
        return(
            <div> 
                
                    <Row >
                    <div class="col-md-3" style={{textAlign:'center'}}>
                        <select name="Places" style={{position: 'relative',width:'50%'}}>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                        </div>
                        <div class="col-md-6">
                        <input type="text" placeholder="Search for restaurant and cuisine .." style={{width:'100%'}}/> 
                        </div>
                        <div class="col-md-3" style={{textAlign:'center'}}>
                        <button type="submit" style={{position: 'relative',width : '50%'}}>Submit</button>
                        </div>
                    </Row>
              
            </div>
           
        )
    }

}

export default Search;