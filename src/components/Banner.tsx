import { Box, Container } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        height: 400, // Defina a altura do banner
        position: 'relative',
        overflow: 'hidden', // Para esconder a imagem que excede a altura
        bgcolor: '#f8f8f8', // Cor de fundo do banner (opcional)
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', height: '100%' }}>
        <img
          src="/banner.png" // Use o caminho relativo para a imagem
          alt="Banner"
          style={{
            width: '100%',
            height: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            objectFit: 'cover', // Ajuste a imagem para cobrir o container
          }}
        />
      </Container>
    </Box>
  );
};

export default Banner;
