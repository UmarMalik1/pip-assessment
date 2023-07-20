import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Array=[
  {
    img:'images/first.jpg',
    off:'5%',
    heading:'Hot Deals on New Items',
    decr:'Daily Essentials Eggs & Dairy'
  },
  {
    img:'images/second.jpg',
    off:'5%',
    heading:'Buy More & Save More',
    decr:'Fresh Vegetables'
  }, 
  {
    img:'images/thirdf.jpg',
    off:'5%',
    heading:'Organic Meat Prepared',
    decr:'Delivered to your Home'
  }, 
  {
    img:'images/fourth.jpg',
    off:'5%',
    heading:'Buy More & Save More',
    decr:'Nuts & Snacks'
  },
]

const OffMenu = () => {
  return (
    <Container maxWidth='xl' sx={{ my: '50px' }}>
      <Grid container spacing={2} sx={{width:'calc(100% + 53px)'}}>
      {Array.map((data,i)=>(
          <Grid item lg={4} md={6} xl={3} xs={12} key={i}>
          <Box sx={styles.main(data.img)}>
            <Box sx={{ backgroundColor: '#FAFAF8', width: '63%', borderTopRightRadius: '50px', borderBottomRightRadius: '50px', ml: 2 }}>
              <Typography sx={{ color: '#FF6363', fontSize: '14px', fontWeight: '400' }}>
                5% OFF
              </Typography>
              <Typography sx={{ fontSize: '18px', fontWeight: '500', my: 0.3 }}>
                Hot Deals on New Items
              </Typography>
              <Typography sx={{ color: '#4A5568', fontweight: 400, fontSize: '14px' }}>
                Daily Essentials Eggs & Dairy
              </Typography>
            </Box>
            <Button sx={{ color: 'white', mt: '80px', display: 'flex', gap: '10px', fontSize: '16px', ml: 2, width: '140px', }}>
              <Typography sx={{ fontWeight: '400', color: 'ffff' }}>
                Shop Now
              </Typography>
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Grid>
      ))}
      </Grid>
    </Container>
  )
}

export default OffMenu

const styles = {
  main:(img :any)=>( {
    backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: "cover",
    borderRadius: '5px', minHeight: '228px',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
  })
}