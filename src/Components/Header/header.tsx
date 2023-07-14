import React from 'react'
import { Box, Container, Typography, Select, MenuItem } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  const languages = [
    {
      image: '',
      text: 'English'
    },
    {
      image: '',
      text: 'Germany'
    }, {
      image: '',
      text: 'Turki'
    },
  ]
  const currency = [
    {
      text: 'USD'
    },
    {
      text: 'EUR'
    }, {
      text: 'CNY'
    },

  ]
  return (
    <Box sx={styles.headerWrapper}>
      <Container maxWidth="xl">
        <Box sx={styles.headerContent}>
          <Box sx={styles.logo} >
          <LocationOnIcon sx={styles.icon} />
          <Typography component="p" sx={styles.heading}>
            1418 Riverwood Drive, CA 96052, US
          </Typography>
          </Box>
          <Typography component="p" sx={styles.heading}>
            Welcome to FastKart! Wrap new offers/gift every signle day on Weekends.
          </Typography>
          <Box sx={styles.boxWrapper}>
            <Box>
              <Select size='small' sx={styles.selectWrapper} defaultValue={"English"}>
                {languages.map((item, i) => (
                  <MenuItem key={i} value={item.text}>{item.text}</MenuItem>
                ))}
              </Select>
            </Box>
            <hr/>
            <Box>
              <Select size='small' sx={styles.selectWrapper} defaultValue={"USD"}>
                {currency.map((item, i) => (
                  <MenuItem key={i} value={item.text}>{item.text}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>
      </Container>

    </Box>
  )
}

export default Header

const styles = {
  headerWrapper: { background: "#0DA487", py: 1.2, color: "white" },
  headerContent: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  heading: { fontWeight: 500, fontSize: 14, m: 0 },
  selectWrapper: { "& .MuiOutlinedInput-notchedOutline": { border: 0 }, color: "#fff", boxShadow: 0, "& .fieldset": { border: "none" } },
  boxWrapper: { display: "flex", justifyContent: "center", },
  logo:{display:'flex',},
  icon:{color:"white",}

}
