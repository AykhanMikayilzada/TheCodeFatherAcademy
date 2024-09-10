import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function FourthSection() {
  return (
    <Box
      className="section4"
      display="flex"
      flexDir={{ base: "column-reverse", md: "row" }} // Telefon ve tabletlerde alt alta dizilim
      maxW="1230px"
      w="100%"
      m="auto"
      pos="relative"
      justifyContent={{ base: "center", md: "space-between" }} // Telefon ve tabletlerde merkezleme
    >
      <Box
        className="leftSide"
        mt={{ base: "0", md: "158px" }} // Tabletlerde üst marjini koruma
        display="flex"
        justifyContent="center" // Telefon ve tabletlerde ortalama
      >
        <Box
          w={{ base: "300px", md: "430px" }} // Telefon ve tabletlerde boyut uyarlaması
          h={{ base: "300px", md: "430px" }}
          mt={{ base: "98px", md: "none" }}
          borderRadius="30px"
          bg="#EFD8C9"
          zIndex="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="./imgs/thirdSectionImg.svg"
            pos="absolute"
            bottom={{ base: "0px", md: "0" }} // Telefon ve tabletlerde boyut uyarlaması
            left={{ base: "45px", md: "0px" }} // Telefon ve tabletlerde boyut uyarlaması
            zIndex="1"
            w={{ base: "350px", md: "initial" }} // Telefon ve tabletlerde boyut uyarlaması
          />
        </Box>
      </Box>
      <Box
        className="rightSide"
        display="flex"
        flexDir="column"
        w="100%"
        mt={{ base: "20px", md: "201px" }} // Tabletlerde üst marjini koruma
        alignItems={{ base: "flex-end", md: "flex-start" }} // Telefon ve tabletlerde sağa hizalama
        ml={{ base:"none", md:"300px"}}
      >
        <Box display="flex" mr={{ base: "25px", md: "none" }}>
        <Text fontSize="27px" fontWeight="bold" textColor="#393939">
            What Will You
          </Text>
          <Text ml="7px" fontSize="27px" fontWeight="bold" textColor="#058E6E">
            Get
          </Text>
          <Text ml="7px" fontSize="27px" fontWeight="bold" textColor="#393939">
            ?
          </Text>
        </Box>
        <Text
          mt="36px"
          mr={{ base: "25px", md: "none" }}
          fontSize="18px"
          textColor="#6C6C6C"
          maxW="490px"
          textAlign={{ base: "right", md: "left" }} // Telefon ve tabletlerde ortalama
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum
          dui mollis . Suspendisse nulla :
        </Text>
        {[
          "1-on-1 lessons in more than 150 languages",
          "Practice for free with the italki community",
          "Take learning beyond the classroom",
        ].map((text, index) => (
          <Box
            key={index}
            className="tickedBox"
            w={{ base: "90%", md: "497px" }} // Telefon ve tabletlerde genişlik uyarlaması
            h="104px"
            display="flex"
            gap="24px"
            alignItems="center"
            justifyContent={{ base: "center", md: "space-between" }} // Telefon ve tabletlerde ortalama
            pl={{ base: "10px", md: "18px" }}
            pr={{ base: "10px", md: "57px" }}
            bg="white"
            borderRadius="20px"
            m={{base: "auto", md:"none"}}
            mt={{base: "30px", md:"27px"}}
          >
            <Box className="leftSide">
              <Image src="./imgs/tick.svg" />
            </Box>
            <Box
              className="rightSide"
              display="flex"
              flexDir="column"
              gap="11px"
              alignItems={{ base: "flex-start", md: "flex-start" }} // Telefon ve tabletlerde ortalama
            >
              <Text textColor="#393939" fontSize="16px" fontWeight="bold">
                {text}
              </Text>
              <Text
                textColor="#8D8D8D"
                fontSize="12px"
                fontWeight="bold"
                maxW="290px"
                textAlign={{ base: "left", md: "left" }} // Telefon ve tabletlerde ortalama
              >
                • Learn from certified teachers with proven experience...
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FourthSection;
