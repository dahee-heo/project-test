import React from 'react';
import GoogleMapReact from 'google-map-react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const MapView = () => {

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };
  const defaultProps = {
    center: {
      lat: 37.6009055,
      lng: 126.9485623,
    },
    zoom: 15,
  };

  return (
    <>
      <h1>MapView</h1>
      {/* <div style={{ height: '100vh', width: '100%' }}>
        <googleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_APIKEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></googleMapReact>
      </div> */}
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_APIKEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <CustomMarker lat={37.6009055} lng={126.9485623} text="₩10,000" /> */}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default MapView