import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Infosection = () => {


  return (
    <Container maxWidth='xl' sx={{ my: '20px' }}>
      <Grid container spacing={8}>
        <Grid item lg={8} xs={12} >
          <Box sx={styles.maincart}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Typography sx={{ color: '#4A5568', fontSize: '14px', fontWeight: '400', mt: '5px' }}>
                Exclusive Offer
              </Typography>
              <Typography sx={{ color: '#FE6161', backgroundColor: '#F6E5E3', p: '4px', borderRadius: '20px', width: '75px', textAlign: 'center' }}>
                30% Off
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '42px', fontWeight: '600', lineHeight: '58px' }}>
              STAY HOME & DELIVERED <br />YOUR <span style={{ color: '#0DA487' }}> DAILY NEEDS</span>
            </Typography>
            <Typography sx={{ color: '#8D949E', fontSize: '14px', fontWeight: '400', lineHeight: '23px' }}>
              Vegetables contain many vitamins and minerals that are good<br /> for your health.
            </Typography>
            <Button sx={{ color: 'white', width: '190px', height: '55px', backgroundColor: '#FF6464', mt: '20px', display: 'flex', gap: '5px' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: '600', color: 'ffff' }}>
                Shop Now
              </Typography>
              <ArrowRightAltIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={6} xs={12}>
              <Box sx={styles.maincartchildone}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Typography sx={{ color: '#FE6161', fontSize: '38px', fontWeight: '600' }}>
                    45% <span style={{ fontSize: '16px', color: 'black' }}>off</span>
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '26px', fontWeight: '600', color: '#0DA487' }}>
                  Nut Collection
                </Typography>
                <Typography sx={{ color: '#8D949E', fontSize: '14px', fontWeight: '400', lineHeight: '23px' }}>
                  We deliver organic <br /> vegetables & fruits
                </Typography>
                <Button sx={{ color: 'black', mt: '10px', display: 'flex', gap: '10px', fontSize: '16px', ml: '-6px', width: '140px' }}>
                  <Typography sx={{ fontWeight: '400', color: 'ffff' }}>
                    Shop Now
                  </Typography>
                  <ArrowRightAltIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item lg={12} md={6} xs={12}>
              <Box sx={styles.maincartchildtwo}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                </Box>
                <Typography sx={{ fontSize: '26px', fontWeight: '600', color: '#FE6161' }}>
                  Nut Collection
                </Typography>
                <Typography sx={{ color: '#0DA487', fontSize: '22px', fontWeight: '600' }}>
                  Organic Market
                </Typography>
                <Typography sx={{ color: '#8D949E', fontSize: '14px', fontWeight: '400', lineHeight: '23px' }}>
                  We deliver organic <br /> vegetables & fruits
                </Typography>
                <Button sx={{ color: 'black', mt: '10px', display: 'flex', gap: '10px', fontSize: '16px', ml: '-6px', width: '140px' }}>
                  <Typography sx={{ fontWeight: '400', color: 'ffff' }}>
                    Shop Now
                  </Typography>
                  <ArrowRightAltIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Infosection;

const styles = {
  maincart: {
    minHeight: '700px', height: "100%", backgroundImage: "url('images/main.jpg')", borderRadius: '5px', backgroundPositionX: "-70px", width: { lg: '100%', xs: 'auto' },
    display: 'flex', justifyContent: 'center', flexDirection: 'column', pl: '40px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
  },
  maincartchildone: { backgroundSize: '100% 100%', backgroundImage: "url('images/badam.jpg')", backgroundCover: "cover", borderRadius: '5px', marginBottom: '20px',  width: { lg: '100%', xs: 'auto' }, height: "100%", minHeight: "340px", display: 'flex', justifyContent: 'center', flexDirection: 'column', pl: '40px' },
  maincartchildtwo: { backgroundSize: '100% 100%', backgroundImage: "url('images/third.jpg')", backgroundCover: "cover", borderRadius: '5px', marginBottom: '20px',  width: { lg: '100%', xs: 'auto' }, height: "100%", minHeight: "340px", display: 'flex', justifyContent: 'center', flexDirection: 'column', pl: '40px' },
}
