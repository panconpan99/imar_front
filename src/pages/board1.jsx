import React from "react";
import { Box, Button, HStack, Portal } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Dash from "../components/Dash";
import GetData from "../components/GetData";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Board1 = () => {
  const Navigate = useNavigate();
  //seteo de datos
  const data1 = GetData();
  const data2 = GetData();
  const data3 = GetData();
  const data4 = GetData();
  const dashstyle = {
    w: "500px",
    h: "550px",
    boxShadow: "lg",
    rounded: "md",
    p: "15px",
    bg: "#FFFFFF",
  };

  const HandleButtonClick = () => {
    Navigate("/");
  };
  const buttomclick = () => {
    Navigate("/board2");
  };
  return (
    <>
      <Box p="20px">
        <HStack p={"20px"}>
          <Box sx={dashstyle}>
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="blue" variant={"ghost"} size="xs">
                  {" "}
                  <InfoIcon />{" "}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Información</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </PopoverBody>
                  <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                  >
                    <Button colorScheme="blue" onClick={buttomclick}>
                      {" "}
                      Detalles{" "}
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data1} tipo="solubilidad del agua" unit="hour"/>
          </Box>
          <Box sx={dashstyle}>
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="blue" variant={"ghost"} size="xs">
                  {" "}
                  <InfoIcon />{" "}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Información</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </PopoverBody>
                  <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                  >
                    <Button colorScheme="blue" onClick={buttomclick}>
                      {" "}
                      Detalles{" "}
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data2} tipo="marejada" unit="hour" />
          </Box>

          <Box sx={dashstyle}>
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="blue" variant={"ghost"} size="xs">
                  {" "}
                  <InfoIcon />{" "}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Información</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </PopoverBody>
                  <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                  >
                    <Button colorScheme="blue" onClick={buttomclick}>
                      {" "}
                      Detalles{" "}
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data3} tipo="fosfato" unit="hour"/>
          </Box>

          <Box sx={dashstyle}>
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="blue" variant={"ghost"} size="xs">
                  {" "}
                  <InfoIcon />{" "}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Información</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                  </PopoverBody>
                  <PopoverFooter
                    border="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                  >
                    <Button colorScheme="blue" onClick={buttomclick}>
                      {" "}
                      Detalles{" "}
                    </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data4} tipo="temperatura" unit="hour"/>
          </Box>
        </HStack>
      </Box>
      <Box>
        <Button p={"20px"} colorScheme="blue" onClick={HandleButtonClick}>
          Volver
        </Button>
      </Box>
    </>
  );
};

export default Board1;
