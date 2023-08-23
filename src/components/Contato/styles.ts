import styled from "styled-components";
import { Botao, Input } from "../../Styles";
import { cores } from "../../Styles/cores";

export const ContainerContato = styled.div`
  background-color: ${cores.azulClaro};
  text-align: center;
  height: 150px;
  padding: 8px;
  border-radius: 12px;
`;

export const Nome = styled(Input)`
  font-size: 20px;
  font-weight: bold;

  &:disabled {
    color: ${cores.azulEscuro};
  }
`;

export const Edita = styled(Nome)`
  background-color: #fffafa;
  border: 1px solid ${cores.azulEscuro};
  border-radius: 8px;
  font-weight: normal;
  font-size: 16px;
  color: ${cores.azulEscuro};
  margin-bottom: 2px;
`;

export const Telefone = styled(Input)`
  margin: 6px 0;
  font-weight: bold;
`;

export const Email = styled(Input)`
  font-style: italic;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const BotaoEditar = styled(Botao)`
  background-color: ${cores.amarelo};
  margin-right: 8px;
`;
export const BotaoExcluir = styled(Botao)`
  background-color: ${cores.vermelho};
`;
export const BotaoSalvar = styled(Botao)`
  background-color: ${cores.verde};
  margin-right: 8px;
`;

export const BotaoCancelar = styled(BotaoExcluir)``;
