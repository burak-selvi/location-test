import React, { useState } from "react";
// import MyCamera from "./MyCamera";
// import './App.css';
// import MyApp2 from './MyApp2';
// import SimpleMap from './MyMap';
// import { GoogleComponent } from 'react-google-location'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import MyComp1 from './MyComp1';
// import Input from './Input';,

// import Camera from "react-html5-camera-photo";
// import "react-html5-camera-photo/build/css/index.css";
// import ImagePreview from "./ImagePreview";

function App() {
  // const [dataUri, setDataUri] = useState("");
  // const [value, setValue] = useState("");

  // console.log(value.replace(/\s/g, ""));

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // }

  // const [a, setA] = useState({ place: null });
  // const [startDate, setStartDate] = useState(new Date());

  // function handleTakePhoto(dataUri) {
  //   console.log("takePhoto");
  //   console.log("dataUri", dataUri);
  //   setDataUri(dataUri);
  // }

  // const handleSave = () => {};

  // const isFullscreen = false;
  // const API_KEY = "AIzaSyDjvRB2R3fsmcmU-pXTHvhIKOTLyJ30wNQ";
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: null,
    addressDetails: null,
  });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handleLocationError
      );
    } else {
      alert("Error");
    }
  };
  console.log(location);
  const getCoordinates = (position) => {
    setLocation((prev) => {
      return {
        ...prev,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });
  };

  const getAddress = () => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${location.latitude}+${location.longitude}&key=bda82d2c4d8749838f28eb586eb645df&language=tr&pretty=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setLocation((prev) => {
          return {
            ...prev,
            address: data.results[0].formatted,
            addressDetails: data.results[0].components,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable");
        break;
      case error.TIMEOUT:
        alert("The request to get location timed out");
        break;
      case error.UNKNOW_ERROR:
        alert("An unknown error occures");
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <h2>Location Example</h2>
      <button onClick={getLocation}>Get coordinates</button>
      <button onClick={getAddress}>Get address</button>
      <h4>Coordinates</h4>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <h4>Google maps reverese geocoding</h4>
      <p>Address: {location.address}</p>
      {location.addressDetails && (
        <ul>
          <li>Country: {location.addressDetails.country}</li>
          <li>City: {location.addressDetails?.city}</li>
          <li>Town: {location.addressDetails.town}</li>
          <li>District: {location.addressDetails.suburb}</li>
          <li>Road: {location.addressDetails.road}</li>
        </ul>
      )}
      {
        // <img
        //   src={`https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${location.latitude},${location.longitude}&key=${API_KEY}`}
        //   alt=""
        // />
        // <img
        //   src={`https://www.openstreetmap.org/#map=19/${location.latitude}/${location.longitude}`}
        //   alt=""
        // />
        /* {dataUri ? (
        <ImagePreview
          dataUri={dataUri}
          isFullscreen={isFullscreen}
          setDataUri={setDataUri}
          handleSave={handleSave}
        />
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhoto}
          isFullscreen={isFullscreen}
        />
      )} */
      }
      {/* <MyCamera setDataUri={setDataUri} /> */}
    </div>
  );
}

export default App;
