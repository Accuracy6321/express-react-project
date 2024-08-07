import React from 'react';
import { Container, Typography, Box, Divider, useTheme } from '@mui/material';
import Layout from './Layout';

const SuccessPage = () => {
  const theme = useTheme();

  return (
    <>
      <Layout />
      <Container>
        <Box sx={{ textAlign: 'center', my: 4, maxWidth: '800px', mx: 'auto', color: theme.palette.text.secondary }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Successful Purchase!
          </Typography>
          <Typography variant="body1" paragraph>
            At Cozy Threads, we are dedicated to providing high-quality, ethically-sourced apparel and accessories. Our mission is to offer you comfortable and stylish clothing that you can feel good about wearing. Thank you for visiting our store and supporting our commitment to sustainability and ethical fashion.
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ maxWidth: '250px', margin: '0 auto' }} />

        <Box sx={{ textAlign: 'left', my: 4, maxWidth: '800px', mx: 'auto', color: theme.palette.text.secondary }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Delivery and Tracking
          </Typography>
          <Typography variant="body1" paragraph>
            Generally our products are shipped within 3-5 business days and we do not offer tracking on our blankets but they are coming so sit back and relax!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SuccessPage;
