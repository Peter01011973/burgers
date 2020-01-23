import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google, coords: { latitude = 50.031144, longitude = 36.342735 }, mapStyles }) => {

    return (
        <Map
            google={google}
            zoom={15}
            style={mapStyles}
            initialCenter={{
                lat: latitude,
                lng: longitude
            }}
        >
            <Marker position={{
                lat: latitude,
                lng: longitude
            }} />
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDR_cSSpzVX7EEA3ZX1_R7IRphe5xA5kwI'
})(MapContainer);