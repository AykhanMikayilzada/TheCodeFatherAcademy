import { Box, Image, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <>
      <Box className='Footer' w="100%" bg="#F2BF62" pt="95px" pb="73px" mt="125px" display="flex" flexDir="column" justifyContent="center" alignItems="center">
        <Box className='upSide' display="flex" flexDir="column" maxW="1040px" w="100%" textAlign="left">
          <Box className='first' display="flex" flexDir="column" alignItems="center">
            <Image src='./imgs/logo.png' w="250px" />
            <Box className='logos' display="flex" gap="6px" mb="10px">
              <Image src='./imgs/googleLogo.svg' _hover={{cursor:"pointer"}} />
              <Image src='./imgs/twitterLogo.svg' _hover={{cursor:"pointer"}} />
              <Image src='./imgs/instagramLogo.svg' _hover={{cursor:"pointer"}} />
              <Image src='./imgs/linkedinLogo.svg' _hover={{cursor:"pointer"}} />
            </Box>
          </Box>

          <Accordion allowToggle mt="50px" w="100%">
            <AccordionItem border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="16px" fontWeight="bold" textColor="white">
                  Find Teachers
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTop="1px solid white">
                <Text mt="10px" textColor="white">English Teacher</Text>
                <Text mt="10px" textColor="white">Chinese Teacher</Text>
                <Text mt="10px" textColor="white">French Teacher</Text>
                <Text mt="10px" textColor="white">Spanish Teacher</Text>
                <Text mt="10px" textColor="white">Other Teachers</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="16px" fontWeight="bold" textColor="white">
                  Lessons
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTop="1px solid white">
                <Text mt="10px" textColor="white">Learn English</Text>
                <Text mt="10px" textColor="white">Learn Chinese</Text>
                <Text mt="10px" textColor="white">Learn French</Text>
                <Text mt="10px" textColor="white">Learn Spanish</Text>
                <Text mt="10px" textColor="white">Learn More Languages</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="16px" fontWeight="bold" textColor="white">
                  Company
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTop="1px solid white">
                <Text mt="10px" textColor="white">About</Text>
                <Text mt="10px" textColor="white">How It Works</Text>
                <Text mt="10px" textColor="white">Terms</Text>
                <Text mt="10px" textColor="white">Privacy Policy</Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize="16px" fontWeight="bold" textColor="white">
                  More
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTop="1px solid white">
                <Text mt="10px" textColor="white">Documentation</Text>
                <Text mt="10px" textColor="white">License</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box className='downSide' w="100%" display="flex" justifyContent="center" mt="50px">
          <Text textColor="white" fontSize="13px">Copyright © 2024. Created by The CodeFather Academy</Text>
        </Box>
      </Box>
    </>
  )
}

export default Footer;
