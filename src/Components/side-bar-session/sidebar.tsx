import React from 'react'
import SideBarCategory from './sideBarCategory'
import SideBarData from './sideBarData'
import { Container, Grid } from '@mui/material'

const Sidebar = () => {
  return (
    <Container maxWidth={'xl'} sx={{my:'30px'}}>
    <Grid container spacing={2} >
      <Grid item md={3} xs={12} >
        <SideBarCategory />
      </Grid>
      <Grid item md={9} xs={12} >
        <SideBarData />
      </Grid>
    </Grid>
    </Container>
  )
}

export default Sidebar
