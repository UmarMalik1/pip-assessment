import React from 'react'
import { Grid, Container, Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Logo from "../../../assests/images/logo.png"

const data = [
  { logo: Logo },
  {
    title: 'We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a perfect place for a couple.'
  },
  {
    title: '1418 Riverwood Drive, CA 96052, US',
    icon: <HomeIcon />
  },
  {
    title: 'support@fastkart.com',
    icon: <MailOutlineIcon />
  },
]
const categories = [
  { title: 'Vegetables & Fruit' },
  { title: 'Beverages' },
  { title: 'Meats & Seafood' },
  { title: 'Frozen Foods' },
  { title: 'Biscuits & Snacks' },
  { title: 'Grocery & Staples' },
]
const links = [
  { title: 'Home' },
  { title: 'Shop' },
  { title: 'About Us' },
  { title: 'Blog' },
  { title: 'Contact Us' },
]

const help = [
  { title: 'Your Order' },
  { title: 'Your Account' },
  { title: 'Track Order' },
  { title: 'Your Wishlist' },
  { title: 'Search' },
  { title: 'FAQ' },
]
const contact = [
  {
    logo: <CallIcon />,
    text: 'Hotline 24/7 :',
    number: '+91 888 104 2340'
  },
  {
    logo: <MailOutlineIcon />,
    text: 'Email Address :',
    number: 'fastkart@hotmail.com'
  },

]
const FooterData = {
  data,
  links: [categories, links, help, contact]
}
const SectionTwo = () => {
  return (

    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item lg={3} md={6} xs={12}>
          {FooterData.data.map((obj, i) => (
            <>
              {
                obj.logo ? <img width='150px' src={obj.logo} alt='' style={{ paddingBottom: '15px' }} /> :
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', py:'5px'}}>
                    {obj.icon}
                    <Typography sx={styles.text}>
                      {obj.title}
                    </Typography>
                  </Box>
              }
            </>
          ))}
          
        </Grid>

      </Grid>
    </Container>
  )
}

export default SectionTwo

const styles = {
  text: {
    fontSize: '16px',
    fontweight: '400',
    color:'#4A5568',
    lineHeight:'27px'
  }
}