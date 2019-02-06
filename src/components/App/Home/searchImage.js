import React from "react"
import image1 from "../image/search.jpg"
import {Image} from "react-bootstrap"


class SearchImage extends React.Component {
       render() {
        return(
            
            
                <Image   src={image1}   responsive/>
            
            
            )
    }
}

export default SearchImage;