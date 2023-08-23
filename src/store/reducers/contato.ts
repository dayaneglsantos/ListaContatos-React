import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/contato";

type contatoState = {
  contatos: Contato[];
};

const initialState: contatoState = {
  contatos: [
    {
      nome: "Dayane",
      telefone: "(61) 99999-9999",
      email: "dayane@gmail.com",
      id: 0,
    },
    {
      nome: "Bruna",
      telefone: "(61) 99999-9999",
      email: "bruna@gmail.com",
      id: 1,
    },
    {
      nome: "Flavia",
      telefone: "(61) 99999-9999",
      email: "flavia@gmail.com",
      id: 2,
    },
    {
      nome: "Camila",
      telefone: "(61) 99999-9999",
      email: "camila@gmail.com",
      id: 3,
    },
    {
      nome: "Daniel",
      telefone: "(61) 93699-9999",
      email: "daniel@gmail.com",
      id: 4,
    },
    {
      nome: "Silvia",
      telefone: "(61) 93959-9739",
      email: "silvia@gmail.com",
      id: 5,
    },
    {
      nome: "Marcos",
      telefone: "(61) 96959-9129",
      email: "marcos@gmail.com",
      id: 6,
    },
    {
      nome: "Raissa",
      telefone: "(61) 96959-9123",
      email: "raissa@gmail.com",
      id: 7,
    },
    {
      nome: "Ana",
      telefone: "(61) 96959-4329",
      email: "Ana@gmail.com",
      id: 8,
    },
    {
      nome: "Joana",
      telefone: "(61) 96129-4329",
      email: "joana@gmail.com",
      id: 9,
    },
  ],
};

const contatoSlice = createSlice({
  name: "contato",
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.contatos.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.contatos[index] = action.payload;
      }
    },
    excluir: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (item) => item.id !== action.payload
      );
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.contatos.find(
        (item) => item.telefone === action.payload.telefone
      );

      if (contatoJaExiste) {
        alert("O telefone informado já existe na lista de contato.");
      } else {
        const ultimoContato = state.contatos[state.contatos.length - 1];
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.contatos.push(novoContato);
      }
    },
  },
});

export const { editar, excluir, cadastrar } = contatoSlice.actions;
export default contatoSlice.reducer;
