import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';
import Card from './Card';
import meal1 from '../Images/meal1.jpg';
import meal2 from '../Images/meal2.jpg';
import meal3 from '../Images/meal3.png';
import meal4 from '../Images/meal4.jpg';
import meal5 from '../Images/meal5.jpg';
import meal6 from '../Images/meal6.jpg';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function LatestArticle() {
  const [page, setPage] = useState(1);
  const maxPages = 2;

  const LeftArrowFunction = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const RightArrowFunction = (e) => {
    e.preventDefault();
    if (page < maxPages) {
      setPage(page + 1);
    }
  };

  const firstSetofCards = () => {
    return (
      <>
        <Card
          img={meal1}
          heading={'Grilled  Tomatoes at Home'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard.'
          }
        />
        <Card
          img={meal2}
          heading={'Snacks for Travel'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard.'
          }
        />
        <Card
          img={meal3}
          heading={'Post-workout Recipes'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard.'
          }
        />
      </>
    );
  };

  const SecondSetofCards = () => {
    return (
      <>
        <Card
          img={meal4}
          heading={'How To Grill Corn'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard.'
          }
        />
        <Card
          img={meal5}
          heading={'Crunchwrap Supreme'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard.'
          }
        />
        <Card
          img={meal6}
          heading={'Broccoli Cheese Soup'}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard. Lorem Ipsum has been the industry standard.'
          }
        />
      </>
    );
  };

  const ShowSetOfCards = () => {
    if (page === 1) {
      return firstSetofCards();
    }
    if (page === 2) {
      return SecondSetofCards();
    }
    return null;
  };

  return (
    <Box top={{base:"1000px",md:"1400px"}} style={{ position: 'absolute' }}>
      <Box width={{ basic: '', md: '32.01vw' }} height={{ basic: '', md: '10.44vh' }}>
        <Text
          display="block"
          width="100vw"
          textAlign={{base:"center",md:"left"}}
          marginLeft={{base:"0px",md:"7.5vw"}}
          fontWeight="600"
          fontSize={{ base: '3.28vh', md: '6.96vh' }}
          letterSpacing="4%"
          color="#0E2368"
          marginBottom={{ base: '2.8vh', md: '2.8vh' }}
        >
          Latest Articles
        </Text>
      </Box>

<Box position="absolute"  top={{ base: '', md: '15.54vh' }}
        left={{ base: '', md: '7.5vw' }}>
<Box
        
        display="flex"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
       
        width={{ base: '', md: '85vw' }}
        style={{ justifyContent: 'space-between' }}
      >
        {ShowSetOfCards()}
      </Box>

      <Flex justifyContent="center" alignItems="center">
  <IconButton
    icon={<ChevronLeftIcon />}
    aria-label="Previous Page"
    size="sm"
    mr={2}
    bg="white"
    color={page > 1 ? '#424961' : '#AFAFAF'}
    border="1px solid"
    borderColor={page > 1 ? '#424961' : '#AFAFAF'}
    _hover={{ bg: ' #424961', color: 'white' }}
    onClick={(e) => {
      LeftArrowFunction(e);
    }}
  />
  <Box>
  <Text fontSize="sm" fontWeight="bold">
    {page}/2
  </Text>
  </Box>
  
  <IconButton
    icon={<ChevronRightIcon />}
    aria-label="Next Page"
    size="sm"
    ml={2}
    bg="white"
    color={page < 2 ? '#424961' : '#AFAFAF'}
    border="1px solid"
    borderColor={page < 2 ? '#424961' : '#AFAFAF'}
    _hover={{ bg: ' #424961', color: 'white' }}
    onClick={(e) => {
      RightArrowFunction(e);
    }}
  />
</Flex>
</Box>
     

    
    </Box>
  );
}
