import { createSlice } from "@reduxjs/toolkit";

export const nameTrainer = createSlice({
  name: "nameTrainer",
  initialState: "",
  reducers: {
    setName: (state, action) => {
      return action.payload;
    },
  },
});
export const { setName } = nameTrainer.actions;
export default nameTrainer.reducer;
