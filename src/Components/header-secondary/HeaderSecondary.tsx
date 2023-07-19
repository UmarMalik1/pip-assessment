import React from 'react'
import { Box, Button, Container, List, ListItem } from '@mui/material'
import AllCategories from './all-categories'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';

const data = [
  {
    title: 'Home',
  },
  {
    title: 'Shop'
  },
  {
    title: 'Product'
  },
  {
    title: 'Mega Menu'
  },
  {
    title: 'Blog'
  },
  {
    title: 'Pages'
  },
  {
    title: 'Seller'
  },
]

const HeaderSecondary = () => {
  return (
    <Container maxWidth={'xl'} sx={{ mt: 1 }}>
      <Box sx={styles.HeaderSecondary}>
        <AllCategories />
        <List sx={{ display: 'flex', flexGrow: 0.8 }}>
          {
            data.map((obj, i) => (
              <ListItem key={i} sx={{ cursor: 'pointer', justifyContent: 'center' }}>
                {obj.title}
                <ExpandMoreOutlinedIcon />
              </ListItem>
            ))
          }
        </List>
        <Button variant='contained' size='large' sx={styles.dealBtn} disableElevation={true}>
          <ElectricBoltOutlinedIcon />
          Deal Today
        </Button>
      </Box>
    </Container>
  )
}

export default HeaderSecondary


const styles = {
  HeaderSecondary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    gap: '15px',
    flexWrap: 'wrap'
  },
  dealBtn: {
    backgroundColor:'#E6F5F3', fontSize: "16px", fontWeight: "600", borderRadius: "5px", color: '#0DA487', border: 'none',
    '&:hover': {
      backgroundColor:'#E6F5F3',
      shadowBox:'none'
    }

  }
}