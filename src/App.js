import 'leaflet/dist/leaflet.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const App = () => {

  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      // Perform any additional map-related operations here if needed
    }
  }, [map]);

  return (

    <div>
      <div id="map" style={{ width: '50%', height: '700px' }}>  
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
          whenCreated={setMap} // Set the map instance using whenCreated prop
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

    </div>

  );
}

export default App;
