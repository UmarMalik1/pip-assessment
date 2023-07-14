import React from 'react';
import { Box, Container } from '@mui/material';

const Infosection = () => {
  const styles = {
    subHeader: { py: 1.2, color: "white" },
    container: { mt: 4 },
    mainflex: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    cart: { height: '500px', width: '100%', backgroundImage: "url('images/main.jpg')", backgroundSize: "cover", borderRadius: '5px', marginBottom: '20px' },
    maincart: { height: '350px', width: "100%", borderRadius: '5px', display: 'flex', justifyContent: 'space-between' },
    maincartchildone: { flex: 1, backgroundImage: "url('images/badam.jpg')", backgroundSize: "cover", borderRadius: '5px', marginBottom: '20px' },
    maincartchildtwo: { flex: 1, backgroundImage: "url('images/third.jpg')", backgroundSize: "cover", borderRadius: '5px', marginLeft: '20px' },
    mainicon: { display: "flex", flexWrap: 'wrap', justifyContent: 'center' },
    icon: { flex: '0 0 calc(25% - 20px)', backgroundImage: "url('images/icon.jpg')", backgroundSize: "cover", borderRadius: '5px', marginBottom: '20px', marginRight: '20px' },
  };

  return (
    <Box sx={styles.subHeader}>
      <Container maxWidth="xl" sx={styles.container}>
        <Box sx={styles.mainflex}>
          <div style={styles.cart}></div>
          <div style={styles.maincart}>
            <div style={styles.maincartchildone}></div>
            <div style={styles.maincartchildtwo}></div>
          </div>
          <Box sx={styles.mainicon}>
            <div style={styles.icon}></div>
            <div style={styles.icon}></div>
            <div style={styles.icon}></div>
            <div style={styles.icon}></div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Infosection;

