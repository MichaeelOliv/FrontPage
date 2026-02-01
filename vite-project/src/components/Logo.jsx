import styled from "styled-components";
// Importamos a imagem diretamente para usar o caminho no src do img
import logoImg from "../assets/logo-header.svg";

// Definimos o componente estilizado com as dimensões solicitadas
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 253px;
    height: 44px;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      {/* Passamos a variável importada para o src */}
      <img src={logoImg} alt="Logo da Aplicação" />
    </LogoContainer>
  );
}