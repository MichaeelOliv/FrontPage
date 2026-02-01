import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Logica de Borda: 2px primary se selecionado, 1px light-gray-2 se não */
  border: ${props => props.$isSelected ? '2px solid #C92071' : '1px solid #CCCCCC'};
  
  /* Dimensões baseadas no SHAPE */
  width: ${props => props.$shape === 'circle' ? '31px' : '46px'};
  height: ${props => props.$shape === 'circle' ? '31px' : '46px'};
  
  /* Border-radius: 50% para círculo, ou o valor da prop radius para quadrado */
  border-radius: ${props => props.$shape === 'circle' ? '50%' : props.$radius};

  /* Preenchimento se for do tipo COLOR */
  background-color: ${props => props.$type === 'color' ? props.$colorValue : 'transparent'};

  /* Estilo do Texto */
  span {
    font-size: 24px;
    color: #474747; /* dark-gray-2 */
    font-weight: bold;
    display: ${props => props.$type === 'color' ? 'none' : 'block'};
  }
`;

const ProductOptions = ({ options, shape, type, radius = "0px" }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Container>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          $shape={shape}
          $type={type}
          $radius={radius}
          $colorValue={type === 'color' ? option : null}
          $isSelected={selectedOption === index}
          onClick={() => setSelectedOption(index)}
        >
          <span>{option}</span>
        </OptionItem>
      ))}
    </Container>
  );
};

export default ProductOptions;