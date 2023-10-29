import { Box, Text } from '@chakra-ui/react';
import truck from "../Images/truck.png"
import img1 from "../Images/img1.png"
import img2 from "../Images/img2.png"
import { Image } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box
      height={{ base: '100vh' }}
      display="flex"
      gap={{base:"0px"}}
      flexDirection={{ base: 'column', md: 'row-reverse', lg:'row-reverse' }}
    >
      <Box height={{ base: '100vh', md: '100vh' }} overflow="hidden"  position="relative">
    
        <Image src={img1} left={{lg:"17px" ,sm:"0px"}} width={{base:"100vw",md:"50vw"}} position="relative" zIndex="1" height={{ base: '50vh', md: '100vh' }}    alt=""  />
        <Image src={img2} left={{lg:"17px" ,sm:"0px"}} width={{base:"100vw",md:"50vw"}} position="relative" bottom={{base:"50vh",md:"100vh"}} zIndex="2" height={{ base: '50vh', md: '100vh' }}    alt=""  />
        {/* <Image src={img2}  zIndex="2" height={{base:"50vh",md:'100vh'}}   alt="" /> */}
        <Box
          as='button'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          border='1px'
          px='8px'
          borderRadius='34px'
          fontWeight='700'
          fontFamily='Open Sans'
          lineHeight={{ base: '20px', md: '36px' }}
          bg='#E23744'
          borderColor='white'
          color='white'
          position="absolute"
          _hover={{ bg: 'white', color: 'black' }}
          left={{base:"71vw",md:"40vw"}}

          width={{base:"23.23vw",md:"8.46vw"}}

          fontSize={{base:"1.29vh",md:"1.99vh"}}
          top={{base:"18px",md:"32px"}}
          style={{
           
            height: '42px',
            zIndex:"3",
            gap: '7px',
            letterSpacing: '1%',
    
          }}
        >
          Get In Touch
        </Box>
       
      </Box>

      <Box  >
      <Image 
  src={truck}
  display={{base:"none",md:"block"}}
  position="absolute"
  left={{base:"",md:"6.94vw"}}
  style={{
    width: "107px",
    height: "83px",
    zIndex: "1",
    position: "absolute",
    left: "100px",
    top: "33px",
  }}
  
  alt=""
/>

        <Box>
            <Box display="flex" justifyContent="center" alignContent="center" >
            <Text  position="absolute" top={{base:"57vh",md:"28.23vh"}}  left={{base:"22.8vw",md:"6.94vw"}} width={{base:"56.33vw",md:"23.95vw"}}  height={{base:"15.25vh",md:"25.74vh"}}  color="#0E2368" fontWeight="700" fontSize={{ base: '4.46vh', md: '7.8vh' }} lineHeight={{ base: '5.4vh', md: "8vh" }}  >
            Discover the{' '}
            <Text as="span" color="#E23744">
              Best{' '}
            </Text>
            Food and  Drinks
          </Text>
        </Box>
            </Box>

            
        <Box>
            <Box>
            <Text position="absolute" left={{base:"16.8vw",md:"6.94vw"}} top={{base:"75.11vh",md:"54.82vh"}} width={{base:"66.4vw",md:"23.46vw"}} height={{base:"4vh",md:"6.98vh"}} textAlign={{base:"center",md:"justify"}}  fontWeight="400" fontSize={{ base: '1.30vh', md: '1.95vh' }} lineHeight={{ base: '2.11vh', md: '3.4vh' }} color='#444957' >
            Naturally made Healthcare Products for the better care & support of your body.
          </Text>
        </Box>
            </Box>

        

    
         
         

        

        
      </Box>

      <Box
  as='button'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='1px'
  px='8px'
  borderRadius='34px' 
  fontSize={{base:"1.4vh",md:'2.23vh'}}
  width={{base:"32vw",md:"13.19vw"}}
  height={{base:"4.7vh",md:"7.83vh"}}
  top={{base:"82.6vh",md:"69.1vh"}}
  left={{base:"33.8vw",md:"6.73vw"}}
  fontWeight='semibold'
  bg='#E23744'
  borderColor='white'
  color='white'
  display="inline-flex" 
  alignItems="center" 
  justifyContent="center"
  _hover={{ bg: 'white', color: 'black', border:"1px solid black" }}
  style={{
    position: 'absolute',
    padding: '14px 34px', 
    gap: '7px' 
  }}
>
  Explore Now!
</Box>
    </Box>
  );
}
