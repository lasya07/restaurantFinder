import React from "react"

import { render } from 'react-dom'
import MdOut from 'react-ionicons/lib/MdHeartOutline'
import MdHeart from 'react-ionicons/lib/MdHeart'


export default class bookmark extends React.Component {
 
    constructor(props){
        super(props);
        
     
        this.addFav = this.addFav.bind(this);
        this.removeFav = this.removeFav.bind(this);
        this.state = {
          visibility : false,
          color: 'red'
        }
      }

      addFav() {
        console.log("Click");
        this.setState({visibility:true})
        this.setState({color:'red'})
          
      }

      removeFav() {
        this.setState({visibility:false})
        this.setState({color:'red'})
      }
      onMouseEnterHandler() {
        console.log("Enter")
       
        // x.beat="true";
    }

    onMouseLeaveHandler() {
        console.log("Leave")
        // x.beat="false"
   
    }  


    render(){
        return(
            <div onMouseOver={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler} >
            {  
                     (!this.state.visibility)?( <MdOut fontSize="60px"  onClick={this.addFav}/>):( <MdHeart fontSize="60px" color={this.state.color} onClick={this.removeFav}/> )     
            }
          
           
            
             
            </div>
        )

}


}
