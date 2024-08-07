import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import LogoImg from '../assets/logo-no-background.png';

const StyleImage = styled('img')`
  margin: 16px;
  cursor: pointer;
`;

const Logo = (styles) => {
  return (
    <Box sx={styles}>
      <StyleImage style={{ margin: '16px', cursor: 'pointer' }} width={200} src={LogoImg} alt={'cozy-threads'}/>
    </Box>
  );
};

export default Logo;