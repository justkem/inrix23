import 'leaflet/dist/leaflet.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';



const App = () => {

  const [map, setMap] = useState(null);
  const [showSF, setShowSF] = useState(true);

  useEffect(() => {
    if (map) {
      // Perform any additional map-related operations here if needed
    }
  }, [map]);

  const toggleCoordinates = () => {
    setShowSF((prevShowSF) => !prevShowSF);
  };

  const coordinates = showSF
    ? { position: [37.7794, -122.4914], text: 'San Francisco: 37.7749° N, 122.4194° W' }
    : { position: [50.1109, 8.6821], text: 'Frankfurt: 50.1109° N, 8.6821° E' };

  return (

    <div>
      <div id="map" style={{ width: '50%', height: '650px' }}>  
        <MapContainer
          center={coordinates.position}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
          whenCreated={setMap} // Set the map instance using whenCreated prop
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates.position}>
            <Popup>
              {coordinates.text}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      
      <button onClick={toggleCoordinates}>Toggle Coordinates</button>
    </div>

  );
};

export default App;
