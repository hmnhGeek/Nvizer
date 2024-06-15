import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../initialStates/authInitialState";
import { oauthLogin, oauthLogout } from "../actions/authActions";
import { parseJwt } from "../../util";

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
      state.token = action.payload.data.access_token;
      state.username = parseJwt(action.payload.data.access_token).sub;
    });
    builder.addCase(oauthLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "There is some error";
      state.token = null;
      state.username = null;
    });

    builder.addCase(oauthLogout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(oauthLogout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.token = null;
      state.username = null;
    });
    builder.addCase(oauthLogout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "There is some error";
      state.token = null;
      state.username = null;
    });
  },
});

export default authSlice.reducer;
