import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function FirstSection() {
  return (
    <Box
      className="section1"
      display="flex"
      maxWidth="1230px"
      w="100%"
      m="auto"
      mt="64px"
      justifyContent={{ base: "center", md: "space-between" }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      gap={{ base: "40px", md: "30px" }}
    >
      <Box
        className="leftSide"
        display="flex"
        flexDir="column"
        gap="40px"
        mt={{ base: "0px", md: "31px" }}
        textAlign={{ base: "left", md: "left" }}
        ml={{ base: "20px", md: "0px" }}

      >
        <Box display="flex" gap="24px" alignItems="center" justifyContent={{ base: "flex-start", md: "flex-start" }}>
          <Text textColor="#FB9C46" fontWeight="bold" fontSize="14px">
            We are The Best
          </Text>
          <Box className="border" bg="#FB9C46" w="136px" h="1px"></Box>
        </Box>

        <Box display="flex" flexWrap="wrap" maxW="650px" w="100%" justifyContent={{ base: "flex-start", md: "flex-start" }}>
          <Text textColor="#000000" fontWeight="bold" fontSize={{ base: "32px", md: "48px" }}>
            Learn From Home With The
          </Text>
          <Text textColor="#FB9C46" fontWeight="bold" fontSize={{ base: "32px", md: "48px" }}>
            CodFather Academy
          </Text>
          <Text textColor="#000000" fontWeight="bold" fontSize={{ base: "32px", md: "48px" }}>
            Our Best Tutors
          </Text>
        </Box>

        <Box>
          <Text textColor="#6C6C6C" fontSize="16px" maxW={{base:"300px", md:"410px"}} opacity="60%" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum
            dui mollis . Suspendisse nulla :
          </Text>
        </Box>

        <Button
          color="white"
          fontSize="16px"
          fontWeight="bold"
          bg="#058E6E"
          colorScheme="#058E6E"
          w={{ base: "290px", md: "290px" }}
          h="62px"
          _hover={{ bg: "#407F55" }}
        >
          Try Our Lessons
        </Button>
      </Box>

      <Box
        className="rightSide"
        w={{ base: "90%", md: "462px" }}
        h={{ base: "auto", md: "625px" }}
        backgroundImage="linear-gradient(to right, #F1C365, #F6AE54, #FF922F)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={{ base: "20px", md: "100px" }}
        pos="relative"
        mt={{ base: "40px", md: "0px" }}
      >
        <Image 
          src="./imgs/firstSecImg.svg" 
          w={{ base: "100%%", md: "100%" }} 
          objectFit="contain" 
        />

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          pos="absolute"
          bg="white"
          w="255px"
          h="140px"
          borderRadius="30px"
          bottom={{ base: "10px", md: "30px" }}
          left={{ base: "20px", md: "-180px" }}
        >
          <Text fontSize="18px" fontWeight="bold">
            10+ Tutors Is Online
          </Text>
        </Box>

        <Image
          src="./imgs/diagramIcon.svg"
          pos="absolute"
          left={{ base: "20px", md: "-195px" }}
          bottom={{ base: "150px", md: "150px" }}
        />
      </Box>
    </Box>
  );
}

export default FirstSection;
