import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { Polyline } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (
<GoogleMap
    ref={props.onMapLoad}
    defaultZoom={5}
    defaultCenter={{lat: 41.85, lng: -117.65}}
  >
  <Polyline
        path={this.state.lineCoordinates}
        geodesic={false}
        options={{
            strokeColor: '#38B44F',
            strokeOpacity: 1,
            strokeWeight: 7,
        }}
    />
</GoogleMap>
)));


export default class locationA extends Component {
  handleMapLoad = this.handleMapLoad.bind(this);

  handleMapLoad(map) {
    this.mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
    
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer(); 

    // directionsDisplay.setMap(map);

    const makeRequest = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay)
    };
    
    DirectionsService.route({   
        origin: 'San Francisco', 
        destination: 'Portland',   
        travelMode: google.maps.TravelMode.DRIVING,   
       },  
         (result, status) => {   
           if (status === google.maps.DirectionsStatus.OK) {   
             const overViewCoords = result.routes[0].overview_path;   
               this.setState({   
                 lineCoordinates: overViewCoords,
               });
           } else {
              console.warn(`error fetching directions ${status}`);
           }
         });
    makeRequest();
    
  }
  render() {
    return (
      <div style={{height: `500px`}}>
        <GettingStartedGoogleMap
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMapLoad={this.handleMapLoad}
        />
      </div>
     );
   }
 }
