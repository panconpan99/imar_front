import React from "react";
import { Box, Button, HStack, Portal } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Dash from "../components/Dash";
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
  //randomdata es solo de prueba
  const getData = () => {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(Math.floor(Math.random() * 50) + 10);
    }
    return data;
  };
  //seteo de datos
  const data1 = getData();
  const data2 = getData();
  const data3 = getData();
  const data4 = getData();

  const HandleButtonClick = () => {
    Navigate("/");
  };
  return (
    <>
      <Box p="20px">
        <HStack p={"20px"}>
          <Box
            w={"500px"}
            h={"550px"}
            boxShadow="xs"
            rounded="md"
            p={"15px"}
            bg="#EFEFEF"
          >
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
                    <Button colorScheme="blue"> Detalles </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data1} tipo="solubilidad del agua" />
          </Box>
          <Box
            w={"500px"}
            h={"550px"}
            boxShadow="xs"
            rounded="md"
            p={"15px"}
            bg="#EFEFEF"
          >
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
                    <Button colorScheme="blue"> Detalles </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data2} tipo="marejada" />
          </Box>

          <Box
            w={"500px"}
            h={"550px"}
            boxShadow="xs"
            rounded="md"
            p={"15px"}
            bg="#EFEFEF"
          >
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
                    <Button colorScheme="blue"> Detalles </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data3} tipo="fosfato" />
          </Box>

          <Box
            w={"500px"}
            h={"550px"}
            boxShadow="xs"
            rounded="md"
            p={"15px"}
            bg="#EFEFEF"
          >
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
                    <Button colorScheme="blue"> Detalles </Button>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
            <Dash datos={data4} tipo="temperatura" />
          </Box>
        </HStack>
      </Box>
      <Box>
        <Button onClick={HandleButtonClick}>volver</Button>
      </Box>
    </>
  );
};

export default Board1;
