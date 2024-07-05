import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import logo from './images/logo.png';
import heroBackground from './images/Slide-22.png';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background: #f9f9f9;
  color: #a5a5a5;
  padding: 1rem;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  a {
    color: #9F7DB7;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Styledlogo = styled.img`
  height: 60px; 
  width: auto; 
  cursor: pointer; 
`;

const Hero = styled.section`
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 5rem 1rem;
  text-align: left;
  flex: 1;
`;
const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const ProductsSection = styled.section`
  padding: 2rem 1rem;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Product = styled.div`
  background: #9F7DB7;
  color: #fff;
  border: 1px solid #ddd;
  margin: 1rem;
  padding: 1rem;
  flex: 1 1 calc(33% - 2rem);
  box-sizing: border-box;
  text-align: center;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 2rem);
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

const Footer = styled.footer`
  background: #B8D0EB;
  color: #000;
  text-align: center;
  padding: 1rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <NavBar>
          <Styledlogo src={logo} alt="Logo" />
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Productos</a></li>
            </ul>
          </NavBar>
        </Header>
        <Hero>
          <h1>Sanando Hoy</h1>
          <p>Sesiones individuales y cursos de terapias holísticas</p>
        </Hero>
        <ProductTitle>
        <h2>Productos Destacados</h2>
        </ProductTitle>
        <ProductsSection id="products">
          <Product>
            <h3>Registros Akashicos</h3>
            <p>Lectura individual y presencial. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Sesion de Reiki</h3>
            <p>Sesion individual y presencial. </p>
            <p>Duracion: 1 hora. </p>
          </Product>
          <Product>
            <h3>Analisis de Feng Shui</h3>
            <p>Sesion presencial. </p>
            <p>Duracion: 2 horas. </p>
          </Product>
        </ProductsSection>
        <Footer>
          <p>&copy; 2024 Sanando Hoy.</p>
        </Footer>
      </Container>
    </>
  );
};

export default App;
