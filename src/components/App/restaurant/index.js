import React from "react"

class Home extends React.Component{

    render() {
        return(
            <form onSubmit = {this.onFormSubmit} >
                <h1>WEB APP</h1>
                <hr></hr>
                <select name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <label>Alias:<input type = "text" onChange = {this.onAliasChange} /></label>
                <label>Team: <input type = "text" onChange = {this.onTeamChange} /></label>
                <button>Submit</button>
            </form>
           
        )
    }

}

export default Home;