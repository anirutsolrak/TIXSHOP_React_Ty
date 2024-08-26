import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface TestimonialProps {
  quote: string;
  author: string;
  style: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, style }) => {
  const lineStyles = {
    width: '80%',
    height: '5px',
    position: 'absolute',
    bottom: '20px',
    left: '10%',
    backgroundColor:
      style === 'style-one'
        ? '#4CAF50'
        : style === 'style-two'
        ? '#3498db'
        : '#e74c3c',
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3, 
        position: 'relative', 
        p: 2, 
        '&:before': { 
          content: '""',
          ...lineStyles,
        },
      }}
    >
      <CardContent sx={{ p: 4, maxWidth: '90%', margin: 'auto' }}>
        <Typography
          variant="body1"
          color="text.secondary"
          gutterBottom
          sx={{
            textAlign: 'justify',
            fontSize: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <i className="fas fa-quote-left fa-2x" />{' '}
          {quote}
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          fontWeight="bold"
          sx={{
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          - {author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Testimonial;