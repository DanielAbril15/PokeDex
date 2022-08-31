import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";
import namePokemon from "./slices/namePokemon.slice";

export default configureStore({
  reducer: {
    nameTrainer,
    namePokemon,
  },
});
