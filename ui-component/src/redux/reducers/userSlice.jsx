import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user', // Provide a string as the name
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
