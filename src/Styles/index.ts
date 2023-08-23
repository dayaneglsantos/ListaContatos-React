import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
        list-style: none;
        font-family: 'Instrument Sans', sans-serif;
    }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 80%;
  height: calc(100vh - 100px);
  padding: 16px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

export const Botao = styled.button`
  border: none;
  border-radius: 8px;
  color: #fff;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  width: 100%;
  outline: none;
`;

export default EstiloGlobal;
