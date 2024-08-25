import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Carousel from './Carousel';

// Interface para as props do Hero
interface HeroProps {
  title: string;
  buttonText?: string;
  images: string[];
}

const Hero: React.FC<HeroProps> = ({ title, buttonText, images }) => {
  return (
    <Box className="hero" sx={{ bgcolor: '#f8f8f8', py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom>
              {title}
            </Typography>
            {buttonText && ( // Renderiza o botão se buttonText for fornecido
              <Button
                variant="contained"
                color="success"
                size="large"
                href="#contato"
              >
                {buttonText}
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Carousel images={images} />{' '}
            {/* Passa as imagens para o Carousel */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
