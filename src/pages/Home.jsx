import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import {
  Box,
  FormControl,
  HStack,
  VStack,
  FormLabel,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
function Home() {
  const position = [-41.494669, -72.985449];
  const customIcon = new Icon({
    iconUrl: "/icons8-select-24.png",
    iconSize: [33, 33],
  });
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckbox1Change = (event) => {
    if (event.target.checked) {
      setIsChecked1(true);
      setIsChecked2(false);
    } else {
      setIsChecked1(false);
    }
  };

  const handleCheckbox2Change = (event) => {
    if (event.target.checked) {
      setIsChecked2(true);
      setIsChecked1(false);
    } else {
      setIsChecked2(false);
    }
  };
  return (
    <>
      <div>
        <HStack>
          <Box
            bg="#EFEFEF"
            borderRadius={"lg"}
            color="black"
            w={"625px"}
            h={"660px"}
            alignItems="center"
            align="center"
          >
            <div className="map" id="map">
              <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>???</Popup>
                </Marker>
              </MapContainer>
            </div>
          </Box>
          <Box bg="#C8F9A1" color="black" w={"325px"} h={"660px"}>
            <FormControl>
              <FormLabel>Sensores disponibles</FormLabel>
              <VStack>
                <Checkbox colorScheme="green" value="1" isChecked={isChecked1} onChange={handleCheckbox1Change}>
                  SENSOR 1
                </Checkbox>
                <Checkbox colorScheme="green" value="2" isChecked={isChecked2} onChange={handleCheckbox2Change}>
                  SENSOR 2 [CONSTRUYENDO]
                </Checkbox>
              </VStack>
              <Button size="lg">
                Ingresar
              </Button>
            </FormControl>
          </Box>
        </HStack>
      </div>
    </>
  );
}
export default Home;
