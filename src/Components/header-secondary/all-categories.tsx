import { Box, Button } from '@mui/material';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import React from 'react'

const AllCategories = () => {
    return (
        <Box>
            <Button variant='contained' size='large' sx={styles.categoryBtn}>
                <FormatAlignLeftOutlinedIcon sx={{ mr: 2 }} />
                <span>All Categories</span>
            </Button>
        </Box>
    )
}

export default AllCategories

const styles = {
    categoryBtn: {
        backgroundColor: 'rgb(14,148,122)',
        '&:hover': {
            backgroundColor: 'rgb(14,148,122)'
        }
    }
}