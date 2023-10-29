import React from 'react';
import { Box } from '@chakra-ui/react';
import styles from "../Styles/ImageOverlay.module.css"
const ImageOverlay = ({img1,img2}) => {
  return (
    <div className={styles.imageContainer}>
      <img src={img1} alt="" className={styles.bottomImage} />
      <img src={img2} alt="" className={styles.topImage} />
      <Box as='button'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='1px'
        px='8px'
        borderRadius='21px'
       
        fontWeight='semibold'
        bg='#E23744'
        borderColor='white'
        color='white'
        display="inline-flex" 
        alignItems="center" 
        justifyContent="center"
        _hover={{ bg: 'white', color:'black' }}
        className={styles.overlayButton} >
    Get In Touch
    </Box>
    </div>
  );
};

export default ImageOverlay;
