import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Menu from './Menu';

const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: '#f0f0f0' }}>
        {' '}
        {/* Adicione position="fixed" */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#333' }}
          >
            TIXSHOP
          </Typography>
          <Menu />
        </Toolbar>
      </AppBar>
      {/* Espaçamento para o conteúdo não ficar atrás do menu */}
      <Toolbar />
    </>
  );
};

export default Header;
