import React from 'react'
import { Grid, Container, Box, Typography, List, ListItem } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Logo from "../../../assests/images/logo.png";
import { Link } from 'react-router-dom';

const data = [
  { logo: Logo },
  {
    title: 'We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a perfect place for a couple.',
    mb: 2
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
const FooterData = {
  data,
  links: [
    {
      heading: 'Categories',
      subLinks: [
        { title: 'Vegetables & Fruit' },
        { title: 'Beverages' },
        { title: 'Meats & Seafood' },
        { title: 'Frozen Foods' },
        { title: 'Biscuits & Snacks' },
        { title: 'Grocery & Staples' },
      ]
    },
    {
      heading: 'Useful Links',
      subLinks: [
        { title: 'Home' },
        { title: 'Shop' },
        { title: 'About Us' },
        { title: 'Blog' },
        { title: 'Contact Us' },
      ]
    }, {
      heading: 'Help Center',
      subLinks: [
        { title: 'Your Order' },
        { title: 'Your Account' },
        { title: 'Track Order' },
        { title: 'Your Wishlist' },
        { title: 'Search' },
        { title: 'FAQ' },
      ]
    },
    {
      heading: 'Contact US',
      contact: [
        {
          logo: <CallIcon />,
          text: 'Hotline 24/7 :',
          number: '+91 888 104 2340'
        },
        {
          logo: <MailOutlineIcon />,
          text: 'Email Address :',
          number: 'fastkart@hotmail.com'
        }
      ]
    },
  ]
}
const SectionTwo = () => {
  return (

    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}  >
          {FooterData.data.map((obj, i) => (
            <>
              {
                obj.logo ? <img width='150px' src={obj.logo} alt='' style={{ paddingBottom: '15px' }} /> :
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', py: '5px' }}>
                    {obj.icon}
                    <Typography sx={{ ...styles.text, mb: obj.mb }}>
                      {obj.title}
                    </Typography>

                  </Box>
              }
            </>
          ))}

        </Grid>

        <Grid item md={9} xs={12}>
          <Grid container spacing={1}>
            {
              FooterData.links.map((obj, i) => (
                <Grid item lg={3} md={6} xs={12} key={i}>
                  <Typography style={styles.heading}>{obj.heading}</Typography>
                  {obj.subLinks && <List>
                    {obj.subLinks?.map((sub, j) => (
                      <ListItem key={j}>
                        <Link to={''}> {sub.title}</Link>
                      </ListItem>
                    ))}
                  </List>}
                  {
                    obj.contact && <></>
                  }
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12}>
        {FooterData.data.map((obj, i) => (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', py: '5px' }}>
              {obj.icon}
              <Typography sx={{ ...styles.text, mb: obj.mb }}>
                {obj.title}
              </Typography>
            </Box>
          </>
        ))}
      </Grid>
    </Container>
  )
}

export default SectionTwo

const styles = {
  text: {
    fontSize: '16px',
    fontweight: '400',
    color: '#4A5568',
    lineHeight: '27px'
  },
  heading: {
    fontSize: "20px",
    color: '#222222',
    fontWeight: 600,
    marginLeft: '13px',
  }
}
 