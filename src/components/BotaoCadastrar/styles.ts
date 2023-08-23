import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../Styles/cores";

export const BotaoAdd = styled(Link)`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${cores.botaoAdd};
  color: #fff;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 35px;
    width: 35px;
    right: 8px;
    bottom: 8px;
    font-size: 20px;
  }
`;
