import { Box, Typography } from '@mui/material'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const data = [
    {
        icon: PhoneIcon,
        href: '#'
    },
    {
        icon: FavoriteBorderIcon,
        href: '#'
    },
    {
        icon: ShoppingCartOutlinedIcon,
        addToCart: true,
        subData: [
            {
                icon: '',
                title: 'this is title',
                price: '200',
                totalItem: '2',
            },
            {
                icon: '',
                title: 'this is title',
                price: '200',
                totalItem: '2',
            },
        ]
    },
    {
        icon: PersonOutlineOutlinedIcon,
        subData: [
            {
                title: 'Login',
                href: '#'
            },
            {
                title: 'Register',
                href: '#'
            },
            {
                title: 'Forgot Password',
                href: '#'
            }
        ]
    }
]


const ShortCutIcons = () => {
    return (
        <Box sx={styles.shortWrapper}>
            {data.map((obj, i) => (
                <Box component={'span'} key={i} position={'relative'}>
                    <obj.icon sx={{ cursor: 'pointer',  }} />
                    {obj.addToCart && <Box sx={styles.addToCart}>
                        {obj.subData.map((sub, j) => <Box key={j} sx={styles.cartItem} className='cart-items'>
                            <img src={sub.icon} height={60} width={100} alt='icon' />
                            <Box>
                                <Typography>{sub.title}</Typography>
                                <Typography component='span'>{sub.totalItem} x ${sub.price}</Typography>
                            </Box>
                        </Box>)}
                    </Box>}
                </Box>
            ))}
        </Box>
    )
}

export default ShortCutIcons

const styles = {
    shortWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        opacity: 0.8
    },
    addToCart: {
        position: 'absolute',
        padding: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
        top: '100%',
        right: 0,
        zIndex: 10,
        display: 'none',
        borderRadius: '4px',
        minWidth: '320px'
    },
    cartItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        mb: '10px'
    }
}