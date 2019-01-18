import React from "react"
import logo from "../image/image2.jpeg"

class Header extends React.Component{

    render() {
        const style = {
            height : 150,
            width : '100%'
       };
       const name_style = {
        color : 'pink'
       }
        return(
            
                <div className="logo" >
                    <img src={logo}   style = {style}/>
                    <div class="name" style = {name_style}>WEB APP</div>
                </div>                
           
        )
    }

}

export default Header;