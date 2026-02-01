import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

// --- Imports de Imagens da Galeria ---
import productImage1 from '../assets/produc-image-1.jpeg';
import productImage2 from '../assets/produc-image-2.jpeg';
import productImage3 from '../assets/produc-image-3.jpeg';

// --- Imports de Imagens Recomendadas ---
import thumb1 from '../assets/product-thumb-1.jpeg';
import thumb2 from '../assets/product-thumb-2.jpeg';

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px 100px;
  background-color: #F9F8FE;
`;

const GallerySide = styled.div`
  width: 700px;
`;

const InfoSide = styled.div`
  flex: 1;
`;

export default function ProductViewPage() {
  // Array de objetos usando as variáveis importadas
  const productImages = [
    { src: productImage1 },
    { src: productImage2 },
    { src: productImage3 },
    { src: productImage1 }
  ];

  const recommendedProducts = [
  {
    name: "Tênis K-Swiss V8 - Masculino",
    image: thumb1,
    price: 200,
    priceDiscount: 149.9
  },
  {
    name: "Tênis K-Swiss V8 - Feminino",
    image: thumb2,
    price: 49.9
    // Sem desconto neste exemplo
  },
  {
    name: "Tênis K-Swiss V8 - Kids",
    image: thumb1,
    price: 200,
    priceDiscount: 149.9
  },
  {
    name: "Tênis K-Swiss V8 - Sport",
    image: thumb2,
    price: 200,
    priceDiscount: 149.9
  }
];

  return (
    <Layout>
      <ContentWrapper>
        <GallerySide>
          <Gallery 
            images={productImages} 
            showThumbs 
            width="700px" 
            height="570px" 
            radius="4px" 
          />
        </GallerySide>

        <InfoSide>
          <BuyBox 
            name="Tênis Nike Revolution 6 Next Nature Masculino"
            reference="REF: 904123"
            stars="4.7"
            rating="90"
            price="219,00"
            priceDiscount="189,90"
            description="O Tênis Nike Revolution 6 Next Nature Masculino traz o conforto que você busca para as suas corridas e treinos. Fabricado com materiais reciclados, ele oferece amortecimento suave."
          >
            {/* Componentes de Opções como Children do BuyBox */}
            <p style={{fontSize: '14px', fontWeight: '700', color: '#8F8F8F', marginBottom: '10px'}}>Tamanho</p>
            <ProductOptions 
              options={["39", "40", "41", "42", "43"]} 
              shape="square" 
              radius="4px" 
              type="text" 
            />

            <p style={{fontSize: '14px', fontWeight: '700', color: '#8F8F8F', marginBottom: '10px', marginTop: '20px'}}>Cores</p>
            <ProductOptions 
              options={["#6F56E8", "#FF54A2", "#5E5E5E", "#E85C1F"]} 
              shape="circle" 
              type="color" 
            />
          </BuyBox>
        </InfoSide>
      </ContentWrapper>

  <div style={{ padding: '60px 100px' }}>
      <Section 
        title="Produtos recomendados" 
        titleAlign="left"
        link={{
          text: "Ver todos →",
          href: "/products"
        }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
    </Layout>
  );
}