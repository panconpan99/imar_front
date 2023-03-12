import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

const Map = () => {
  const position1 = [-41.49654, -72.985169];
  const customIcon1 = new L.Icon({
    iconUrl: require("../images/Basic_green_dot.png"),
    iconSize: [30, 30],
  });
  const position2 = [-41.49756, -72.986270];
  const customIcon2 = new L.Icon({
    iconUrl: require("../images/Basic_red_dot.png"),
    iconSize: [30, 30],
  });
  return (
    <div>
      <MapContainer center={position1} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position1} icon={customIcon1}>
          <Popup>Baliza 1</Popup>
        </Marker>
        <Marker position={position2} icon={customIcon2}>
          <Popup>Baliza 2</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
