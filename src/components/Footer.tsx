import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{ bgcolor: '#333', color: '#fff', py: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom>
              Vamos conversar
            </Typography>
            <Typography variant="body1" gutterBottom>
              Rua Qualquer, 123, Cidade Qualquer
            </Typography>
            <Typography variant="body1" gutterBottom>
              (12) 3456-7890
            </Typography>
            <Typography variant="body1" gutterBottom>
              ola@grandsite.com.br
            </Typography>
            <Link
              href="https://www.instagram.com/SEU_USUARIO_DO_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x" />
            </Link>{' '}
            {/* Ícone com link para o Instagram */}
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Typography variant="h6" component="h3" gutterBottom>
              Funcionamento
            </Typography>
            <Typography variant="body1" gutterBottom>
              Segunda - Sexta-feira
            </Typography>
            <Typography variant="body1">09:00 - 18:00</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
