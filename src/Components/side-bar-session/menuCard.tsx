
import React from 'react'
import { Box, Button, Card, IconButton, Rating, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
const MenuCard = (props: any) => {
  const {
    id,
    img,
    title = "title",
    oldPrice = 18,
    newPrice = 22,
    rating,
    inStock = 22,
    onAdd,
    onAddIcon,
    ...rest
  } = props

  return (
    <Card id={id} {...rest} sx={styles.main}>
      <Box sx={{ padding: '20px', textAlign: 'center'}}>
        <img src={img} alt={id} height={'140px'} width={"100%"} style={{ objectFit: 'contain' }} />
      </Box>
      <Box sx={{ padding: '10px' }}>
        <Typography sx={{fontSize:'14px',fontWeight:600,color:'#474747'}}>{title}</Typography>
        <Typography sx={{ marginY: '10px', display: 'flex', gap: '15px'}}>
          <span style={{color:'#0DA487',fontSize:'15px',fontWeight:600,}}>${newPrice}</span>
          <span style={{ textDecoration: 'line-through',fontSize:'14px',fontWeight:400}}>${oldPrice}</span>
        </Typography>
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Rating value={rating} />
          {inStock && <Typography sx={{color:'#0DA487',fontSize:'14px',fontWeight:500}}>{inStock}</Typography>}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: "10px" ,background:'#F8F8F8'}}>
          <Button sx={{ flexGrow: 1,color:"#4A5568",fontWeight:500,fontSize:'15px','&:hover': { background: 'transparent !important'}, textTransform: 'capitalize', }} onClick={onAdd}>Add</Button>
          <IconButton sx={{ borderRadius:'10px',background: 'white', '&:hover': { background: 'white' } }} onClick={onAddIcon}>
            <AddIcon sx={{color:'#0DA487'}} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
export default MenuCard

const styles={
  main:{}
}