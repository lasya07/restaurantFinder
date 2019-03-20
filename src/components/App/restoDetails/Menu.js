import React from "react"
import image1 from "../image/image1.jpeg"
import image2 from "../image/image2.jpeg"
import {Image, Card} from "react-bootstrap"
import index from "./index"
import menu1 from "../image/menu1.jpg"
import {Carousel} from "react-bootstrap"


class Menu extends React.Component {
    constructor(props) {
        super(props);      
    }
   
    
       render() {
        console.log(this.props.id)
        return(
            <Card >
            <label>Menu</label>
            <center>
               
            <Carousel style = {{width:'30%'}} interval = '100000'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={menu1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={menu1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={menu1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            </center>
            <br></br>
            </Card>
            )
    }
}

export default Menu;