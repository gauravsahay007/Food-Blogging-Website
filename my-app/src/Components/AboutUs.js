import React from 'react'
import { Box,Text,Image } from '@chakra-ui/react'
import img from "../Images/about.jpg"
export default function AboutUs() {
  return (
    <Box
    width="100vw"
    height={{base:"50vh",md:"58.20vh"}}
    marginTop="23.13vh"
    position="absolute"
    style={{background:`llinear-gradient(180deg, rgba(30, 42, 93, 0.04) 4%, rgba(48, 62, 130, 0.04) 4%, rgba(60, 80, 157, 0.04) 4%)`}}
  >
    <Image display={{base:"none",md:"block"}} position="absolute" width={{base:"",md:"26.66vw"}} height={{base:"",md:"58.2vh"}} left={{base:"",md:"14.23vw"}}  src={img} alt="" />
    <Box
      width={{base:"",md:"31.04vw"}}
      height={{base:"",md:"31.59vh"}}
      position="absolute"
      left={{base:"",md:"54.791vw"}}
     top={{base:"",md:"13.30vh"}}
    >
      <Box
      >
        <Text
      fontFamily="Poppins"
      fontWeight="600"
      fontSize={{base:"3.05vh",md:"5.59vh"}}
      lineHeight="27px"
      
      textAlign={{base:"center",md:""}}
      style={{marginBottom:"27.41px", color:"#0E2368"}}
    >
      About Us
    </Text>
    <Text fontSize={{base:"1.29vh",md:"1.86vh"}} marginLeft={{base:"50px",md:"0px"}} marginRight={{base:"50px",md:"0px"}} color="#444957" width={{base:"",md:"31.04bw"}} >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas non officia molestias? Ad, cum cupiditate. Autem repellat molestias provident eligendi maxime ea mollitia tempora nulla cumque modi unde esse, explicabo, veritatis laboriosam eaque! Iusto, dolorem voluptas doloribus perferendis dolore repudiandae omnis nisi illo enim molestiae eum doloremque assumenda distinctio delectus maiores.
    </Text>
      
      </Box>

      <Box
      as="button"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      px="8px"
      borderRadius="21px" 
      bg="#E23744"
      borderColor="white"
      color="white"
        fontSize={{base:"1.29vh",md:"1.11vw"}}
      _hover={{ bg: "white", color: "black", border:"1px solid black" }}
      position="relative"
      marginTop={{base:"2.93vh",md:"5.79vh"}}
      left={{base:"37.06vw",md:"0"}}
      width={{base:"25.6vw",md:"9.16vw"}}
      height={{base:"2.9vh",md:"5.22vh"}}
     
    >
    <span>Read More!</span>
     
    </Box>
    </Box>
  </Box>
  )
}
