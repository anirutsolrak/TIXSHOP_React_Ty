import React, { forwardRef } from 'react';
import { Box, Container, Typography } from '@mui/material';

const About = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
  return (
    <Box sx={{ py: 8, bgcolor: '#f8f8f8' }} ref={ref}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography variant="body1" align="justify" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          fringilla mauris. Fusce vitae ligula ut massa viverra maximus.
          Suspendisse potenti. Donec euismod odio sit amet enim rhoncus, sed
          consequat quam laoreet. Aenean semper, odio id semper sagittis, urna
          augue gravida neque, non eleifend odio leo non ligula.
        </Typography>
        <Typography variant="body1" align="justify" paragraph>
          Duis euismod, lorem sed accumsan consequat, justo nibh lacinia dolor,
          ac molestie purus mauris id dolor. In hac habitasse platea dictumst.
          Cras sed velit eu eros ullamcorper tincidunt.
        </Typography>
      </Container>
    </Box>
  );
});

export default About;