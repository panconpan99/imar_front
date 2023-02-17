import React from "react";
import {
    Box,
    Button,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Board1 = () =>{
    const Navigate = useNavigate();
    const HandleButtonClick = () =>{
        Navigate("/");
    };
    return(
        <>
            <Box>
                <h1> pasaste </h1>
                <Button onClick={HandleButtonClick}>volver</Button>
            </Box>
        </>
    );
}

export default Board1;