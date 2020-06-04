import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

function MyApp2(props) {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
    // <GoogleMap  onClick={this.handleClickedMap }  />

    // handleClickedMap = (e) => {
    //    let latitude = e.latLng.lat()
    //    let longtitude  = e.latLng.lat()
    //    console.log(lat, lng)
    // }
  )
}

export default withScriptjs(withGoogleMap(MyApp2));