import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
const Map = () => {
  const position = [-41.49654, -72.985169];
  const customIcon = new Icon({
    iconUrl: "../../public/Basic_green_dot.png",
    iconSize: [30, 30],
  });
  return (
    <div>
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>???</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Map;
