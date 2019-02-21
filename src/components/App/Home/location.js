import React from "react"
import axios from 'axios'

class location extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: null,
            coordinates: [],
            forecast: []
          };
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
 

}
