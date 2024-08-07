import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled, useTheme } from '@mui/material';
import Logo from './Logo';
import { useContext, useState } from 'react';
import {CartContext} from '../context/CartContext';
import CartDialog from './CartDialog';

const NonNavigationButton = styled('div')`
  margin: 0 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.palette.text.secondary};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const pages = ['Our Mission'];

function ResponsiveAppBar() {
  const { cart } = useContext(CartContext);
  const theme = useTheme();
  const [cartDialogOpen, setCartDialogOpen] = useState(false);

  const handleOpenCartDialog = () => {
    setCartDialogOpen(true);
  };

  const handleCloseCartDialog = () => {
    setCartDialogOpen(false);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={'/'}>
            <Logo />
          </Link>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            {pages.map((page) => (
              <Link
                href={page.toLowerCase().replace(' ', '-')}
                key={page}
                sx={{ my: 2, display: 'block', color: theme.palette.text.secondary, fontSize: '18px' }}
              >
                {page}
              </Link>
            ))}
            <NonNavigationButton onClick={handleOpenCartDialog}>Cart {cart.length > 0 ? `(${cart.length})` : ''}</NonNavigationButton>
          </Box>
        </Toolbar>
      </Container>
      <CartDialog open={cartDialogOpen} onClose={handleCloseCartDialog} />
    </AppBar>
  );
}
export default ResponsiveAppBar;
