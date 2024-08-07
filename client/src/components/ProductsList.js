import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { Typography, Grid, Card, CardContent, styled, Button } from '@mui/material';
import { CartContext } from '../context/CartContext';
import getProductImageFromProductId from '../utils/getProductImageFromProductId';

const ProductImage = styled('img')`
  width: 100%;
  border-radius: 5px;
`;

const ProductTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const ProductDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  opacity: 0.8;
  font-style: italic;
`;

const ProductPrice = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: right;
`;

const ProductBuyContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductBuyButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.text.secondary};
  color: #fff;
  padding: 8px 24px;
  margin: 8px auto;
  
  &:hover {
    background-color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL + '/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Grid container spacing={3} sx={{ marginBottom: '32px' }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <ProductImage src={getProductImageFromProductId(product.id)} alt='sherpa-image' />
              <ProductTitle variant="h5" component="h2">
                {product.name}
              </ProductTitle>
              <ProductDescription variant="body2" component="p">
                {product.description}
              </ProductDescription>
              <ProductPrice variant="h6" component="p">
                ${product.price.toFixed(2)}
              </ProductPrice>
            </CardContent>
            <ProductBuyContainer>
              <ProductBuyButton onClick={() => {
                addToCart(product);
              }}>
                Add to Cart
              </ProductBuyButton>
            </ProductBuyContainer>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
