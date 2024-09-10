import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import FirstSection from "@/src/components/FirstSectionHome";
import SecondSection from "@/src/components/SecondSectionHome";
import ThirdSection from "@/src/components/ThirdSectionHome";
import FourthSection from "@/src/components/FourthSectionHome";
import FivethSection from "@/src/components/FivethSectionHome";
import SixthSection from "@/src/components/SixthSectionHome";
import SeventhSection from "@/src/components/SeventhSectionHome";

function HomePage() {
  return (
    <>
      <Box bg="#f6efe4" w="100%">
        
        <Header setPage="Home" />
          
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FivethSection />
          <SixthSection />
          <SeventhSection />

        <Footer />

      </Box>
    </>
  );
}

export default HomePage;
