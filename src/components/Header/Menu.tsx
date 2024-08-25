import React from 'react';
import { Button, Typography, Link } from '@mui/material';

const Menu = () => {
  return (
    <>
      <Link href="#hero" color="inherit" underline="none">
        <Button color="inherit" sx={{ color: '#333' }}>
          Início
        </Button>{' '}
      </Link>
      <Link href="#section-3" color="inherit" underline="none">
        <Button color="inherit" sx={{ color: '#333' }}>
          Produtos
        </Button>{' '}
      </Link>
      <Link href="#about" color="inherit" underline="none">
        <Button color="inherit" sx={{ color: '#333' }}>
          Sobre
        </Button>{' '}
      </Link>
      <Link href="#contato" color="inherit" underline="none">
        <Button color="inherit" sx={{ color: '#333' }}>
          Contato
        </Button>{' '}
      </Link>
      <Link href="#testemunhos" color="inherit" underline="none">
        <Button color="inherit" sx={{ color: '#333' }}>
          Testemunhos
        </Button>{' '}
      </Link>
    </>
  );
};

export default Menu;
