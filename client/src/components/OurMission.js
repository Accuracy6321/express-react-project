import React from 'react';
import { Container, Typography, Box, Divider, useTheme } from '@mui/material';
import Layout from './Layout';

const OurMission = () => {
  const theme = useTheme();

  return (
    <>
      <Layout />
      <Container>
        <Box sx={{ textAlign: 'center', my: 4, maxWidth: '800px', mx: 'auto', color: theme.palette.text.secondary }}>
          <Typography variant="h2" component="h1" gutterBottom>
            The Mission of Cozy Thread
          </Typography>
          <Typography variant="body1" paragraph>
            At Cozy Threads, we are dedicated to providing high-quality, ethically-sourced apparel and accessories. Our mission is to offer you comfortable and stylish clothing that you can feel good about wearing. Thank you for visiting our store and supporting our commitment to sustainability and ethical fashion.
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ maxWidth: '250px', margin: '0 auto' }} />

        <Box sx={{ textAlign: 'left', my: 4, maxWidth: '800px', mx: 'auto', color: theme.palette.text.secondary }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Ethically-Sourced Materials
          </Typography>
          <Typography variant="body1" paragraph>
            Cozy Threads sources its materials from eco-friendly and sustainable farms located in the lush valleys of New Zealand. We partner with local farmers who practice regenerative agriculture to ensure that our fabrics are not only of the highest quality but also produced in a way that supports the environment.
          </Typography>
          <Typography variant="body1" paragraph>
            Each piece of clothing is made from organic cotton, responsibly-sourced wool, and recycled materials, ensuring that our products are both luxurious and sustainable. We are committed to reducing our carbon footprint and promoting a circular economy.
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ maxWidth: '250px', margin: '0 auto' }} />

        <Box sx={{ textAlign: 'left', my: 4, maxWidth: '800px', mx: 'auto', color: theme.palette.text.secondary }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Why Cozy Threads is Special
          </Typography>
          <Typography variant="body1" paragraph>
            What sets Cozy Threads apart is our unwavering commitment to quality and ethical production. Our designs are timeless and versatile, perfect for any occasion. Each item is crafted with care, ensuring durability and comfort.
          </Typography>
          <Typography variant="body1" paragraph>
            We believe in transparency and traceability in our supply chain. From the farms where our materials are grown to the artisans who create our garments, we maintain a close relationship with every step of the process to guarantee that our standards are met.
          </Typography>
          <Typography variant="body1" paragraph>
            Additionally, we are proud to support local communities and provide fair wages to all our workers. When you choose Cozy Threads, you are choosing products that make a positive impact on both people and the planet.
          </Typography>
        </Box>

        <Divider variant="middle" sx={{ maxWidth: '250px', margin: '0 auto' }} />

        <Box sx={{ textAlign: 'left', my: 4, maxWidth: '800px', mx: 'auto', color: theme.palette.text.secondary }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="body1" paragraph>
            We invite you to join the Cozy Threads community. Follow us on social media to stay updated on our latest collections, learn more about our sustainability efforts, and connect with others who share our passion for ethical fashion.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for supporting Cozy Threads. Together, we can make a difference in the world of fashion, one garment at a time.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default OurMission;
