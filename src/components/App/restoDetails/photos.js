import React from "react"
import image1 from "../image/image1.jpeg"
import image2 from "../image/image2.jpeg"
import {Image} from "react-bootstrap"


class Photo extends React.Component {
       render() {
        return(
            
            <div>
                <Image   src={image1} style={{height:'auto',marginLeft: '80px',marginTop:'30px'}}  responsive/>
                <Image   src={image1} style={{height:'auto',marginLeft: '80px',marginTop:'30px'}}  responsive/>
                <Image   src={image1} style={{height:'auto',marginLeft: '80px',marginTop:'30px'}}  responsive/>
                <Image   src={image1} style={{height:'auto',marginLeft: '80px',marginTop:'30px'}}  responsive/>
            </div>
            
            )
    }
}

export default Photo;