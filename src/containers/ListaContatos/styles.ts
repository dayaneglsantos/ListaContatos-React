import styled from "styled-components";
import { cores } from "../../Styles/cores";

export const ContainerContatos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  overflow-y: auto;
  max-height: calc(100vh - 132px);

  li {
    height: 150px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Resultado = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: ${cores.azulEscuro};
`;
