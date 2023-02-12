import React from "react";
import { Box, HStack } from "@chakra-ui/react";
function Home() {
  return (
    <>
      <div>
        <HStack>
          <Box
            bg="#EFEFEF"
            borderRadius={"lg"}
            color="black"
            w={"625px"}
            h={"660px"}
            alignItems="center"
          >
            texto
          </Box>
          <Box
            bg="#C8F9A1"
            color="black"
            w={"325px"}
            h={"660px"}>
            items
          </Box>
        </HStack>
      </div>
    </>
  );
}
export default Home;
