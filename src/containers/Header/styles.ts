import styled from "styled-components";
import { cores } from "../../Styles/cores";

export const Header = styled.header`
  height: 100px;
  width: 100%;
  background-color: ${cores.azul};

  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const Titulo = styled.h1`
  font-size: 30px;
  text-align: center;
  padding: 8px;
  color: ${cores.azulEscuro};
  font-family: "Quando", serif;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
