import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  HStack,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import Dash from "../components/Dash";
import GetData from "../components/GetData";

const Board2 = () => {
  const unit = "hour";
  const datos = GetData();
  const Navigate = useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
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
            <Box>
              <Text>Opciones</Text>
            </Box>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex={1} textAlign="left">
                      filtros
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckboxGroup colorScheme={"blue"}>
                    <Checkbox
                      pr={6}
                      value={"hour"}
                      isChecked={isChecked1}
                      onChange={handleCheckbox1Change}
                    >
                      Hora
                    </Checkbox>
                    <Checkbox
                      pr={6}
                      value={"day"}
                      isChecked={isChecked2}
                      onChange={handleCheckbox2Change}
                    >
                      Dia
                    </Checkbox>
                    <Checkbox pr={6} value={"month"}>
                      Mes
                    </Checkbox>
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <HStack pt={"10px"} >
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
