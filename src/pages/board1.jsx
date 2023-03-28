import { React, useState } from "react";
import { Box, Button, HStack, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GetData from "../components/GetData";
import Hero from "../components/Hero";

//seteo de datos
const data1 = { data: GetData(), label: "solubilidad del agua" };
const data2 = { data: GetData(), label: "marejada" };
const data3 = { data: GetData(), label: "fosfato" };
const data4 = { data: GetData(), label: "temperatura" };
const alldata = [data1, data2, data3, data4];

const Board1 = () => {
  const Navigate = useNavigate();

  const [selectedbuttons, setselectedbuttons] = useState("1");
  const HandleButtonClick = () => {
    Navigate("/");
  };

  //to do list
  //buscar una manera de elegir una alerta
  //actual numero en pantalla (done)
  //limites
  return (
    <>
      <Box pt="5%" pl="2%">
        <HStack>
          <ButtonGroup>
            <Button
              isDisabled={selectedbuttons === "1"}
              onClick={() => {
                setselectedbuttons("1");
              }}
            >
              Actual
            </Button>
            <Button
              isDisabled={selectedbuttons === "2"}
              onClick={() => {
                setselectedbuttons("2");
              }}
            >
              Historico
            </Button>
          </ButtonGroup>
        </HStack>
      </Box>
      <Box p="1em">
        <Hero listdata={alldata} type={selectedbuttons} />
      </Box>
      <Box pl="2.5em">
        <Button p="1rem" colorScheme="blue" onClick={HandleButtonClick}>
          Volver
        </Button>
      </Box>
    </>
  );
};

export default Board1;
