import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
  termo: string;
};

const initialState: FiltroState = {
  termo: "",
};

const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    setTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload;
    },
  },
});

export const { setTermo } = filtroSlice.actions;
export default filtroSlice.reducer;
