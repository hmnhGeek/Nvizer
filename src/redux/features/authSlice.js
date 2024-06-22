import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "../initialStates/authInitialState";
import { oauthLogin, oauthLogout, oauthSignup } from "../actions/authActions";
import { parseJwt } from "../../util";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: authInitialState,
  reducers: {
    clearLoginErrorIfAny: (state, action) => {
      state.error = null;
    },
    clearAuthSuccessMsgIfAny: (state, action) => {
      state.successMsg = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(oauthSignup.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.token = null;
      state.username = null;
      state.successMsg = null;
    });
    builder.addCase(oauthSignup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.successMsg = "Successfully signed up.";
    });
    builder.addCase(oauthSignup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Unable to signup.";
    });

    builder.addCase(oauthLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(oauthLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.token = action.payload.data.access_token;
      state.username = parseJwt(action.payload.data.access_token).sub;
      state.successMsg = "Successfully logged in.";
    });
    builder.addCase(oauthLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Unable to login. Invalid credentials.";
      state.token = null;
      state.username = null;
      state.successMsg = null;
    });

    builder.addCase(oauthLogout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(oauthLogout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.token = null;
      state.username = null;
      state.successMsg = "Successfully logged out.";
    });
    builder.addCase(oauthLogout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "There is some error";
      state.token = null;
      state.username = null;
      state.successMsg = null;
    });
  },
});

export const { clearLoginErrorIfAny, clearAuthSuccessMsgIfAny } =
  authSlice.actions;
export default authSlice.reducer;
