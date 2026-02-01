import React from 'react';
import styled from 'styled-components';
// Assets
import facebook from '../assets/facebook.svg';
import logofooter from '../assets/logo-footer.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

const FooterContainer = styled.footer`
  background-color: #1F1F1F; // Usually footers are very dark
  color: white;
  padding: 40px 80px;

  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  .logo-section {
    max-width: 300px;
    
    .Logo {
      height: 40px;
      margin-bottom: 20px;
    }

    .social-icons {
      display: flex;
      gap: 15px;
      margin-top: 20px;
      
      img {
        width: 24px;
        cursor: pointer;
      }
    }
  }

  .nav-section {
    h4 {
      margin-bottom: 20px;
      font-size: 18px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;
        font-size: 14px;
        color: lightgray;
        cursor: pointer;
        &:hover { color: white; }
      }
    }
  }

  .bottom-text {
    text-align: center;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #444;
    font-size: 12px;
    color: lightgray;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="content">
        {/* Logo and About */}
        <div className="logo-section">
          <img src={logofooter} alt="Digital Store Logo" className="Logo" />
          <p>
            A Drip Store é a sua loja online de roupas e acessórios
            streetwear. Oferecemos os melhores produtos com os preços mais
            competitivos do mercado.
          </p>
          <div className="social-icons">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>

        {/* Information Links */}
        <div className="nav-section">
          <h4>Informação</h4>
          <ul>
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="nav-section">
          <h4>Categorias</h4>
          <ul>
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="nav-section">
          <h4>Contato</h4>
          <p>
            Av. Santos Dumont, 1510 - 1 <br /> 
            andar - Aldeota, Fortaleza - <br />
            CE, 60150-161
          </p>
          <p>(85) 3051-3411</p>
        </div>
      </div>

      <div className="bottom-text">
        <p>@ 2022 Digital College</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;