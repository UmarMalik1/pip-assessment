import React from 'react'
import {  Box, Container } from '@mui/material'
import Logo from '../../assests/images/logo.png';
import Location from './location';
import Searchbar from './searchbar';
import ShortCutIcons from './ShortCutIcons';

const HeaderPrimary = () => {
    return (
        <Container maxWidth={'xl'} sx={{ py: 2 }}>
            <Box sx={styles.flex}>
                <img src={Logo} width={'150px'} alt ="icon" />
                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                    <Location />
                    <Searchbar />
                </Box>
                <ShortCutIcons />
            </Box>
        </Container>
    )
}

export default HeaderPrimary

const styles = {
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
        '& img': { flexShrink: 0 },
    }
}