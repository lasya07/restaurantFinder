import React from "react"
import logo from "../image/image2.jpeg"

class Home extends React.Component{

    render() {
        const style = {
            height : 150,
            width : '100%'
       };
            
        return(
            <div>
            
                <hr></hr>
                <select name="Places">
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
                <input type="text" placeholder="Search.."/> 
                <button type="submit">Submit</button>
                 
            </div>
           
        )
    }

}

export default Home;