import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Menu from './Menu';

interface HeaderProps {
  hero1Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  testimonialsRef: React.RefObject<HTMLDivElement>;
  contatoRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  hero1Ref,
  section3Ref,
  aboutRef,
  testimonialsRef,
  contatoRef,
}) => {
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: '#f0f0f0' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333' }}>
            TIXSHOP
          </Typography>
          <Menu
            hero1Ref={hero1Ref}
            section3Ref={section3Ref}
            aboutRef={aboutRef}
            testimonialsRef={testimonialsRef}
            contatoRef={contatoRef}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
