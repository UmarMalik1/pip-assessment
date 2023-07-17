import React from 'react'
import { Grid, Container } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/Discount';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const data = [
  {

    icon: <AddShoppingCartIcon />,
    title: 'Every Fresh Product'
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Free Delivery For Order Over $50'
  },
  {
    icon: <DiscountIcon />,
    title: 'Daily Mega Discounts',
  },
  {
    icon: <StarBorderIcon />,
    title: 'Best Price On The Market'
  },

]

const SectionOne = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ py: '40px' }}>
        {data.map((item: any, i: number) => (
          <Grid key={i} item lg={3} md={6} xs={12} style={{ display: "flex", alignItems: 'center', gap: '30px' }}>
            {item.icon}
            <h5 style={styles.text}>{item.title}</h5>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default SectionOne

const styles = {
  first: { py: 4, display: "flex", alignItems: "center", gap: "10px" },
  text: { fontSize: '16px', fontWeight: '500' },
} 