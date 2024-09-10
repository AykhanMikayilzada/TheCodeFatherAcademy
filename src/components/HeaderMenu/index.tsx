import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface HeaderMenuProps {
  setPage: string;
}

function HeaderMenu({ setPage }: HeaderMenuProps) {
  return (
    <Box display="flex" gap="53px">
      {['Home', 'Lessons', 'Our Tutors', 'About Us'].map((page) => (
        <Box
          key={page}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-3px",
            left: 0,
            width: "100%",
            height: setPage === page ? "2px" : "0",
            backgroundColor: "#FF922F",
          }}
        >
          <Text
            textColor={setPage === page ? "#FF922F" : "#393939"}
            fontSize="16px"
            fontWeight="bold"
            _hover={{ textColor: setPage === page ? "#FF922F" : "#058E6E", cursor: "pointer" }}
          >
            {page}
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default HeaderMenu;
