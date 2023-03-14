import React from "react";
import { useState } from "react";
import {
  Box,
  FormControl,
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
  const handleButtonClick = () => {
    if (isChecked1) {
      Navigate("/Board");
    } else {
      if (isChecked2) {
        alert("Baliza no disponible");
      } else {
        setIsFormValid(true);
      }
    }
  };
  return (
    <>
      <div>
        <Box
          p={"5px"}
          pl={"10px"}
          pos={"absolute"}
          borderRadius={"md"}
          bg="#FFFFFF"
          color="black"
          boxShadow="lg"
          h="auto"
          w="auto"
          zIndex={1000}
          display="block"
          top={40}
        >
          <FormControl isInvalid={isFormValid}>
            <FormLabel>Balizas disponibles</FormLabel>
            <VStack align="left" p="20px">
              <Checkbox
                colorScheme="blue"
                isChecked={isChecked1}
                onChange={handleCheckbox1Change}
              >
                Baliza 1
              </Checkbox>
              <Checkbox
                colorScheme="blue"
                isChecked={isChecked2}
                onChange={handleCheckbox2Change}
              >
                Baliza 2 [Construyendo]
              </Checkbox>
              <FormErrorMessage>
                Debes seleccionar al menos un checkbox
              </FormErrorMessage>
              <Button
                colorScheme={"blue"}
                variant="solid"
                size="lg"
                onClick={handleButtonClick}
              >
                Ingresar
              </Button>
            </VStack>
          </FormControl>
        </Box>
        <Map />
      </div>
    </>
  );
};
export default Home;
