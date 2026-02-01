import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h4`
  font-size: 14px;
  color: #474747; /* dark-gray-2 */
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input {
    width: 22px;
    height: 22px;
    margin-right: 10px;
    cursor: pointer;
    /* Estilização da cor primary */
    accent-color: #C92071; 
  }

  label {
    font-size: 14px;
    color: #474747;
    cursor: pointer;
  }
`;

const FilterGroup = ({ title, inputType, options = [] }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {options.map((option, index) => (
        <OptionItem key={index}>
          <input 
            type={inputType} 
            id={`${title}-${index}`} 
            name={title} 
            value={option.value || option.text} 
          />
          <label htmlFor={`${title}-${index}`}>
            {option.text}
          </label>
        </OptionItem>
      ))}
    </Container>
  );
};

export default FilterGroup;