import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import VisaImg from "../../../assests/images/visa.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';




const SectionThree = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignitems: 'center', py: '30px',flexWrap:'wrap' }}>
        <Box sx={{mt:'8px'}}>
          <Typography sx={{ fontSize: '14px', color: '#4A5568', fontweight: '400' }}>
            ©2022 Fastkart All rights reserved
          </Typography>
        </Box>
        <Box>
        <img src={VisaImg} alt="" />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', gap: '10px', ml: '5px',mt:'8px' }}>
          <Typography sx={{ fontSize: '14px', color: '#4A5568', fontweight: '400' }}>Stay Connected :</Typography>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <PinterestIcon />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default SectionThree
