import styled from "styled-components";
import { Botao } from "../../Styles";
import { cores } from "../../Styles/cores";

export const ContainerPesquisa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CampoPesquisa = styled.input`
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-right: 12px;
  outline: none;

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

export const BotãoPesquisa = styled(Botao)`
  background-color: ${cores.azulEscuro};
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
