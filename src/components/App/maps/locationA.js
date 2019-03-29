
import React, { createRef, Component } from 'react'
import L from 'leaflet'
import {Map, Marker, Popup, TileLayer,ZoomControl,Rectangle} from 'react-leaflet'
import RoutingMachine from './RoutingMachine'


export default class locationA extends Component{
    state = {
        hasLocation: false,
        latlng: {
          lat: 51.505,
          lng: -0.09,
        },
      }

    mapRef = createRef(Map);

    handleClick = () => {
        const map = this.mapRef.current
        if (map != null) {
          map.leafletElement.locate()
        }
      }
      handleLocationFound =(e) => {
        this.setState({
          hasLocation: true,
          latlng: e.latlng,
        })
      }

  render () {
    const marker = this.state.hasLocation ? (
        <Marker position={this.state.latlng}>
          <Popup>You are here</Popup>
        </Marker>
      ) : null
  
      return (
        <Map
          center={this.state.latlng}
          length={4}
          onClick={this.handleClick}
          onLocationfound={this.handleLocationFound}
          ref={this.mapRef}
          style={{ height: '40px', width: '50%' }}
          zoom={13}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <RoutingMachine
                        color="#fff"
                        map={this.map}
                        //road={this.props.road}
                        road={this.state.stateRoute}
                    />
          {marker}
        </Map>
      )
    }
  }

