import { useRef, useLayoutEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button
} from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton'; 
import About from './components/About'; 
import Banner from './components/Banner'
import ContactForm from './components/ContactForm'; 
import './index.css'; 

const App = () => {
  const hero1Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const testimonialsData = [
    {
      quote: 'Aumente a credibilidade do seu produto e serviço inserindo depoimentos dos seus clientes. Todo mundo adora recomendações, por isso, dê a eles.',
      author: 'Natalia Lima',
      style: 'style-one',
    },
    {
      quote: 'Aumente a credibilidade do seu produto e serviço inserindo depoimentos dos seus clientes. As pessoas adoram recomendações, então dê o depoimento de outros clientes a inestimar.',
      author: 'Elias Santos',
      style: 'style-two',
    },
    {
      quote: 'Aumente a credibilidade do seu produto e serviço inserindo os depoimentos dos seus clientes.',
      author: 'Lilian Prado',
      style: 'style-three',
    },
  ];

  useLayoutEffect(() => {
    // Garanta que as referências sejam definidas antes de serem passadas
    // para o Header
  }, []);

  return (
    <Box sx={{ scrollBehavior: 'smooth' }}>
      <Banner />
      <Header
        hero1Ref={hero1Ref}
        section3Ref={section3Ref}
        aboutRef={aboutRef}
        testimonialsRef={testimonialsRef}
        contatoRef={contatoRef}
      />
      <Hero
        ref={hero1Ref}
        title="Decore sua casa com estilo e qualidade: móveis incríveis te esperam!"
        buttonText="Encontre seu móvel ideal"
        images={[
          '/carousel1.1.jpg',
          '/carousel1.2.jpg',
          '/carousel1.3.jpg',
          '/carousel1.4.jpg',
          '/carousel1.5.jpg',
          '/carousel1.6.jpg',
          '/carousel1.7.jpg',
          '/carousel1.8.jpg',
          '/carousel1.9.jpg',
        ]}
      />
      <Hero
        title='"Móveis com design, durabilidade e preços justos: essa é a missão da TIXSHOP"'
        buttonText="Fale conosco"
        images={[
          '/carousel2.1.jpg',
          '/carousel2.2.jpg',
          '/carousel2.3.jpg',
          '/carousel2.4.jpg',
          '/carousel2.5.jpg',
          '/carousel2.6.jpg',
          '/carousel2.7.jpg',
          '/carousel2.8.jpg',
          '/carousel2.9.jpg',
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
                    image={`/carousel1.${cardNumber}.jpg`}
                    alt={`Descrição da imagem ${cardNumber}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {cardNumber === 1 && 'Sofá de canto'}
                      {cardNumber === 2 && 'Conjunto de Mesa'}
                      {cardNumber === 3 && 'Guarda-roupa'}
                      {' '}
                      [Nome do modelo/material]
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
      <Box id="testemunhos" sx={{ py: 8, bgcolor: '#f0f0f0' }} ref={testimonialsRef}>
        <Testimonials testimonials={testimonialsData} />
      </Box>
      <Box id="about" sx={{ py: 8, bgcolor: '#f8f8f8' }} ref={aboutRef}>
        <About />
      </Box>
      <Box id="contato" sx={{ py: 8 }} ref={contatoRef}>
        <ContactForm />
      </Box>
      <Footer />
      <WhatsappButton />
    </Box>
  );
};

export default App;