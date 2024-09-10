import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function FivethSection() {
  return (
    <Box
      className="section5"
      display="flex"
      flexDir={{ base: "column", md: "row" }} // Telefon ve tabletlerde alt alta dizilim
      maxW="1230px"
      w="100%"
      m="auto"
      justifyContent={{ base: "center", md: "space-between" }} // Telefon ve tabletlerde merkezleme
      mt="124px"
    >
      <Box
        className="leftSide"
        display="flex"
        flexDir="column"
        alignItems={{ base: "center", md: "flex-start" }} // Telefon ve tabletlerde ortalama
        textAlign={{ base: "center", md: "left" }} // Telefon ve tabletlerde ortalama
      >
        <Box display="flex" gap="5px" justifyContent={{ base: "flex-start", md: "flex-start" }}>
          <Text fontSize="28px" fontWeight="bold" textColor="#393939">
            Here's how it
          </Text>
          <Text fontSize="28px" fontWeight="bold" textColor="#FB9C46">
            works
          </Text>
        </Box>
        <Text
          maxW={{base:"300px", md:"550px"}}
          textColor="#6C6C6C"
          fontSize="16px"
          mt="35px"
          textAlign="start"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
          eget aliquet.
        </Text>
        {[
          {
            imgSrc: "./imgs/aManEllipse.svg",
            title: "Find A Tutor",
            description: "Choose your ideal teacher from over 10,000 qualified language tutors."
          },
          {
            imgSrc: "./imgs/calendarEllipse.svg",
            title: "Book a lesson",
            description: "Select a lesson time and add it to their calendar.",
            iconBg: true
          },
          {
            imgSrc: "./imgs/laptopEllipse.svg",
            title: "Start learning",
            description: "Simple as that, you’re learning a language.",
            iconBg: true
          }
        ].map((item, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            pl="23px"
            alignItems="center"
            w={{ base: "90%", md: "600px" }} // Telefon ve tabletlerde genişlik uyarlaması
            h="86px"
            bg="white"
            borderRadius="10px"
            mt="35px"
          >
            <Box className="leftSide" display="flex" justifyContent={{ base: "center", md: "flex-start" }}>
              {item.iconBg ? (
                <Box
                  w="45px"
                  h="45px"
                  bg="#FB9C46"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="45px"
                >
                  <Image src={item.imgSrc} />
                </Box>
              ) : (
                <Image src={item.imgSrc} />
              )}
              <Box display="flex" flexDir="column" gap="15px" ml="35px">
                <Text fontSize="16px" fontWeight="bold" textColor="#FB9C46" textAlign="start">
                  {item.title}
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="bold"
                  textColor="#393939"
                  maxW="480px"
                  textAlign="start"
                >
                  {item.description}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        className="rightSide"
        pos="relative"
        display="flex"
        justifyContent={{ base: "center", md: "flex-start" }} // Telefon ve tabletlerde ortalama
        mt={{ base: "35px", md: "0" }}
        w={{base:"90%", md:"none"}}
        h={{base:"auto", md:"none"}}
        m={{base: "auto", md:"none"}}
      >
        <Image src="./imgs/videoExample.svg" mt="80px" />
        <Image
          src="./imgs/vector.svg"
          pos="absolute"
          right={{ base: "-90px", md: "-5" }} // Telefon ve tabletlerde hizalama
          bottom={{base: "-25px", md:"-10"}}
          left={{ base: "none", md: "auto" }} // Telefon ve tabletlerde hizalama
          transform={{ base: "translateX(-50%)", md: "none" }} // Telefon ve tabletlerde merkezleme
          w={{base:"162px", md:"auto"}}
        />
      </Box>
    </Box>
  );
}

export default FivethSection;
