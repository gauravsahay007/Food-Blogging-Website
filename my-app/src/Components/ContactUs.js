import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import truck from "../Images/truck.png";
import fb from "../Images/fb.png";
import insta from "../Images/Insta.png";
import twitter from "../Images/twitter.png";

export default function ContactUs() {
  return (
    <Box
      bg="#F8F8F8"
      position="absolute"
      top={{ base: "2300px", md: "2301px" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      width="100vw"
      height={{ base: "90vh", md: "45vh" }}
    >
      <Image
        src={truck}
        width={{ base: "20vw", md: "11.1vw" }}
        height={{ base: "6.80vh", md: "15.54vh" }}
        left={{ base: "39.4vw", md: "7.22vw" }}
        top={{ base: "60px", md: "123px" }}
        position="relative"
      />

      <Text
        width={{ base: "78.4vw", md: "16.11vw" }}
        height={{ base: "13.6vh", md: "23.13vh" }}
        position="absolute"
        left={{ base: "10.6vw", md: "32.9vw" }}
        top={{ base: "", md: "84px" }}
        marginTop={{ base: "130px", md: "0px" }}
      >
        <Text
          fontFamily="Source Sans Pro"
          fontWeight="600"
          fontSize={{ base: "4.36vw", md: "1.3vw" }}
          lineHeight="27.22px"
          letterSpacing="3%"
          color="#0E2368"
        >
          Contact Us
        </Text>
        <Text
          fontFamily="Source Sans Pro"
          fontWeight="400"
          fontSize={{ base: "2.33vw", md: "1.01vw" }}
          lineHeight="23.03px"
          color="#646874"
        >
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
          <br />
          example2020@gmail.com
          <br />

          (904) 443-0343
        </Text>
      </Text>

    <Box width={{base:"",md:"10.6vw"}} position="absolute" left={{base:"12vw",md:"62.3vw"}} height={{base:"15.1vh",md:"22.5vh"}} marginTop={{base:"270px",md:"80px"}} >
    <UnorderedList listStyleType="none" padding="0" margin="0" spacing="10px" >
        <ListItem>
          <Text
            fontFamily="Source Sans Pro"
            fontWeight="600"
            fontSize={{ base: "4.36vw", md: "1.3vw" }}
            lineHeight="27.22px"
            letterSpacing="3%"
            color="#0E2368"
          >
            More
          </Text>
        </ListItem>
        <ListItem  fontSize={{ base: "2.33vw", md: "1.01vw" }} >About Us</ListItem>
        <ListItem  fontSize={{ base: "2.33vw", md: "1.01vw" }}>Products</ListItem>
        <ListItem fontSize={{ base: "2.33vw", md: "1.01vw" }}>Career</ListItem>
        <ListItem fontSize={{ base: "2.33vw", md: "1.01vw" }}>Contact Us</ListItem>
      </UnorderedList>
    </Box>
     

      <Box left={{ base: "12vw", md: "83.8vw" }} marginTop={{base:"450px",md:"80px"}} position="absolute" display="flex" flexDirection="column" justifyContent="space-between" >
        <Text
          fontFamily="Source Sans Pro"
          fontWeight="600"
          fontSize="18.84px"
          lineHeight="27.22px"
          letterSpacing="3%"
          color="#0E2368"
          display={{base:"none",md:"block"}}
        >
          Social Links
          </Text>
          <Box display="flex" marginTop="0px" flexDirection="row" gap="30px">
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
          </Box>
       
      </Box>

      <Text left={{ base: "12vw", md: "83.8vw" }} marginTop={{base:"420px",md:"210px"}} position="absolute" fontSize="12px" color="#777777">
          &copy; 2022 Food Truck Example
        </Text>
    </Box>
  );
}
