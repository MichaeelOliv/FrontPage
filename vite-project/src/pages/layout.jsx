import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Logo from '../components/Logo.jsx'

import React from 'react';

// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}  
      {children}

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;