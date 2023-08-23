import styled from "styled-components";
import { Botao, Input } from "../../Styles";
import { cores } from "../../Styles/cores";

export const Form = styled.form`
  margin: 50px auto;
  max-width: 1024px;
  width: 40%;
  padding: 50px;
  background-color: ${cores.azulClaro};
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 70%;
    padding: 50px;
    margin: 30px auto;
  }
`;

export const Campo = styled(Input)`
  display: block;
  margin: 24px auto;
  width: 50%;
  border: 1px solid ${cores.azul};
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 12px auto;
  }
`;

export const BotaoCadastrar = styled(Botao)`
  background-color: ${cores.azulEscuro};
  display: block;
  margin: 0 auto;
`;
export const BotaoVoltar = styled(Botao)`
  background-color: ${cores.azulEscuro};
  display: block;
  margin: 0 auto;
`;
