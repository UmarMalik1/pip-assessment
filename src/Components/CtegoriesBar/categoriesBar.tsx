import React from 'react'
import { Box, Container, Typography,Button } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

const liData=[
  {
    text:'Home',
    icon:KeyboardArrowDownIcon,
  },
  {
    text:'Shop',
    icon:KeyboardArrowDownIcon,
  },
  {
    text:'Product',
    icon:KeyboardArrowDownIcon,
  },
  {
    text:'Mega Menu',
    icon:KeyboardArrowDownIcon,
  },
  {
    text:'Blog',
    icon:KeyboardArrowDownIcon,
  },{
    text:'Pages',
    icon:KeyboardArrowDownIcon,
  },{
    text:'Seller',
    icon:KeyboardArrowDownIcon,
  },


]

const CategoriesBar = () => {
  return (
    <Box>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.categories}>
          <FormatListBulletedIcon />
          <Typography component="p" sx={styles.categoriestext}>All Categories</Typography>
        </Box>
        <Box>
          <ul style={styles.ul}>
          {liData.map((item ,i)=>(
            <div style={styles.liflex}>
            <div style={styles.li}>{item.text}</div>
            <div>{<item.icon/>}</div>

            </div>
          ))}
          </ul>
        </Box>
        <Button sx={styles.btn}>
        <BoltOutlinedIcon />
        <Typography component="p" sx={styles.dealtext}>Deal Today</Typography>
        </Button>
      </Container>
    </Box>
  )
}

export default CategoriesBar
const styles = {
  container:{display:"flex", alignItems: 'center',justifyContent: "space-between",mt:2},
  categories: { width: "240px", height: '55px', backgroundColor: "#0DA487", color: "white", display: "flex", alignItems: 'center', borderRadius: "5px", justifyContent: "space-evenly" },
  categoriestext: { fontWeight: "600", fontSize: "18px" },
  ul: {listStyle:"none",display:"flex", },
  li:{marginLeft:"25px"},
  liflex:{display:"flex"},
  btn:{height:"57px",width:"158px",backgroundColor:"#E6F5F3",color:"#0DA487",},
  dealtext:{fontSize:"16px",fontWeight:"600",borderRadius: "5px"}
}