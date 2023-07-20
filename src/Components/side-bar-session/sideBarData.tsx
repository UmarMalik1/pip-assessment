import React from 'react'
import { Box, Typography } from '@mui/material';
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


const Array = [
  {
    id:'',
    icon: IconOne,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconTwo,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconThree,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconFour,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconFive,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconSix,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconSeven,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconEight,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconNine,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },
  {
    id:'',
    icon: IconTen,
    title: 'Peanut Butter Bite Premium',
    descr: 'Butter Cookies 600g',
    price: '$26.69',
    rating: '',
    stock: 'In Stock',
  },

]


const SideBarData = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: '28px', fontWeight: 700, }}>
        Top Save Today
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#818896' }}>
        Don't miss this opportunity at a special discount just for this week.
      </Typography>
    </Box>
  )
}
export default SideBarData
