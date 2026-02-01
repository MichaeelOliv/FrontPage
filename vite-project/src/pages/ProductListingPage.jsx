import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from './layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';

// --- IMPORTAÇÃO DAS IMAGENS DA PASTA ASSETS ---
// Certifique-se de que os nomes e extensões (.png ou .jpg) estão corretos
import thumb1 from '../assets/product-thumb-1.jpeg';
import thumb2 from '../assets/product-thumb-2.jpeg';
import thumb3 from '../assets/product-thumb-3.jpeg';
import thumb4 from '../assets/product-thumb-5.jpeg';
import thumb5 from '../assets/produc-image-1.jpeg';
import thumb6 from '../assets/produc-image-2.jpeg';
import thumb7 from '../assets/produc-image-3.jpeg';
import thumb8 from '../assets/produc-image-4.jpeg';

const PageContainer = styled.div`
  display: flex;
  gap: 28px;
  padding: 40px 100px;
  background-color: #F9F8FE;
`;

const Sidebar = styled.aside`
  width: 308px;
  flex-shrink: 0;
`;
const FilterCard = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 4px;

  h2 {
    font-size: 16px;
    color: #474747;
    margin-bottom: 5px;
  }

  hr {
    border: none;
    border-top: 1px solid #CCCCCC; /* light-gray-2 */
    margin: 15px 0 25px 0;
  }
`;

const MainContent = styled.main`
  flex: 1;
`;

export default function ProductListingPage() {
  // --- ARRAY DE PRODUTOS USANDO AS VARIÁVEIS IMPORTADAS ---
  const [products] = useState([
    { name: "K-Swiss V8 - 1", image: thumb1, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 2", image: thumb2, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 3", image: thumb3, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 4", image: thumb4, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 5", image: thumb5, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 6", image: thumb6, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 7", image: thumb7, price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - 8", image: thumb8, price: 200, priceDiscount: 149.9 },
  ]);

  return (
    <Layout>
      <PageContainer>
        <Sidebar>
   <FilterCard>
            <h2>Filtrar por</h2>
            <hr />
            
            <FilterGroup 
              title="Marca" 
              inputType="checkbox" 
              options={[
                { text: "Adidas" },
                { text: "Calenciaga" },
                { text: "K-Swiss" },
                { text: "Nike" }
              ]} 
            />

            <FilterGroup 
              title="Categoria" 
              inputType="checkbox" 
              options={[
                { text: "Esporte e lazer" },
                { text: "Casual" },
                { text: "Utilitário" },
                { text: "Corrida" }
              ]} 
            />

            <FilterGroup 
              title="Gênero" 
              inputType="checkbox" 
              options={[
                { text: "Masculino" },
                { text: "Feminino" },
                { text: "Unissex" }
              ]} 
            />

            <FilterGroup 
              title="Estado" 
              inputType="radio" 
              options={[
                { text: "Novo" },
                { text: "Usado" }
              ]} 
            />
          </FilterCard>
        </Sidebar>

        <MainContent>
          <Section 
            title={`Resultados para "Tênis" - ${products.length} produtos`} 
            titleAlign="left"
          >
            <ProductListing products={products} />
          </Section>
        </MainContent>
      </PageContainer>
    </Layout>
  );
}