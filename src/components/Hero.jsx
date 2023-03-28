import React from "react";
import {
  Box,
  Button,
  HStack,
  VStack,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Text,
} from "@chakra-ui/react";
import { InfoIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import Dash from "./Dash";
import { useNavigate } from "react-router-dom";

const Hero = ({ listdata, type }) => {
  const Navigate = useNavigate();
  const buttomclick = () => {
    Navigate("/board2");
  };
  const dashstyle = {
    w: "500em",
    h: "35em",
    boxShadow: "lg",
    rounded: "md",
    p: "15px",
    bg: "#FFFFFF",
  };
  return (
    <HStack p={"1em"}>
      {listdata.map((data) => {
        return (
          <Box key={data.data} sx={dashstyle}>
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
                    <Text>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </Text>
                    <Text>
                      Estado:
                      {data.data.slice(-1) < 55 ? (
                        <CheckIcon color={"green"} boxSize="1.5em" />
                      ) : (
                        <CloseIcon color={"red"} boxSize="1.5em" />
                      )}
                    </Text>
                    <Text>
                      Ultimo dato : 2023/03/04 6 AM
                    </Text>
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
            {type === "2" ? (
              <Dash
                datos={data.data}
                label={data.label}
                unit={"hour"}
                type={"line"}
              />
            ) : (
              <Dash
                datos={data.data.slice(-1)}
                label={data.label}
                unit={"hour"}
                type={"bar"}
              />
            )}

            <VStack>
              <Box pl={"1.5em"}>
                <Text fontSize="2em">{data.data.slice(-1)}</Text>
              </Box>
            </VStack>
          </Box>
        );
      })}
    </HStack>
  );
};
export default Hero;
