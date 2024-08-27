import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Importe o ícone do menu

interface MenuProps {
  hero1Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  testimonialsRef: React.RefObject<HTMLDivElement>;
  contatoRef: React.RefObject<HTMLDivElement>;
}

const Menu = ({
  hero1Ref,
  section3Ref,
  aboutRef,
  testimonialsRef,
  contatoRef,
}: MenuProps) => {
  const [open, setOpen] = useState(false); // Estado para controlar o Drawer

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <IconButton
        aria-label="menu"
        size="large"
        edge="start"
        aria-haspopup="true"
        onClick={() => setOpen(true)} // Abre o Drawer
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)} // Fecha o Drawer
      >
        <List>
          <ListItem button onClick={() => scrollToSection(hero1Ref)} key="home">
            <ListItemIcon>
              {/* Adicionar ícone para Home, se necessário */}
            </ListItemIcon>
            <ListItemText primary="Início" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(section3Ref)} key="products">
            <ListItemIcon>
              {/* Adicionar ícone para Produtos, se necessário */}
            </ListItemIcon>
            <ListItemText primary="Produtos" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(aboutRef)} key="about">
            <ListItemIcon>
              {/* Adicionar ícone para Sobre, se necessário */}
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(contatoRef)} key="contact">
            <ListItemIcon>
              {/* Adicionar ícone para Contato, se necessário */}
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(testimonialsRef)} key="testimonials">
            <ListItemIcon>
              {/* Adicionar ícone para Testemunhos, se necessário */}
            </ListItemIcon>
            <ListItemText primary="Testemunhos" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
