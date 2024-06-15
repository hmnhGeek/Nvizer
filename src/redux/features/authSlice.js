import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../initialStates/authInitialState";
import { oauthLogin } from "../actions/authActions";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder.addCase(oauthLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(oauthLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userData = action.payload;
    });
    builder.addCase(oauthLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "There is some error";
      state.userData = null;
    });
  },
});

export default authSlice.reducer;
