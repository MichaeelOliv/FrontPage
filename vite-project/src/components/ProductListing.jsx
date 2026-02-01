import React from 'react';
import styled from 'styled-components';

// --- Estilos do ProductCard ---
const CardContainer = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: transparent;
`;

const ProductImage = styled.img`
  width: 292px;
  height: 321px;
  object-fit: cover;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
`;

const ProductName = styled.h3`
  font-size: 14px;
  color: #8F8F8F;
  margin: 0;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MainPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #474747; /* dark-gray-2 */
`;

const OldPrice = styled.span`
  font-size: 24px;
  text-decoration: line-through;
  color: #BFBFBF; /* light-gray */
`;

// --- Componente Interno ProductCard ---
const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <PriceContainer>
        {priceDiscount ? (
          <>
            <OldPrice>R$ {price}</OldPrice>
            <MainPrice>R$ {priceDiscount}</MainPrice>
          </>
        ) : (
          <MainPrice>R$ {price}</MainPrice>
        )}
      </PriceContainer>
    </CardContainer>
  );
};

// --- Estilos da Listagem (Grid) ---
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  gap: 40px 20px;
  width: 100%;
  justify-items: center;
`;

// --- Componente Principal ProductListing ---
const ProductListing = ({ products = [] }) => {
  if (!products.length) return <p>Nenhum produto encontrado.</p>;

  return (
    <GridContainer>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </GridContainer>
  );
};

export default ProductListing;