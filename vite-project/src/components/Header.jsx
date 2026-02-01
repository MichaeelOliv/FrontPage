import React, { useState } from 'react';
import logoheader from '../assets/logo-header.svg';
import minicart from '../assets/mini-cart.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importante para o redirecionamento
import search from '../assets/search.svg';
import { NavLink } from 'react-router-dom';

const MobileSearchIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  order: 3;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeaderContainer = styled.header`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  .logo {
    height: 40px;
    order: 1; 
    @media (max-width: 768px) {
      order: 2; /* Logo no centro no mobile */
    }
  }

 .search-container {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative; /* Para posicionar a lupa */
    max-width: 600px; /* Limite opcional para não esticar demais */
    margin: 0 40px;
    order: 2;
    gap: 10px;
    @media (max-width: 768px) { display: none; }
  }

.search-input {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 0 50px 0 15px; /* Padding extra na direita para a lupa */
    background-color: #f5f5f5;
    outline: none;
    font-size: 16px;
  }

  .right-group {
    display: flex;
    align-items: center;
    gap: 20px;
    order: 3;
    @media (max-width: 768px) {
      display: contents; 
    }
  }

  .cart-icon {
    order: 3; /* Carrinho na direita */
    cursor: pointer;
  }

  .auth-links {
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 15px;
    @media (max-width: 768px) {
      display: none; 
      background-color: darkgray;
    }
  }

  .btn-entrar {
    width: 114px;
    height: 40px;
    font-size: 14px;
    background-color: deeppink;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn-entrar:hover{
    background-color: #ddd;
    color: deeppink;
  }
  .search{
    height: 50px;

  }
  .search:hover{
    background-color: deeppink;
    border-radius: 20px;
  }
`;

const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  order: 0;

  @media (max-width: 768px) {
    display: block;
    order: 1; /* Menu na esquerda no mobile */
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;

  & ul {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    cursor: pointer;
    &:hover { color: deeppink; }
  }
  li a {
    text-decoration: none;
    color: #666; /* Cor padrão */
    padding: 8px 0;
    display: inline-block;
    position: relative;
    transition: color 0.2s;
  }
  /* Estilização para quando o link estiver ATIVO */
  li a.active {
    color: #007bff; /* Sua cor de destaque */
    font-weight: bold;
  }

  li a.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #007bff; /* Linha horizontal */
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    background: white;
    z-index: 1000;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    padding: 70px 20px;

    & ul { flex-direction: column; gap: 20px; }
  }
`;

// Overlay opcional para escurecer o fundo quando o menu abrir
const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o texto da busca
  const navigate = useNavigate(); // Hook para navegação

  // Função para fechar o menu ao clicar em um item
  const closeMenu = () => setIsOpen(false);
  // Função que executa a busca
  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Redireciona para /products?filter=termo
      navigate(`/products?filter=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Detectar tecla Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const Navbar = ({ isOpen, closeMenu }) => { };

  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>

        <img src={logoheader} alt="Logo" className="logo" />
        {/* Ordem 3 (Mobile): Lupa que aparece só no mobile */}
        {/* Você pode fazer ela abrir um input ou apenas levar para a página de busca */}
        <MobileSearchIcon onClick={() => navigate('/products')}>
          <img src={search} alt="search" clasName="search" />
        </MobileSearchIcon>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {/* Ícone de lupa (pode ser uma tag <img> se tiver o asset) */}
          <span className="search-icon" onClick={handleSearch}>
            <img src={search} alt="search" className='search' />
          </span>
        </div>

        <div className="right-group">
          <div className="auth-links">
            <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>Cadastre-se</p>
            <button className="btn-entrar">Entrar</button>
          </div>
          <img src={minicart} alt="Carrinho" className="cart-icon" />
        </div>
      </HeaderContainer>

      {/* Overlay para fechar ao clicar fora do menu */}
      <Overlay isOpen={isOpen} onClick={closeMenu} />

      <NavContainer isOpen={isOpen}>
        <ul>
          {/* Usamos o NavLink dentro da <li> para manter sua lógica de fechar o menu */}
          <li onClick={closeMenu}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Home
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/produtos" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Produtos
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/categorias" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Categorias
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink to="/meus-pedidos" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </NavContainer>
    </>
  );
};

export default Header;