import { Box, HStack } from "@chakra-ui/react";
import { InfoIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";

const Actual = ({ listdata }) => {
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
          <Box key={data.data} sx={dashstyle}>
            {data.data.slice(-1)}
            <HStack>
              <Box p="20px" pt={"25px"}>
                Estado:
                {data.data.slice(-1) < 50 ? (
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
export default Actual;
