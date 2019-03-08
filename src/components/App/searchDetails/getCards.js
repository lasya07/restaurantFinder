import React from 'react';

class GetCards extends React.Component {

    constructor(props){
        super(props);
        lat=(this.props.location.state.name)
        console.log(name)
        this.state = {
          data : []
        }
      }



componentDidMount() {
    //const url = "http://10.10.200.12:9000/foods"; 
    const url = "http://localhost:9000/search?name="+name;
    console.log(url) 
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST');

    fetch(url, {
        headers: headers,
        method: 'GET'
    })
    .then(response => response.json())
    .then(contents => {console.log("in fetch: "+ contents);
                        this.setState ({
                        data : contents})
        })
    .catch(() => console.log("Can’t access " + url + " response. "))
  }


render() {
   
    return (
        <div>
            
            {
            
            ((localStorage.getItem("AccessToken") == null )?(<Header/>):(<LoggedHeader/>))
          }
            <br></br>
            <div style={{position:'relative'}}>
            
            <Search/> 
            <br></br>
            <label>Search Results:</label>
            <br></br>
            <div>{this.state.data.map((RestaurantDetails,index) =>{
            return(
                <CardColumns >
                    <Card width="100%">
                    <CardImg top width="100%" alt="Card image cap"/>
                    <CardBody> 
                        <div key={index}>
                            <CardTitle>{RestaurantDetails.name}</CardTitle>
                            <CardSubtitle>{RestaurantDetails.phNo}</CardSubtitle>
                            <CardText>{RestaurantDetails.address}</CardText>
                            <Button onClick={this.onButtonChange}>Button</Button> 
                            </div>
                        
                    </CardBody>
                    </Card>
                    </CardColumns>
                )
            })}
            </div>
            <br></br>
            </div>
            
        </div>
            
        
    );
}
}
export default GetCards;
 