
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
      <Box sx={styles.box}>
        <img src={img} alt={id} height={'140px'} width={"100%"} style={{ objectFit: 'contain' }} />
        <Box sx={styles.shortcut} className='shortcut'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Box>
      </Box>
      <Box sx={{ padding: '10px' }}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.price}>
          <span style={styles.newPrice}>${newPrice}</span>
          <span style={styles.oldPrice}>${oldPrice}</span>
        </Typography>
        <Box sx={styles.rating}>
          <Rating value={rating} />
          {inStock && <Typography sx={styles.stock}>{inStock}</Typography>}
        </Box>
        <Box sx={styles.btns}>
          <Button sx={styles.addBtn} onClick={onAdd}>Add</Button>
          <IconButton sx={styles.addBtnIcon} onClick={onAddIcon}>
            <AddIcon sx={{ color: '#0DA487', fontSize: '16px' }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
export default MenuCard

const styles = {
  main: {
    '& img': { transition: "all 0.2s linear" },
    '&:hover': {
      img: { transform: 'scale(1.1)', },
      '.shortcut': { bottom: '0px ' }
    }
  },
  box: { padding: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' },
  shortcut: { transition: 'bottom 0.2s linear', background: '#fff', boxShadow: "0px 0px 3px rgba(0,0,0,0.5)", padding: '5px', borderRadius: '5px', position: 'absolute', bottom: '-35px', left: '50%', transform: 'translateX(-20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
  title: { fontSize: '14px', fontWeight: 600, color: '#474747' },
  price: { marginY: '10px', display: 'flex', gap: '15px' },
  newPrice: { color: '#0DA487', fontSize: '15px', fontWeight: 600, },
  oldPrice: { textDecoration: 'line-through', fontSize: '14px', fontWeight: 400 },
  rating: { display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' },
  stock: { color: '#0DA487', fontSize: '14px', fontWeight: 500 },
  btns: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: "10px", background: '#F8F8F8', borderRadius: '50px' },
  addBtn: { flex: 1, color: "#4A5568", fontWeight: 500, fontSize: '15px', '&:hover': { background: 'transparent !important' }, textTransform: 'capitalize', },
  addBtnIcon: { marginRight: "5px", flexShrink: 0, borderRadius: '10px', background: 'white', '&:hover': { background: 'white' }, borderRight: "50%", height: '30px', width: '30px' }
}