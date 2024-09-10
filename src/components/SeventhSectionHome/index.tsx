import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

function SeventhSection() {
  return (
    <Box
      className="section7"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxW="1221px"
      w="100%"
      h={["auto", "380px", "380px"]}
      m="auto"
      mt="170px"
      p={["20px", "0px", "0px"]}
      flexDir={["column", "row", "row"]}
      backgroundImage="url('./imgs/bgPicture.svg')" // Arka plan resmini Box'a ekledik
      backgroundSize="cover"
      backgroundPosition="center"
      zIndex="0" // Tüm elementlerin arka planı kaplamasını sağlar
    >
      <Box
        zIndex="1"
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir={["column", "row", "row"]}
        gap={["20px", "300px", "300px"]}
        p={["20px", "0px", "0px"]}
      >
        <Box
          className="leftSide"
          display="flex"
          flexDir="column"
          alignItems={["center", "flex-start", "flex-start"]}
          textAlign={["center", "left", "left"]}
        >
          <Text
            textColor="white"
            fontWeight="bold"
            fontSize={["20px", "26px", "26px"]}
            maxW="380px"
          >
            Learn more than just a language 😍
          </Text>
          <Text
            textColor="white"
            fontSize="12px"
            mt="39px"
            textAlign={["center", "left", "left"]}
          >
            Over 100,000 students join to us months
          </Text>
          <Box
            display="flex"
            gap="14px"
            mt="19px"
            alignItems="center"
            justifyContent={["center", "flex-start", "flex-start"]}
          >
            <Image src="./imgs/pictureGroup.svg" />
            <Text
              textColor="white"
              fontWeight="bold"
              fontSize="12px"
              textDecor="underline"
            >
              and others
            </Text>
          </Box>
        </Box>
        <Box className="rightSide" mt={["20px", "0px", "0px"]}>
          <Button
            w={["200px", "300px", "300px"]}
            h={["50px", "75px", "75px"]}
            bg="white"
            colorScheme="white"
            borderRadius="5px"
            textColor="#FB9C46"
            textAlign="center"
            whiteSpace="normal" // Yazının taşmasını engellemek için normal boşluk
            overflow="hidden" // Butondan taşmayı engeller
          >
            Get your free trial lesson now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SeventhSection;
