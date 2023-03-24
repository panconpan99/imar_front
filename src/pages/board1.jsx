import { React, useState } from "react";
import { Box, Button, HStack, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GetData from "../components/GetData";
import Historic from "../components/Historic";
import Actual from "../components/Actual";

//seteo de datos
const data1 = GetData();
const data2 = GetData();
const data3 = GetData();
const data4 = GetData();


const Board1 = () => {
  const Navigate = useNavigate();
  
 
  const alldata = [data1, data2, data3, data4];
  const [selectedbuttons, setselectedbuttons] = useState("2");
  const HandleButtonClick = () => {
    Navigate("/");
  };

  //to do list
  //buscar una manera de elegir una alerta
  //actual numero en pantalla (done)
  //limites
  return (
    <>
      <Box pt="5em" pl="2em">
        <HStack>
          <ButtonGroup>
            <Button
              isdisabled={selectedbuttons === "1"}
              onClick={() => {
                setselectedbuttons("1");
              }}
            >
              Actual
            </Button>
            <Button
              isdisabled={selectedbuttons === "2"}
              onClick={() => {
                setselectedbuttons("2");
              }}
            >
              Historico
            </Button>
          </ButtonGroup>
        </HStack>
      </Box>
      <Box p="5px">
        {selectedbuttons === "1" && <Actual />}
        {selectedbuttons === "2" && <Historic listdata={alldata} />}
      </Box>
      <Box pl={9}>
        <Button p={"20px"} colorScheme="blue" onClick={HandleButtonClick}>
          Volver
        </Button>
      </Box>
    </>
  );
};

export default Board1;
