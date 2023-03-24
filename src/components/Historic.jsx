import React from "react";
import {
  Box,
  Button,
  HStack,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { InfoIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Dash from "../components/Dash";
import { useNavigate } from "react-router-dom";

const Historic = ({ listdata }) => {
  const Navigate = useNavigate();
  const buttomclick = () => {
    Navigate("/board2");
  };
  const dashstyle = {
    w: "510px",
    h: "500px",
    boxShadow: "lg",
    rounded: "md",
    p: "15px",
    bg: "#FFFFFF",
  };
  return (
    <HStack p={"20px"} pt={"30px"}>
        {listdata.map((data) => {
          return (
            <Box key={data} sx={dashstyle}>
              <Popover>
                <PopoverTrigger>
                  <Button colorScheme="blue" variant={"ghost"} size="xs">
                    <InfoIcon />
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
              <Dash datos={data} tipo="solubilidad del agua" unit="hour" />
              <HStack>
                <Box p="20px" pt={"25px"}>
                  Estado:
                  {data.slice(-1) < 50 ? (
                    <CheckIcon color={"green"} boxSize="2em" />
                  ) : (
                    <CloseIcon color={"red"} boxSize="2em" />
                  )}
                </Box>
              </HStack>
            </Box>
          );
        })}
    </HStack>
  );
};
export default Historic;
