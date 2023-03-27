import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, HStack, Flex, Text } from "@chakra-ui/react";
import Dash from "../components/Dash";
import GetData from "../components/GetData";
import Selection from "../components/Selection";

import "react-datepicker/dist/react-datepicker.css";
//to do list:
//eliminar el acordeon (done)
//hacer mas interactivo el board
//buscar una manera de elegir un dia y mes (done)
//hacer que la hora muestre la hora (uh?)
//descargas
const Board2 = () => {
  const unit = "hour";
  const datos = GetData();
  const Navigate = useNavigate();

  const HandleButtonClick = () => {
    Navigate("/board");
  };

  const dashstyle = {
    p: "20px",
    h: "550px",
    boxShadow: "lg",
    rounded: "md",
    bg: "#FFFFFF",
  };

  return (
    <>
      <Flex p={10} pt={"90px"}>
        <HStack>
          <Box sx={dashstyle} w="500px">
            <Dash datos={datos} label={"Ejemplo"} unit={unit} type={"line"}/>
          </Box>
          <Box sx={dashstyle} w={"62rem"}>
            <Box>
              <Text fontSize={30}>Ejemplo</Text>
            </Box>
            <Box pb={"10px"}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
                eiusmod tempor incididunt ut labore et dolore.
              </Text>
            </Box>
            <Box>
              filtros
            </Box>
            <Box>
              <Selection/>
            </Box>

            <HStack >
              <Button colorScheme={"green"} variant="solid">
                Descargar archivo .XLSX
              </Button>
              <Button colorScheme={"green"} variant="outline">
                Descargar archivo .CSV
              </Button>
            </HStack>
          </Box>
        </HStack>
      </Flex>
      <Box p="10px" pl={10}>
        <Button colorScheme="blue" onClick={HandleButtonClick}>
          Atras
        </Button>
      </Box>
    </>
  );
};
export default Board2;
