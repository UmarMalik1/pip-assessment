import React from 'react'
import vegIcon from "../../assests/vegetable.svg"
import tea from "../../assests/tea.svg"
import meat from "../../assests/meat.svg"
import dairy from "../../assests/breakfast.svg"
import frozen from "../../assests/frozen.svg"
import snacks from "../../assests/snacks.svg"
import grocery from "../../assests/grocery.svg"
import drink from "../../assests/drink.svg"
import milk from "../../assests/milk.svg"
import pet from "../../assests/pet.svg"
import { Box, List, ListItem, Typography } from '@mui/material'



const sideBar = [
  {
    icon: vegIcon,
    title: 'Vegetables & Fruit',
    type: 'vegetablesFruits'
  },
  {
    icon: tea,
    title: 'Beverages',
    type: 'beverages'
  }, {
    icon: meat,
    title: 'Meats & Seafood',
    type: 'meat'
  }, {
    icon: dairy,
    title: 'Breakfast & Dairy',
    type: 'dairy'
  }, {
    icon: frozen,
    title: 'Frozen Foods',
    type: 'frozen'
  }, {
    icon: snacks,
    title: 'Biscuits & Snacks',
    type: 'snacks'
  }, {
    icon: grocery,
    title: 'Grocery & Staples',
    type: 'grocery'
  }, {
    icon: drink,
    title: 'Wines & Alcohol Drinks',
    type: 'drinks'
  }, {
    icon: milk,
    title: 'Milk & Dairies',
    type: 'milk'
  }, {

    icon: pet,
    title: 'Pet Foods',
    type: 'pet'
  },
  { border: true },
  { title: 'Value of the Day' },
  { title: 'Top 50 Offers' },
  { title: 'New Arrivals' },
]
const SideBarCategory = () => {
  return (
    <Box sx={{ background: '#F8F8F8' }}>
      <List>
        <Typography sx={{ fontSize: '20px', fontweight: '600', py: 2, pl: 3 }}>
          Category
        </Typography>
        {
          sideBar.map((data, i) => (
            <ListItem key={i} sx={{ gap: '20px', my: '10px', pl: 3,cursor:'pointer' }}>
              {data.icon && <img src={data.icon} alt='' height={30} width={30} />}
              {data.type && <Typography sx={styles.text}>{data.title}</Typography>}
              {data.border && <Box sx={{ border: '1px dotted grey', width:'100%' }}></Box>}
              {!data.type && <Typography sx={styles.text}>{data.title}</Typography>}
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default SideBarCategory
const styles={
  text:{fontSize:'16px',fontWeight:400,}
}