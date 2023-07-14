import React from 'react'
import { Box, Container, TextField, Typography, Button, AppBar } from '@mui/material';
import Logo from "../../assests/images/logo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const SubHeader = () => {

  return (
    <Box sx={styles.subHeader}>
      <Container maxWidth="xl">
        <Box sx={styles.subHeaderComponent}>
          <Box sx={styles.logo}>
            <img src={Logo} alt="" width={'100%'} />
          </Box>
          <Box sx={styles.location}>
            <LocationOnIcon sx={styles.icon} />
            <Typography component="p" sx={styles.text}>Your Location</Typography>
            <KeyboardArrowDownIcon sx={styles.icon} />
          </Box>
          <TextField id="outlined-basic" label="i'm searching for..." variant="outlined" sx={styles.input} />
          <Button sx={styles.searchButton}>
            <SearchIcon />
          </Button>
          <Box sx={styles.contact}>
            <Box>
              <CallIcon sx={styles.icon} />
            </Box>
            <Box sx={styles.number}>
              <Typography component="p" sx={styles.deliverytext}>24/7 Delivery</Typography>
              <Typography component="p" sx={styles.phonetext}>+91 888 104 2340</Typography>
            </Box>
            <hr />
          </Box>
          <FavoriteBorderIcon sx={styles.icon} />
          <hr />
          <ShoppingCartOutlinedIcon sx={styles.icon} />
          <hr />
          <Box>
            <div>
          <PersonOutlinedIcon sx={styles.accountlogo}/>
          </div>
          <div>
          <Typography component="p" sx={styles.deliverytext}>Hello,</Typography>
          <Typography component="p" sx={styles.phonetext}>My Account</Typography>
          </div>
          </Box>
        </Box>
      </Container>
      <AppBar />
    </Box>
  )
}

export default SubHeader

const styles = {
  subHeader: { py: 1.2, color: "white" },
  subHeaderComponent: { display: "flex", alignItems: "center" },
  logo: { height: "10px", width: "173px", },
  text: { fontWeight: '600', color: '#0DA487', fontSize: '16px' },
  icon: { color: 'grey', mx:"8px"},
  location: {  display: "flex", alignItems:'center',border: '1px solid #CDD0D5 !important',mx:'10px',height:"54px",width:"200px",justifyContent:"space-between",borderRadius:'5px' },
  searchButton: { height: "60px", width: "60px", backgroundColor: "#FFA53B", color: "white", },
  input: {  width: "577px" },
  deliverytext: { color: "#4A5568", fontSize: '14px', fontWeight: "400" },
  phonetext: { color: "#222222", fontWeight: "500", fontSize: "16px" },
  contact: { display: "flex", marginLeft: "52px" },
  number: { marginLeft: "8px" },
  accountlogo:{color:"#939AA5"},
}