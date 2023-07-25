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
import vegIcon from "../../assests/vegetable.svg"
import tea from "../../assests/tea.svg"
import meat from "../../assests/meat.svg"
import dairy from "../../assests/breakfast.svg"
import frozen from "../../assests/frozen.svg"
import milk from "../../assests/milk.svg"
import pet from "../../assests/pet.svg"
import Hover from "../../assests/shape.png"

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

const CategoriesArray = [
  {
    icon: vegIcon,
    title: 'Vegetables & ...',
    type: 'vegetablesFruits'
  },
  {
    icon: tea,
    title: 'Beverages',
    type: 'beverages'
  },
  {
    icon: meat,
    title: 'Meats & Seafood',
    type: 'meat'
  },
  {
    icon: dairy,
    title: 'Breakfast & Dairy',
    type: 'dairy'
  },
  {
    icon: frozen,
    title: 'Frozen Foods',
    type: 'frozen'
  },
  {
    icon: milk,
    title: 'Milk & Dairies',
    type: 'milk'
  }, {

    icon: pet,
    title: 'Pet Foods',
    type: 'pet'
  },
]

const SideBarData = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: '28px', fontWeight: 700, }}>
        Top Save Today
      </Typography>
      <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#818896', py: '20px' }}>
        Don't miss this opportunity at a special discount just for this week.
      </Typography>

      <Grid container sx={{ borderTop: '1px solid #C8CCD1', borderLeft: '1px solid #C8CCD1' }}>
        {Array.map((data, i) => (
          <Grid item lg={2.4} key={i} sx={{ borderRight: '1px solid #C8CCD1', borderBottom: '1px solid #C8CCD1', cursor: 'pointer' }} >
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

      <Box sx={{ pt: "40px" }}>
        <Typography sx={{ fontSize: '28px', fontWeight: 700, }}>
          Top Save Today
        </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: 400, color: '#818896', py: '20px' }}>
          Top Categories Of The Week
        </Typography>
      </Box>
      <Grid container sx={{ display: 'flex', gap: 1.5 }}>
        {CategoriesArray.map((data, i) => (
          <Grid item xl={1.6} lg={4} md={8} sm={5.5} xs={12} key={i} sx={{
            position: "relative",
            zIndex: 1,
            overflow: 'hidden',
            '&:hover': {
              // color: "#fff",
              // '& img': { fill: '#fff !important' },
              '&::after': {
                position: "absolute",
                width: '100%',
                height: '100%',
                content: "''",
                top: 0, left: 0, bottom: 0, right: 0, backgroundImage: `url(${Hover})`, backgroundPosition: 'center', backgroundColor: '#0da487', zIndex: -1,
              }
            },
            cursor: 'pointer', textAlign: 'center', background: '#F8F8F8', p: 2, borderRadius: '5px',
          }}>
            <img className='svg-icon' src={data.icon} alt='' height={44} width={44} style={{ paddingTop: '12px', }} />
            <Typography sx={styles.text}>{data.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default SideBarData

const styles = {
  text: { fontSize: '15px', fontWeight: 500, py: 1 }
}