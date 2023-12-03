import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import 'popper.js';
import './App.css';
import React, { useState, useEffect } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import Form from './components/Form.js';
import SearchField from './components/SearchField';
import ResultsList from './components/ResultsList';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'



const App = () => {

  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({ position: [37.7794, -122.4914], text: 'San Francisco: 37.7749° N, 122.4194° W' });
  const [resultsList, setResultsList] = useState([]);

  useEffect(() => {
    if (map) {
      map.zoomControl.remove();
    }
  }, [map]);

  const onSearch = async ( address ) => {
    const response = await fetch('http://localhost:3001/geocoding/geocode?' + new URLSearchParams({
        address: address
    }));
    const location = await response.json();
    setCoordinates({ position: [location.lat, location.lng], text: address})
    if (map) {
      map.panTo(coordinates.position, 10);
    }
  };

  const onClick = async ( {budget, radius, spots } ) => {
    const response = await fetch('http://localhost:3001/lots/lots?' + new URLSearchParams({
        point: `${coordinates.position[0]}|${coordinates.position[1]}`,
        radius: radius,
        budget: budget,
        spots: spots
    }));
    setResultsList(await response.json());
  }

  return (

    <div>
      <div id="map" style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <MapContainer
          center={[37.7794, -122.4914]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
          ref={setMap} // Set the map instance using whenCreated prop
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {resultsList.map((lot, index) => (
                <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} id={index} position={[lot.point.coordinates[1], lot.point.coordinates[0]]}>
                    <Popup>
                      {lot.name}
                    </Popup>
                </Marker>
            ))}
          <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} position={coordinates.position}>
            <Popup>
              {coordinates.text}
            </Popup>
        </Marker>
        </MapContainer>
      </div>
      <SearchField onSearch={onSearch}></SearchField>
      <Form onClick={onClick}></Form>
      <ResultsList lots={resultsList}></ResultsList>
    </div>
  );
};

export default App;
