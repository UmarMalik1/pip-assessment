import { Box, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Searchbar = () => {
    return (
        <Box sx={styles.searchrapper}>
            <input style={styles.input} placeholder='I am searching for...' />
            <Button sx={styles.btn}><SearchIcon sx={{ color: '#fff' }} /></Button>
        </Box>
    )
}

export default Searchbar

const styles = {
    searchrapper: {
        display: 'flex',
        alignItems: 'center',
        minWidth: '460px',
        border: '1px solid #ececec',
        height: '50px',
        borderRadius: '4px',
        overflow: 'hidden'
    },
    input: {
        width: '90%',
        height: '100%',
        border: 'none',
        outline: 'none',
        padding: '10px'
    },
    btn: {
        all: 'unset',
        cursor: 'pointer',
        width: '10%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffa53b',
        '&:hover': { backgroundColor: '#ffa53b', }
    }
}