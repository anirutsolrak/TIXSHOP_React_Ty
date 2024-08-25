import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Entre em Contato
        </Typography>
        <Box
          sx={{
            border: '1px solid #ccc',
            p: 4,
            borderRadius: 2,
          }}
        >
          {/* Substitua este iframe pelo seu formulário do JotForm */}
          <iframe
            src="https://form.jotform.com/242366592423661" // Substitua pelo link do seu formulário
            width="100%"
            height="500"
            frameBorder="0"
            title="Formulário de Contato"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
