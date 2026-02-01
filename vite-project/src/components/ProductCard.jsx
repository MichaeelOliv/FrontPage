import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// --- ESTILOS INTERNOS ---

const CardContainer = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
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
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MainPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #474747;
`;

const OldPrice = styled.span`
  font-size: 24px;
  text-decoration: line-through;
  color: #BFBFBF;
`;

// --- COMPONENTE ---

const ProductCard = ({ image, name, price, priceDiscount, id }) => {
  return (
    <Link to={`/produto/${id}`} style={{ textDecoration: 'none' }}>
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
    </Link>
  );
};

export default ProductCard;