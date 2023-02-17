import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Dash from "../components/Dash";

const Board1 = () => {
  
  const Navigate = useNavigate();

  const HandleButtonClick = () => {
    Navigate("/");
  };
  return (
    <>
      <div>
        <Dash />
      </div>
      <Box>
        <h1> pasaste </h1>
        <Button onClick={HandleButtonClick}>volver</Button>
      </Box>
    </>
  );
};

export default Board1;
