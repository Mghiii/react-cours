import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";

export const store = configureStore({
  reducer: {
    counter : counterSlice, //au lieu d'ecrire un seul reducer en peux ecrire tout les reducers sous form d'un object
  },
});
