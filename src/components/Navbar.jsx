import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Spacer, Flex, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Box color="black" bg="white" h={"55px"} p={1}>
          <Flex direction={"row"} p={1}>
            <Link to={"/"}>navbar_test_logo.jpg</Link>
            <Spacer />
            <Box p={"6px"} pt={"8px"} pr={"10px"}>
              <Link to={"/about"}>Acerca de</Link>
            </Box>
            <HStack pr={"10px"} spacing={"10px"}>
              <Link to={"/register"}>
                <Button colorScheme={"blue"} variant="outline">
                  Register
                </Button>
              </Link>
              <Link to={"/Login"}>
                <Button colorScheme={"blue"} variant="outline">
                  Login
                </Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </nav>
    </>
  );
};
export default Navbar;
