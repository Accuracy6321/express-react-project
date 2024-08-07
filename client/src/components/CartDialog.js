import React, { useContext, useState, useMemo, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
  Divider, Alert, CircularProgress,
} from '@mui/material';
import { CartContext } from '../context/CartContext';
import StripeCheckoutForm from './StripeCheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const ProductBuyButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.text.secondary};
  color: #fff;
  padding: 8px 24px;
  margin: 8px auto;

  &:hover {
    background-color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const TotalPurchase = styled(Typography)`
  font-size: 18px;
  text-align: right;
  margin: 16px 16px 0;
`;

const CartDialog = ({ open, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const totalPurchase = useMemo(() => cart.reduce((total, item) => total + item.price, 0), [cart]);
  const formRef = useRef();

  const handleBuyClick = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Checkout - Total (${totalPurchase.toLocaleString()})</DialogTitle>
      {error && (
        <Alert severity='warning' sx={{ margin: '0 32px' }}>{error}</Alert>
      )}
      <DialogContent>
        {cart.length === 0 ? (
          <Typography>Your cart is empty</Typography>
        ) : (
          <>
            <List>
              {cart.map((product, index) => (
                <ListItem key={index}>
                  <ListItemText primary={product.name} secondary={`Price: ${product.price}`} />
                  <ProductBuyButton onClick={() => removeFromCart(index)}>Remove</ProductBuyButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <TotalPurchase>Total: ${totalPurchase.toLocaleString()}</TotalPurchase>
            <Elements stripe={stripePromise}>
              <StripeCheckoutForm ref={formRef} cart={cart} setError={setError} setLoading={setLoading} totalAmount={totalPurchase} />
            </Elements>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <ProductBuyButton onClick={onClose} sx={{ opacity: '0.5' }}>Close</ProductBuyButton>
        <ProductBuyButton onClick={handleBuyClick} disabled={cart.length === 0 || loading}>
          {loading ? <CircularProgress size='24px' color="inherit" /> : (
            <>Buy Blanket{cart.length > 1 && 's'}</>
          )}
        </ProductBuyButton>
      </DialogActions>
    </Dialog>
  );
};

export default CartDialog;
