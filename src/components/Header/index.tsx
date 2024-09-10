import {
  Box,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React from "react";
import HeaderMenu from "../HeaderMenu";

interface HeaderProps {
  setPage: string;
}

function Header({ setPage }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        className="header"
        display="flex"
        justifyContent={{ base: "space-between", md: "space-between" }}
        alignItems="center"
        w="100%"
        h="100px"
        maxW="1223px"
        m="auto"
        px={{ base: "20px", md: "0px" }} // Mobile için yatay padding ekledik
      >
        <Image src="./imgs/logo.png" w="200px" />

        {/* Desktop Menu */}
        <Box display={{ base: "none", md: "block" }}>
          <HeaderMenu setPage={setPage} />
        </Box>

        {/* Mobile Menu - Hamburger Icon */}
        <Image
          src="./imgs/hamburger.svg"
          alt="Menu"
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          cursor="pointer"
          w="40px"
        />

        <Box
          className="buttons"
          display={{ base: "none", md: "flex" }}
          gap="50px"
        >
          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#FB9C46"
            color="#FFFFFF"
            _hover={{ bgColor: "#fbaf45" }}
          >
            Sign Up
          </Button>

          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#407F55"
            color="#FFFFFF"
            _hover={{ bgColor: "#0f5c45" }}
          >
            Login
          </Button>
        </Box>
      </Box>

      {/* Gray line */}
      <Box
        className="border"
        w={{ base: "100%", md: "1223px" }} // Full width on mobile, fixed width on desktop
        h="1px"
        m="auto"
        bgColor="#C4C4C4"
        opacity="60%"
        borderRadius="1px"
        display={{ base: "block", md: "block" }} // Ensure it's only visible in mobile view
      ></Box>

      {/* Drawer for Mobile Menu */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="start"
              gap="20px"
            >
              <Text
                fontSize="18px"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
              >
                Home
              </Text>
              <Text
                fontSize="18px"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
              >
                About
              </Text>
              <Text
                fontSize="18px"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
              >
                Services
              </Text>
              <Text
                fontSize="18px"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
              >
                Contact
              </Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
