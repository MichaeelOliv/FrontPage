import React from 'react';
import styled from 'styled-components';
import StarIcon from '../assets/star-icon.svg';

// --- Estilos ---

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductName = styled.h1`
  font-size: 32px;
  color: #1F1F1F; /* dark-gray */
  font-weight: 700;
  margin-bottom: 8px;
`;

const Reference = styled.p`
  font-size: 12px;
  color: #8F8F8F; /* dark-gray-3 */
  margin-bottom: 15px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
`;

const StarsBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #F6AA1C; /* warning */
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;

  img {
    width: 14px;
    height: 14px;
  }
`;

const TotalReviews = styled.span`
  font-size: 14px;
  color: #BFBFBF; /* light-gray */
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;
`;

const PriceValue = styled.span`
  /* Estilo condicional: se houver desconto, fica menor e riscado */
  font-size: ${props => props.$hasDiscount ? '16px' : '32px'};
  color: ${props => props.$hasDiscount ? '#CCCCCC' : '#474747'}; 
  text-decoration: ${props => props.$hasDiscount ? 'line-through' : 'none'};
`;

const DiscountValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #474747; /* dark-gray-2 */
`;

const Description = styled.p`
  font-size: 14px;
  color: #474747; /* dark-gray-2 */
  line-height: 22px;
  margin-bottom: 25px;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const BuyButton = styled.button`
  width: 100%;
  max-width: 440px;
  height: 48px;
  background-color: #F6AA1C; /* warning */
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

// --- Componente ---

const BuyBox = ({ 
  name, 
  reference, 
  stars, 
  rating, 
  price, 
  priceDiscount, 
  description, 
  children 
}) => {
  return (
    <Container>
      <ProductName>{name}</ProductName>
      <Reference>Referência: {reference}</Reference>
      
      <RatingWrapper>
        <StarsBadge>
          {stars} 
          <img src={StarIcon} alt="Estrela" />
        </StarsBadge>
        <TotalReviews>({rating} avaliações)</TotalReviews>
      </RatingWrapper>

      <PriceContainer>
        {priceDiscount ? (
          <>
            <DiscountValue>R$ {priceDiscount}</DiscountValue>
            <PriceValue $hasDiscount={true}>R$ {price}</PriceValue>
          </>
        ) : (
          <PriceValue $hasDiscount={false}>R$ {price}</PriceValue>
        )}
      </PriceContainer>

      <Description>{description}</Description>

      {/* Renderiza componentes como ProductOptions aqui */}
      <ChildrenContainer>
        {children}
      </ChildrenContainer>

      <BuyButton>Comprar</BuyButton>
    </Container>
  );
};

export default BuyBox;