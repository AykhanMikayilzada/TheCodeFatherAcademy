import { Box, Text } from "@chakra-ui/react";
import React from "react";

function SecondSection() {
  return (
    <Box
      className="section2"
      display="flex"
      pt="96px"
      maxW="1230px"
      w="100%"
      m="auto"
      justifyContent={{ base: "flex-start", md: "space-between" }}
      alignItems={{ base: "flex-start", md: "center" }}
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: "20px", md: "30px" }}
      pl={{ base: "20px", md: "0px" }}
    >
      <Box className="leftSide" display="flex" flexDir="column" gap="30px">
        <Text textColor="#FB9C46" fontSize="16px" fontWeight="bold">
          What do you want to learn?
        </Text>
        <Text
          textColor="#393939"
          fontWeight="bold"
          fontSize={{ base: "28px", md: "38px" }}
          lineHeight="30px"
        >
          What We Offer?
        </Text>
        <Box
          display="flex"
          gap="16px"
          justifyContent={{ base: "flex-start", md: "center" }}
          alignItems="center"
        >
          <Text textColor="#FB9C46" fontSize="18px" fontWeight="bold">
            I want to learn
          </Text>
          <Box className="border" w="178px" h="1px" bg="#FB9C46"></Box>
        </Box>
      </Box>

      <Box className="rightSide" display="flex" flexDir="column" gap="23px">
        <Text textColor="#6C6C6C" w={{ base: "100%", md: "625px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna
          nec faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet
          ullamcorper et, ante venenatis.
        </Text>
      </Box>
    </Box>
  );
}

export default SecondSection;
