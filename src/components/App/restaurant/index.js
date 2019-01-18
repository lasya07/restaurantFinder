import React from "react"

class Home extends React.Component{

    render() {
        return(
            <form onSubmit = {this.onFormSubmit} >
                <h1>WEB APP</h1>
                <hr></hr>
                <select name="Places">
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
                <input type="text" placeholder="Search.."/> 
                <button type="submit">Submit</button>
                <label>Team: <input type = "text" onChange = {this.onTeamChange} /></label>
                <button>Submit</button>
            </form>
           
        )
    }

}

export default Home;