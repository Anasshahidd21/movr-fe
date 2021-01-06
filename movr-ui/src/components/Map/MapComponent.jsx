import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import mapStyles from "./MapStyles";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
          lat: 45.4212,
          lng: -75.6972,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
