import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: false,
      token: false,
    },
    reducers: {
      setToken(state, action) {        
        state.token = action.payload;
      },
      setUser(state, action) {
        state.token = action.payload;
      },
    }
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
