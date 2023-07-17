import React from 'react'
import SectionOne from './footer-section-one/sectionOne'
import SectionTwo from './footer-section-two/sectionTwo'
import SectionThree from './footer -section-three/sectionThree'
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#F8F8F8', py: '20px' }}>
      <SectionOne />
      <SectionTwo />
      {/* <SectionThree /> */}
    </Box>
  )
}

export default Footer
