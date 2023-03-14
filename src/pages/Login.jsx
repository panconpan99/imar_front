import React from "react";
import { Box } from "@chakra-ui/react";
const Login = () => {
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
        <Box sx={dashstyle}>Login</Box>
      </Box>
    </>
  );
};
export default Login;
