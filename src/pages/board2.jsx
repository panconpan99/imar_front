import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, HStack, Flex, Text } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import Dash from "../components/Dash";
import GetData from "../components/GetData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//to do list:
//eliminar el acordeon (done)
//hacer mas interactivo el board
//buscar una manera de elegir un dia y mes
//descargas
const Board2 = () => {
  const unit = "hour";
  const datos = GetData();
  const Navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
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
      <Flex p={10}>
        <HStack>
          <Box sx={dashstyle} w="500px">
            <Dash datos={datos} tipo={"Ejemplo"} unit={unit} />
          </Box>
          <Box sx={dashstyle} w={"1000px"}>
            <Box>
              <Text fontSize={30}>Ejemplo</Text>
            </Box>
            <Box pb={"10px"}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
                eiusmod tempor incididunt ut labore et dolore.
              </Text>
            </Box>
            <Box p={"10px"}>
              Hora: 
              <RangeSlider aria-label={['min','max']} min={0} max={23} step={1} defaultValue={[0, 6]} >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack/>
                </RangeSliderTrack>
                <RangeSliderThumb index={0}/>
                <RangeSliderThumb index={1}/>
              </RangeSlider>
            </Box>
            <Box p={"10px"}>
              Fecha:
              <HStack p="20px" spacing={"10px"}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholder="inicio"
                />
                <DatePicker
                  selected={EndDate}
                  onChange={(date) => setEndDate(date)}
                  placeholder="final"
                />
              </HStack>
            </Box>
            <HStack pt={"10px"}>
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
