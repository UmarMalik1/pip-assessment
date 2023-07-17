import React from 'react'
import { Box, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Location = () => {
    return (
        <>
            <Box sx={styles.location}>
                <Box sx={styles.locationIcon}>
                    <LocationOnOutlinedIcon />
                </Box>
                <Typography>Your Location</Typography>
                <ExpandMoreOutlinedIcon />
            </Box>
        </>
    )
}

export default Location

const styles = {
    location: { display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #ececec', padding: '7px', borderRadius: '4px', cursor: 'pointer' },
    locationIcon: {
        backgroundColor: '#f3f4f9',
        height: '35px',
        width: '35px',
        borderRadius: '3px',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
}