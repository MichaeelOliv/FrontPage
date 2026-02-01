import React from 'react';
import styled from 'styled-components';

// --- Estilos Consolidados ---
const SectionContainer = styled.section`
  margin-bottom: 40px;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  /* Alinha o conteúdo baseado na prop 'align' */
  justify-content: ${(props) => (props.$align === 'center' ? 'center' : 'space-between')};
  align-items: baseline;
  margin-bottom: 20px;
  position: relative;
`;

const Title = styled.h2`
  color: #474747; /* dark-gray-2 */
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  text-align: ${(props) => props.$align};
  /* Se estiver centralizado, o título não deve 'empurrar' o link */
  flex: ${(props) => (props.$align === 'center' ? 'none' : '1')};
`;

const StyledLink = styled.a`
  color: #C92071; /* primary */
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  transition: filter 0.2s;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    filter: brightness(1.2);
  }
`;

// --- Componente ---
const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <SectionContainer>
      <HeaderContainer $align={titleAlign}>
        <Title $align={titleAlign}>{title}</Title>

        {/* Renderiza o link apenas se houver o objeto link e o título não estiver centralizado */}
        {link && titleAlign === 'left' && (
          <StyledLink href={link.href}>
            {link.text}
          </StyledLink>
        )}
      </HeaderContainer>

      {/* Conteúdo dinâmico da seção (imagens, cards, etc) */}
      <div>
        {children}
      </div>
    </SectionContainer>
  );
};

export default Section;