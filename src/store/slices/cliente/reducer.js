import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clientes: [],
  detalhe: {},
  loading: false,
};

export const counterSlice = createSlice({
  name: "cliente",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setClientes: (state, action) => {
      state.clientes = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setClientes, setDetalhes, setLoading } = counterSlice.actions;

export default counterSlice.reducer;
