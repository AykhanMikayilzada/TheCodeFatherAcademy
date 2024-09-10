import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function ThirdSection() {
  return (
    <Box
      className="section3"
      display="flex"
      flexDirection={{ base: "column", md: "row" }} 
      maxW="1230px"
      w="100%"
      m="auto"
      justifyContent="center" 
      alignItems={{ base: "flex-start", md: "center" }} 
      px={{ base: "20px", md: "0" }}
      pt={{ base: "32px", md: "0" }} 
    >
      <Box 
        className="leftSide" 
        display="flex" 
        flexDir="column" 
        mt={{ base: "0", md: "175px" }} 
        w="100%"
        alignItems="flex-start" 
      >
        <Text
          fontSize={{ base: "20px", md: "24px" }} 
          fontWeight="bold"
          textColor="black"
          maxW="320px"
          ml={{ base: "0", md: "20px" }} 
        >
          Purchase your awesome lessons and find your tutors
        </Text>
        <Text
          fontSize={{ base: "12px", md: "14px" }}
          fontWeight="bold"
          textColor="#6C6C6C"
          maxW="450px"
          mt="38px"
          ml={{ base: "0", md: "20px" }} 
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
          eget aliquet.
        </Text>
        <Box 
          className="buttons" 
          mt="44px" 
          display="flex" 
          flexDirection={{ base: "row", md: "row" }} 
          gap={{ base: "20px", md: "38px" }}
          w="100%" 
          ml={{ base: "0", md: "20px" }} 
        >
          <Button
            fontSize={{ base: "14px", md: "16px" }} 
            textColor="#FFFFFF"
            fontWeight="bold"
            w={{ base: "100%", md: "199px" }} 
            h="61px"
            borderRadius="10px"
            bg="#FB9C46"
            colorScheme="#FB9C46"
            _hover={{
              bgColor: "transparent",
              border: "2px solid #FB9C46",
              textColor: "#FB9C46",
            }}
          >
            View our Lessons
          </Button>
          <Button
            fontSize={{ base: "14px", md: "16px" }} 
            textColor="#FB9C46"
            fontWeight="bold"
            w={{ base: "100%", md: "199px" }} 
            h="61px"
            border="2px solid #FB9C46"
            borderRadius="10px"
            borderColor="#FB9C46"
            bg="transparent"
            colorScheme="transparent"
            _hover={{ bg: "#FB9C46", textColor: "white" }}
          >
            View our Tutors
          </Button>
        </Box>
      </Box>
      <Box 
        className="rightSide" 
        display="flex" 
        justifyContent="center"
        w={{ base: "350px", md: "auto" }} 
        ml={{ base: "0", md: "20px" }}
      >
        <Image 
          src="./imgs/secondSectionImg.svg" 
          w={{ base: "auto", md: "1300px" }} 
          pt={{base: "none", md:"30px"}}
        />
      </Box>
    </Box>
  );
}

export default ThirdSection;
