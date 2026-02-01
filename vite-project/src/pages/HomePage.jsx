import Layout from './layout.jsx';
import Gallery from '../components/Gallery.jsx';
import Section from '../components/Section.jsx';
import ProductListing from '../components/ProductListing.jsx';
import styled from 'styled-components';

// --- 1. Imports de Imagens (Ajuste os nomes conforme sua pasta assets) ---
import homeslide01 from '../assets/home-slide-1.jpeg';
import homeslide02 from '../assets/home-slide-2.jpeg';
import homeslide03 from '../assets/home-slide-3.jpeg';
import homeslide04 from '../assets/home-slide-4.jpeg';
import homeslide05 from '../assets/home-slide-5.jpeg';
import homeslide06 from '../assets/home-slide-6.jpeg';
import homeslide07 from '../assets/home-slide-7.jpeg';
import homeslide08 from '../assets/home-slide-8.jpeg';

import col1 from '../assets/collection-1.png';
import col2 from '../assets/collection-2.png';
import col3 from '../assets/collection-3.png';
import p1 from '../assets/product-thumb-1.jpeg';
import p2 from '../assets/product-thumb-2.jpeg';
import p3 from '../assets/product-thumb-3.jpeg';
import p4 from '../assets/product-thumb-4.jpeg';
import p5 from '../assets/product-thumb-5.jpeg';
import p6 from '../assets/produc-image-1.jpeg';
import p7 from '../assets/produc-image-2.jpeg';
import p8 from '../assets/produc-image-3.jpeg';
import camiseta from '../assets/Frame 10.png';
import calca from '../assets/Frame 11.png';
import calca2 from '../assets/Frame 12.png';
import headphone from '../assets/Frame 13.png';
import tenis from '../assets/Frame 14.png';

// --- 2. Estilos (Declarados apenas UMA vez para evitar erros) ---

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 40px 20px;
  background-color: #F5F5F5;


  /* --- ADAPTAÇÃO MOBILE --- */
  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Inverte para o texto ficar abaixo da imagem no mobile, se preferir */
    text-align: center;
    padding: 20px;
    gap: 20px;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: deeppink;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .subtitle {
    font-size: 14px;
    color: #ecb00d;
    text-transform: uppercase;}
`;

const TextContent = styled.div`
  flex: 1;
  
  h1 { 
    font-size: 24px; 
    color: #474747; 
    line-height: 1.4; 

    @media (max-width: 768px) {
      font-size: 20px; /* Reduz um pouco a fonte no mobile */
    }
  }
`;

const GalleryWrapper = styled.div`
  flex: 1;
  max-width: 1000px;
  width: 100%; /* Garante que ocupe a largura total no mobile */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Esta é a declaração única do CollectionsFlex
const CollectionsFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  img {
    width: 33%;
    max-width: 405px;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
  }
  p {
   text-align: center;
   display: flex;
justify-content: center; /* Centraliza o grupo na tela */
gap: 20px;               /* Dá um espaço entre cada item */
flex-wrap: wrap;         /* Garante que quebre linha em telas menores */
  }
`;

// --- 3. Componente Principal ---

export default function HomePage() {
  const produtosHype = [
    { name: "K-Swiss V8 - 1", image: p1, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 2", image: p2, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 3", image: p3, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 4", image: p4, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 5", image: p5, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 6", image: p6, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 7", image: p7, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 8", image: p8, price: 200, priceDiscount: 149.9 },
  ];

  return (
    <div className="home-page">
      <Layout>
        {/* Seção Hero */}
        <HeroContainer>
          <TextContent>
            <p className="subtitle">Melhores ofertas personalizadas</p>
            <h1>Queima de estoque Nike 🔥</h1>
            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button>Ver Ofertas</button>
          </TextContent>
          <GalleryWrapper>
            <Gallery
              images={[{ src: homeslide01 }, { src: homeslide02 }, { src: homeslide03 }, { src: homeslide04 }, { src: homeslide05 }, { src: homeslide06 }, { src: homeslide07 }, { src: homeslide08 }]}
              height="450px"
              radius="4px"
            />
          </GalleryWrapper>
        </HeroContainer>

        {/* Seção Coleções */}
        <div style={{ padding: '60px 20px' }}>
          <Section title="Coleções em destaque" titleAlign="center">
            <CollectionsFlex>
              <img src={col1} alt="Coleção 1" />
              <img src={col2} alt="Coleção 2" />
              <img src={col3} alt="Coleção 3" />

            </CollectionsFlex>
          </Section>
        </div>
        <div style={{ padding: '60px 20px' }}>
          <Section title="Coleções em destaque" titleAlign="center">
            <CollectionsFlex>
              {/* Grupo 1 */}
              <div style={{ textAlign: 'center' }}>
                <img src={camiseta} alt="Coleção 1" />
                <p>Camisetas</p>
              </div>

              {/* Grupo 2 */}
              <div style={{ textAlign: 'center' }}>
                <img src={calca} alt="Coleção 2" />
                <p>Calças</p>
              </div>

              {/* Grupo 3 */}
              <div style={{ textAlign: 'center' }}>
                <img src={calca2} alt="Coleção 3" />
                <p>Calças 2</p>
              </div>

              {/* Grupo 4 */}
              <div style={{ textAlign: 'center' }}>
                <img src={headphone} alt="Coleção 4" />
                <p>Headphones</p>
              </div>

              {/* Grupo 5 */}
              <div style={{ textAlign: 'center' }}>
                <img src={tenis} alt="Coleção 5" />
                <p>Tênis</p>
              </div>
            </CollectionsFlex>
          </Section>
        </div>
        {/* Seção Produtos */}
        <div style={{ padding: '0 20px 60px' }}>
          <Section
            title="Produtos em alta"
            titleAlign="left"
            link={{ text: "Ver todos →", href: "/produtos" }}
          >
            <ProductListing products={produtosHype} />
          </Section>
        </div>
      </Layout>
    </div>
  );
}