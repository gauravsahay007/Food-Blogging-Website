import React from 'react'
import { Box, Image, Text } from "@chakra-ui/react";
export default function Card({img,heading,description}) {
  return (
    <Box
    overflow="hidden"
      width={{base:"72.26vw",md:"26.45vw"}}
      height={{base:"fit-content",md:"68.9vh"}}
      borderRadius="20.94px"
      borderWidth="1.37px"
      borderColor="#93A2D3"
      borderStyle="solid"
      backgroundColor="white" 
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginLeft={{base:"13.8vw",md:"0px"}}
      marginBottom={{base:"7.15vh",md:"2.51vh"}}
      padding={{base:"10px",md:"20px"}}
      
    >
      <Image
        src={img} 
        width={{base:"54.4vw",md:"22.63vw"}}
        height={{base:"19.4vh",md:"31.96vh"}}
        borderRadius="21px"
        marginTop={{base:"1.5vh",md:"3.40vh"}} 
        
      />
      <Box
       width={{base:"56.8vw",md:"20.48vw"}}
       height={{base:"",md:"24.1vh"}}
        marginTop={{base:"",md:"3.40vh"}} 
      >
      <Text
      fontFamily="Poppins"
      fontWeight="950"
      fontSize={{base:"1.87vh",md:"2.611vh"}}
      lineHeight={{base:"",md:"3.35vh"}}
      color="#0E2368"
      textAlign="left"
      marginBottom={{base:"0",md:"2.51vh"}}
    >
      {heading}
    </Text>

    <Text
      fontFamily="Open Sans"
      fontWeight="400"
      fontSize={{base:"1.40vh",md:"1.86vh"}}
      width={{base:"56.8vw",md:"20.4vw"}}
      height={{base:"12.44vh",md:"10vh"}}
      lineHeight={{base:"",md:"3.35vh"}}
      overflow="hidden"
      letterSpacing="-2%"
      textAlign="justify"
      marginBottom={{base:"0",md:"2.51vh"}}
    >
      {description}
    </Text>
    <Box
      as="button"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      borderRadius="21px" 
      fontSize={{base:"1.29vh",md:"2.044vh"}}
      fontWeight="700"
      fontFamily="Open Sans"
      lineHeight="36px"
      bg="white" 
      borderColor="#424961"
      color="#424961"
      display="block"
      
      _hover={{ bg: "white", color: "black" }}
      height={{base:"5.56vh",md:"5.22vh"}}
      width={{base:"31.46vw",md:"9.097vw"}}
      marginTop={{base:"1.8vh",md:"1.8vh"}}
    
    >
      Read More
    </Box>
      </Box>
    </Box>
  )
}
