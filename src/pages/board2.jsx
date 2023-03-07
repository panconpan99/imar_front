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
    
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckbox1Change = (event) => {
    if (event.target.checked) {
      setIsChecked1(true);
      setIsChecked2(false);
      setIsChecked3(false);
    } else {
      setIsChecked1(false);
    }
  };
  const handleCheckbox2Change = (event) => {
    if (event.target.checked) {
      setIsChecked2(true);
      setIsChecked1(false);
      setIsChecked3(false);
    } else {
      setIsChecked2(false);
    }
  };
  const handleCheckbox3Change = (event) => {
    if (event.target.checked) {
      setIsChecked3(true);
      setIsChecked2(false);
      setIsChecked1(false);
    } else {
      setIsChecked3(false);
    }
  };
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
      <Flex>
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
                    <Checkbox
                      pr={6}
                      value={"month"}
                      isChecked={isChecked3}
                      onChange={handleCheckbox3Change}
                    >
                      Mes
                    </Checkbox>
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Box pt={"10px"}>
              <Button colorScheme={"green"} variant="solid">
                Descargar archivo .XLSX
              </Button>
              <Button colorScheme={"green"} variant="outline">
                Descargar archivo .CSV
              </Button>
            </Box>
          </Box>
        </HStack>
      </Flex>
      <Box p="10px">
        <Button colorScheme="blue" onClick={HandleButtonClick}>
          Atras
        </Button>
      </Box>
    </>
  );
};
export default Board2;
