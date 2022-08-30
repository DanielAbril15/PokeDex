import { createSlice } from "@reduxjs/toolkit";

export const namePokemon = createSlice({
  name: "namePokemon",
  initialState: "",
  reducers: {
    setPokemon: (state, action) => {
      return action.payload;
    },
  },
});
export const { setPokemon } = namePokemon.actions;
export default namePokemon.reducer;
