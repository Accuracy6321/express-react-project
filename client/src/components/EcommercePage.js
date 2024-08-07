import React from 'react';
import { Container, styled, Typography } from '@mui/material';
import Layout from './Layout';
import ProductList from './ProductsList';

const CommerceTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  margin: 24px 8px 8px;
`;

const CommerceSubtitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  margin: 16px 8px 24px;
`;

const EcommercePage = () => {
  return (
    <>
      <Layout />
      <Container>
        <CommerceTitle variant="h2" component="h1">
          Our Blanket Selection
        </CommerceTitle>
        <CommerceSubtitle variant="body1">
          Below you will find our classic selection of blankets to fit your needs to get cozy
        </CommerceSubtitle>
        <ProductList />
      </Container>
    </>
  );
};

export default EcommercePage;
