import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import IconOne from "../../assests/gridFirst.png";
import IconTwo from "../../assests/gridtwo.png";
import IconThree from "../../assests/gridthree.png";
import IconFour from "../../assests/gridfour.png";
import IconFive from "../../assests/gridfive.png";
import IconSix from "../../assests/gridsixth.png";
import IconSeven from "../../assests/gridseven.png";
import IconEight from "../../assests/grideight.png";
import IconNine from "../../assests/gridnine.png";
import IconTen from "../../assests/gridten.png";
import MenuCard from './menuCard';


const Array = [
  {
    id: '',
    icon: IconOne,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    icon: IconTwo,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    icon: IconThree,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    icon: IconFour,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    icon: IconFive,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    icon: IconSix,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    icon: IconSeven,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    icon: IconEight,
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    icon: IconNine,
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
  {
    id: '',
    icon: IconTen,
    title: 'Peanut Butter Bite Premium Butter Cookies 600g',
    newPrice: '26.69',
    oldPrice: '28.56',
    rating: '4',
    stock: 'In Stock',
  },
]


const SideBarData = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: '28px', fontWeight: 700, }}>
        Top Save Today
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#818896',py:'20px' }}>
        Don't miss this opportunity at a special discount just for this week.
      </Typography>
     <Grid container sx={{borderTop:'1px solid #C8CCD1',borderLeft:'1px solid #C8CCD1'}}>
     {Array.map((data, i) => (
        <Grid item lg={2.4} key={i} sx={{borderRight:'1px solid #C8CCD1',borderBottom:'1px solid #C8CCD1',cursor:'pointer'}} >
          <MenuCard 
            id={''}
            img={data.icon}
            title={data.title}
            oldPrice={data.oldPrice}
            newPrice={data.newPrice}
            rating={data.rating}
            inStock={data.stock}
            onAdd={() => { }}
            onAddIcon={() => { }}
          />
        </Grid>
      ))}
     </Grid>
    </Box>
  )
}
export default SideBarData
