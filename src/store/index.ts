import { configureStore } from "@reduxjs/toolkit";
import contatoReducer from "../store/reducers/contato";
import filtroReducer from "../store/reducers/filtro";

export const store = configureStore({
  reducer: {
    contato: contatoReducer,
    filtro: filtroReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
