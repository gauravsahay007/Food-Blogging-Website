import * as React from 'react'

import Hero from "./Components/Hero"
import AboutUs from './Components/AboutUs'
import LatestArticle from './Components/LatestArticle'
import ContactUs from './Components/ContactUs'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
     <Hero/>
     <AboutUs/>
     <LatestArticle/>
     <ContactUs/>
    </ChakraProvider>
   
  )
}

export default App;