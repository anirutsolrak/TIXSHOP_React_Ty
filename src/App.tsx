import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import About from './components/About';
import ContactForm from './components/ContactForm';
import './index.css';

const App = () => {
  const testimonialsData = [
    {
      quote:
        'Aumente a credibilidade do seu produto e serviço inserindo depoimentos dos seus clientes. Todo mundo adora recomendações, por isso, dê a eles.',
      author: 'Natalia Lima',
      style: 'style-one',
    },
    {
      quote:
        'Aumente a credibilidade do seu produto e serviço inserindo depoimentos dos seus clientes. As pessoas adoram recomendações, então dê o depoimento de outros clientes a inestimar.',
      author: 'Elias Santos',
      style: 'style-two',
    },
    {
      quote:
        'Aumente a credibilidade do seu produto e serviço inserindo os depoimentos dos seus clientes.',
      author: 'Lilian Prado',
      style: 'style-three',
    },
  ];

  return (
    <Box id="hero" sx={{ scrollBehavior: 'smooth' }}>
      <Header />
      <Hero
        title="Decore sua casa com estilo e qualidade: móveis incríveis te esperam!"
        buttonText="Encontre seu móvel ideal"
        images={[
          'public/carousel1.1.jpg',
          'public/carousel1.2.jpg',
          'public/carousel1.3.jpg',
        ]}
      />
      <Hero
        title='"Móveis com design, durabilidade e preços justos: essa é a missão da TIXSHOP"'
        buttonText="Fale conosco"
        images={[
          'public/carousel2.1.jpg',
          'public/carousel2.2.jpg',
          'public/carousel2.3.jpg',
        ]}
      />
      <Box id="section-3" className="section-3" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" align="center" gutterBottom>
            Móveis para você
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((cardNumber) => (
              <Grid item xs={12} sm={6} md={4} key={cardNumber}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`public/carousel1.${cardNumber}.jpg`}
                    alt={`Descrição da imagem ${cardNumber}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cardNumber === 1 && 'Sofá de canto'}
                      {cardNumber === 2 && 'Conjunto de Mesa'}
                      {cardNumber === 3 && 'Guarda-roupa'} [Nome do
                      modelo/material]
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="p">
                      <strong>Preço/Condições de pagamento</strong>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cardNumber === 1 &&
                        'Ideal para reunir a família, com amplo espaço e conforto.'}
                      {cardNumber === 2 &&
                        'Design moderno e funcional para sua sala de jantar.'}
                      {cardNumber === 3 &&
                        'Organização e praticidade com amplo espaço interno.'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Saiba mais
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box id="testemunhos">
        <Testimonials testimonials={testimonialsData} />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="contato">
        <ContactForm />
      </Box>
      <Footer />
      <WhatsappButton />
    </Box>
  );
};

export default App;
