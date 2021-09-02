//file: src/pages/checkin.js
import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import ReactDOM from 'react-dom';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

 componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        center.lat = position.coords.latitude
        center.lng = position.coords.longitude
        console.log("Latitude is :", center.lat);
        console.log("Longitude is :", center.lng);
      });
    }
  }

  componentDidUpdate() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        center.lat = position.coords.latitude
        center.lng = position.coords.longitude
        console.log("Latitude is :", center.lat);
        console.log("Longitude is :", center.lng);
      });
    }
  }

  render() {
    return (
    <div>
        <h4>Current Location: {center.lat} , {center.lng} </h4>
        <Map
          google={this.props.google}
          zoom={14
}          style={mapStyles}
          initialCenter={{
            lat: center.lat,
            lng: center.lng
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'Your Position'}
        />
        </Map>
      </div>
    );
  }
  
  /*render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React. {center.lat} and {center.lng} </h4>
      </div>
    );
  }
  */
}
ReactDOM.render(
  <CheckIn/>,
  document.getElementById('root')
);
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBJuqWQbUsafjLHYNcgu_S0HV_lKwecwHQ'
})(CheckIn);