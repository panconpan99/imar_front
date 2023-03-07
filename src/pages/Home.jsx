import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  HStack,
  VStack,
  FormLabel,
  Checkbox,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

import Map from "../components/Map";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate = useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

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
  const handleButtonClick =() =>{
    if (isChecked1) {
      Navigate("/Board");
    } else {
      if (isChecked2){
        alert('Sensor no disponible');
      }else{
        setIsFormValid(true);
      }
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HStack>
          <Box
            bg="#FFFFFF"
            borderRadius={"lg"}
            color="black"
            boxShadow="lg"
            w={"625px"}
            h={"660px"}
            alignItems="center"
            align="center"
            pt={"25px"}
          >
            <Map />
          </Box>
          <Flex
            borderRadius={"lg"}
            bg="#ACD6FF"
            color="black"
            boxShadow="lg"
            w={"325px"}
            h={"660px"}
            pt={"20px"}
            pl={"9px"}
          >
            <FormControl isInvalid={isFormValid} >
              <FormLabel>Sensores disponibles</FormLabel>
              <VStack align ="left" p="20px">
                <Checkbox
                  colorScheme="blue"
                  value="1"
                  isChecked={isChecked1}
                  onChange={handleCheckbox1Change}
                >
                  SENSOR 1
                </Checkbox>
                <Checkbox
                  colorScheme="blue"
                  value="2"
                  isChecked={isChecked2}
                  onChange={handleCheckbox2Change}
                >
                  SENSOR 2 [CONSTRUYENDO]
                </Checkbox>
                <FormErrorMessage>Debes seleccionar al menos un checkbox</FormErrorMessage>
                <Button size="lg" onClick={handleButtonClick}>Ingresar</Button>
              </VStack>
            </FormControl>
          </Flex>
        </HStack>
      </div>
    </>
  );
}
export default Home;
