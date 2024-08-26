import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Testimonial from './Testimonial';

// Interface para as props do Testimonials (opcional, mas recomendado)
interface TestimonialsProps {
  testimonials: { quote: string; author: string; style: string }[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Box className="section-4" sx={{ bgcolor: '#f0f0f0', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Clientes Satisfeitos
        </Typography>
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' } }}> {/* Responsivo para wrap */}
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.author}>
              <Testimonial {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;