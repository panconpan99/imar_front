import React from "react";
import { Box, Image } from "@chakra-ui/react";
const About = () => {
  const imagelogo = "../images/logo.png";
  const dashstyle = {
    justifycontent: "center",
    w: "70%",
    h: "500px",
    boxShadow: "lg",
    rounded: "md",
    p: "15px",
    bg: "#FFFFFF",
  };
  return (
    <>
      <Box p={"40px"} pl="20%">
        <Box sx={dashstyle}>
          aca se dira algo asi como de que somos
          <Box>
            <Image src={imagelogo} alt="logo" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default About;
