import React from "react";
import {Box} from "@chakra-ui/react"

const Footer = () => {
    return(
        <nav className="footer">
            <Box position="fixed" bottom="0" right="0" p={4} bg="gray.100" transform="translate(-50%, -50%)" translateX="100%" translateY="100%">
                footer
            </Box>
        </nav>
    );
};
export default Footer;