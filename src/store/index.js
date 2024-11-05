import { configureStore } from "@reduxjs/toolkit";
import clienteReducer from "./slices/cliente/reducer"; // Confirme se esse caminho está correto

export const store = configureStore({
  reducer: {
    cliente: clienteReducer,
  },
});
