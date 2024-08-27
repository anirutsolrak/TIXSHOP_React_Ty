import { forwardRef } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Carousel from './Carousel';

interface HeroProps {
  title: string;
  buttonText?: string;
  images: string[];
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ title, buttonText, images }, ref) => {
    return (
      <Box
        className="hero"
        sx={{ bgcolor: '#f8f8f8', py: 10 }}
        ref={ref} // Adicione o ref ao Box
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ mb: { xs: 4, md: 0 } }}
            >
              <Typography variant="h3" component="h1" gutterBottom>
                {title}
              </Typography>
              {buttonText && (
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
              <Carousel images={images} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
);

export default Hero;
