import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function SixthSection() {
  return (
    <Box
      className="section6"
      display="flex"
      maxW="1230px"
      w="100%"
      m="auto"
      justifyContent="center"
      gap="132px"
      mt="142px"
      flexDirection={["column", "column", "row"]} // Telefon ve tablet versiyonlarında alt alta gelmesi için
      pl="20px" // Sol taraftan 20px boşluk bırakmak için
    >
      <Box
        className="leftSide"
        display="flex"
        flexDir="column"
        gap="47px"
        mt="30px"
        textAlign={["left", "left", "start"]} // Telefon ve tablet versiyonlarında sol hizalı
      >
        <Text
          textColor="#FB9C46"
          fontWeight="bold"
          fontSize="28px"
          maxW="400px"
        >
          Edu Smart it's about mastering a timless skill
        </Text>
        <Text
          textColor="#90A3B4"
          fontWeight="bold"
          fontSize="14px"
          maxW="500px"
        >
          Cultuvating new perspectives, and connecting with fascinating people
          from around the world
        </Text>
      </Box>
      <Box
        className="rightSide"
        display="flex"
        flexDir="column"
        textAlign={["left", "left", "start"]} // Telefon ve tablet versiyonlarında sol hizalı
        mt={["30px", "30px", "0"]} // Telefon ve tablet versiyonlarında yukarıda boşluk bırakılması için
      >
        <Box display="flex" gap="12px" alignItems="end">
          <Image src="./imgs/quotation.svg" w="39px" h="28px" />
          <Image src="./imgs/fiveStars.svg" w="120px" h="16px" />
        </Box>
        <Text
          textColor="#90A3B4"
          fontSize="16px"
          maxW="430px"
          mt="30px"
          ml={["0", "0", "50px"]} // Telefon ve tablet versiyonlarında sol hizalı
        >
          "With Edu Smart, we can make it easier for you to master a foregin
          language, it is important for us to grow and engage with our students
        </Text>
        <Box
          display="flex"
          gap="15px"
          mt="30px"
          ml={["0", "0", "50px"]}
          transform="scale(0.9)" // Kısmı küçültmek için ölçeklendirme
        >
          <Image src="./imgs/exampleManPhoto.svg" ml={{base:"-30px", md:"none"}} m={{base:"center", md:"none"}} />
          <Box display="flex" flexDir="column" pos="relative" ml={{base:"-10px", md:"none"}}>
            <Text textColor="#FB9C46" fontWeight="bold" fontSize="18px">
              Jaquon Hart
            </Text>
            <Text textColor="#90A3B4" fontWeight="bold" fontSize="15px">
              Digital Marketing Executive, Hypebeast
            </Text>
            <Image
              src="./imgs/nextButton.svg"
              pos="absolute"
              bottom="-60px"
              right="-120px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SixthSection;
