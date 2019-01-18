import React from "react"
import logo from "../image/image2.jpeg"


class Header extends React.Component{

    render() {
        const style = {
            position:'relative',
            height : 150,
            width : '100%'
       };
       const name_style = {
           position: 'absolute',
           top: '20px',
           left :'520px',
           fontSize:75,
           color: 'white'
       }
       const button ={
        position: 'absolute',
        top: '15px',
        left :'1000px',
        fontSize:20,
        color: 'white'
       }
    
        return(
            
                <div className="logo" >
                    <img src={logo}   style = {style}/>
                    <div id="name" style = {name_style}>WEB APP</div>
                    <div id = "button" style = {button}>Sign Up</div>
                </div>    
                            
           
        )
    }

}

export default Header;